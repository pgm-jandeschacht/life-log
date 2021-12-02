import React from "react";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";
import { FollowedPeopleDetail } from '../components/settingsPage'

const FollowedPeoplePage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout backButton={true} PageTitle={"Profile settings"}>
            <FollowedPeopleDetail/>
        </BaseLayout>
    )
}

export default FollowedPeoplePage;