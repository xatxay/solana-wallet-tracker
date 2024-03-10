export interface TransactionData {
  description: string;
  type: string;
  source: string;
  fee: number;
  feePayer: string;
  signature: string;
  slot: number;
  timestamp: number;
  nativeTransfers: NativeTransfers[];
  tokenTransfers: TokenTransfers[];
  accountData: AccountData[];
  transactionError: TransactionError;
  instructions: Instruction[];
  events: Events;
}

export interface NativeTransfers {
  fromUserAccount: string;
  toUserAccount: string;
  amount: number;
}

export interface TokenTransfers {
  fromUserAccount: string;
  toUserAccount: string;
  fromTokenAccount: string;
  toTokenAccount: string;
  tokenAmount: number;
  mint: string;
}

export interface AccountData {
  account: string;
  nativeBalanceChange: number;
  tokenBalanceChanges: TokenBalanceChanges[];
}

export interface TokenBalanceChanges {
  userAccount: string;
  tokenAccount: string;
  mint: string;
  rawTokenAmount: RawTokenAmount;
}

interface RawTokenAmount {
  tokenAmount: string;
  decimals: number;
}

interface TransactionError {
  error: string;
}

interface InnerInstruction {
  accounts: string[];
  data: string;
  programId: string;
}

interface Instruction {
  accounts: string[];
  data: string;
  programId: string;
  innerInstructions: InnerInstruction[];
}

interface NFT {
  mint: string;
  tokenStandard: string;
}

interface NFTEvents {
  description: string;
  type: string;
  source: string;
  amount: number;
  fee: number;
  feePayer: string;
  signature: string;
  slot: number;
  timestamp: number;
  saleType: string;
  buyer: string;
  seller: string;
  staker: string;
  nfts: NFT[];
}

interface NativeInputOutput {
  account: string;
  amount: string;
}

interface TokenInputsOutput {
  userAccount: string;
  tokenAccount: string;
  mint: string;
  rawTokenAmount: RawTokenAmount;
}

interface InnerTokenInputOutput {
  fromUserAccount: string;
  toUserAccount: string;
  fromTokenAccount: string;
  toTokenAccount: string;
  tokenAmount: number;
  mint: string;
}

interface ProgramInfo {
  source: string;
  account: string;
  programName: string;
  instructionName: string;
}

interface InnerSwaps {
  tokenInputs: InnerTokenInputOutput[];
  tokenOutputs: InnerTokenInputOutput[];
  tokenFees: InnerTokenInputOutput[];
  nativeFees: NativeTransfers[];
  programInfo: ProgramInfo;
}

interface SwapEvents {
  nativeInput: NativeInputOutput;
  nativeOutput: NativeInputOutput;
  tokenInputs: TokenInputsOutput[];
  tokenOutputs: TokenInputsOutput[];
  tokenFees: TokenBalanceChanges[];
  nativeFees: NativeInputOutput[];
  innerSwaps: InnerSwaps[];
}

interface Events {
  nft: NFTEvents;
  swap: SwapEvents;
}
