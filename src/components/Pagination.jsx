

const Pagination =() => {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <div className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <div
              className="relative m-2 inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              left
            </div>
            <div 
              aria-current="page"
              className="relative m-2 z-10  inline-flex items-center bg-button px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-button"
            >
              1
            </div>
            <div
              className="relative inline-flex m-2 items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </div>
            <div
              className="relative inline-flex m-2 items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              right
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pagination