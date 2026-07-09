
import ConnectWallet from "@/components/ConnectWallet";
import TokenInformation from "@/components/TokenInformation";

export default function Home() {

  return(
      <main>
         <h1>USDT WALLET </h1>
  <ConnectWallet/>
  <TokenInformation/>
  </main>
  );
}
