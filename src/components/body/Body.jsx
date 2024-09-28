import DropdownSection from "./DropdownSection";
import FeatureSection from "./FeatureSection";
import Fleamesection from "./Fleamesection";
import MusicSection from "./MusicSection";
import Sliderimages from "./Sliderimages";
import TextAnimation from './ScrollTextAnimation ';

const Body = () => {
    return (
        <div className="overflow-hidden">
            <TextAnimation animationClass="fade-in">
                <FeatureSection/>
            </TextAnimation>
            <TextAnimation animationClass="fade-in">
                <Sliderimages/>
            </TextAnimation>
            <TextAnimation animationClass="fade-in">
            <Fleamesection/>
            </TextAnimation>
            <TextAnimation animationClass="fade-in">
                <DropdownSection/>
            </TextAnimation>
            <TextAnimation animationClass="fade-in">
            <MusicSection/>
            </TextAnimation>
        </div>
    );
};

export default Body;