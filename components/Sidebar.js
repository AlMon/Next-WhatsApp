import * as EmailValidator from "email-validator"

function Sidebar() {
  const createChat = () => {
    const input = prompt(
      "Please enter a Gmail adress for the person you want to chat with"
    )

    if (!input) return null

    if (EmailValidator.validate(input)) {
      //CHAT To-Do
    }
  }

  return (
    <div className="col-span-2">
      <div className="text-center">
        <button
          className="w-1/2 my-3 text-white font-medium rounded-full bg-blue-500 h-12"
          onClick={createChat}
        >
          New Chat
        </button>
      </div>
      <div className="relative mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 absolute inset-y-0 flex items-center mt-6 ml-7"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="search"
          name="search"
          placeholder="Search people"
          id="search-people"
          className="h-16 min-w-full pl-14 text-lg"
        />
      </div>

      <div className="mx-3">
        <div className="w-full h-24 border border-gray-50 bg-white mb-5 rounded-md flex items-center shadow-lg">
          <img
            src="https://avatars.githubusercontent.com/u/4275841?s=400&u=7f5720bebc8ce95e45f0cd5c64f11242acd08e37&v=4"
            alt="Avatar"
            className="rounded-full mx-3 shadow-md w-12 h-12"
          />
          <div className="ml-1 mr-3">
            <h2 className="text-lg font-medium text-gray-700">Al Mondragón</h2>
            <p className="text-xs text-gray-400 mt-1 leading-5 break-all">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-3">
        <div className="w-full h-24 border border-gray-50 bg-white my-5 rounded-md flex items-center shadow-lg">
          <img
            src="https://avatars.githubusercontent.com/u/4275841?s=400&u=7f5720bebc8ce95e45f0cd5c64f11242acd08e37&v=4"
            alt="Avatar"
            className="rounded-full mx-3 shadow-md w-12 h-12"
          />
          <div className="ml-1 mr-3">
            <h2 className="text-lg font-medium text-gray-700">Al Mondragón</h2>
            <p className="text-xs text-gray-400 mt-1 leading-5 break-all">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-3">
        <div className="w-full h-24 border border-gray-50 bg-white my-5 rounded-md flex items-center shadow-lg">
          <img
            src="https://avatars.githubusercontent.com/u/4275841?s=400&u=7f5720bebc8ce95e45f0cd5c64f11242acd08e37&v=4"
            alt="Avatar"
            className="rounded-full mx-3 shadow-md w-12 h-12"
          />
          <div className="ml-1 mr-3">
            <h2 className="text-lg font-medium text-gray-700">Al Mondragón</h2>
            <p className="text-xs text-gray-400 mt-1 leading-5 break-all">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-3">
        <div className="w-full h-24 border border-gray-50 bg-white my-5 rounded-md flex items-center shadow-lg">
          <img
            src="https://avatars.githubusercontent.com/u/4275841?s=400&u=7f5720bebc8ce95e45f0cd5c64f11242acd08e37&v=4"
            alt="Avatar"
            className="rounded-full mx-3 shadow-md w-12 h-12"
          />
          <div className="ml-1 mr-3">
            <h2 className="text-lg font-medium text-gray-700">Al Mondragón</h2>
            <p className="text-xs text-gray-400 mt-1 leading-5 break-all">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
