import dotenv from 'dotenv';
import { TransactionData } from './interface.js';

dotenv.config();

export const getTransactionInfo = async (
  signature: string,
): Promise<TransactionData[]> => {
  const url = `https://api.helius.xyz/v0/transactions/?api-key=${process.env.HELIUS_API_KEY}`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        transactions: [signature],
      }),
    });
    if (!response.ok) {
      console.error(
        `Failed fetching transaction info${response.status}: ${response.statusText}`,
      );
    }
    const transactionInfo = (await response.json()) as TransactionData[];
    return transactionInfo;
  } catch (err) {
    console.error('Failed getting transaction info: ', err);
    throw err;
  }
};
