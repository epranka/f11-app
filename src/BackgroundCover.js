import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import { useKey } from "react-use";

const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
`;

const BackgroundCover = ({ backgroundStyle, onExit }) => {
    const [showHint, setShowHint] = useState(true);

    const handleHintClick = () => {
        setShowHint(false);
    };

    const handleEscapePress = () => {
        onExit();
    };

    useKey("Escape", handleEscapePress);

    return (
        <BackgroundCoverStyled backgroundStyle={backgroundStyle}>
            <GlobalStyle />
            <CloseButton onClick={onExit}>&times;</CloseButton>
            {showHint ? (
                <Hint onClick={handleHintClick}>
                    <ul>
                        <li>
                            To exit, press ESC button or move the mouse pointer
                            to right top corner of the screen
                        </li>
                        <li>Press F11 to toggle fullscreen mode</li>
                        <li>To close this box, click on it</li>
                    </ul>
                </Hint>
            ) : null}
        </BackgroundCoverStyled>
    );
};

const BackgroundCoverStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;

    ${(props) => props.backgroundStyle}
`;

const Hint = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 400px;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 30px 30px 30px 60px;
    cursor: pointer;
    border: 1px solid white;

    ul {
        margin: 0;
        padding: 0;
    }
`;

const CloseButton = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    background: rgba(0, 0, 0, 0.6);
    top: 0;
    right: 0;
    font-size: 100px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    opacity: 0;
    transition: opacity 0.25s ease;

    &:hover {
        opacity: 1;
    }
`;

export default BackgroundCover;
