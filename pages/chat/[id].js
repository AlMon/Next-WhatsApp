import Head from "next/head"
import Sidebar from "../../components/Sidebar"

function Chat() {
  return (
    <div className="col-span-6">
      <Head>
        <title>Chat</title>
      </Head>

      <Sidebar />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        possimus velit atque corrupti veritatis doloribus ut impedit enim, ullam
        nostrum, accusamus distinctio voluptatibus a voluptatem autem expedita
        quia beatae magni?
      </p>
    </div>
  )
}

export default Chat
