import Loader from "../components/Loader";
import Score from "../components/Score";
import { useEffect, useState } from "react";
import { BsFillPatchCheckFill, BsFillPatchExclamationFill } from "react-icons/bs";
import { AiFillFileImage } from "react-icons/ai";

export default function Result() {
    const [loading, setLoading] = useState(true);
    const [showScore, setShowScore] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [typeOfIdentity, changeTypeOfIdentity] = useState("Adhaar");

    const getScore = (evt) => {
        evt.preventDefault();
        setShowScore(true);
    };

    const handleUploadFiles = (files) => {
        const uploaded = [...uploadedFiles];
        files.some((file) => {
            if (uploaded.findIndex((f) => f.name === file.name) === -1) {
                uploaded.push(file);
            }
        });
        setUploadedFiles(uploaded);
    };

    const handleFileEvent = (e) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files);
        handleUploadFiles(chosenFiles);
    };

    return (
        <>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="#" className="flex items-center">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">
                            Document Quality Score
                        </span>
                    </a>
                </div>
            </nav>

            {showScore && (
                <>
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
            )}

            {!showScore && (
                <div className="flex flex-col items-center mt-10">
                    <div className="upload-files-container">
                        <div className="drag-file-area">
                            <span className="material-icons-outlined upload-icon">
                                {" "}
                                Image Upload{" "}
                            </span>
                            <h3 className="dynamic-message"> Drag & drop any file here </h3>
                            <label className="label">
                                or
                                <span className="browse-files">
                                    <input
                                        id="fileUpload"
                                        type="file"
                                        multiple
                                        className="default-file-input"
                                        accept="image/*"
                                        onChange={handleFileEvent}
                                    />
                                    <span className="browse-files-text">browse file{" "}</span>
                                    <span>from device</span>
                                </span>
                            </label>
                        </div>
                        <div className="uploaded-files-list">
                            {uploadedFiles.map((file, index) => {
                                return (
                                    <div className="" key={index}>
                                        <div className="file-info">
                                            <span className="material-icons-outlined file-icon">
                                                <AiFillFileImage size={20} />
                                            </span>
                                            <span className="file-name">{file.name}</span> |
                                            <span className="file-size">
                                                {(file.size / 1024).toFixed(1) + " KB"}
                                            </span>
                                        </div>
                                        {/* <span className="material-icons remove-file-icon">delete</span> */}
                                        {/* <div className="progress-bar"> </div> */}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex flex-row space-x-20 mt-10">
                        <span>
                            <select
                                id="dropdownDefault"
                                data-dropdown-toggle="dropdown"
                                className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm pl-4 pr-5 py-2.5 text-center inline-flex items-center"
                                type="button"
                                value={typeOfIdentity}
                                onChange={(e) => {
                                    changeTypeOfIdentity(e.target.value);
                                }}
                            >
                                <option
                                    className="block py-2 text-center hover:bg-gray-100"
                                    value={"Adhaar"}
                                >
                                    Adhaar
                                </option>
                                <option
                                    className="block py-2 text-center hover:bg-gray-100"
                                    value={"Pan Card"}
                                >
                                    Pan Card
                                </option>
                                <option
                                    className="block py-2 text-center hover:bg-gray-100"
                                    value={"Passport"}
                                >
                                    Passport
                                </option>
                            </select>
                        </span>

                        <span>
                            <button
                                onClick={getScore}
                                className="block py-2 px-4 mt-0 bg-white border-2 rounded-xl border-blue-800 hover:bg-blue-600"
                            >
                                Get Score
                            </button>
                        </span>
                    </div>
                </div>
            )}
        </>
    );
}
