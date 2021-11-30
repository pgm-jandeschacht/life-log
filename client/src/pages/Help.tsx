import React from "react";
import styled from "styled-components";
import { HelpList } from "../components/help";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";
import { Breakpoint } from "../variables";

const StyledTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 900;
    @media (min-width: ${Breakpoint.small}) {
        font-size: 2rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        font-size: 2.5rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        font-size: 2rem;
    }
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