import React from "react";
import styled from "styled-components";
import { HelpList } from "../components/help";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const StyledTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 900;
`

const HelpPage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout PageTitle={"Help"}>
            <StyledTitle>What is your question about?</StyledTitle>
            <HelpList/>
        </BaseLayout>
    )
}

export default HelpPage;