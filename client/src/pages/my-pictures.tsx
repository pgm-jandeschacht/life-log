import React from "react";
import { PicturesQuickNav, PicturesNames } from "../components/pictures";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const MyPicturesPage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout backgroundStyle={"accent1"} PageTitle={"My pictures"}>
           <PicturesQuickNav/>

           <PicturesNames />
        </BaseLayout>
    )
}

export default MyPicturesPage;