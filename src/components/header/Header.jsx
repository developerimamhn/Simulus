import HeroArea from "./HeroArea";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className="overflow-x-hidden">
            <Navbar/>
            <HeroArea/>
        </div>
    );
};

export default Header;