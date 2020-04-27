import React from "react";
import { Block, Background } from "./Block.style";
import UrlCustomBlock from "./UrlCustomBlock";
import ColorPickerBlock from "./ColorPickerBlock";
import { useState } from "react";
import BackgroundCover from "./BackgroundCover";

const startHue = 170;

const generateColors = () => {
    const colors = [];
    for (let h = startHue; h < startHue + 360; h += 10) {
        colors.push({ h: h % 360, s: 60, l: 50 });
    }
    for (let l = 0; l <= 100; l += 5) {
        colors.push({ h: 0, s: 0, l });
    }
    return colors.map((hsl) => {
        return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
    });
};

const colors = generateColors();

const Backgrounds = () => {
    const [backgroundSelected, setBackgroundSelected] = useState(false);

    const handleBackgroundSelect = (backgroundStyle) => {
        setBackgroundSelected(backgroundStyle);
    };

    const handleExit = () => {
        setBackgroundSelected(false);
    };

    return (
        <>
            <div className="row">
                <UrlCustomBlock onSelect={handleBackgroundSelect} />
                <ColorPickerBlock onSelect={handleBackgroundSelect} />
                {colors.map((hsl, key) => {
                    return (
                        <Block key={key}>
                            <Background
                                style={{ background: hsl }}
                                onClick={() =>
                                    handleBackgroundSelect(
                                        `background: ${hsl};`
                                    )
                                }
                            />
                        </Block>
                    );
                })}
            </div>
            {backgroundSelected ? (
                <BackgroundCover
                    backgroundStyle={backgroundSelected}
                    onExit={handleExit}
                />
            ) : null}
        </>
    );
};

export default Backgrounds;
