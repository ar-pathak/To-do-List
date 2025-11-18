import { MdErrorOutline } from "react-icons/md";

const ErrorPage = ({ message = "Something went wrong.", onRetry }) => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-white p-6">
            <MdErrorOutline className="text-red-500 w-20 h-20 mb-4" />

            <h2 className="text-3xl font-bold text-gray-800 mb-2">Oops!</h2>
            <p className="text-gray-600 text-lg text-center max-w-md mb-6">{message}</p>

            {onRetry && (
                <button
                    onClick={onRetry}
                    className="px-6 py-2 bg-[#FF6767] text-white font-medium rounded-lg shadow-md 
                     hover:bg-[#ff5050] transition-all"
                >
                    Try Again
                </button>
            )}
        </div>
    );
};

export default ErrorPage;