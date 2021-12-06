import React from "react";
import { AboutMe } from "../components/about-me";
import Ipage from '../interfaces/page';
import { BaseLayout } from '../layouts';

const AboutMePage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout backgroundStyle={"accent4"} PageTitle={`About me`} >
           <AboutMe />
        </BaseLayout>
    )
}

export default AboutMePage;