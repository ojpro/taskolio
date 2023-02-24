import {BsCircle, BsFillCalendarPlusFill, BsCheck2Circle} from "react-icons/bs"
import {RxLapTimer} from "react-icons/rx"
import {HiOutlineTrash} from "react-icons/hi"
import {FaRegMoon} from "react-icons/fa"

export default function () {
    return (
        <main className="bg-wrapper-bg min-h-screen bg-cover">
            {/* < Header Section > */}
            <header>
                <nav className="flex justify-between items-center p-4 shadow-md bg-white">
                    <h1 className="text-blue-400 text-xl font-bold">Taskolio</h1>
                    <form action=""
                          className="relative border-2 border-gray-300/60 rounded w-9/12 lg:w-1/2 focus:border-blue-500 xl:w-1/3 md:-ml-12">
                        <input type="text" name="task" placeholder="Type the task title"
                               className="w-full py-2.5 px-4 bg-gray-100 outline-0"/>
                        <BsFillCalendarPlusFill
                            className="text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"></BsFillCalendarPlusFill>
                    </form>
                    <span className="cursor-pointer">
                        <FaRegMoon></FaRegMoon>
                    </span>
                </nav>
            </header>
            {/* </ Header Section End > */}

            {/* < Tasks Container Section > */}
            <section className="w-11/12 sm:w-10/12 md:w-2/3 lg:w-7/12 xl:w-1/3 mx-auto mt-40">
                {/* < List Of Tasks > */}
                <ul className="">
                    <li className="flex justify-between items-center p-4 rounded bg-gray-100 my-1">
                        <div className="flex justify-evenly items-center gap-1">
                            <BsCircle className="w-5 h-5 mr-2 cursor-pointer"></BsCircle>
                            <span contentEditable={true} className="outline-0">Task One</span>
                        </div>

                        <div className="flex justify-between gap-2">
                            <RxLapTimer className="w-6 h-6 cursor-pointer"></RxLapTimer>
                            <HiOutlineTrash className="w-6 h-6 cursor-pointer"></HiOutlineTrash>
                        </div>
                    </li>
                    <li className="flex justify-between items-center p-4 rounded bg-gray-200 my-1">
                        <div className="flex justify-evenly items-center gap-1">
                            <BsCheck2Circle className="w-6 h-6 mr-2 cursor-pointer"></BsCheck2Circle>
                            <span contentEditable={true} className="outline-0 decoration line-through">Task Two</span>
                        </div>

                        <div className="flex justify-between gap-2">
                            <HiOutlineTrash className="w-6 h-6 cursor-pointer"></HiOutlineTrash>
                        </div>
                    </li>
                    <li className="flex justify-between items-center p-4 rounded bg-gray-100 my-1">
                        <div className="flex justify-evenly items-center gap-1">
                            <BsCircle className="w-5 h-5 mr-2 cursor-pointer"></BsCircle>
                            <span contentEditable={true} className="outline-0">Task Three</span>
                        </div>

                        <div className="flex justify-between gap-2">
                            <RxLapTimer className="w-6 h-6 cursor-pointer"></RxLapTimer>
                            <HiOutlineTrash className="w-6 h-6 cursor-pointer"></HiOutlineTrash>
                        </div>
                    </li>
                </ul>
                {/* </ List Of Tasks > */}

                <div className="border rounded flex justify-between py-2 px-4 mt-3 bg-white shadow">
                    <span> 2 Tasks Left </span>
                    <span className="cursor-pointer text-gray-400 hover:text-red-300">Clear Completed</span>
                </div>
            </section>
            {/* </ Tasks Container Section >*/}
        </main>
    );
}