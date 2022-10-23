import React from "react";
import { NextPage } from "next";

import { NatureSlider } from "../components/common";
import { Contact, FAQs, Footer, Hero, Team } from "../components";

const Home: NextPage = () => {
    return (
        <>
            <Hero />
            <Team />
            <Contact />
            <FAQs />
            <NatureSlider />
            <Footer />
        </>
    );
};

export default Home;
