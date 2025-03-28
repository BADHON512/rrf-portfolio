import { VuesaxLinearSend5 } from '@/lib/hellper'
import React from 'react'

type Props = {}

const Portfolio = (props: Props) => {
    return (
        <div className="w-[1440px] mx-auto">     <div className="inline-flex   flex-col items-start justify-end relative  bg-grey">
            <div className="flex w-[1440px] items-start justify-center gap-2.5 pt-[50px] pb-[142px] px-[124px] relative  bg-[#ffd3d0]">
                <div className="items-center justify-center gap-6 flex-1 grow flex flex-col relative">
                    <div className="text-[#1f1f1f] font-bold leading-[150%] text-[35px] text-center montserrat">
                        My Portfolio
                    </div>

                    <p className="font-normal leading-[150%] text-[#1f1f1f] montserrat w-[810px] text-center">
                        Explore my design services, from user interface and experience to
                        prototyping and testing. Let&#39;s craft exceptional digital
                        experiences together.
                    </p>
                </div>
            </div>

            <div className="flex-col w-[1440px] items-center justify-center gap-16 pt-0 pb-16 px-[124px] mt-[-100px] flex relative ">
                <div className="self-stretch w-full flex items-start gap-16 relative ">
                    <div className="flex flex-col items-start gap-8 relative flex-1 grow">
                        <img
                            className="relative self-stretch w-full h-[198.33px] object-cover"
                            alt="Image"
                            src="https://c.animaapp.com/m8oppxsffd4w9o/img/image-1.png"
                        />

                        <div className="items-end justify-between  flex relative self-stretch w-full">
                            <div className="inline-flex flex-col  gap-4 relative ">
                                <h1 className="font-bold montserrat text-[20px] leading-[150%]">
                                    Educational Platform
                                </h1>

                                <p className="w-[242px] leading-[150%] font-normal text-[14px] montserrat">
                                    Web Design / Usability Testing
                                </p>
                            </div>

                            <VuesaxLinearSend5 className="!relative !" />
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-8 relative flex-1 grow">
                        <img
                            className="relative self-stretch w-full h-[198.33px]"
                            alt="Image"
                            src="https://c.animaapp.com/m8oppxsffd4w9o/img/image-8.svg"
                        />

                        <div className="flex items-end justify-between relative self-stretch w-full ">
                            <div className="inline-flex flex-col  gap-4 relative ">
                                <h1 className="font-bold montserrat text-[20px] leading-[150%]">
                                    Travel App Design
                                </h1>

                                <p className="w-[242px] leading-[150%] font-normal text-[14px] montserrat">
                                    UX Research / App Design
                                </p>
                            </div>

                            <VuesaxLinearSend5 className="!relative !" />
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-8 relative flex-1 grow">
                        <img
                            className="relative self-stretch w-full h-[198.33px]"
                            alt="Image"
                            src="https://c.animaapp.com/m8oppxsffd4w9o/img/image-2.png"
                        />

                        <div className="flex items-end justify-between relative self-stretch w-full ">
                            <div className="inline-flex flex-col  gap-4 relative ">
                                <h1 className="font-bold montserrat text-[20px] leading-[150%]">
                                    Personal Page
                                </h1>

                                <p className="w-[242px] leading-[150%] font-normal text-[14px] montserrat">
                                    Web Design
                                </p>
                            </div>

                            <VuesaxLinearSend5 className="!relative !" />
                        </div>
                    </div>
                </div>

                <div className="w-[1192px] flex items-start gap-16 relative ">
                    <div className="flex flex-col items-start gap-8 relative flex-1 grow">
                        <img
                            className="relative self-stretch w-full h-[198.33px]"
                            alt="Image"
                            src="https://c.animaapp.com/m8oppxsffd4w9o/img/image-9.svg"
                        />

                        <div className="flex items-end justify-between relative self-stretch w-full ">
                            <div className="inline-flex flex-col  gap-4 relative ">
                                <h1 className="font-bold montserrat text-[20px] leading-[150%]">
                                    Furniture Mobile App
                                </h1>

                                <p className="w-[242px] leading-[150%] font-normal text-[14px] montserrat">
                                    App Design
                                </p>
                            </div>

                            <VuesaxLinearSend5 className="!relative !" />
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-8 relative flex-1 grow">
                        <img
                            className="relative self-stretch w-full h-[198.33px] object-cover"
                            alt="Image"
                            src="https://c.animaapp.com/m8oppxsffd4w9o/img/image-3.png"
                        />

                        <div className="flex items-end justify-between relative self-stretch w-full ">
                            <div className="inline-flex flex-col gap-4 relative ">
                                <h1 className="font-bold montserrat text-[20px] leading-[150%]">
                                    Coffee House Landing Page
                                </h1>

                                <p className="w-[242px] leading-[150%] font-normal text-[14px] montserrat">
                                    UX Research / Web Design
                                </p>
                            </div>

                            <VuesaxLinearSend5 className="!relative !" />
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-8 relative flex-1 grow">
                        <img
                            className="relative self-stretch w-full h-[198.33px] object-cover"
                            alt="Image"
                            src="https://c.animaapp.com/m8oppxsffd4w9o/img/image-4.png"
                        />

                        <div className="flex items-end justify-between relative self-stretch w-full ">
                            <div className="inline-flex flex-col gap-4 relative ">
                                <h1 className="font-bold montserrat text-[20px] leading-[150%]">
                                    Home Services Page
                                </h1>

                                <p className=" w-[242px] leading-[150%] font-normal text-[14px] montserrat">
                                    Web Design / Marketing
                                </p>
                            </div>

                            <VuesaxLinearSend5 className="!relative !" />
                        </div>
                    </div>
                </div>
            </div>
        </div></div>

    )
}

export default Portfolio