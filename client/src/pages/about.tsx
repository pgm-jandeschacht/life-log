import React from "react";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const AboutPage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout PageTitle={"About"}>
           <p>This is the ABOUT page!</p>
        </BaseLayout>
    )}

export default AboutPage;