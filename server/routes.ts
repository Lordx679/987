import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Discord avatar API route
  app.get('/api/discord-avatar', async (req, res) => {
    try {
      const userId = req.query.userId as string;

      if (!userId) {
        return res.status(400).json({ 
          error: 'Discord User ID is required' 
        });
      }

      const botToken = process.env.DISCORD_BOT_TOKEN;
      
      // Try with bot token first if available
      if (botToken) {
        try {
          const discordResponse = await fetch(`https://discord.com/api/v10/users/${userId}`, {
            headers: {
              'Authorization': `Bot ${botToken}`,
              'Content-Type': 'application/json',
            },
          });

          if (discordResponse.ok) {
            const userData = await discordResponse.json();
            
            // Generate avatar URL
            const avatarUrl = userData.avatar 
              ? `https://cdn.discordapp.com/avatars/${userId}/${userData.avatar}.png?size=256`
              : `https://cdn.discordapp.com/embed/avatars/${parseInt(userData.discriminator) % 5}.png`;

            return res.json({
              avatarUrl,
              username: userData.username,
              discriminator: userData.discriminator,
            });
          }
        } catch (error) {
          console.warn('Bot token request failed, falling back to public endpoint:', error);
        }
      }

      // Fallback: Generate default avatar without API call
      // Discord's default avatar system uses user ID modulo 5 for default avatars
      const defaultAvatarIndex = parseInt(userId) % 5;
      const defaultAvatarUrl = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarIndex}.png`;

      return res.json({
        avatarUrl: defaultAvatarUrl,
        username: `User ${userId}`,
        discriminator: '0000',
      });

    } catch (error) {
      console.error('Error in discord-avatar endpoint:', error);
      
      return res.status(500).json({ 
        error: 'Failed to fetch Discord avatar',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
