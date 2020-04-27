import React, { useState } from "react";
import { Block, Background } from "./Block.style";
import styled from "styled-components";
import SketchPicker from "react-color";

const ColorPickerBlock = ({ onSelect }) => {
    const [color, setColor] = useState("#f33821");
    const [showColorPicker, setShowColorPicker] = useState(false);

    const style = {};
    if (color) {
        style["background"] = color;
    }

    const handleCustomColorClick = (e) => {
        setShowColorPicker(true);
    };

    const handleConfirmColor = () => {
        setShowColorPicker(false);
    };

    const handleColorPick = (color) => {
        setColor(color.hex);
    };

    const handleClick = () => {
        onSelect(`background: ${color};`);
    };

    return (
        <CustomBlock>
            <Group>
                {!showColorPicker ? (
                    <Button onClick={handleCustomColorClick}>
                        Select custom color
                    </Button>
                ) : null}
                {showColorPicker ? (
                    <ColorPickerContainer>
                        <SketchPicker
                            color={color}
                            onChange={handleColorPick}
                        />
                        <ConfirmButton onClick={handleConfirmColor}>
                            Select
                        </ConfirmButton>
                    </ColorPickerContainer>
                ) : null}
                <Background style={style} onClick={handleClick} />
            </Group>
        </CustomBlock>
    );
};

const Group = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
`;

const ColorPickerContainer = styled.div`
    position: absolute;
    top: -50px;
    z-index: 99;
`;

const Button = styled.button`
    display: block;
    border: 0;
    background: black;
    color: white;
    padding: 10px 20px;
    font-size: 0.8rem;
    z-index: 2;
`;

const ConfirmButton = styled(Button)`
    margin-top: 5px;
    width: 100%;
`;

const CustomBlock = styled(Block).attrs({
    className: "col-12 col-md-4 col-lg-3",
})``;

export default ColorPickerBlock;
