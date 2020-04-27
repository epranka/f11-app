import styled from "styled-components";

export const Block = styled.div.attrs({
    className: "col-6 col-md-4 col-lg-3",
})`
    position: relative;
    display: flex;
    align-items: center;

    &:after {
        content: "";
        display: block;
        padding-top: 100%;
    }
`;

export const Background = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    cursor: pointer;
    border: 1px solid #e0e0e0;

    background-size: cover;
    background-position: center center;
`;
