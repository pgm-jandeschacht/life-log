import React from "react";
import { Picture } from "../components/picturesDetail";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const MyPicturesDetailPage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout backgroundStyle={"accent1"} PageTitle={`Picture from Judy`}>
            <Picture/>
        </BaseLayout>
    )
}

export default MyPicturesDetailPage;