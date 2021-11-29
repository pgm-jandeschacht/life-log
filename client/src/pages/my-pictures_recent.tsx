import React from "react";
import { Pictures } from "../components/picturesLists";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const MyPicturesRecentPage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout backgroundStyle={"accent1"} PageTitle={"Recent pictures"}>
            <Pictures/>
        </BaseLayout>
    )
}

export default MyPicturesRecentPage;