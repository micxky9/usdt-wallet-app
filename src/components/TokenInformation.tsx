"use client";
import "../styles/TokenInformation.css"
import { useAccount, useReadContract } from "wagmi";
import { ERC20_ABI, USDT_ADDRESS } from "@/lib/contract";
import { formatUnits, parseUnits } from 'viem';
import { useWriteContract } from "wagmi";

export default function
TokenInformation(){
  
    
    const { writeContract } = useWriteContract();
    const {address, isConnected} = useAccount();

   const handleMint = async () => {
    console.log("clicked mint");
    console.log(writeContract);
  
    if (!address){
      console.log("no address");
     return;
    }

   try{
     await writeContract({
      address: USDT_ADDRESS,
      abi: ERC20_ABI,
      functionName: "mint",
      args: [address!, parseUnits("1000", 6)],
    });
   }
   catch(error){
    console.error(error);
   }
  };



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
       const formattedBalance = balance && tokenDecimals !== undefined ? formatUnits(balance, Number(tokenDecimals)) : balance;
       
       if (!isConnected || !address) {
          return null;
        }

    return (
      <div className="token-information">
        <h2>
          Token Information
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"
            />
          </svg>
        </h2>

        <div className="tokens">
          <div className="token-cont">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="m5.41 21l.71-4h-4l.35-2h4l1.06-6h-4l.35-2h4l.71-4h2l-.71 4h6l.71-4h2l-.71 4h4l-.35 2h-4l-1.06 6h4l-.35 2h-4l-.71 4h-2l.71-4h-6l-.71 4zM9.53 9l-1.06 6h6l1.06-6z"
              />
            </svg>

            <h4>Token Name</h4>
            <p>Name: {tokenName?.toString()} </p>
          </div>

          <div className="token-cont">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M9.1 9.25L4.05 6.425L12 2l7.95 4.425L14.9 9.25q-.575-.6-1.325-.925T12 8t-1.575.325T9.1 9.25m1.9 12.2L3 17V8.125L8.125 11q-.075.25-.1.488T8 12q0 1.375.825 2.45T11 15.875zm-.412-8.037Q10 12.825 10 12t.588-1.412T12 10t1.413.588T14 12t-.587 1.413T12 14t-1.412-.587M13 21.45v-5.575q1.35-.35 2.175-1.425T16 12q0-.275-.025-.513t-.1-.487L21 8.125V17z"
              />
            </svg>

            <h4>Token Symbol</h4>
            <p>Symbol: {tokenSymbol?.toString()} </p>
          </div>

          <div className="token-cont">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"
              />
            </svg>

            <h4>Token Decimals</h4>
            <p>Decimals: {tokenDecimals?.toString()} </p>
          </div>

          <div className="token-cont">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="#fff">
                <path
                  fill="#000"
                  d="M10.03 3.659c.856-1.548 3.081-1.548 3.937 0l7.746 14.001c.83 1.5-.255 3.34-1.969 3.34H4.254c-1.715 0-2.8-1.84-1.97-3.34z"
                />
                <path
                  fill="#fff"
                  d="M12.997 17A.999.999 0 1 0 11 17a.999.999 0 0 0 1.997 0m-.259-7.852a.75.75 0 0 0-1.493.103l.004 4.501l.007.102a.75.75 0 0 0 1.493-.103l-.004-4.502z"
                />
                <defs>
                  <linearGradient
                    id="SVGskxbwd9h"
                    x1="5.125"
                    x2="16.719"
                    y1="-.393"
                    y2="23.477"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#ffcd0f" />
                    <stop offset="1" stop-color="#fe8401" />
                  </linearGradient>
                  <linearGradient
                    id="SVGYnStacUU"
                    x1="9.336"
                    x2="13.752"
                    y1="8.5"
                    y2="18.405"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4a4a4a" />
                    <stop offset="1" stop-color="#212121" />
                  </linearGradient>
                </defs>
              </g>
            </svg>

            <h4>Total Supply</h4>
            <p>Total Supply: {totalSupply?.toString().slice(1, 5)} </p>
          </div>

          <div className="token-cont">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="#000"
                d="M16.747 12.16L12 15.24l-4.75-3.08L12 3.5zM12 16.23l-4.75-3.08L12 20.5l4.75-7.351z"
                stroke-width="0.2"
                stroke="#1739ea"
              />
            </svg>

            <h4>Balance</h4>
            <p>USDT Balance: {formattedBalance}</p>
            <button onClick={handleMint}>Mint</button>
          </div>
        </div>
      </div>
    );


}