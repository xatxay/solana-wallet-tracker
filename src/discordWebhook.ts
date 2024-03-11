import { EmbedBuilder, WebhookClient } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

export const sendDiscordWebhook = async (
  timestamp: Date,
  exchange: string,
  description: string,
  signature: string,
  name: string,
): Promise<void> => {
  const descriptionSplit = description.split(' ');
  const mintToken = descriptionSplit[descriptionSplit.length - 1];
  const keyword = 'swapped';
  const descriptionText = `${name} ${description.substring(
    description.indexOf(keyword),
  )}`;
  try {
    const webhookClient = new WebhookClient({
      id: process.env.WEBHOOK_ID,
      token: process.env.WEBHOOK_TOKEN,
    });

    const embed = new EmbedBuilder()
      .setColor(0x00ffff)
      .setTitle(descriptionText)
      .setURL(`https://solscan.io/tx/${signature}`)
      .setAuthor({
        name: 'Dexscreener',
        url: `https://dexscreener.com/search?q=${mintToken}`,
      })
      .addFields({ name: 'Wallet Address', value: descriptionSplit[0] })
      .addFields({ name: 'Mint Token', value: mintToken })
      .addFields({ name: 'Exchange', value: exchange })
      .setTimestamp(timestamp);

    webhookClient.send({
      username: 'Wallet tracking',
      avatarURL: 'https://avatarfiles.alphacoders.com/364/364185.png',
      embeds: [embed],
    });
  } catch (err) {
    console.error('Failed sending discord message: ', err);
  }
};
