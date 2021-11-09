import React from "react";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const HelpPage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout PageTitle={"Help"}>
            <p>This is the HELP page!</p>
        </BaseLayout>
    )
}

export default HelpPage;