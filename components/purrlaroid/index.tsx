import PurrlaroidRoot from "./PurrlaroidRoot";
import PurrlaroidTitle from "./PurrlaroidTitle";
import {StoryFn} from "@storybook/react";

const Purrlaroid: StoryFn = ({catImage, catName}) => (
    <PurrlaroidRoot catImage={catImage} isAnimated>
        <PurrlaroidTitle catName={catName}/>
    </PurrlaroidRoot>
);

export default Purrlaroid;