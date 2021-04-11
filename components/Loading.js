function Loading() {
  return (
    <div className="h-screen bg-gray-200 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-28 w-28 animate-pulse cl"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#10b981"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  )
}

export default Loading
