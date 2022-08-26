import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <section className="h-[100vh] bg-[#1565C0] text-white">
                <nav className="px-2 sm:px-4 py-2.5 rounded">
                    <div className="container flex flex-wrap justify-between items-center mx-28">
                        <span className="self-center text-2xl font-sans font-bold whitespace-nowrap">
                            {/* Document Quality Score */}
                            {/* <Image
                                src={"/../public/Logo.jpeg"}
                                layout="fill"
                                // objectFit="cover"
                                objectPosition="10% 10%"
                            /> */}
                        </span>
                    </div>
                </nav>

                <div className="grid grid-cols-2 mt-16 h-100 gap-x-100">
                    <div className="pl-28 mt-16">
                        <h1 className="text-[44px] font-bold">Document Quality Score</h1>
                        <p>
                            Use our API service in your upload or registration services to get
                            quality score on every document uploaded.
                        </p>
                        <Link href={"/verify-id"}>
                            <button className="bg-[#FE722C] my-5 rounded-3xl px-6 py-3">
                                Start Demo
                            </button>
                        </Link>
                    </div>
                    <div className="mx-auto mt-12">
                        <Image
                            src={"/../public/Landing.png"}
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

            {/* <section className="">
                <h3>Our Services</h3>
                <div>
                    <span></span>
                </div>
            </section> */}
            {/* <div>
                <Image
                    src={"/../public/Check.jpeg"}
                    alt="Landing page image"
                    layout="fixed"
                    height="1000px"
                    width="1400px"
                    objectFit="cover"
                    // objectPosition="10% 10%"
                />
            </div> */}
        </>
    );
}
