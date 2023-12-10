'use client';
import Image from "next/image";
import profileIcon from "../public/1559I.jpg";
import nextJspPic from "../public/nextjs.png";
import tailwindpPic from "../public/tailwind.png";

export default function BuildWith() {
    return (
        <>
            <div>
                <p>This web build with:</p>
                <div className="flex flex-col overflow-hidden justify-items-center items-center lg:flex-row lg:w-1/2 2xl:w-2/6">
                    <Image
                        src={nextJspPic}
                        alt="nextjs"
                        objectFit="cover"
                        sizes="100vw"
                        style={{
                            width: '40%',
                            height: 'auto',
                        }}
                        width={110}
                        height={300}
                    ></Image>
                    <Image
                        src={tailwindpPic}
                        alt="tailwind"
                        style={{
                            width: '40%',
                            height: 'auto',
                        }}
                        width={110}
                        height={300}
                    ></Image>
                </div>

            </div>
        </>
    );
}