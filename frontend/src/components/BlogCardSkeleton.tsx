
const BlogCardSkeleton = () => {
    return (
        <div role="status" className="bg-white w-full h-[420px] sm:h-80 flex flex-col-reverse sm:flex-row justify-between items-center py-10 px-5 sm:px-10  shadow-xl rounded-lg animate-pulse">
            <div className="flex flex-col items-start justify-between w-full h-full">
                <div className="w-full">
                    <div className="w-full flex items-center justify-center sm:justify-start">
                        <div className="text-xs sm:text-lg flex justify-center items-center">
                            <svg className="w-7 h-7 sm:w-10 sm:h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-14 sm:w-20"></div>

                            <span className="w-1 h-1 rounded-xl dark:bg-gray-700 mx-1.5"></span>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-16 sm:w-32"></div>
                        </div>

                    </div>

                    <div className="mt-2.5 mx-1">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>

                </div>

                <div className="flex justify-between items-center mt-10 w-full">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 sm:w-32 mb-4 mx-1"></div>
                </div>

            </div>
            <div className="px-5">
                <div className="w-28 h-28 sm:w-48 sm:h-52 my-1 sm:my-2 mx-auto flex items-center justify-center bg-gray-300 dark:bg-gray-700">
                    <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    </svg>
                </div>
            </div>





            <div className="flex items-center mt-4">


            </div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export default BlogCardSkeleton