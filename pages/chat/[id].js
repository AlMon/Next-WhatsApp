import Head from "next/head"
import Sidebar from "../../components/Sidebar"
import ChatScreen from "../../components/ChatScreen"

function Chat() {
  return (
    <div>
      <Head>
        <title>Chat</title>
      </Head>

      <div className="grid grid-cols-9 bg-gray-200 min-h-screen">
        <Sidebar />
        <ChatScreen />
        <Sidebar />
      </div>
    </div>
  )
}

export default Chat
