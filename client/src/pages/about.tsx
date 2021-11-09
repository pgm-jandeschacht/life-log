import React from "react";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const AboutPage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout>
           <p>This is the ABOUT page!</p>
        </BaseLayout>
    )}

export default AboutPage;