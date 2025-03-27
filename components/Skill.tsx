import React from 'react'

type Props = {}

const Skill = (props: Props) => {
  return (
    <div className="flex-col w-[1440px] mx-auto items-center gap-16 px-[188px] py-[90px] bg-grey flex relative flex-[0_0_auto]">
    <div className="flex flex-col w-[810px] items-center gap-6 relative flex-[0_0_auto]">
      <h1 className="font-bold  text-[36px] leading-[150%] text-center">
        Core Design Skills
      </h1>

      <p className="font-normal leading-[150%] text-[#1f1f1f] montserrat w-[810px] text-center">
        I excel in essential design skills, creating visually stunning and
        functional digital experiences. From UI design to UX research, my
        passion is to craft effective and memorable digital solutions.
      </p>
    </div>

    <div className="items-start justify-center gap-[120px] self-stretch w-full flex relative flex-[0_0_auto]">
      <div className="flex flex-col items-start gap-2 relative flex-1 grow">
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="font-bold text-base leading-[150%] text-[#1f1f1f]">
            Interaction Design
          </h1>

          <div className="gap-4 flex items-center relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start flex-1 grow">
              <div className="w-[333px] bg-[#1f1f1f] relative h-[5px]" />

              <div className="flex-1 grow  bg-[#E1E1E1] relative h-[5px]" />
            </div>

            <p className="font-bold text-base leading-[150%] text-[#1f1f1f]">
              60%
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="font-bold text-base leading-[150%] text-[#1F1F1F]">
            Usability Testing
          </h1>

          <div className="gap-4 flex items-center relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start relative flex-1 grow">
              <div className="w-[298px] h-[5px] relative bg-[#1f1f1f]" />

              <div className="flex-1 grow bg-[#E1E1E1] relative h-[5px]" />
            </div>

            <p className="font-bold text-base leading-[150%] text-[#1f1f1f]">
              70%
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="font-bold text-base leading-[150%] text-[#1f1f1f]">
            User Research
          </h1>

          <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start relative flex-1 grow">
              <div className="w-[205px] h-[5px] relative bg-[#1f1f1f]" />

              <div className="flex-1 grow bg-[#E1E1E1] relative h-[5px]" />
            </div>

            <p className="font-bold text-base leading-[150%] text-[#1f1f1f]">
              45%
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-2 relative flex-1 grow">
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="font-bold text-base leading-[150%] text-[#1f1f1f]">
            Figma
          </h1>

          <div className="gap-4 flex items-center relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start relative flex-1 grow">
              <div className="w-[404px] h-1.5 relative bg-[#1f1f1f]" />

              <div className="flex-1 grow bg-[#E1E1E1] relative h-[5px]" />
            </div>

            <p className="font-bold text-base leading-[150%] text-[#1f1f1f]">
              95%
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="font-bold text-base leading-[150%] text-[#1f1f1f]">
            Prototyping
          </h1>

          <div className="gap-4 flex items-center relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start relative flex-1 grow">
              <div className="w-[378px] h-[5px] relative bg-[#1f1f1f]" />

              <div className="flex-1 grow bg-[#E1E1E1] relative h-[5px]" />
            </div>

            <p className="font-bold text-base leading-[150%] text-[#1f1f1f]">
              80%
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="font-bold text-base leading-[150%] text-[#1f1f1f]">
            Information Architecture
          </h1>

          <div className="gap-2 flex items-center relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start relative flex-1 grow">
              <div className="w-[234px] h-1.5 relative bg-[#1f1f1f]" />

              <div className="flex-1 grow bg-[#E1E1E1] relative h-[5px]" />
            </div>

            <p className="font-bold text-base leading-[150%] text-[#1f1f1f]">
              50%
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Skill