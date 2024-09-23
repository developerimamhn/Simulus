import { useState } from "react";

const DropdownSection = () => {
    // Use an array of booleans for toggling each FAQ item independently
    const [toggle, setToggle] = useState([true, true, true, true,true,true]);

    // Function to handle toggling a specific FAQ by index
    const handleToggle = (index) => {
        const newToggleState = toggle.map((item, idx) => (idx === index ? !item : item));
        setToggle(newToggleState);
    };

    // FAQs data
    const faqs = [
        "What do I need to bring to film a digital twin?",
        "How long does the filming process take?",
        "Do I need to do my own hair and makeup for filming?",
        "What should I wear?",
        "Can my digital twin wear multiple outfits?",
        "Can my digital twin have multiple angles?"
    ];

    return (
        <div>
            <div className="  container mx-auto mt-[50px] sm:mt-[60px] md:mt-[80px] lg:mt-[110px] xl:mt-[140px] 2xl:mt-[180px]">
                <div className="grid grid-cols-12 items-start gap-[20px] sm:gap-[22px] md:gap-[24px] lg:gap-[26px] xl:gap-[28px] 2xl:gap-[30px]">
                    <div className="col-span-12 sm:col-span-5 relative">
                        <div className="absolute left-0 top-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-[100%] md:w-[100vh] lg:w-screen 2xl:w-[1241px]" viewBox="0 0 1241 2425" fill="none">
  <g filter="url(#filter0_f_2257_71)">
    <path d="M317.844 2070C419.899 2086.9 529.236 1760.32 438.75 1293.85C325.644 710.771 742.967 433.854 910.677 350" stroke="url(#paint0_linear_2257_71)" stroke-width="88"/>
  </g>
  <defs>
    <filter id="filter0_f_2257_71" x="0.455261" y="0.445007" width="1240.1" height="2424.44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="155.1" result="effect1_foregroundBlur_2257_71"/>
    </filter>
    <linearGradient id="paint0_linear_2257_71" x1="327.044" y1="349.493" x2="261.014" y2="1599.09" gradientUnits="userSpaceOnUse">
      <stop stop-color="#273DFF"/>
      <stop offset="1" stop-color="#243BFF" stop-opacity="0"/>
    </linearGradient>
  </defs>
</svg>
                        </div>
                        <h2 className="text-[#fff] manrope text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] font-extrabold leading-[125%]">
                            Frequently Asked <br className="hidden sm:block"/> Questions (FAQs)
                        </h2>
                    </div>
                    <div className="col-span-12 sm:col-span-7">
                        <ul className="flex flex-col gap-[20px] sm:gap-[22px] md:gap-[24px] lg:gap-[26px] xl:gap-[28px] 2xl:gap-[30px]">
                            {faqs.map((faq, index) => (
                                <li key={index} className="py-[18px] md:py-[21px] lg:py-[25px] xl:py-[28px] 2xl:py-[32px] px-[14px] sm:px-[16px] md:px-[18px] lg:px-[20px] xl:px-[22px] 2xl:px-[24px] border border-[#282D35] rounded-lg bg-[rgba(62,70,82,0.10)] backdrop-blur-[47px] sm:border sm:rounded sm:backdrop-blur text-[#fff] manrope text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] w-full">
                                    <div className="flex justify-between items-center font-semibold">
                                        <p>{faq}</p>
                                        {
                                        toggle[index] ?
                                        <svg onClick={() => handleToggle(index)} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                            <path d="M11.668 28.3327L28.3346 11.666" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M11.668 11.666H28.3346V28.3327" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        :
                                        <svg onClick={() => handleToggle(index)} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                            <path d="M11.668 11.6673L28.3346 28.334" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M11.668 28.334H28.3346V11.6673" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        }
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-1000 ease-in-out
                                        ${toggle[index] ? 'max-h-0 opacity-0' : 'max-h-[500px] opacity-100'}`}>
                                        <p className="text-[#ffffff99] text-ellipsis text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-normal leading-[160%] mt-[10px] sm:mt-[12px] md:mt-[14px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] transition-all duration-1000 ease-in-out translate-y-0">
                                            Each digital twin takes approximately 2 hours to film.
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DropdownSection;
