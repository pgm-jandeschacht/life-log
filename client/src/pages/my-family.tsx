import React from "react";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const MyFamilyPage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout>
           <p>This is the MY FAMILY page!</p>
        </BaseLayout>
    )
}

export default MyFamilyPage;