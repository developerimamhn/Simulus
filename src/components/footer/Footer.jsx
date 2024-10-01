// import victorimages from '../body/MusicSectionbackground/Vector.svg';
import { Link } from 'react-router-dom';
import logofooterimages from '../header/navbarimages/Group 48095561.svg';

const Footer = () => {
    return (
        <div className="musicsectionbackground pt-[40px] sm:pt-[60px] md:pt-[80px] lg:pt-[100px] xl:pt-[120px] 2xl:pt-[142px] relative">
            <div className="container mx-auto">
            <div className="mx-auto container text-center ">
            <div className="text-center md:text-left">
                <div className="grid-1 grid gap-8 justify-between grid-cols-2 lg:grid-cols-4">
                <div className="">
                    <h6
                    className="flex items-center justify-center font-semibold uppercase md:justify-start ">
                        <img className='w-[120px] sm:w-[188px] md:w-[198px] lg:w-[208px] xl:w-[218px] 2xl:w-[228px]' src={logofooterimages} alt="" />
                    </h6>
                    <p className='text-[#ffffff80] manrope text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-normal leading-[180%] mt-[15px] sm:mt-[17px] md:mt-[22px] lg:mt-[25px] xl:mt-[28px] 2xl:mt-[33px] mx-9 sm:px-0 md:ml-0'>
                    1025 Nine North Drive, Suite G Alpharetta, GA 30004
                    </p>
                </div>
                <div className="flex md:items-center lg:items-end flex-col">
                <div className="flex flex-col">
                    <h6
                    className="mb-[15px] sm:mb-[17px] md:mb-[22px] lg:mb-[25px] xl:mb-[28px] 2xl:mb-[33px] flex justify-center uppercase md:justify-start text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] font-bold text-[#fff] leading-[100%]">
                    Features
                    </h6>
                    <p className="mb-[14px] sm:mb-[16px] md:mb-[18px] lg:mb-[20px] xl:mb-[22px] 2xl:mb-[24px]">
                    <Link className="text-[#ffffff80] manrope text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-normal leading-[120%] "
                    >120+ Video Avatars</Link>
                    </p>
                    <p className="mb-[14px] sm:mb-[16px] md:mb-[18px] lg:mb-[20px] xl:mb-[22px] 2xl:mb-[24px]">
                    <Link className="text-[#ffffff80] manrope text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-normal leading-[120%]"
                    >130+ Languages</Link>
                    </p>
                    <p className="mb-[14px] sm:mb-[16px] md:mb-[18px] lg:mb-[20px] xl:mb-[22px] 2xl:mb-[24px]">
                    <Link className="text-[#ffffff80] manrope text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-normal leading-[120%] "
                    >60+ Video Templates</Link>
                    </p>
                    <p className='mb-[14px] sm:mb-[16px] md:mb-[18px] lg:mb-[20px] xl:mb-[22px] 2xl:mb-[24px]'>
                    <Link className="text-[#ffffff80] manrope text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-normal leading-[120%] "
                    >Custom Avatars</Link>
                    </p>
                    <p>
                    <Link className="text-[#ffffff80] manrope text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-normal leading-[120%] "
                    >Free AI Video Generator</Link>
                    </p>
                    </div>
                </div>
                <div className="flex md:items-center lg:items-end flex-col">
                <div className="flex flex-col">
                <h6
                    className="mb-[15px] sm:mb-[17px] md:mb-[22px] lg:mb-[25px] xl:mb-[28px] 2xl:mb-[33px] flex justify-center uppercase md:justify-start text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] font-bold text-[#fff] leading-[100%]">
                    Use Cases
                    </h6>
                    <p className="mb-[14px] sm:mb-[16px] md:mb-[18px] lg:mb-[20px] xl:mb-[22px] 2xl:mb-[24px]">
                    <Link className="text-[#ffffff80] manrope text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-normal leading-[120%] "
                    >Learning & Development</Link>
                    </p>
                    <p className="mb-[14px] sm:mb-[16px] md:mb-[18px] lg:mb-[20px] xl:mb-[22px] 2xl:mb-[24px]">
                    <Link className="text-[#ffffff80] manrope text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-normal leading-[120%]"
                    >Sales Enablement</Link>
                    </p>
                    <p className="mb-[14px] sm:mb-[16px] md:mb-[18px] lg:mb-[20px] xl:mb-[22px] 2xl:mb-[24px]">
                    <Link className="text-[#ffffff80] manrope text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-normal leading-[120%] "
                    >Information Technology</Link>
                    </p>
                    <p className='mb-[14px] sm:mb-[16px] md:mb-[18px] lg:mb-[20px] xl:mb-[22px] 2xl:mb-[24px]'>
                    <Link className="text-[#ffffff80] manrope text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-normal leading-[120%] "
                    >Customer Service</Link>
                    </p>
                    <p>
                    <Link className="text-[#ffffff80] manrope text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-normal leading-[120%] "
                    >Training Videos</Link>
                    </p>
                </div>
                </div>
                <div className="flex md:items-center lg:items-end flex-col">
                <div className="flex flex-col">
                <h6
                    className="mb-[15px] sm:mb-[17px] md:mb-[22px] lg:mb-[25px] xl:mb-[28px] 2xl:mb-[33px] flex justify-center uppercase md:justify-start text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] font-bold text-[#fff] leading-[100%]">
                    Company
                    </h6>
                    <p className="mb-[14px] sm:mb-[16px] md:mb-[18px] lg:mb-[20px] xl:mb-[22px] 2xl:mb-[24px]">
                    <Link className="text-[#ffffff80] manrope text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-normal leading-[120%] "
                    >About Us</Link>
                    </p>
                    <p className="mb-[14px] sm:mb-[16px] md:mb-[18px] lg:mb-[20px] xl:mb-[22px] 2xl:mb-[24px]">
                    <Link className="text-[#ffffff80] manrope text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-normal leading-[120%]"
                    >Ethics Guidelines</Link>
                    </p>
                    <p className="mb-[14px] sm:mb-[16px] md:mb-[18px] lg:mb-[20px] xl:mb-[22px] 2xl:mb-[24px]">
                    <Link className="text-[#ffffff80] manrope text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-normal leading-[120%] "
                    >Security</Link>
                    </p>
                    <p className='mb-[14px] sm:mb-[16px] md:mb-[18px] lg:mb-[20px] xl:mb-[22px] 2xl:mb-[24px]'>
                    <Link className="text-[#ffffff80] manrope text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-normal leading-[120%] "
                    >Contact Us</Link>
                    </p>
                    <p>
                    <Link className="text-[#ffffff80] manrope text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-normal leading-[120%] "
                    >Resources</Link>
                    </p>
                </div>
                </div>
                </div>
            </div>

            <div className="py-[14px] sm:py-[20px] md:py-[25px] lg:py-[30px] xl:py-[35px] 2xl:py-[40px] flex justify-between items-center flex-col gap-4 sm:gap-0 sm:flex-row mt-5 sm:mt-0">
                <span className='text-[#ffffff80] manrope text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-normal leading-[120%]'>© 2024 SimulusAI Limited. All rights reserved.</span>
                <div className="flex items-center gap-10">
                    <Link href="" className='text-[#ffffff80] manrope text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-normal leading-[120%]'>Privacy Policy</Link>
                    <Link href="" className='text-[#ffffff80] manrope text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-normal leading-[120%]'>Terms of Use</Link>
                </div>
            </div>
            </div>
        </div>
        <div className="last-stoke absolute bottom-0 left-[0] overflow-hidden"></div>
        </div>
    );
};

export default Footer;