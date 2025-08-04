import { useState, useEffect } from 'react';
import { fetchDiscordAvatar, type DiscordAvatarResponse } from '../lib/api';

const DISCORD_USER_ID = '1c.2'; // Your actual Discord user ID

export function useDiscordAvatar() {
  const [avatar, setAvatar] = useState<DiscordAvatarResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadAvatar() {
      try {
        setLoading(true);
        setError(null);

        const avatarData = await fetchDiscordAvatar(DISCORD_USER_ID);

        if (mounted) {
          setAvatar(avatarData);
        }
      } catch (err) {
        console.error('Error fetching Discord avatar:', err);
        if (mounted) {
          setError('Failed to load Discord avatar');
          // Use fallback avatar
          setAvatar({
            avatarUrl: '/e9c4e804b0c546262bd2bc03f593648d.jpg',
            username: 'LORDX679',
            discriminator: '0000'
          });
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadAvatar();

    return () => {
      mounted = false;
    };
  }, []);

  const refreshAvatar = async () => {
    setLoading(true);
    try {
      const avatarData = await fetchDiscordAvatar(DISCORD_USER_ID);
      setAvatar(avatarData);
      setError(null);
    } catch (err) {
      console.error('Error refreshing Discord avatar:', err);
      setError('Failed to refresh Discord avatar');
    } finally {
      setLoading(false);
    }
  };

  return {
    avatar,
    loading,
    error,
    refreshAvatar
  };
}