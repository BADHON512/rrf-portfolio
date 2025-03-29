import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className="w-[1440px] mx-auto bg-[#ffd3d0] gap-[60px] p-[124px]  bg-pink overflow-hidden flex items-start relative">
      <div className="flex-col justify-between flex-1 self-stretch grow flex items-start relative">
        <div className="flex flex-col items-start gap-16 relative self-stretch w-full ">
          <div className="items-start gap-4 self-stretch w-full  flex flex-col relative">
            <h1 className="font-bold text-4xl leading-[150%] tracking-[0%]">
              Get in Touch
            </h1>

            <p className="text-base font-normal leading-[150% text-[#1F1F1F]">
              Have a question or a project in mind? I&#39;d love to hear from
              you. Let&#39;s chat and make something amazing together.
            </p>
          </div>

          <div className="flex flex-col items-start gap-8 relative self-stretch w-full ">
            <div className="inline-flex items-start gap-4 relative ">
              <img
                className="relative w-6 h-6"
                alt="Bxs phone call"
                src="https://c.animaapp.com/m8oppxsffd4w9o/img/bxs-phone-call.svg"
              />

              <p className="">
                +1205 5872 321
              </p>
            </div>

            <div className="inline-flex items-start gap-4 relative ">
              <img
                className="relative w-6 h-6"
                alt="Ic sharp email"
                src="https://c.animaapp.com/m8oppxsffd4w9o/img/ic-sharp-email.svg"
              />

              <p className="">
                <span className="text-[#1f1f1f] ">
                  {" "}
                  contact@sarajonesdesign.com
                </span>
              </p>
            </div>

            <div className="flex items-start gap-4 relative self-stretch w-full ">
              <img
                className="relative w-6 h-6"
                alt="Carbon location"
                src="https://c.animaapp.com/m8oppxsffd4w9o/img/carbon-location-filled.svg"
              />

              <p className="">
                1234 Design Street,Creativeville, Webland,Imaginary State, 98765
              </p>
            </div>
          </div>
        </div>

        <div className="inline-flex items-center justify-center gap-6 relative mt-20 ">
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

      <div className="flex flex-col items-start justify-center gap-8 relative flex-1 grow">
        <div className="flex flex-col items-start gap-6 relative self-stretch w-full ">
          <input
            className="w-[566px] px-4 py-3.5 relative bg-[#ffffff] text-gray-500 border-none outline-none"

            placeholder="First name"
            type="text"
          />

          <input
            className="w-[566px] px-4 py-3.5 relative bg-[#ffffff] text-gray-500 border-none outline-none"

            placeholder="Email"
            type="email"
          />

          <input
            className="w-[566px] px-4 py-3.5 relative bg-[#ffffff] text-gray-500 border-none outline-none"
            placeholder="Phone number"
            type="tel"
          />

          <input
            className="w-[566px] px-4 py-3.5 relative bg-[#ffffff] text-gray-500 border-none outline-none"

            placeholder="Your message"
            type="number"
          />
        </div>

        <button className="all-[unset] cursor-pointer box-border inline-flex px-14 py-3  bg-[#1f1f1f] items-center justify-center gap-2.5 relative">
          <span className="text-white cursor-pointer">
            Send Message
          </span>
        </button>
      </div>

      <div className="absolute w-[221px] h-[221px] top-[227px] left-[-134px] bg-[#fc3314] rounded-[110.5px]" />
    </div>
  )
}

export default Contact