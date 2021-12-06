import React from "react";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";
import { FamilyList } from '../components/family'

const MyFamilyPage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout backgroundStyle={"accent2"} PageTitle={"My family"}>
            <FamilyList />
        </BaseLayout>
    )
}

export default MyFamilyPage;