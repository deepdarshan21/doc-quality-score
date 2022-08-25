import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
    const getScore = (evt) => {
        evt.preventDefault();
    };

    useEffect(() => {
        document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
            const dropZoneElement = inputElement.closest(".drop-zone");

            dropZoneElement.addEventListener("click", (e) => {
                inputElement.click();
            });

            inputElement.addEventListener("change", (e) => {
                if (inputElement.files.length) {
                    updateThumbnail(dropZoneElement, inputElement.files[0]);
                }
            });

            dropZoneElement.addEventListener("dragover", (e) => {
                e.preventDefault();
                dropZoneElement.classList.add("drop-zone--over");
            });

            ["dragleave", "dragend"].forEach((type) => {
                dropZoneElement.addEventListener(type, (e) => {
                    dropZoneElement.classList.remove("drop-zone--over");
                });
            });

            dropZoneElement.addEventListener("drop", (e) => {
                e.preventDefault();

                if (e.dataTransfer.files.length) {
                    inputElement.files = e.dataTransfer.files;
                    updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
                }

                dropZoneElement.classList.remove("drop-zone--over");
            });
        });
    });

    return (
        <div>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="#" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap">
                            Document Quality Score
                        </span>
                    </a>
                </div>
            </nav>

            <div className="flex flex-col items-center space-y-10">
                <div
                    className="drop-zone"
                    // onClick={handleClick}
                    // onChange={handleOnChange}
                    // onDragOver={handleDragOver}
                    // onDrop={handleDrop}
                    // onDragLeave={handleLeave}
                    // onDragEnd={handleEnd}
                >
                    <span className="drop-zone__prompt">Drop file here or click to upload</span>
                    <input type="file" name="myFile" className="drop-zone__input" />
                </div>

                <div className="flex flex-col items-center space-y-4">
                    <span>
                        <select
                            id="dropdownDefault"
                            data-dropdown-toggle="dropdown"
                            className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm pl-4 pr-5 py-2.5 text-center inline-flex items-center"
                            type="button"
                        >
                            <option disabled className="block py-2 text-center hover:bg-gray-100">
                                Proof of
                            </option>
                            <option className="block py-2 text-center hover:bg-gray-100">
                                Proof of Identity
                            </option>
                            <option className="block py-2 text-center hover:bg-gray-100">
                                Proof of Address
                            </option>
                            <option className="block py-2 text-center hover:bg-gray-100">
                                Proof of Birth
                            </option>
                        </select>
                    </span>

                    <span>
                        <button
                            onClick={getScore}
                            className="block py-2 px-4 bg-white border-2 rounded-xl border-blue-800 hover:bg-blue-600"
                        >
                            Get Score
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
}
