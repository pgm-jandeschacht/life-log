import React from "react";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const MyPicturesPage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout>
           <p>This is the MY PICTURES page!</p>
        </BaseLayout>
    )
}

export default MyPicturesPage;