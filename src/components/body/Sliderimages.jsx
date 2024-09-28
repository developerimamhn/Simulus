import slidesectionimages from './featuresectionimages/Image.svg';
import Button from './../../Button';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomDot from './CustomDot';
import React from 'react';
import { CustomNextArrow, CustomPrevArrow } from './CustomPrevArrow';


const Sliderimages = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        customPaging: (i) => (
          <CustomDot active={currentSlide === i} onClick={() => setCurrentSlide(i)} />
        ),
        beforeChange: (current, next) => setCurrentSlide(next),

         // Custom arrows
        nextArrow: <CustomNextArrow/>,
        prevArrow: <CustomPrevArrow />,
        
        // Responsive settings
        responsive: [
          {
            breakpoint: 768, // For devices smaller than 768px (tablets and small screens)
            settings: {
              slidesToShow: 1,  // Show 1 slide on smaller screens
              slidesToScroll: 1, // Scroll 1 slide at a time
            },
          },
          {
            breakpoint: 480, // For very small devices like smartphones
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false, // Disable dots on small screens if needed
            },
          },
        ],
      };
      

    return (
        <div> 
            
            <div className="px-10 py-16">
                <Slider {...settings}>
                    <div className="slide-item">
                    <div className="slidersectionis  p-[20px] md:p-[25px] lg:p-[30px] xl:p-[35px] 2xl:p-[40px]">
                        <div className="flex-1 sm:flex-0">
                        <img className="w-[20%]" src={slidesectionimages} alt="" />
                        <h1 className="text-[#fff] manrope text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] font-bold leading-[100%] mt-[14px] sm:mt-[16px] md:mt-[18px] lg:mt-[20px] xl:mt-[22px] 2xl:mt-[24px]">Capture</h1>
                        <p className="manrope text-[10px] sm:text-[12px] md:text-[14px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] font-medium leading-[160%] text-[#ffffff99] mt-[11px] sm:mt-[12px] md:mt-[13px] lg:mt-[14px] xl:mt-[15px] 2xl:mt-[16px]">Filmed in 4k (25-60 FPS) including <br/> hair & makeup requests</p>
                        <Button className="text-[#fff] manrope text-[12px] sm:text-[14.5px] md:text-[17px] lg:text-[20px] 2xl:text-[20px] rounded-[4px] md:rounded-[6px] xl:rounded-[8px] borderimagesliner py-[7.5px] sm:py-[9px] md:py-[11px] lg:py-[12px] xl:py-[14px] 2xl:py-[16px] px-[15px] sm:px-[18px] md:px-[22px] lg:px-[24px] xl:px-[28px] 2xl:px-[32px] mt-[18px] sm:mt-[21px] md:mt-[25px] lg:mt-[30px] xl:mt-[36px] 2xl:mt-[42px]" text1="Explore More"/>
                        </div>
                        <div className="justify-center flex relative flex-1 sm:flex-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[99.989px] md:max-w-[53%] lg:max-w-[61%] xl:max-w-[70%] 2xl:max-w-[100%] h-auto" viewBox="0 0 128 176" fill="none">
                        <g filter="url(#filter0_bd_2259_718)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M95.7765 14.0313L14.3626 93.8436C13.1873 94.9955 14.1072 96.8392 15.8569 96.8392L50.8023 96.8392L31.5429 159.741C30.6891 161.588 33.3602 163.105 34.8874 161.641L113.283 86.5126C114.48 85.3656 113.564 83.5019 111.804 83.5019L77.0769 74.8221L99.1312 15.928C100.008 14.0697 97.2996 12.5382 95.7765 14.0313Z" fill="url(#paint0_linear_2259_718)" fill-opacity="0.38" shape-rendering="crispEdges"/>
                            <path d="M50.8023 96.3654H51.443L51.2554 96.978L31.996 159.88L31.9866 159.911L31.973 159.94C31.8138 160.285 31.8255 160.589 31.9295 160.844C32.0373 161.11 32.2575 161.351 32.5563 161.52C33.1593 161.863 33.973 161.861 34.5595 161.299L112.955 86.1705C113.397 85.7467 113.44 85.2191 113.227 84.786C113.01 84.3441 112.509 83.9757 111.804 83.9757H111.745L111.689 83.9616L76.962 75.2818L76.447 75.1531L76.6332 74.6559L98.6874 15.7618L98.6943 15.7435L98.7027 15.7258C98.8665 15.3786 98.8558 15.0721 98.752 14.8155C98.644 14.5488 98.4222 14.3058 98.1207 14.1354C97.5122 13.7913 96.6926 13.7969 96.1083 14.3697L95.7765 14.0313L96.1083 14.3697L14.6943 94.182L14.3626 93.8436L14.6943 94.1821C14.2607 94.6069 14.2223 95.1316 14.4369 95.5618C14.6559 96.0009 15.1559 96.3654 15.8569 96.3654L50.8023 96.3654Z" stroke="url(#paint1_linear_2259_718)" stroke-opacity="0.3" stroke-width="0.947761" shape-rendering="crispEdges"/>
                        </g>
        <defs>
            <filter id="filter0_bd_2259_718" x="-30.7088" y="-31.1156" width="189.078" height="237.888" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="22.2724"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2259_718"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="6.65802"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="effect1_backgroundBlur_2259_718" result="effect2_dropShadow_2259_718"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2259_718" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_2259_718" x1="63.8303" y1="13.4292" x2="63.8303" y2="139.473" gradientUnits="userSpaceOnUse">
            <stop stop-color="#666A80"/>
            <stop offset="1" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_2259_718" x1="63.8303" y1="13.4292" x2="63.8303" y2="162.228" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F3F8FF"/>
            <stop offset="0.452769" stop-color="#CAD2DD" stop-opacity="0"/>
            <stop offset="1" stop-color="#F3F8FF"/>
            </linearGradient>
        </defs>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[90.985px] md:max-w-[43%] lg:max-w-[51%] xl:max-w-[60%] 2xl:max-w-[90%] h-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" width="202" height="201" viewBox="0 0 202 201" fill="none">
        <g filter="url(#filter0_f_2257_361)">
            <ellipse cx="101" cy="100.5" rx="96" ry="95.5" fill="url(#paint0_linear_2257_361)" fill-opacity="0.38"/>
            <path d="M195.5 100.5C195.5 152.407 153.198 194.5 101 194.5C48.8017 194.5 6.5 152.407 6.5 100.5C6.5 48.5926 48.8017 6.5 101 6.5C153.198 6.5 195.5 48.5926 195.5 100.5Z" stroke="url(#paint1_linear_2257_361)" stroke-opacity="0.1" stroke-width="3"/>
        </g>
        <defs>
            <filter id="filter0_f_2257_361" x="0" y="0" width="202" height="201" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_2257_361"/>
            </filter>
            <linearGradient id="paint0_linear_2257_361" x1="101" y1="5" x2="101" y2="166.791" gradientUnits="userSpaceOnUse">
            <stop stop-color="#666A80"/>
            <stop offset="1" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_2257_361" x1="101" y1="5" x2="101" y2="196" gradientUnits="userSpaceOnUse">
            <stop stop-color="#8C98AB"/>
            <stop offset="1" stop-color="#282D35" stop-opacity="0.36"/>
            </linearGradient>
        </defs>
                        </svg>
                        </div>
                    </div>
                    </div>
                    <div className="slide-item">
                    <div className="slidersectionis   w-full p-[20px] md:p-[25px] lg:p-[30px] xl:p-[35px] 2xl:p-[40px]">
                        <div className="flex-1 sm:flex-0">
                        <img className="w-[20%]" src={slidesectionimages} alt="" />
                        <h1 className="text-[#fff] manrope text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] font-bold leading-[100%] mt-[14px] sm:mt-[16px] md:mt-[18px] lg:mt-[20px] xl:mt-[22px] 2xl:mt-[24px]">Capture</h1>
                        <p className="manrope text-[10px] sm:text-[12px] md:text-[14px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] font-medium leading-[160%] text-[#ffffff99] mt-[11px] sm:mt-[12px] md:mt-[13px] lg:mt-[14px] xl:mt-[15px] 2xl:mt-[16px]">Filmed in 4k (25-60 FPS) including <br/> hair & makeup requests</p>
                        <Button className="text-[#fff] manrope text-[12px] sm:text-[14.5px] md:text-[17px] lg:text-[20px] 2xl:text-[20px] rounded-[4px] md:rounded-[6px] xl:rounded-[8px] borderimagesliner py-[7.5px] sm:py-[9px] md:py-[11px] lg:py-[12px] xl:py-[14px] 2xl:py-[16px] px-[15px] sm:px-[18px] md:px-[22px] lg:px-[24px] xl:px-[28px] 2xl:px-[32px] mt-[18px] sm:mt-[21px] md:mt-[25px] lg:mt-[30px] xl:mt-[36px] 2xl:mt-[42px]" text1="Explore More"/>
                        </div>
                        <div className="justify-center flex relative flex-1 sm:flex-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[99.989px] md:max-w-[53%] lg:max-w-[61%] xl:max-w-[70%] 2xl:max-w-[100%] h-auto" viewBox="0 0 128 176" fill="none">
        <g filter="url(#filter0_bd_2259_718)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M95.7765 14.0313L14.3626 93.8436C13.1873 94.9955 14.1072 96.8392 15.8569 96.8392L50.8023 96.8392L31.5429 159.741C30.6891 161.588 33.3602 163.105 34.8874 161.641L113.283 86.5126C114.48 85.3656 113.564 83.5019 111.804 83.5019L77.0769 74.8221L99.1312 15.928C100.008 14.0697 97.2996 12.5382 95.7765 14.0313Z" fill="url(#paint0_linear_2259_718)" fill-opacity="0.38" shape-rendering="crispEdges"/>
            <path d="M50.8023 96.3654H51.443L51.2554 96.978L31.996 159.88L31.9866 159.911L31.973 159.94C31.8138 160.285 31.8255 160.589 31.9295 160.844C32.0373 161.11 32.2575 161.351 32.5563 161.52C33.1593 161.863 33.973 161.861 34.5595 161.299L112.955 86.1705C113.397 85.7467 113.44 85.2191 113.227 84.786C113.01 84.3441 112.509 83.9757 111.804 83.9757H111.745L111.689 83.9616L76.962 75.2818L76.447 75.1531L76.6332 74.6559L98.6874 15.7618L98.6943 15.7435L98.7027 15.7258C98.8665 15.3786 98.8558 15.0721 98.752 14.8155C98.644 14.5488 98.4222 14.3058 98.1207 14.1354C97.5122 13.7913 96.6926 13.7969 96.1083 14.3697L95.7765 14.0313L96.1083 14.3697L14.6943 94.182L14.3626 93.8436L14.6943 94.1821C14.2607 94.6069 14.2223 95.1316 14.4369 95.5618C14.6559 96.0009 15.1559 96.3654 15.8569 96.3654L50.8023 96.3654Z" stroke="url(#paint1_linear_2259_718)" stroke-opacity="0.3" stroke-width="0.947761" shape-rendering="crispEdges"/>
        </g>
        <defs>
            <filter id="filter0_bd_2259_718" x="-30.7088" y="-31.1156" width="189.078" height="237.888" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="22.2724"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2259_718"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="6.65802"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="effect1_backgroundBlur_2259_718" result="effect2_dropShadow_2259_718"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2259_718" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_2259_718" x1="63.8303" y1="13.4292" x2="63.8303" y2="139.473" gradientUnits="userSpaceOnUse">
            <stop stop-color="#666A80"/>
            <stop offset="1" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_2259_718" x1="63.8303" y1="13.4292" x2="63.8303" y2="162.228" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F3F8FF"/>
            <stop offset="0.452769" stop-color="#CAD2DD" stop-opacity="0"/>
            <stop offset="1" stop-color="#F3F8FF"/>
            </linearGradient>
        </defs>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[90.985px] md:max-w-[43%] lg:max-w-[51%] xl:max-w-[60%] 2xl:max-w-[90%] h-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" width="202" height="201" viewBox="0 0 202 201" fill="none">
        <g filter="url(#filter0_f_2257_361)">
            <ellipse cx="101" cy="100.5" rx="96" ry="95.5" fill="url(#paint0_linear_2257_361)" fill-opacity="0.38"/>
            <path d="M195.5 100.5C195.5 152.407 153.198 194.5 101 194.5C48.8017 194.5 6.5 152.407 6.5 100.5C6.5 48.5926 48.8017 6.5 101 6.5C153.198 6.5 195.5 48.5926 195.5 100.5Z" stroke="url(#paint1_linear_2257_361)" stroke-opacity="0.1" stroke-width="3"/>
        </g>
        <defs>
            <filter id="filter0_f_2257_361" x="0" y="0" width="202" height="201" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_2257_361"/>
            </filter>
            <linearGradient id="paint0_linear_2257_361" x1="101" y1="5" x2="101" y2="166.791" gradientUnits="userSpaceOnUse">
            <stop stop-color="#666A80"/>
            <stop offset="1" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_2257_361" x1="101" y1="5" x2="101" y2="196" gradientUnits="userSpaceOnUse">
            <stop stop-color="#8C98AB"/>
            <stop offset="1" stop-color="#282D35" stop-opacity="0.36"/>
            </linearGradient>
        </defs>
                        </svg>
                        </div>
                    </div>
                    </div>
                    <div className="slide-item">
                    <div className="slidersectionis  p-[20px] md:p-[25px] lg:p-[30px] xl:p-[35px] 2xl:p-[40px]">
                        <div className="flex-1 sm:flex-0">
                        <img className="w-[20%]" src={slidesectionimages} alt="" />
                        <h1 className="text-[#fff] manrope text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] font-bold leading-[100%] mt-[14px] sm:mt-[16px] md:mt-[18px] lg:mt-[20px] xl:mt-[22px] 2xl:mt-[24px]">Capture</h1>
                        <p className="manrope text-[10px] sm:text-[12px] md:text-[14px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] font-medium leading-[160%] text-[#ffffff99] mt-[11px] sm:mt-[12px] md:mt-[13px] lg:mt-[14px] xl:mt-[15px] 2xl:mt-[16px]">Filmed in 4k (25-60 FPS) including <br/> hair & makeup requests</p>
                        <Button className="text-[#fff] manrope text-[12px] sm:text-[14.5px] md:text-[17px] lg:text-[20px] 2xl:text-[20px] rounded-[4px] md:rounded-[6px] xl:rounded-[8px] borderimagesliner py-[7.5px] sm:py-[9px] md:py-[11px] lg:py-[12px] xl:py-[14px] 2xl:py-[16px] px-[15px] sm:px-[18px] md:px-[22px] lg:px-[24px] xl:px-[28px] 2xl:px-[32px] mt-[18px] sm:mt-[21px] md:mt-[25px] lg:mt-[30px] xl:mt-[36px] 2xl:mt-[42px]" text1="Explore More"/>
                        </div>
                        <div className="justify-center flex relative flex-1 sm:flex-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[99.989px] md:max-w-[53%] lg:max-w-[61%] xl:max-w-[70%] 2xl:max-w-[100%] h-auto" viewBox="0 0 128 176" fill="none">
        <g filter="url(#filter0_bd_2259_718)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M95.7765 14.0313L14.3626 93.8436C13.1873 94.9955 14.1072 96.8392 15.8569 96.8392L50.8023 96.8392L31.5429 159.741C30.6891 161.588 33.3602 163.105 34.8874 161.641L113.283 86.5126C114.48 85.3656 113.564 83.5019 111.804 83.5019L77.0769 74.8221L99.1312 15.928C100.008 14.0697 97.2996 12.5382 95.7765 14.0313Z" fill="url(#paint0_linear_2259_718)" fill-opacity="0.38" shape-rendering="crispEdges"/>
            <path d="M50.8023 96.3654H51.443L51.2554 96.978L31.996 159.88L31.9866 159.911L31.973 159.94C31.8138 160.285 31.8255 160.589 31.9295 160.844C32.0373 161.11 32.2575 161.351 32.5563 161.52C33.1593 161.863 33.973 161.861 34.5595 161.299L112.955 86.1705C113.397 85.7467 113.44 85.2191 113.227 84.786C113.01 84.3441 112.509 83.9757 111.804 83.9757H111.745L111.689 83.9616L76.962 75.2818L76.447 75.1531L76.6332 74.6559L98.6874 15.7618L98.6943 15.7435L98.7027 15.7258C98.8665 15.3786 98.8558 15.0721 98.752 14.8155C98.644 14.5488 98.4222 14.3058 98.1207 14.1354C97.5122 13.7913 96.6926 13.7969 96.1083 14.3697L95.7765 14.0313L96.1083 14.3697L14.6943 94.182L14.3626 93.8436L14.6943 94.1821C14.2607 94.6069 14.2223 95.1316 14.4369 95.5618C14.6559 96.0009 15.1559 96.3654 15.8569 96.3654L50.8023 96.3654Z" stroke="url(#paint1_linear_2259_718)" stroke-opacity="0.3" stroke-width="0.947761" shape-rendering="crispEdges"/>
        </g>
        <defs>
            <filter id="filter0_bd_2259_718" x="-30.7088" y="-31.1156" width="189.078" height="237.888" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="22.2724"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2259_718"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="6.65802"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="effect1_backgroundBlur_2259_718" result="effect2_dropShadow_2259_718"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2259_718" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_2259_718" x1="63.8303" y1="13.4292" x2="63.8303" y2="139.473" gradientUnits="userSpaceOnUse">
            <stop stop-color="#666A80"/>
            <stop offset="1" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_2259_718" x1="63.8303" y1="13.4292" x2="63.8303" y2="162.228" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F3F8FF"/>
            <stop offset="0.452769" stop-color="#CAD2DD" stop-opacity="0"/>
            <stop offset="1" stop-color="#F3F8FF"/>
            </linearGradient>
        </defs>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[90.985px] md:max-w-[43%] lg:max-w-[51%] xl:max-w-[60%] 2xl:max-w-[90%] h-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" width="202" height="201" viewBox="0 0 202 201" fill="none">
        <g filter="url(#filter0_f_2257_361)">
            <ellipse cx="101" cy="100.5" rx="96" ry="95.5" fill="url(#paint0_linear_2257_361)" fill-opacity="0.38"/>
            <path d="M195.5 100.5C195.5 152.407 153.198 194.5 101 194.5C48.8017 194.5 6.5 152.407 6.5 100.5C6.5 48.5926 48.8017 6.5 101 6.5C153.198 6.5 195.5 48.5926 195.5 100.5Z" stroke="url(#paint1_linear_2257_361)" stroke-opacity="0.1" stroke-width="3"/>
        </g>
        <defs>
            <filter id="filter0_f_2257_361" x="0" y="0" width="202" height="201" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_2257_361"/>
            </filter>
            <linearGradient id="paint0_linear_2257_361" x1="101" y1="5" x2="101" y2="166.791" gradientUnits="userSpaceOnUse">
            <stop stop-color="#666A80"/>
            <stop offset="1" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_2257_361" x1="101" y1="5" x2="101" y2="196" gradientUnits="userSpaceOnUse">
            <stop stop-color="#8C98AB"/>
            <stop offset="1" stop-color="#282D35" stop-opacity="0.36"/>
            </linearGradient>
        </defs>
                        </svg>
                        </div>
                    </div>
                    </div>
                    <div className="slide-item">
                    <div className="slidersectionis  w-full p-[20px] md:p-[25px] lg:p-[30px] xl:p-[35px] 2xl:p-[40px]">
                        <div className="flex-1 sm:flex-0">
                        <img className="w-[20%]" src={slidesectionimages} alt="" />
                        <h1 className="text-[#fff] manrope text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] font-bold leading-[100%] mt-[14px] sm:mt-[16px] md:mt-[18px] lg:mt-[20px] xl:mt-[22px] 2xl:mt-[24px]">Capture</h1>
                        <p className="manrope text-[10px] sm:text-[12px] md:text-[14px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] font-medium leading-[160%] text-[#ffffff99] mt-[11px] sm:mt-[12px] md:mt-[13px] lg:mt-[14px] xl:mt-[15px] 2xl:mt-[16px]">Filmed in 4k (25-60 FPS) including <br/> hair & makeup requests</p>
                        <Button className="text-[#fff] manrope text-[12px] sm:text-[14.5px] md:text-[17px] lg:text-[20px] 2xl:text-[20px] rounded-[4px] md:rounded-[6px] xl:rounded-[8px] borderimagesliner py-[7.5px] sm:py-[9px] md:py-[11px] lg:py-[12px] xl:py-[14px] 2xl:py-[16px] px-[15px] sm:px-[18px] md:px-[22px] lg:px-[24px] xl:px-[28px] 2xl:px-[32px] mt-[18px] sm:mt-[21px] md:mt-[25px] lg:mt-[30px] xl:mt-[36px] 2xl:mt-[42px]" text1="Explore More"/>
                        </div>
                        <div className="justify-center flex relative flex-1 sm:flex-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[99.989px] md:max-w-[53%] lg:max-w-[61%] xl:max-w-[70%] 2xl:max-w-[100%] h-auto" viewBox="0 0 128 176" fill="none">
        <g filter="url(#filter0_bd_2259_718)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M95.7765 14.0313L14.3626 93.8436C13.1873 94.9955 14.1072 96.8392 15.8569 96.8392L50.8023 96.8392L31.5429 159.741C30.6891 161.588 33.3602 163.105 34.8874 161.641L113.283 86.5126C114.48 85.3656 113.564 83.5019 111.804 83.5019L77.0769 74.8221L99.1312 15.928C100.008 14.0697 97.2996 12.5382 95.7765 14.0313Z" fill="url(#paint0_linear_2259_718)" fill-opacity="0.38" shape-rendering="crispEdges"/>
            <path d="M50.8023 96.3654H51.443L51.2554 96.978L31.996 159.88L31.9866 159.911L31.973 159.94C31.8138 160.285 31.8255 160.589 31.9295 160.844C32.0373 161.11 32.2575 161.351 32.5563 161.52C33.1593 161.863 33.973 161.861 34.5595 161.299L112.955 86.1705C113.397 85.7467 113.44 85.2191 113.227 84.786C113.01 84.3441 112.509 83.9757 111.804 83.9757H111.745L111.689 83.9616L76.962 75.2818L76.447 75.1531L76.6332 74.6559L98.6874 15.7618L98.6943 15.7435L98.7027 15.7258C98.8665 15.3786 98.8558 15.0721 98.752 14.8155C98.644 14.5488 98.4222 14.3058 98.1207 14.1354C97.5122 13.7913 96.6926 13.7969 96.1083 14.3697L95.7765 14.0313L96.1083 14.3697L14.6943 94.182L14.3626 93.8436L14.6943 94.1821C14.2607 94.6069 14.2223 95.1316 14.4369 95.5618C14.6559 96.0009 15.1559 96.3654 15.8569 96.3654L50.8023 96.3654Z" stroke="url(#paint1_linear_2259_718)" stroke-opacity="0.3" stroke-width="0.947761" shape-rendering="crispEdges"/>
        </g>
        <defs>
            <filter id="filter0_bd_2259_718" x="-30.7088" y="-31.1156" width="189.078" height="237.888" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="22.2724"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2259_718"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="6.65802"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="effect1_backgroundBlur_2259_718" result="effect2_dropShadow_2259_718"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2259_718" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_2259_718" x1="63.8303" y1="13.4292" x2="63.8303" y2="139.473" gradientUnits="userSpaceOnUse">
            <stop stop-color="#666A80"/>
            <stop offset="1" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_2259_718" x1="63.8303" y1="13.4292" x2="63.8303" y2="162.228" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F3F8FF"/>
            <stop offset="0.452769" stop-color="#CAD2DD" stop-opacity="0"/>
            <stop offset="1" stop-color="#F3F8FF"/>
            </linearGradient>
        </defs>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[90.985px] md:max-w-[43%] lg:max-w-[51%] xl:max-w-[60%] 2xl:max-w-[90%] h-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" width="202" height="201" viewBox="0 0 202 201" fill="none">
        <g filter="url(#filter0_f_2257_361)">
            <ellipse cx="101" cy="100.5" rx="96" ry="95.5" fill="url(#paint0_linear_2257_361)" fill-opacity="0.38"/>
            <path d="M195.5 100.5C195.5 152.407 153.198 194.5 101 194.5C48.8017 194.5 6.5 152.407 6.5 100.5C6.5 48.5926 48.8017 6.5 101 6.5C153.198 6.5 195.5 48.5926 195.5 100.5Z" stroke="url(#paint1_linear_2257_361)" stroke-opacity="0.1" stroke-width="3"/>
        </g>
        <defs>
            <filter id="filter0_f_2257_361" x="0" y="0" width="202" height="201" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_2257_361"/>
            </filter>
            <linearGradient id="paint0_linear_2257_361" x1="101" y1="5" x2="101" y2="166.791" gradientUnits="userSpaceOnUse">
            <stop stop-color="#666A80"/>
            <stop offset="1" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_2257_361" x1="101" y1="5" x2="101" y2="196" gradientUnits="userSpaceOnUse">
            <stop stop-color="#8C98AB"/>
            <stop offset="1" stop-color="#282D35" stop-opacity="0.36"/>
            </linearGradient>
        </defs>
                        </svg>
                        </div>
                    </div>
                    </div>
                    <div className="slide-item">
                    <div className="slidersectionis  w-full p-[20px] md:p-[25px] lg:p-[30px] xl:p-[35px] 2xl:p-[40px]">
                        <div className="flex-1 sm:flex-0">
                        <img className="w-[20%]" src={slidesectionimages} alt="" />
                        <h1 className="text-[#fff] manrope text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] font-bold leading-[100%] mt-[14px] sm:mt-[16px] md:mt-[18px] lg:mt-[20px] xl:mt-[22px] 2xl:mt-[24px]">Capture</h1>
                        <p className="manrope text-[10px] sm:text-[12px] md:text-[14px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] font-medium leading-[160%] text-[#ffffff99] mt-[11px] sm:mt-[12px] md:mt-[13px] lg:mt-[14px] xl:mt-[15px] 2xl:mt-[16px]">Filmed in 4k (25-60 FPS) including <br/> hair & makeup requests</p>
                        <Button className="text-[#fff] manrope text-[12px] sm:text-[14.5px] md:text-[17px] lg:text-[20px] 2xl:text-[20px] rounded-[4px] md:rounded-[6px] xl:rounded-[8px] borderimagesliner py-[7.5px] sm:py-[9px] md:py-[11px] lg:py-[12px] xl:py-[14px] 2xl:py-[16px] px-[15px] sm:px-[18px] md:px-[22px] lg:px-[24px] xl:px-[28px] 2xl:px-[32px] mt-[18px] sm:mt-[21px] md:mt-[25px] lg:mt-[30px] xl:mt-[36px] 2xl:mt-[42px]" text1="Explore More"/>
                        </div>
                        <div className="justify-center flex relative flex-1 sm:flex-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[99.989px] md:max-w-[53%] lg:max-w-[61%] xl:max-w-[70%] 2xl:max-w-[100%] h-auto" viewBox="0 0 128 176" fill="none">
        <g filter="url(#filter0_bd_2259_718)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M95.7765 14.0313L14.3626 93.8436C13.1873 94.9955 14.1072 96.8392 15.8569 96.8392L50.8023 96.8392L31.5429 159.741C30.6891 161.588 33.3602 163.105 34.8874 161.641L113.283 86.5126C114.48 85.3656 113.564 83.5019 111.804 83.5019L77.0769 74.8221L99.1312 15.928C100.008 14.0697 97.2996 12.5382 95.7765 14.0313Z" fill="url(#paint0_linear_2259_718)" fill-opacity="0.38" shape-rendering="crispEdges"/>
            <path d="M50.8023 96.3654H51.443L51.2554 96.978L31.996 159.88L31.9866 159.911L31.973 159.94C31.8138 160.285 31.8255 160.589 31.9295 160.844C32.0373 161.11 32.2575 161.351 32.5563 161.52C33.1593 161.863 33.973 161.861 34.5595 161.299L112.955 86.1705C113.397 85.7467 113.44 85.2191 113.227 84.786C113.01 84.3441 112.509 83.9757 111.804 83.9757H111.745L111.689 83.9616L76.962 75.2818L76.447 75.1531L76.6332 74.6559L98.6874 15.7618L98.6943 15.7435L98.7027 15.7258C98.8665 15.3786 98.8558 15.0721 98.752 14.8155C98.644 14.5488 98.4222 14.3058 98.1207 14.1354C97.5122 13.7913 96.6926 13.7969 96.1083 14.3697L95.7765 14.0313L96.1083 14.3697L14.6943 94.182L14.3626 93.8436L14.6943 94.1821C14.2607 94.6069 14.2223 95.1316 14.4369 95.5618C14.6559 96.0009 15.1559 96.3654 15.8569 96.3654L50.8023 96.3654Z" stroke="url(#paint1_linear_2259_718)" stroke-opacity="0.3" stroke-width="0.947761" shape-rendering="crispEdges"/>
        </g>
        <defs>
            <filter id="filter0_bd_2259_718" x="-30.7088" y="-31.1156" width="189.078" height="237.888" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="22.2724"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2259_718"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="6.65802"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="effect1_backgroundBlur_2259_718" result="effect2_dropShadow_2259_718"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2259_718" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_2259_718" x1="63.8303" y1="13.4292" x2="63.8303" y2="139.473" gradientUnits="userSpaceOnUse">
            <stop stop-color="#666A80"/>
            <stop offset="1" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_2259_718" x1="63.8303" y1="13.4292" x2="63.8303" y2="162.228" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F3F8FF"/>
            <stop offset="0.452769" stop-color="#CAD2DD" stop-opacity="0"/>
            <stop offset="1" stop-color="#F3F8FF"/>
            </linearGradient>
        </defs>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[90.985px] md:max-w-[43%] lg:max-w-[51%] xl:max-w-[60%] 2xl:max-w-[90%] h-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" width="202" height="201" viewBox="0 0 202 201" fill="none">
        <g filter="url(#filter0_f_2257_361)">
            <ellipse cx="101" cy="100.5" rx="96" ry="95.5" fill="url(#paint0_linear_2257_361)" fill-opacity="0.38"/>
            <path d="M195.5 100.5C195.5 152.407 153.198 194.5 101 194.5C48.8017 194.5 6.5 152.407 6.5 100.5C6.5 48.5926 48.8017 6.5 101 6.5C153.198 6.5 195.5 48.5926 195.5 100.5Z" stroke="url(#paint1_linear_2257_361)" stroke-opacity="0.1" stroke-width="3"/>
        </g>
        <defs>
            <filter id="filter0_f_2257_361" x="0" y="0" width="202" height="201" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_2257_361"/>
            </filter>
            <linearGradient id="paint0_linear_2257_361" x1="101" y1="5" x2="101" y2="166.791" gradientUnits="userSpaceOnUse">
            <stop stop-color="#666A80"/>
            <stop offset="1" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_2257_361" x1="101" y1="5" x2="101" y2="196" gradientUnits="userSpaceOnUse">
            <stop stop-color="#8C98AB"/>
            <stop offset="1" stop-color="#282D35" stop-opacity="0.36"/>
            </linearGradient>
        </defs>
                        </svg>
                        </div>
                    </div>
                    </div>
                </Slider>
            </div>  
        </div>
    );
};

export default Sliderimages;

