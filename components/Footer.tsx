import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="flex flex-col items-center gap-2.5 px-[300px] py-20 relative self-stretch w-[1440px] mx-auto flex-[0_0_auto] bg-[#1f1f1f]">
      <div className="inline-flex flex-col items-center gap-16 relative flex-[0_0_auto]">
        <div className="inline-flex items-center gap-[120px] relative flex-[0_0_auto]">
          <div className="inline-flex items-end gap-8 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-text-xl-font-bold font-[number:var(--text-xl-font-bold-font-weight)] text-white text-[length:var(--text-xl-font-bold-font-size)] tracking-[var(--text-xl-font-bold-letter-spacing)] leading-[var(--text-xl-font-bold-line-height)] whitespace-nowrap [font-style:var(--text-xl-font-bold-font-style)]">
              About
            </div>

            <div className="relative w-fit mt-[-1.00px] font-text-xl-font-bold font-[number:var(--text-xl-font-bold-font-weight)] text-white text-[length:var(--text-xl-font-bold-font-size)] tracking-[var(--text-xl-font-bold-letter-spacing)] leading-[var(--text-xl-font-bold-line-height)] whitespace-nowrap [font-style:var(--text-xl-font-bold-font-style)]">
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
            <div className="relative w-fit mt-[-1.00px] font-text-xl-font-bold font-[number:var(--text-xl-font-bold-font-weight)] text-white text-[length:var(--text-xl-font-bold-font-size)] tracking-[var(--text-xl-font-bold-letter-spacing)] leading-[var(--text-xl-font-bold-line-height)] whitespace-nowrap [font-style:var(--text-xl-font-bold-font-style)]">
              Portfolio
            </div>

            <div className="relative w-fit mt-[-1.00px] font-text-xl-font-bold font-[number:var(--text-xl-font-bold-font-weight)] text-white text-[length:var(--text-xl-font-bold-font-size)] tracking-[var(--text-xl-font-bold-letter-spacing)] leading-[var(--text-xl-font-bold-line-height)] whitespace-nowrap [font-style:var(--text-xl-font-bold-font-style)]">
              Blog
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col items-center gap-8 relative flex-[0_0_auto]">
          <p className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-normal text-white text-base tracking-[0] leading-6 whitespace-nowrap">
            Follow me on social media:
          </p>

          <img
            className="relative flex-[0_0_auto]"
            alt="Social links"
            src="https://c.animaapp.com/m8oppxsffd4w9o/img/-social-links.svg"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer