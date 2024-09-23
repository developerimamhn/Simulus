import DropdownSection from "./DropdownSection";
import FeatureSection from "./FeatureSection";
import Fleamesection from "./Fleamesection";
import MusicSection from "./MusicSection";

const Body = () => {
    return (
        <div className="overflow-hidden">
            <FeatureSection/>
            <Fleamesection/>
            <DropdownSection/>
            <MusicSection/>
        </div>
    );
};

export default Body;