import React from "react";
import styled from "styled-components";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const StyledTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 900;
`

const SettingsPage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout PageTitle={"Settings"}>
            <StyledTitle>Under construction</StyledTitle>
        </BaseLayout>
    )
}

export default SettingsPage;