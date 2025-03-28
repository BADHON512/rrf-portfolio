import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="flex flex-col items-center gap-2.5 px-[300px] py-20 relative self-stretch w-[1440px] mx-auto flex-[0_0_auto] bg-[#1f1f1f]">
      <div className="inline-flex flex-col items-center gap-16 relative flex-[0_0_auto]">
        <div className="inline-flex items-center gap-[120px] relative flex-[0_0_auto]">
          <div className="inline-flex items-end gap-8 relative flex-[0_0_auto]">
            <h1 className="font-bold text-xl leading-[150%] text-[#FFFFFF] tracking-[0%]">
              About
            </h1>

            <div className="font-bold text-xl leading-[150%] text-[#FFFFFF] tracking-[0%]">
              Services
            </div>
          </div>

          <div className="inline-flex items-start gap-1 relative flex-[0_0_auto]">
            <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-transparent text-4xl tracking-[-7.92px] leading-[54px] whitespace-nowrap">
              <span className="font-semibold text-[#ffffff] tracking-[-2.85px]">
                RR
              </span>

              <span className="font-semibold text-[#fc3314] tracking-[-2.85px]">
                F
              </span>
            </p>

            <div className="font-semibold text-[#fc3314]  relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica]  text-4xl leading-[54px] ">
              EXAM
            </div>
          </div>

          <div className="flex w-[177px] items-end gap-8 relative">
            <div className="font-bold text-xl leading-[150%] text-[#FFFFFF] tracking-[0%]">
              Portfolio
            </div>

            <div className="font-bold text-xl leading-[150%] text-[#FFFFFF] tracking-[0%]">
              Blog
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col items-center gap-8 relative flex-[0_0_auto]">
          <p className="relative w-fit font-normal text-white text-base tracking-[0] leading-6 whitespace-nowrap">
            Follow me on social media:
          </p>
          <div className="inline-flex items-center justify-center gap-6 relative flex-[0_0_auto]">
            <div className="relative w-[30px] h-[30px] bg-white rounded-[15px]">
              <img
                className="absolute w-[15px] h-3 top-[9px] left-2 cursor-pointer"
                alt="Vector"
                src="https://c.animaapp.com/m8oppxsffd4w9o/img/vector-2.svg"
              />
            </div>

            <div className="relative w-[30px] h-[30px] bg-white rounded-[15px] cursor-pointer">
              <img
                className="absolute w-[15px] h-[15px] top-[7px] left-2"
                alt="Vector"
                src="https://c.animaapp.com/m8oppxsffd4w9o/img/vector-1.svg"
              />
            </div>

            <img
              className="relative w-[30px] h-[30px] cursor-pointer"
              alt="Frame"
              src="https://c.animaapp.com/m8oppxsffd4w9o/img/frame-110.svg"
            />

            <img
              className="relative w-[30px] h-[30px] cursor-pointer"
              alt="Frame"
              src="https://c.animaapp.com/m8oppxsffd4w9o/img/frame-109.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer