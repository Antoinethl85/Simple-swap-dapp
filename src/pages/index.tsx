import { Header } from "@/components/Header"
import { Swap } from "@/components/Swap"
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Header />
      <div id="logo">
        <Image src="/echange.png" alt="Logo" width={150} height={150} />
        <h1>Swap</h1>
      </div>
      <div id="swapcom">
      <Swap />
      </div>
    </div>
  );
}