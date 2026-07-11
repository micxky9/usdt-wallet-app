"use client";
import "../styles/ConnectWallet.css";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useChainId,
  useSwitchChain,
} from "wagmi";
import { baseSepolia } from "wagmi/chains";

export default function ConnectWallet() {
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();
  const isCorrectNetwork = chainId === baseSepolia.id;
  const { address, isConnected } = useAccount();

  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    
    <div>
      {isConnected ? (
        <>
          {!isCorrectNetwork && (
            <div className="switchNet">
              <p>Wrong Network. Please switch to Base Sepolia.</p>

              <button className="switch-net-btn"
                onClick={() =>
                  switchChain({
                    chainId: baseSepolia.id,
                  })
                }
              >
                Switch Network
              </button>
            </div>
          )}
          <p>Connected: {address}</p>

          <button className="disconnect-btn" onClick={() => disconnect()}>Disconnect</button>
        </>
      ) : (
            <div className="connect-wallet_container">
                <h1>Connect your wallet</h1>
                <h3>Connect with MetaMask to interact with USDT on Base Sepolia</h3>
        <button
          className="connect-meta-btn"
          onClick={() => connect({ connector: connectors[0] })}
        >
            {/* IMAGE HERE */}
          Connect Wallet
        </button>
        </div>
      )}
    </div>
  );
}
