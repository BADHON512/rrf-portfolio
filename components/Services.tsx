import { VuesaxLinearTask } from '@/lib/hellper'
import React from 'react'

type Props = {}

const Services = (props: Props) => {
  return (
    <div id='Services' className="flex w-[1440px] mx-auto items-center justify-center gap-2.5 px-[124px] py-16 relative  bg-[#ffffff]">
      <div className="flex flex-col items-center justify-center gap-8 relative flex-1 grow">
        <div className="flex flex-col w-[810px] items-center gap-6 relative ">
          <div className=" font-bold text-[36px] leading-[150%] ] montserrat text-[#1f1f1f]">
            Services
          </div>

          <p className=" text-[#1f1f1f] font-normal leading-[150%] text-center montserrat">
            Explore my design services, from user interface and experience to
            prototyping and testing. Let&#39;s craft exceptional digital
            experiences together.
          </p>
        </div>

        <div className="flex items-start gap-8 relative self-stretch w-full ">
          <div className="flex flex-col items-start gap-6 p-4 relative flex-1 self-stretch grow">
            <img
              className="relative w-[47.98px] h-[53.97px]"
              alt="Vector"
              src="https://c.animaapp.com/m8oppxsffd4w9o/img/vector-3.svg"
            />

            <div className=" font-bold text-[18px] leading-[130%] text-[#1f1f1f] ">
              Design
            </div>

            <p className="text-[#1f1f1f] font-normal leading-[150%] text-[14px]  montserrat">
              I specialize in web development and design, creating visually
              appealing, user-friendly digital experiences.
            </p>
          </div>

          <div className="flex flex-col items-start gap-6 p-4 relative flex-1 self-stretch grow">
            <div className="inline-flex h-[54px] items-center relative">
              <div className="relative w-11 h-11 rounded-[22px] border-2 border-solid border-[#fc3314]" />

              <div className="ml-[-22px] relative w-11 h-11 rounded-[22px] border-2 border-solid border-[#fc3314]" />

              <div className="ml-[-22px] relative w-11 h-11 rounded-[22px] border-2 border-solid border-[#fc3314]" />
            </div>

            <div className="font-bold text-[18px] leading-[130%] text-[#1f1f1f] ">
              Branding
            </div>

            <p className="text-[#1f1f1f] font-normal leading-[150%] text-[14px]  montserrat">
              I&#39;m a branding expert, crafting unique visual identities that
              tell your story and resonate with your audience.
            </p>
          </div>

          <div className="flex flex-col items-start gap-6 p-4 relative flex-1 self-stretch grow">
            <img
              className="relative w-[54px] h-[54px]"
              alt="Vector"
              src="https://c.animaapp.com/m8oppxsffd4w9o/img/vector.svg"
            />

            <div className="font-bold text-[18px] leading-[130%] text-[#1f1f1f]">
              UX Research
            </div>

            <p className="text-[#1f1f1f] font-normal leading-[150%] text-[14px] montserrat">
              &#34;I specialize in user experience research, collaborating on
              web development, and ensuring user-friendly digital products.
            </p>
          </div>

          <div className="flex flex-col items-start gap-6 p-4 relative flex-1 self-stretch grow">
            <div className="flex w-[54px] h-[54px] items-center justify-center gap-2.5 relative">
              <VuesaxLinearTask className="!relative !w-[48.11px] !h-12" />
            </div>

            <div className="font-bold text-[18px] leading-[130%] text-[#1f1f1f] ">
              Usability Testing
            </div>

            <p className="text-[#1f1f1f] font-normal leading-[150%] text-[14px]  montserrat">
              I perform usability testing and optimize designs websites based on
              real-user feedback for seamless interactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services