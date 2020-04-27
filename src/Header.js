import React from "react";
import styled from "styled-components";

const Header = () => {
    return (
        <>
            <SocialsStyled>
                <div>
                    <a
                        className="twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com/epranka"
                    >
                        <img src="/twitter.png" alt="twitter logo" /> epranka
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/epranka/f11-app"
                    >
                        github
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://linkedin.com/in/epranka"
                    >
                        linkedin
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://dev.to/epranka"
                    >
                        dev.to
                    </a>
                </div>
            </SocialsStyled>
            <HeaderStyled>
                <H1>Select the background and make it full screen</H1>
                <ScreenImage>
                    <img src="/screen.png" alt="background app" />
                </ScreenImage>
            </HeaderStyled>
        </>
    );
};

const HeaderStyled = styled.div`
    display: flex;
    flex-direction: column;
    background: black;
    align-items: center;
    margin-bottom: 20px;
    padding: 50px 20px;

    @media screen and (min-width: 576px) {
        padding: 100px 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 100px 50px;
    }

    @media screen and (min-width: 1200px) {
        padding: 100px 100px;
    }
`;

const ScreenImage = styled.div`
    @media screen and (min-width: 576px) {
        order: 2;
    }

    img {
        width: 100px;
        height: auto;
        margin-bottom: 50px;

        @media screen and (min-width: 576px) {
            margin: 0;
            width: 150px;
        }

        @media screen and (min-width: 992px) {
            width: 300px;
        }
    }
`;

const H1 = styled.h1`
    color: white;
    display: block;
    max-width: 700px;
    order: 1;

    font-size: 25px;
    text-align: center;

    @media screen and (min-width: 576px) {
        font-size: 30px;
        padding-right: 50px;
        text-align: left;
    }

    @media screen and (min-width: 992px) {
        font-size: 40px;
        padding-right: 100px;
    }
`;

const SocialsStyled = styled.div`
    padding: 20px 20px;
    background: black;

    @media screen and (min-width: 576px) {
        padding: 15px 50px;
    }

    > div {
        display: flex;
        justify-content: space-between;

        @media screen and (min-width: 768px) {
            max-width: 300px;
        }
    }

    a {
        color: white;
    }

    .twitter {
        img {
            width: 15px;
            height: auto;
            margin-right: 4px;
        }
    }
`;

export default Header;
