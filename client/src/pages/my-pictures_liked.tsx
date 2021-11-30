import React from "react";
import { PicturesList } from "../components/picturesLists";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const MyPicturesLikedPage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout backgroundStyle={"accent1"} PageTitle={"Liked pictures"}>
            {/* <PicturesList/> */}
        </BaseLayout>
    )
}

export default MyPicturesLikedPage;