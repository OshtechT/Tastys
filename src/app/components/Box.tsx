"use client";
import React, { useState, useEffect } from "react"


const Box = () => {
    const [showMe, setShowMe] = useState(false);
    function toggle() {
        setShowMe(!showMe);

    }
    return (
        <div>
            <div className=" bg-gray-800 flex justify-center space-x-4 text-3xl text-orange-500">
                <button className="rounded-full font-semibold bg-transparent hover:bg-orange-500  hover:text-white py-2 px-4 border border-transparent hover:border-gray-800" onClick={toggle}>MENU</button>
                <button className="rounded-full font-semibold bg-transparent hover:bg-orange-500  hover:text-white py-2 px-4  border border-transparent hover:border-gray-800" onClick={toggle}>DEALS</button>
            </div>
            <div style={{
                display: showMe ? "block" : "none"
            }} className="bg-white h-screen w-1/3">
                <p> cover </p>
            </div>






        </div>


    )
}

export default Box