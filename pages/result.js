import Loader from "../components/Loader";
import Score from "../components/Score";
import { useEffect, useState } from "react";
import { BsFillPatchCheckFill, BsFillPatchExclamationFill } from "react-icons/bs";

export default function Result() {
    const [loading, setLoading] = useState(false);
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

            {loading && <Loader />}

            {!loading && (
                <div className="my-20">
                    <p className="font-medium leading-tight text-5xl mt-0 mb-2 text-center text-blue-600">
                        Your Score: {"70%"}
                        {/* <Score score={50} /> */}
                    </p>

                    <div className="mx-10 my-40 p-10 bg-blue-300 rounded-xl space-y-3">
                        <p className="flex justify-between">
                            Blur Check:
                            <span>{"70%"}</span>
                        </p>
                        <p className="flex justify-between">
                            Arteffect Check:{" "}
                            <span>
                                {/* <BsFillPatchExclamationFill size={18} /> */}
                                <BsFillPatchCheckFill size={18} />
                            </span>
                        </p>
                        <p className="flex justify-between">
                            Field Check:{" "}
                            <span>
                                <BsFillPatchCheckFill size={18} />
                            </span>
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
