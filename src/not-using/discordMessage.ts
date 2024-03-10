import { Client } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

export const sendDiscordMessage = async (): Promise<void> => {
  const client = new Client({
    intents: ['Guilds', 'GuildMessages'],
  });

  client.once('ready', () => {
    console.log('logged in as ' + client.user.tag);
  });

  client.on('ready', async () => {
    const channel = await client.channels.fetch(process.env.DISCORD_BOT_ID);
    if (channel.isTextBased()) {
      channel.send('test');
    }
  });

  await client.login(process.env.DISCORD_BOT_TOKEN);
};
