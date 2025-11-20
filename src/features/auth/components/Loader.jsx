import React from 'react'

const Loader = ({ msg }) => {
    return (
        <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-gray-300 border-t-white rounded-full animate-spin"></div>
            {msg}
        </div>
    )
}

export default Loader