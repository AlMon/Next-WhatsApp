import Head from "next/head"
import Sidebar from "../components/Sidebar"

export default function Home() {
  return (
    <div className="grid grid-cols-10 min-h-screen bg-gray-200">
      <Head>
        <title>Next WhatsApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
    </div>
  )
}
