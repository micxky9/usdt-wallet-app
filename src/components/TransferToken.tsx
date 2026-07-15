"use client";
import { useState } from "react";
import{ useWriteContract } from "wagmi"
import { parseUnits } from "viem";



export default function TransferToken(){

    const [recipient, setRecipient] = useState("");
    const [amount, setAmount] = useState("");
     const { writeContractAsync } = useWriteContract();
     
   
    return(
        <form>
        <input type="text"
        placeholder="Recipient Address"
        value={recipient}
        onChange={(e) => 
            setRecipient(e.target.value)} />

            <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => 
                setAmount(e.target.value)}
            />
            <button
            type="button"
            onClick={() =>
            setAmount(Number(formattedBalance).toFixed(2))}
            >
                Max
            </button>

            <button>Transfer</button>



            </form>
    );
}