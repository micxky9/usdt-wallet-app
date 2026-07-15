# USDT Wallet Integration (Base Sepolia)

A Next.js application that allows users to connect their MetaMask wallet and interact with a USDT ERC-20 token contact on Base Sepolia test network.

## Features

### Wallet Connection
- Connect Wallet using MetaMask
- Display connected wallet address
- Detect incorrect networks
- Prompt users to switch to Base Sepolia

### Token Information
Fetches and displays:
- Token name
- Token symbol
- Token Decimals
- Total supply

### Balance
- Displays the connected wallet's USDT balance
- Formats balance using the token's decimals

### Token Transfer
Users can:
- Enter a recipient address
- Enter a transfer amount
- Use a Max button to fill the available balance
- Send USDT transactions
- View transaction status and transaction hash

### Additional Features
- ETH balance display
- Loading states
- Error handling
- Wallet/network handling

---

## Technologies Used

- Next.js
- TypeScript
- React
- Wagmi
- Viem
- Base Sepolia Testnet

## Smart Contract Details
Network: Base Sepolia
USDT Contract Address: 0x5D17005e86D617967BF870025a819a89b3474bE9