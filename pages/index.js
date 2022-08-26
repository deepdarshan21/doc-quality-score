import Image from "next/image";

export default function Home() {
    return (
        <>
            <section className="h-[80vh] bg-[#2099F6] text-white">
                <nav className="px-2 sm:px-4 py-2.5 rounded">
                    <div className="container flex flex-wrap justify-between items-center mx-28">
                        <span className="self-center text-2xl font-sans font-bold whitespace-nowrap">
                            {/* Document Quality Score */}
                        </span>
                    </div>
                </nav>

                <div className="grid grid-cols-2 mt-16 h-100">
                    <div className="pl-28 mt-16">
                        <h1 className="text-[44px] font-bold">Document Quality Score</h1>
                        <p>
                            Apipro.com puts the information needed right on your screen. Answer
                            common customer questions instantly!
                        </p>
                        <button className="bg-[#FE722C] my-5 rounded-3xl px-6 py-3">
                            Start Demo
                        </button>
                    </div>
                    <div className="mx-auto mt-12">
                        <Image
                            src={"/../public/landing.webp"}
                            alt="Landing page image"
                            layout="fixed"
                            height="350px"
                            width="500px"
                            objectFit="cover"
                            // objectPosition="10% 10%"
                        />
                    </div>
                </div>
            </section>

            <section className="">
                <h3>Our Services</h3>
                <div>
                    <span></span>
                </div>
            </section>
        </>
    );
}
