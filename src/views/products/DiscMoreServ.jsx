import React from "react";
import img1 from "../../assets/customer_care_verlinkung.webp";
import img2 from "../../assets/digi_opt1_final.webp";
import img3 from "../../assets/automation_opt2_final.webp";
import { ServiceSvg, SolutionSvg, AutomSvg } from "../../assets/svg";

const DiscMoreServ = () => {
  const servdata = [
    {
      image: img1,
      heading: "SERVICE",
      icon: ServiceSvg,
      title: "R&D",
      desc: "Innovative research and development are very important at Dendrites.",
      buttonlink: "Learn More",
    },
    {
      image: img2,
      heading: "SOLUTIONS",
      icon: SolutionSvg,
      title: "Digitalization",
      desc: "Innovative research and development are very important at Dendrites.",
      buttonlink: "Learn More",
    },
    {
      image: img3,
      heading: "SOLUTIONS",
      icon: AutomSvg,
      title: "Automation",
      desc: "Innovative research and development are very important at Dendrites.",
      buttonlink: "Learn More",
    },
  ];

  return (
    <>
      <div className="bg-[#00223E]">
        <div className="lg:max-w-[1400px] 2xl:max-w-[1400px] w-full mx-0 overflow-hidden lg:mx-auto 2xl:mx-auto max-w-full h-full py-16 px-5 bg-[#00223E]">
          <h1 className="text-shadow-glow text-white font-light text-4xl leading-[1.15] tracking-[0.025em] text-center uppercase m-0">
            Discover <br />
            <strong className="font-bold">more services</strong>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 lg:gap-5 2xl:gap-7 gap-6 md:gap-8 mt-[50px]">
            {servdata.map((data, index) => (
              <div
                key={index}
                className="relavtive block w-full 2xl:max-w-[446px] 2xl:h-[498px] lg:max-w-[446px] lg:h-[498px] max-w-[345px] h-[463px]"
              >
                <div className="relative w-full h-full top-0 left-0">
                  <img
                    src={data.image}
                    alt=""
                    className="absolute w-full h-full object-cover"
                  />
                  <h4 className="absolute z-4 top-[37px] left-[40px] uppercase">
                    {data.heading}
                  </h4>
                  <div
                    className="absolute inset-0 
                    bg-gradient-to-r
                    from-white/90 
                    via-white/50 to-transparent
                    z-10"
                  ></div>
                  <div
                    className="absolute top-0 left-0 h-full w-[68%] lg:bg-[#6a929c] 2xl:bg-[#6a929c] bg-[#81A1BE] lg:opacity-40 2xl:opacity-40 opacity-90"
                    style={{
                      clipPath: "ellipse(100% 100% at 0% 50%)",
                    }}
                  ></div>

                  {/* text container */}
                  <div className="relative z-50 p-10 pt-48">
                    <div className="relative flex justify-center items-center w-[100px] h-[100px] border border-[#002a4d] rounded-full overflow-hidden">
                      <div className="flex justify-center items-center w-[60px] h-[60px]">
                        {data.icon}
                      </div>
                    </div>
                    <div className="z-70 font-bold text-[30px] leading-[1.16666667] tracking-[0.025em] text-[#002a4d] mt-6">{data.title}</div>
                    <div className="font-light text-[13px] leading-[1.38461538] text-[#002a4d] mt-[9px]">{data.desc}</div>
                    <div className="mt-[23px]">{data.buttonlink}</div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscMoreServ;
