import React from "react";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";
import { SettingsList } from '../components/settingsPage'

const SettingsPage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout PageTitle={"Settings"}>
            <SettingsList/>
        </BaseLayout>
    )
}

export default SettingsPage;