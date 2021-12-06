import React from "react";
import { PicturesListRecent } from "../components/picturesLists";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const MyPicturesRecentPage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout backButton={true} backgroundStyle={"accent1"} PageTitle={"Recent pictures"}>
            <PicturesListRecent/>
        </BaseLayout>
    )
}

export default MyPicturesRecentPage;