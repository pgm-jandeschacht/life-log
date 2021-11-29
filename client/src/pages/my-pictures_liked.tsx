import React from "react";
import { Pictures } from "../components/picturesLists";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const MyPicturesLikedPage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout backgroundStyle={"accent1"} PageTitle={"Liked pictures"}>
            <Pictures/>
        </BaseLayout>
    )
}

export default MyPicturesLikedPage;