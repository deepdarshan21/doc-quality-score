import Loader from "../components/Loader";
import { useEffect, useState } from "react";

export default function Result() {
    return (
        <>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="#" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap">
                            Document Quality Score
                        </span>
                    </a>
                </div>
            </nav>

            <Loader />

            <div>
                <p>Your Score: {}</p>

                <div>
                    <p>
                        Blur Check: <span></span>
                    </p>
                    <p>
                        Arteffect Check: <span></span>
                    </p>
                    <p>
                        Field Check: <span></span>
                    </p>
                </div>
            </div>
        </>
    );
}
