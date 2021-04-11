function Sidebar() {
  return (
    <div className="col-span-2">
      <div className="relative">
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
        <div className="w-full h-24 border border-gray-50 bg-white my-5 rounded-md flex items-center shadow-lg">
          <img
            src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
            alt=""
            className="rounded-full mx-3 shadow-md"
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
            src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
            alt=""
            className="rounded-full mx-3 shadow-md"
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
            src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
            alt=""
            className="rounded-full mx-3 shadow-md"
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
            src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
            alt=""
            className="rounded-full mx-3 shadow-md"
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
