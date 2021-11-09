import React from "react";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const AboutMePage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout>
           <p>This is the ABOUT ME page!</p>
        </BaseLayout>
    )
}

export default AboutMePage;