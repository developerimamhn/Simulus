import { Link } from 'react-router-dom';
import logoimages from './navbarimages/Group 48095561.svg';
import logoimagesmeni from './navbarimages/Group 48095562.svg';
import Button from './../../Button';
import ManuVactor from '../vectorone/ManuVactor';
import { useEffect, useState } from 'react';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";
import Stokeone from './stoke/Stokeone';
import Stoketow from './stoke/Stoketow';
import Stokethree from './stoke/Stokethree';

const Navbar = () => {
    const [toggle, setToggle] = useState(true);

    const [bgColor, setBgColor] = useState('bg-transparent'); // Initial transparent background
    const [isScrolled, setIsScrolled] = useState(false); // Track scrolling state

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setBgColor('bg-[#040712]'); // Change background after 50px scroll
            setIsScrolled(true); // Set scrolled state to true
        } else {
            setBgColor('bg-transparent'); // Reset to transparent if scrolled less than 50px
            setIsScrolled(false); // Set scrolled state to false
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); // Clean up on unmount
        };
    }, []);

    
    return (
        <header className="relative ">
             <div className="absolute sm:top-0 left-[-50px] sm:left-0 pointer-events-none">
                <Stokeone/>
            </div>
            <div className="absolute top-[150px] sm:top-[200px] left-[-50px] sm:left-0 pointer-events-none">
                <Stoketow/>
            </div>
            <div className="absolute top-[100px] sm:top-[100px] right-0 pointer-events-none">
            <Stokethree/>
            </div>
            <div className="">
            <nav className={`${bgColor} ${isScrolled ? 'animate-fade-in' : 'animate-fade-out'} fixed top-0 left-0 right-0 z-50 py-[18px] sm:py-[18px] md:py-[20px] lg:py-[22px] xl:py-[25px] 2xl:py-[28px] transition-all duration-500 ease-in-out`}>
                    <div className='container mx-auto flex items-center flex-row justify-between sm:gap-[25px] md:gap-[30px] lg:gap-[40px] xl:gap-[50px] 2xl:gap-[62px] '>
                        <div className="cursor-pointer">
                            <img className="sm:w-[188px] md:w-[198px] lg:w-[208px] xl:w-[218px] 2xl:w-[228px] hidden sm:block" src={logoimages} alt="logoimages" />
                            <img className='block sm:hidden w-[44px]' src={logoimagesmeni} alt="" />
                        </div>
                        {
                        toggle? 
                        <LiaBarsSolid onClick={()=>setToggle(!toggle)} className='text-white text-[26px] sm:hidden'/>
                        :
                        <VscChromeClose onClick={()=>setToggle(!toggle)} className='text-white text-[26px] sm:hidden'/>
                        }
                        <div className={`flex justify-start sm:justify-between flex-col sm:flex-row h-screen sm:h-full w-[70%] sm:w-full px-2 sm:px-0 absolute sm:top-0 top-[100%] sm:right-0  sm:relative duration-1000 z-50 bg-[#040712] sm:bg-transparent sm:opacity-100
                            ${toggle ? 'right-[100%]' : 'right-[10]'}
                            ${toggle ? 'opacity-0' : 'opacity-100'}
                            `}>
                            <ul className=' flex flex-col sm:flex-row items-start sm:items-center gap-[18px] sm:gap-[10px] md:gap-[20px] lg:gap-[40px] xl:gap-[50px] 2xl:gap-[60px]'>
                                <Link className='manubar-con flex justify-start items-center gap-[13px] sm:gap-[14px] md:gap-[15px] lg:gap-[16px] xl:gap-[17px]' to='/Products'>Products<ManuVactor/></Link>
                                <Link className='manubar-con' to='/Pricing'>Pricing</Link>
                                <Link className='manubar-con flex justify-start items-center gap-[12px] sm:gap-[13px] md:gap-[13px] lg:gap-[16px] xl:gap-[17px]' to='/Technology'>Technology<ManuVactor/></Link>
                                <Link className='manubar-con' to='/Company'>Company</Link>
                            </ul>
                            <div className='text-[#fff] sm:flex-row flex-col flex justify-start items-start sm:items-center gap-[24px] sm:gap-[28px] md:gap-[33px] lg:gap-[40px] xl:gap-[44px] 2xl:gap-[40px] mt-[18px] sm:mt-0'>
                                <Link className='manubar-con' to='/Contact'>Contact</Link>
                                <Button text1="Get Started" className="text-[#fff] btnone w-full sm:w-auto mt-2 sm:mt-0 hover:bg-[#053cf1] transition-all duration-300"/>
                            </div>
                        </div>
                    </div>
            </nav>
            </div>
           
        </header>
    );
};

export default Navbar;