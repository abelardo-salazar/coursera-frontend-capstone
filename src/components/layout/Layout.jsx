import React from "react";
import { Header } from "./Header/Header";
import { Nav } from "./Nav/Nav";
import { Main } from "./Main";
import { Footer } from "./Footer/Footer";

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Nav />
            <Main>{children}</Main>
            <Footer />
        </>
    );
};
