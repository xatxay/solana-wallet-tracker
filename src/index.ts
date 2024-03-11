import { Connection } from '@solana/web3.js';
import dotenv from 'dotenv';
import { watchWallet } from './trackWallet.js';
import { walletWatchlists } from './walletWatchlist.js';
// import { getTransactionInfo } from './getTransactionInfo.js';
// import { sendDiscordMessage } from './discordMessage.js';
dotenv.config();

const main = async (): Promise<void> => {
  // await sendDiscordMessage();

  const connection = new Connection(
    `https://mainnet.helius-rpc.com/?api-key=${process.env.HELIUS_API_KEY}`,
    'confirmed',
  );
  // const data = await connection.getParsedTransaction(
  //   `5R8NK7aEWSD4VR6Rkjm3jxfPLd13Tjv7cuvix6v27JfJeJfZLenxdLzC7YKXCxaF7NsNPoNXxLLMELXBi4iavs8o`,
  //   {
  //     maxSupportedTransactionVersion: 0,
  //   },
  // );
  // console.log('data: ', data);

  const promies = walletWatchlists.map((wallet) =>
    watchWallet(wallet.address, connection, wallet.name),
  );
  await Promise.all(promies);
};

await main();
