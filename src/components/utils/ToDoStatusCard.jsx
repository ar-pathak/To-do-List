import { HiOutlineDotsHorizontal } from "react-icons/hi";

const ToDoStatusCard = () => {
    return (
        <div className="flex  justify-between border border-gray-300 p-5 rounded-lg mb-3">
            <div className="w-[15px] h-[15px] border-3 border-[#FF6767] rounded-full inline-block mr-2"></div>
            <div className="flex gap-5 w-full mx-3">
                <div className="w-4/5 pr-5">
                    <h2 className="text-xl  font-medium">Attend Nischal’s Birthday Party</h2>
                    <p className="text-[#747474]">Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements).....</p>
                    <div className="flex gap-10 mt-3">
                        <div className="flex">
                            <h3>Priority:</h3>
                            <span className="text-[#42ADE2] mx-3">Moderate</span>
                        </div>
                        <div className="flex">
                            <h3>Status:</h3>
                            <span className="text-[#F21E1E] mx-3">Not Started</span>
                        </div>
                    </div>
                </div>
                <div className="h-full flex items-center justify-center">
                    <img src="./img/Rectangle 10.png" alt="img" />
                </div>
            </div>
            <div className="mx-2 cursor-pointer">
                <HiOutlineDotsHorizontal />
            </div>
        </div>
    )
}

export default ToDoStatusCard