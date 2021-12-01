import React from "react";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";
import { ProfileSettingsDetail } from '../components/settingsPage'

const ProfileSettingsPage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout backButton={true} PageTitle={"Profile settings"}>
            <ProfileSettingsDetail/>
        </BaseLayout>
    )
}

export default ProfileSettingsPage;