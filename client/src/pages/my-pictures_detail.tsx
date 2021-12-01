import React from "react";
import { Picture } from "../components/picturesDetail";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const MyPicturesDetailPage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout backButton={true} backgroundStyle={"accent1"} PageTitle={`Picture from Sarah`}>
            <Picture/>
        </BaseLayout>
    )
}

export default MyPicturesDetailPage;