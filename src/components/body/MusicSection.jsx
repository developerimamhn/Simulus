import svgiconimages from './MusicSectionbackground/Mask group1.svg';
import musicsectin from './MusicSectionbackground/Group 48095560.png';

const MusicSection = () => {
    return ( 
        <div className=" relative">
            <div className="container mx-auto relative">
            <div className="absolute  left-0 top-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full md:w-[100vh] lg:w-screen 2xl:w-[1482px]" viewBox="0 0 1482 951" fill="none">
    <g filter="url(#filter0_f_2257_141)">
        <path d="M1213.8 1119.73C791.697 505.609 -194.847 165.719 24.2989 -81.3247" stroke="url(#paint0_linear_2257_141)" stroke-width="88"/>
    </g>
    <defs>
        <filter id="filter0_f_2257_141" x="-361.263" y="-420.723" width="1921.52" height="1875.58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="155.1" result="effect1_foregroundBlur_2257_141"/>
        </filter>
        <linearGradient id="paint0_linear_2257_141" x1="-206.996" y1="725.337" x2="820.152" y2="1035.52" gradientUnits="userSpaceOnUse">
        <stop stop-color="#273DFF"/>
        <stop offset="1" stop-color="#243BFF" stop-opacity="0"/>
        </linearGradient>
    </defs>
    </svg>
                </div>
            <div className="absolute hidden 2xl:block left-[32.8%] top-0">
            <svg xmlns="http://www.w3.org/2000/svg"  className="w-full md:w-[100vh] lg:w-screen 2xl:w-[1031px]" viewBox="0 0 1031 951" fill="none">
    <g filter="url(#filter0_f_2257_142)">
        <path d="M1493.16 1044C1115.59 401.54 155.578 -7.32694 391.661 -238.24" stroke="url(#paint0_linear_2257_142)" stroke-width="88"/>
    </g>
    <defs>
        <filter id="filter0_f_2257_142" x="0.579285" y="-579.895" width="1840.72" height="1956.39" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="155.1" result="effect1_foregroundBlur_2257_142"/>
        </filter>
        <linearGradient id="paint0_linear_2257_142" x1="103.849" y1="550.027" x2="1106.46" y2="932.137" gradientUnits="userSpaceOnUse">
        <stop stop-color="#273DFF"/>
        <stop offset="1" stop-color="#243BFF" stop-opacity="0"/>
        </linearGradient>
    </defs>
    </svg>
            </div>
        <div className="w-full container mx-auto">
        <img className='absolute w-full left-[50%] translate-x-[-50%] container mx-auto h-fit' src={svgiconimages} alt="" />
                <div className="flex justify-center items-center flex-col relative z-10 mt-[70px] sm:mt-[100px] md:mt-[120px] lg:mt-[140px] xl:mt-[160px] 2xl:mt-[180px] mb-[40px] sm:mb-[45px] md:mb-[55px] lg:mb-[65px] xl:mb-[75px] 2xl:mb-[87px] pt-[25px] sm:pt-[30px] md:pt-[40px] lg:pt-[60px] xl:pt-[80px] 2xl:pt-[100px]">
                    <h2 className="herosectionh21 manrope text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] mb-[5px] lg:mb-[9px] xl:mb-[13px] 2xl:mb-[16px]">Still Have Questions?</h2>
                    <p className="herosectionp1 manrope text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22xp] 2xl:text-[24px] mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6">Digital Twin technology accelerates content creation, enabling enterprises to <br /> deliver content faster than ever before</p>
                    <div className="flex justify-center items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6 mb-[20px] sm:mb-[55px] md:mb-[60px] lg:mb-[70px] xl:mb-[80px] 2xl:mb-[87px]">
                        <button className=" text-[#fff] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[23px] 2xl:text-[24px] font-semibold py-[10px] sm:py-[12px] md:py-[15px] lg:py-[17px] xl:py-[18px] 2xl:py-[20px] px-[22px] sm:px-[25px] md:px-[30px] lg:px-[35px] xl:px-[40px] 2xl:px-[50px] bg-[#0554F1] rounded-[6px] lg:rounded-[8px] xl:rounded-[10px] manrope">Get Started</button>
                        {/* button no too */}
                        <button className=" text-[#fff] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[23px] 2xl:text-[24px] font-semibold py-[10px] sm:py-[12px] md:py-[15px] lg:py-[17px] xl:py-[18px] 2xl:py-[20px] px-[22px] sm:px-[25px] md:px-[30px] lg:px-[35px] xl:px-[40px] 2xl:px-[50px] rounded-[6px] lg:rounded-[8px] xl:rounded-[10px] herosectionbutton2 manrope">Get Started</button>
                        
                    </div>
                        <img src={musicsectin} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicSection;