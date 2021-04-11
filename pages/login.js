import Head from "next/head"

function Login() {
  return (
    <div>
      <Head>
        <title>Next WhatsApp - Log In</title>
      </Head>

      <div className="min-w-screen min-h-screen bg-green-200 flex items-center justify-center px-5 py-5">
        <div
          className="bg-white text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: 1000 }}
        >
          <div className="md:flex w-full">
            <div className="hidden md:block w-1/2">
              <img
                src="https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="w-full md:w-1/2 pt-28 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900 uppercase">
                  Log In
                </h1>
                <p>You can use your Gmail account, it takes 5 seconds!</p>
              </div>
              <button className="flex w-full mx-auto max-w-xs justify-center bg-green-500 hover:bg-green-700 focus:bg-green-700 text-white rounded-lg px-3 py-3 font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>{" "}
                Log In Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
