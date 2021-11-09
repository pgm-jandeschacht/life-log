import React from "react";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const SettingsPage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout PageTitle={"Settings"}>
            <p>This is the SETTINGS page!</p>
        </BaseLayout>
    )
}

export default SettingsPage;