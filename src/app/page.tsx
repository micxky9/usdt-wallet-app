
import ConnectWallet from "@/components/ConnectWallet";
import TokenInformation from "@/components/TokenInformation";
import Header from "../components/Header";
export default function Home() {

  return(
      <main>
         <h1>USDT WALLET </h1>
         <br />
         <Header/>
  <ConnectWallet/>
  <TokenInformation/>
  </main>
  );
}
