import React from "react";
import { PicturesList } from "../components/picturesLists";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const MyPicturesLikedPage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout backButton={true} backgroundStyle={"accent1"} PageTitle={"Liked pictures"}>
            <PicturesList user={''} liked={true}/>
        </BaseLayout>
    )
}

export default MyPicturesLikedPage;