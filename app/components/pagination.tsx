import { FC } from "react"

const Pagination: FC = () => {
    return (
        <div className="mx-auto max-w-screen-xl lg:px-4 md:px-4 sm:px-0 px-0 w-full flex items-center lg:mt-10 md:mt-14 sm:mt-20 mt-0 lg:flex-row md:flex-row flex-col justify-between mt-4">
            <div className="sm:flex sm:flex-1 sm:items-center sm:justify-between w-full lg:flex-row md:flex-row sm:flex-col flex-col flex items-center justify-center">
                <div>
                    <p className="text-sm text-gray-700 py-2">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                        <span className="font-medium">97</span> results
                    </p>
                </div>
                <div>
                    <nav className="lg:w-[70%] md:w-[80%] sm:w-full w-full flex justify-center items-center">
                        <ul className="flex">
                            <li>
                                <a
                                    className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                                    href="#"
                                    aria-label="Previous"
                                >
                                    <span className="material-icons text-sm">&laquo;</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-[#664481] to-[#664481] p-0 text-sm text-white shadow-md shadow-pink-500/20 transition duration-150 ease-in-out"
                                    href="#"
                                >
                                    1
                                </a>
                            </li>
                            <li>
                                <a
                                    className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                                    href="#"
                                >
                                    2
                                </a>
                            </li>
                            <li>
                                <a
                                    className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                                    href="#"
                                >
                                    3
                                </a>
                            </li>
                            <li>
                                <a
                                    className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                                    href="#"
                                    aria-label="Next"
                                >
                                    <span className="material-icons text-sm">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Pagination;