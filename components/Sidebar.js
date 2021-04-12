import * as EmailValidator from "email-validator"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollection } from "react-firebase-hooks/firestore"
import { auth, db } from "../config/firebase"
import Chat from "./Chat"

function Sidebar() {
  const [user] = useAuthState(auth)
  const userChatRef = db
    .collection("chats")
    .where("users", "array-contains", user.email)

  const [chatsSnapshot] = useCollection(userChatRef)

  const createChat = () => {
    const input = prompt(
      "Please enter the Gmail adress of the person you want to chat with"
    )

    if (!input) return null

    if (
      EmailValidator.validate(input) &&
      !chatAlreadyExists(input) &&
      input !== user.email
    ) {
      db.collection("chats").add({
        users: [user.email, input],
      })
    }
  }

  const chatAlreadyExists = (recipientEmail) =>
    !!chatsSnapshot?.docs.find(
      (chat) =>
        chat.data().users.find((user) => user === recipientEmail)?.length > 0
    )

  return (
    <div className="col-span-2">
      <div className="w-full bg-white flex flex-row flex-wrap items-center justify-between py-3">
        <img
          src={user.photoURL}
          alt="Avatar"
          className="rounded-full mx-3 shadow-md w-12 h-12"
        />
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-green-500 cursor-pointer mx-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => {
              auth.signOut()
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-green-500 cursor-pointer mx-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => {
              auth.signOut()
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-green-500 cursor-pointer ml-1 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => {
              auth.signOut()
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          className="w-1/2 my-3 text-white font-medium rounded-full bg-green-500 h-12"
          onClick={createChat}
        >
          New Chat
        </button>
      </div>

      {chatsSnapshot?.docs.map((chat) => (
        <Chat key={chat.id} id={chat.id} users={chat.data().users} />
      ))}
    </div>
  )
}

export default Sidebar
