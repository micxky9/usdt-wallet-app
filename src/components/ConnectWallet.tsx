"use client";
import{
    useAccount,
    useConnect,
    useDisconnect,
    useChainId,
    useSwitchChain, 
}  from "wagmi";    
import { baseSepolia } from "wagmi/chains";


export default function ConnectWallet(){
    const chainId = useChainId();
    const { switchChain } = useSwitchChain(); 
    const isCorrectNetwork = chainId === baseSepolia.id;
    const { address, isConnected} = useAccount();

    const { connect, connectors} = useConnect();
    const {disconnect} = useDisconnect();

    return(
        <div>
            {isConnected ? (
                <>
                {!isCorrectNetwork && (
                    <div>
                        <p>Wrong Network. Please switch to Base Sepolia.</p>

                        <button onClick={() => switchChain({
                            chainId: baseSepolia.id,
                        })
                        }>
                            Switch Network
                        </button>
                    </div>
                )}
                <p>Connected: {address}</p>

                <button onClick={() => disconnect()}>
                    Disconnect
                </button>
                </>
            ) : (
                <button onClick={() => connect({ connector: connectors[0]})}>
                    Connect Wallet
                </button>
            )}
        </div>
    );
}