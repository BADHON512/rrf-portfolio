import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className="w-[1440px] mx-auto bg-[#ffd3d0] gap-[60px] p-[124px] flex-[0_0_auto] bg-pink overflow-hidden flex items-start relative">
    <div className="flex-col justify-between flex-1 self-stretch grow flex items-start relative">
      <div className="flex flex-col items-start gap-16 relative self-stretch w-full flex-[0_0_auto]">
        <div className="items-start gap-4 self-stretch w-full flex-[0_0_auto] flex flex-col relative">
          <h1 className="font-bold text-4xl leading-[150%] tracking-[0%]">
            Get in Touch
          </h1>

          <p className="relative self-stretch font-text-base-font-normal ">
            Have a question or a project in mind? I&#39;d love to hear from
            you. Let&#39;s chat and make something amazing together.
          </p>
        </div>

        <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-start gap-4 relative flex-[0_0_auto]">
            <img
              className="relative w-6 h-6"
              alt="Bxs phone call"
              src="https://c.animaapp.com/m8oppxsffd4w9o/img/bxs-phone-call.svg"
            />

            <div className="relative w-fit mt-[-1.00px] font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-[#1f1f1f] text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] whitespace-nowrap [font-style:var(--text-base-font-normal-font-style)]">
              +1205 5872 321
            </div>
          </div>

          <div className="inline-flex items-start gap-4 relative flex-[0_0_auto]">
            <img
              className="relative w-6 h-6"
              alt="Ic sharp email"
              src="https://c.animaapp.com/m8oppxsffd4w9o/img/ic-sharp-email.svg"
            />

            <p className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-normal text-transparent text-base tracking-[0] leading-4">
              <span className="text-[#1f1f1f] leading-[var(--text-base-font-normal-line-height)] font-text-base-font-normal [font-style:var(--text-base-font-normal-font-style)] font-[number:var(--text-base-font-normal-font-weight)] tracking-[var(--text-base-font-normal-letter-spacing)] text-[length:var(--text-base-font-normal-font-size)]">
                {" "}
                contact@sarajonesdesign.com
              </span>
            </p>
          </div>

          <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <img
              className="relative w-6 h-6"
              alt="Carbon location"
              src="https://c.animaapp.com/m8oppxsffd4w9o/img/carbon-location-filled.svg"
            />

            <p className="relative flex-1 mt-[-1.00px] font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-[#1f1f1f] text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
              1234 Design Street,Creativeville, Webland,Imaginary State, 98765
            </p>
          </div>
        </div>
      </div>

      <div className="inline-flex items-center justify-center gap-6 relative flex-[0_0_auto]">
        <div className="relative w-[30px] h-[30px] bg-white rounded-[15px]">
          <img
            className="absolute w-[15px] h-3 top-[9px] left-2"
            alt="Vector"
            src="https://c.animaapp.com/m8oppxsffd4w9o/img/vector-2.svg"
          />
        </div>

        <div className="relative w-[30px] h-[30px] bg-white rounded-[15px]">
          <img
            className="absolute w-[15px] h-[15px] top-[7px] left-2"
            alt="Vector"
            src="https://c.animaapp.com/m8oppxsffd4w9o/img/vector-1.svg"
          />
        </div>

        <img
          className="relative w-[30px] h-[30px]"
          alt="Frame"
          src="https://c.animaapp.com/m8oppxsffd4w9o/img/frame-110.svg"
        />

        <img
          className="relative w-[30px] h-[30px]"
          alt="Frame"
          src="https://c.animaapp.com/m8oppxsffd4w9o/img/frame-109.svg"
        />
      </div>
    </div>

    <div className="flex flex-col items-start justify-center gap-8 relative flex-1 grow">
      <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
        <input
          className="w-[566px] px-4 py-3.5 relative bg-[#ffffff] border-[none] mt-[-1.00px] font-text-sm-font-normal font-[number:var(--text-sm-font-normal-font-weight)] text-dark-grey text-[length:var(--text-sm-font-normal-font-size)] tracking-[var(--text-sm-font-normal-letter-spacing)] leading-[var(--text-sm-font-normal-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-normal-font-style)]"
          placeholder="First name"
          type="text"
        />

        <input
          className="px-4 py-3.5 self-stretch w-full relative bg-[#ffffff] border-[none] mt-[-1.00px] font-text-sm-font-normal font-[number:var(--text-sm-font-normal-font-weight)] text-dark-grey text-[length:var(--text-sm-font-normal-font-size)] tracking-[var(--text-sm-font-normal-letter-spacing)] leading-[var(--text-sm-font-normal-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-normal-font-style)]"
          placeholder="Email"
          type="email"
        />

        <input
          className="px-4 py-3.5 self-stretch w-full relative bg-white border-[none] mt-[-1.00px] font-text-sm-font-normal font-[number:var(--text-sm-font-normal-font-weight)] text-dark-grey text-[length:var(--text-sm-font-normal-font-size)] tracking-[var(--text-sm-font-normal-letter-spacing)] leading-[var(--text-sm-font-normal-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-normal-font-style)]"
          placeholder="Phone number"
          type="tel"
        />

        <input
          className="px-4 py-[13px] self-stretch w-full grow relative bg-white border-[none] mt-[-1.00px] font-text-sm-font-normal font-[number:var(--text-sm-font-normal-font-weight)] text-dark-grey text-[length:var(--text-sm-font-normal-font-size)] tracking-[var(--text-sm-font-normal-letter-spacing)] leading-[var(--text-sm-font-normal-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-normal-font-style)]"
          placeholder="Your message"
          type="number"
        />
      </div>

      <button className="all-[unset] box-border inline-flex px-14 py-3 flex-[0_0_auto] bg-[#1f1f1f] items-center justify-center gap-2.5 relative">
        <div className="relative w-fit mt-[-1.00px] font-text-base-font-bold font-[number:var(--text-base-font-bold-font-weight)] text-white text-[length:var(--text-base-font-bold-font-size)] tracking-[var(--text-base-font-bold-letter-spacing)] leading-[var(--text-base-font-bold-line-height)] whitespace-nowrap [font-style:var(--text-base-font-bold-font-style)]">
          Send Message
        </div>
      </button>
    </div>

    <div className="absolute w-[221px] h-[221px] top-[227px] left-[-134px] bg-[#fc3314] rounded-[110.5px]" />
  </div>
  )
}

export default Contact