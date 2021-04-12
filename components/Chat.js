import { auth, db } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollection } from "react-firebase-hooks/firestore"
import getRecipientEmail from "../utils/getRecipientEmail"
import { useRouter } from "next/router"

function Chat({ id, users }) {
  const router = useRouter()
  const [user] = useAuthState(auth)
  const [recipientSnapshot] = useCollection(
    db.collection("users").where("email", "==", getRecipientEmail(users, user))
  )

  // const recipient = recipientSnapshot?.docs?.[0]?.data()
  const recipientEmail = getRecipientEmail(users, user)

  const enterChat = () => {
    router.push(`/chat/${id}`)
  }

  return (
    <div className="mx-3 cursor-pointer" onClick={enterChat}>
      <div className="w-full h-24 border border-gray-50 bg-white mb-5 rounded-md flex items-center shadow-lg">
        <img
          src="https://avatars.githubusercontent.com/u/4275841?s=400&u=7f5720bebc8ce95e45f0cd5c64f11242acd08e37&v=4"
          alt="Avatar"
          className="rounded-full mx-3 shadow-md w-12 h-12"
        />
        <div className="ml-1 mr-3">
          <h2 className="text-lg font-medium text-gray-700">
            {recipientEmail}
          </h2>
          <p className="text-xs text-gray-400 mt-1 leading-5 break-all">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Chat
