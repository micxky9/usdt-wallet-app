"use client";
import { useAccount, useReadContract } from "wagmi";
import { ERC20_ABI, USDT_ADDRESS } from "@/lib/contract";
import { formatUnits } from 'viem';

export default function
TokenInformation(){
    const {address} = useAccount();


    const { data: tokenName } = useReadContract({
        address: USDT_ADDRESS,
        abi: ERC20_ABI,
        functionName: "name",
    });

     const { data: tokenDecimals } = useReadContract({
       address: USDT_ADDRESS,
       abi: ERC20_ABI,
       functionName: "decimals",
     });

      const { data: tokenSymbol } = useReadContract({
        address: USDT_ADDRESS,
        abi: ERC20_ABI,
        functionName: "symbol",
      });

       const { data: totalSupply } = useReadContract({
         address: USDT_ADDRESS,
         abi: ERC20_ABI,
         functionName: "totalSupply",
       });
       const { data: balance } = useReadContract({
         address: USDT_ADDRESS,
         abi: ERC20_ABI,
         functionName: "balanceOf",
         args: [address!],
       });
       const formattedBalance = balance && tokenDecimals !== undefined ? formatUnits(balance, Number(tokenDecimals)) : "6";


    return (
      <div>
        <h2>Token Information</h2>

        <p>Name: {tokenName?.toString()} </p>
        <p>Symbol: {tokenSymbol?.toString()} </p>
        <p>Decimals: {tokenDecimals?.toString()} </p>
        <p>Total Supply: {totalSupply?.toString()} </p>
        <p>Balance: {formattedBalance} USDT</p>
      </div>
    );


}