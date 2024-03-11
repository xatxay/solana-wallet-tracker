import { Connection, PublicKey } from '@solana/web3.js';
import { getTransactionInfo } from './getTransactionInfo.js';
import { sendDiscordWebhook } from './discordWebhook.js';

export const watchWallet = async (
  wallet: string,
  connection: Connection,
  name: string,
): Promise<void> => {
  let transactionInfo = [];
  connection.onLogs(new PublicKey(wallet), async (account) => {
    console.log('not swap: ', account.signature);
    if (
      account.logs
        .join('')
        .includes(
          '675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8' ||
            'JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4',
        ) &&
      account.err === null
    ) {
      console.log('swap signature: ', account.signature);
      for (let i = 0; i < 30; i++) {
        console.log('trying: ', i);
        transactionInfo = await getTransactionInfo(account.signature);
        console.log('asdasdas: ', transactionInfo);
        if (transactionInfo.length > 0) {
          const timestamp = new Date(transactionInfo[0].timestamp * 1000);
          const exchange = transactionInfo[0].source;
          const description = transactionInfo[0].description as string;
          const signature = transactionInfo[0].signature;
          const message = `time: ${timestamp.toISOString()}\nexchange: ${exchange}\ndescription: ${description}\nsignature: ${signature}`;
          console.log('transaction info: ', transactionInfo);
          console.log(message);
          await sendDiscordWebhook(
            timestamp,
            exchange,
            description,
            signature,
            name,
          );
          break;
        } else {
          await new Promise((resolve) => setTimeout(resolve, 3000));
        }
      }
    }
  });
};
