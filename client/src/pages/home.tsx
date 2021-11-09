import React from "react";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const HomePage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout>
            <p>This is the HOME page!</p>
        </BaseLayout>
    )
}

export default HomePage;