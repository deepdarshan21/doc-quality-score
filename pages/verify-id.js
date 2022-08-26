import Loader from "../components/Loader";
import Score from "../components/Score";
import { useEffect, useState } from "react";
import { BsFillPatchCheckFill, BsFillPatchExclamationFill } from "react-icons/bs";
import { AiFillFileImage } from "react-icons/ai";
import axios from "axios";

export default function Result() {
    const [loading, setLoading] = useState(true);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState({});
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [typeOfIdentity, changeTypeOfIdentity] = useState("pancard");

    const getScore = async (evt) => {
        evt.preventDefault();
        let form_data = new FormData();

        form_data.append("image", uploadedFiles[0]);
        const formData = new FormData();
        formData.append("file", uploadedFiles[0]);
        formData.append("upload_preset", "Instagram-Clone");
        formData.append("cloud_name", "smilingcloud");
        setShowScore(true);

        const response = await fetch("https://api.cloudinary.com/v1_1/smilingcloud/image/upload", {
            method: "post",
            body: formData,
        });

        const data = await response.json();
        if (data.error) {
            throw new Error(data.error.message);
        }

        axios
            .post(`http://0045-34-86-16-45.ngrok.io/api/sendIdentity/${typeOfIdentity}`, {
                image: data.url,
            })
            .then((response) => {
                console.log(response);
                setScore(response.data);
                setShowScore(true);
            });
        setLoading(false);
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
        <div className="bg-[#E5EDF9] h-[100vh]">
            <nav className="bg-[#1565C0] border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                <div className="container flex flex-wrap justify-between items-center mx-10">
                    <a href="" className="flex items-center">
                        <span className="text-white self-center text-2xl font-sans font-bold whitespace-nowrap">
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
                                Your Score: {score.quality}
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
                <div className="grid grid-cols-2 mx-10">
                    <div>
                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                                <div className="flex flex-wrap w-full">
                                    <div className="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6">
                                        <div className="flex relative pb-12">
                                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                            </div>
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                                </svg>
                                            </div>
                                            <div className="flex-grow pl-4">
                                                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                                    STEP 1
                                                </h2>
                                                <p className="leading-relaxed">
                                                    Upload the necessary Identiification Document
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex relative pb-12">
                                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                            </div>
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                                </svg>
                                            </div>
                                            <div className="flex-grow pl-4">
                                                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                                    STEP 2
                                                </h2>
                                                <p className="leading-relaxed">
                                                    Accelerate the verification for using parameters
                                                    such as bluriness, required fields.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex relative">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                    <path d="M22 4L12 14.01l-3-3"></path>
                                                </svg>
                                            </div>
                                            <div className="flex-grow pl-4">
                                                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                                    FINISH
                                                </h2>
                                                <p className="leading-relaxed">
                                                    Quickly get the result if your ID is verified or
                                                    not
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div>
                        <div className="flex flex-col items-center mt-16">
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
                                            <span className="browse-files-text">browse file </span>
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
                        </div>

                        <div className="flex flex-row justify-evenly mt-10">
                            <span>
                                <select
                                    id="dropdownDefault"
                                    data-dropdown-toggle="dropdown"
                                    className="text-white text-md bg-[#1565C0] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg pl-4 pr-6 py-2.5 text-center inline-flex items-center"
                                    type="button"
                                    value={typeOfIdentity}
                                    onChange={(e) => {
                                        changeTypeOfIdentity(e.target.value);
                                    }}
                                >
                                    <option
                                        className="block py-2 text-center hover:bg-gray-100"
                                        value={"adhaar"}
                                    >
                                        Adhaar
                                    </option>
                                    <option
                                        className="block py-2 text-center hover:bg-gray-100"
                                        value={"pancard"}
                                    >
                                        Pan Card
                                    </option>
                                    <option
                                        className="block py-2 text-center hover:bg-gray-100"
                                        value={"p   assport"}
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
                </div>
            )}
        </div>
    );
}
