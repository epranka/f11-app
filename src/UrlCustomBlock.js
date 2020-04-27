import React, { useState } from "react";
import { Block, Background } from "./Block.style";
import styled from "styled-components";

const defaultImageUrl = "/default-image.jpeg";

const UrlCustomBlock = ({ onSelect }) => {
    const [backgroundUrl, setBackgroundUrl] = useState(defaultImageUrl);

    const style = {};

    if (backgroundUrl) {
        style["backgroundImage"] = `url(${backgroundUrl})`;
    }

    const handleImageUrlChange = (e) => {
        setBackgroundUrl(e.target.value || defaultImageUrl);
    };

    const handleClick = () => {
        onSelect(`
        background-image: url(${backgroundUrl});
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        `);
    };

    return (
        <CustomBlock>
            <Group>
                <Input
                    type="text"
                    placeholder="Put image url..."
                    onChange={handleImageUrlChange}
                />
            </Group>
            <Background style={style} onClick={handleClick} />
        </CustomBlock>
    );
};

const Group = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
`;

const CustomBlock = styled(Block).attrs({
    className: "col-12 col-md-4 col-lg-3",
})``;

const Input = styled.input`
    display: block;
    width: 75%;
    z-index: 2;
    border: 1px solid #d6d6d6;
    height: 40px;
    outline: none;
    padding: 5px 10px;
    font-size: 0.8rem;
    margin-bottom: 15px;
`;

export default UrlCustomBlock;
