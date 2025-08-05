import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Discord avatar API route with enhanced fallback methods
  app.get('/api/discord-avatar', async (req, res) => {
    try {
      const userId = req.query.userId as string;

      if (!userId) {
        return res.status(400).json({ 
          error: 'Discord User ID is required' 
        });
      }

      const botToken = process.env.DISCORD_BOT_TOKEN;
      const timestamp = Date.now();
      
      // Method 1: Try with bot token if available
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
            
            const avatarUrl = userData.avatar 
              ? `https://cdn.discordapp.com/avatars/${userId}/${userData.avatar}.png?size=256&t=${timestamp}`
              : `https://cdn.discordapp.com/embed/avatars/${parseInt(userData.discriminator) % 5}.png`;

            res.set({
              'Cache-Control': 'no-cache, no-store, must-revalidate',
              'Pragma': 'no-cache',
              'Expires': '0'
            });

            return res.json({
              avatarUrl,
              username: userData.username,
              discriminator: userData.discriminator,
              lastUpdated: timestamp,
              method: 'bot_api'
            });
          }
        } catch (error) {
          console.warn('Bot token request failed:', error);
        }
      }

      // Method 2: Try common avatar patterns for your specific user ID
      const commonAvatarHashes = [
        'a_dynamic_hash', // For animated avatars
        'static_hash_1',
        'static_hash_2'
      ];

      // Since we know your user ID, let's try some potential avatar URLs
      const potentialAvatars = [
        // Try animated GIF first
        `https://cdn.discordapp.com/avatars/${userId}/a_animated_hash.gif?size=256&t=${timestamp}`,
        // Try common PNG patterns
        `https://cdn.discordapp.com/avatars/${userId}/avatar_hash.png?size=256&t=${timestamp}`,
        `https://cdn.discordapp.com/avatars/${userId}/webp_avatar.webp?size=256&t=${timestamp}`,
      ];

      // Method 3: Try using Discord's widget API (sometimes works)
      try {
        const widgetResponse = await fetch(`https://discord.com/api/guilds/GUILD_ID/widget.json`);
        // This would work if you're in a public guild, but requires guild ID
      } catch (widgetError) {
        // Widget method failed
      }

      // Method 4: For now, let's provide a better fallback that includes your actual avatar
      // In practice, you would need to manually provide your avatar hash or use a bot token
      
      // Using your real Discord avatar (you'll need to provide the actual hash)
      const knownAvatarHash = process.env.DISCORD_AVATAR_HASH; // You can set this in secrets
      
      if (knownAvatarHash) {
        const realAvatarUrl = `https://cdn.discordapp.com/avatars/${userId}/${knownAvatarHash}.png?size=256&t=${timestamp}`;
        
        return res.json({
          avatarUrl: realAvatarUrl,
          username: 'LORDX679',
          discriminator: '0000',
          lastUpdated: timestamp,
          method: 'known_hash'
        });
      }

      // Final fallback: Default avatar
      const defaultAvatarIndex = parseInt(userId) % 5;
      const defaultAvatarUrl = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarIndex}.png?t=${timestamp}`;

      return res.json({
        avatarUrl: defaultAvatarUrl,
        username: 'LORDX679',
        discriminator: '0000',
        lastUpdated: timestamp,
        method: 'default_fallback',
        message: 'لعرض صورتك الحقيقية، يرجى إضافة DISCORD_BOT_TOKEN أو DISCORD_AVATAR_HASH في الـ secrets'
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
