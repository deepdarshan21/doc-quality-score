import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

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

    function updateThumbnail(dropZoneElement, file) {
        let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

        // First time - remove the prompt
        if (dropZoneElement.querySelector(".drop-zone__prompt")) {
            dropZoneElement.querySelector(".drop-zone__prompt").remove();
        }

        // First time - there is no thumbnail element, so lets create it
        if (!thumbnailElement) {
            thumbnailElement = document.createElement("div");
            thumbnailElement.classList.add("drop-zone__thumb");
            dropZoneElement.appendChild(thumbnailElement);
        }

        // thumbnailElement.dataset.label = file.name;

        // Show thumbnail for image files
        if (file.type.startsWith("image/")) {
            const reader = new FileReader();

            reader.readAsDataURL(file);
            reader.onload = () => {
                thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
            };
        } else {
            thumbnailElement.style.backgroundImage = null;
        }
    }

    const [typeOfIdentity, changeTypeOfIdentity] = useState("Adhaar");

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

            <div className="flex flex-col items-center space-y-10 mt-28">
                <span className="flex space-x-8">
                    <div className="drop-zone">
                        <span className="drop-zone__prompt">
                            Drop front image of identity here or click to upload
                        </span>
                        <input type="file" name="myFile" className="drop-zone__input" />
                    </div>
                    <div className="drop-zone">
                        <span className="drop-zone__prompt">
                            Drop back image of identity here or click to upload
                        </span>
                        <input type="file" name="myFile" className="drop-zone__input" />
                    </div>
                </span>

                <div className="flex flex-col items-center space-y-4">
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
