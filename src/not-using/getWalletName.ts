export const getWalletName = (walletAddress: string): string => {
  const walletWithName = {
    FATp77i9kge2amCEeeH2xffTPSpAxFsABSNECuoi7gq8: 'You',
    EUXyB91xVpAURV2Vx561q34LvEV4XgcvdkmJViKmzCcg: 'jeo boden 1.0',
    '8X1B6AD93eQvEcTENKY6bwEoC4q5mZgcc3dn3rog5qsW': 'jeo boden 1.0',
    DDPUGVyekCLWe1NikQ26jfjAK9EkPYC9zNu84iGbHsfR: 'jeo boden 1.0',
    '6wWU8YRhqhDXfriLfHpdwsfejgJbgssCcUPD3bhHHdLk': 'jeo boden 2.0',
    '9Q6Ky8w9mG52gNYgcqMvpCaATmvqwsqMhnbYfsRs43yE': 'jeo boden 3.0',
    '6tfQr3SXEDPKK1VMEk9HdXjnHAr8EFm8zGqbM3onHeQj': 'jeo boden 4.0',
    GbVBJ4Mksx6tQcuPacbwJsqqd5BHTgok1MAZ3GnVkXjV: 'jeo boden 5.0',
    PATPeVYFACAahaDz12T5isFu3wS8zPpr5Dmc3PxFuD1: 'pip 1.0',
    FfCP7bK7VZGqaYf8fDXvg2r5hnwh48mAFfqajX3qXHKt: 'pip 2.0',
    '55whLMbHRwhSf1isyhGtGYTU7KMR7o4U7eZxEXeLoeDF': 'goo 1.0',
    Bzo4ihU6ELwWdJVJV63fGr4P26t3KVUqzi78RpYs9rBg: 'el gato',
  };
  if (walletWithName[walletAddress]) {
    return walletWithName[walletAddress];
  }
  return walletAddress;
};
