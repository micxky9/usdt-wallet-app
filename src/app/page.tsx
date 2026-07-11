
import ConnectWallet from "@/components/ConnectWallet";
import TokenInformation from "@/components/TokenInformation";
import Header from "../components/Header";
export default function Home() {

  return(
      <div className="container">
         <Header/>
  <ConnectWallet/>
  <TokenInformation/>
  </div>
  );
}
