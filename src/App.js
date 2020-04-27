import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";
import Backgrounds from "./Backgrounds";

const GlobalStyle = createGlobalStyle`
 
`;

function App() {
    return (
        <Container className="container">
            <GlobalStyle />
            <Header />
            <Backgrounds />
        </Container>
    );
}

const Container = styled.div`
    padding: 100px 0;
`;

export default App;
