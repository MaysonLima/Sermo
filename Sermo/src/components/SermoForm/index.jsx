import { FaImages, FaSmile, FaCalendarAlt, FaMapMarkerAlt, FaFileAlt, FaChartBar, FaVideo } from "react-icons/fa";

function handleSubmit() {

}



export function SermoForm(onSermo) {

    function handleSubmit() {

}

    return (
        <div className="border-b border-gray-700 p-4">
            <textarea
                className="w-full bg-transparent text-white text-xl resize-none outline-none"
                placeholder="What's happening?"
            />
            <div className="flex justify-between itens-center mt-4 ">
                <div className='flex space-x-4'>
                    <FaImages className="text-red-400 cursor-pointer text-lg hover:text-red-500 transition duration-200" />
                    <FaVideo className="text-red-400 cursor-pointer text-lg hover:text-red-500 transition duration-200" />
                    <FaChartBar className="text-red-400 cursor-pointer text-lg hover:text-red-500 transition duration-200" />
                    <FaSmile className="text-red-400 cursor-pointer text-lg hover:text-red-500 transition duration-200" />
                    <FaCalendarAlt className="text-red-400 cursor-pointer text-lg hover:text-red-500 transition duration-200" />
                    <FaMapMarkerAlt className="text-red-400 cursor-pointer text-lg hover:text-red-500 transition duration-200" />
                    <FaFileAlt className="text-red-400 cursor-pointer text-lg hover:text-red-500 transition duration-200" />
                </div>
                    <button className="bg-red-400 text-white font-bold px-4 py-2 rounded-full hover:bg-red-500 transition duration-200" onClick={handleSubmit}>Sermo</button>
            </div>
        </div>
    )
}