"use client";
import "../styles/TokenInformation.css"
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
      <div className="token-information">
        <h2>
          Token Information
          {/* IMAGE HERE */}
        </h2>
        <div className="tokens">
        <div className="token-cont">
          {/* IMAGE HERE */}
          <h4>Token Name</h4>
          <p>Name: {tokenName?.toString()} </p>
        </div>

        <div className="token-cont">
          {/* IMAGE HERE */}
          <h4>Token Symbol</h4>
          <p>Symbol: {tokenSymbol?.toString()} </p>
        </div>

        <div className="token-cont">
          {/* IMAGE HERE */}
          <h4>Token Decimals</h4>
          <p>Decimals: {tokenDecimals?.toString()} </p>
        </div>

        <div className="token-cont">
          {/* IMAGE HERE */}
          <h4>Total Supply</h4>
          <p>Total Supply: {totalSupply?.toString()} </p>
        </div>

        <div className="token-cont">
          {/* IMAGE HERE */}
          <h4>Balance</h4>
          <p>Balance: {formattedBalance} USDT</p>
        </div>
        </div>
      </div>
    );


}