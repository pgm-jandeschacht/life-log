import React from 'react'
import HelpListItem from './HelpListItem'
import { faImage, faUsers, faCalendarAlt, faUserAlt,faPencilAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Breakpoint } from '../../variables';

const StyledUl = styled.ul`
    margin-top: 1.5rem;
    @media (min-width: ${Breakpoint.small}) {
        margin-top: 2rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        margin-top: 2.5rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        margin-top: 2rem;
        display: flex;
        flex-wrap: wrap;
    }
`

const HelpList: React.FC = () => {
    return (
        <StyledUl>
            <HelpListItem color={"#FEDDBE"} image={faImage} title={"Pictures"} keyId={1}/>
            <HelpListItem color={"#B1DFD4"} image={faUsers} title={"Family"} keyId={2}/>
            <HelpListItem color={"#FFECB0"} image={faCalendarAlt} title={"Agenda"} keyId={3}/>
            <HelpListItem color={"#C4E0EB"} image={faUserAlt} title={"About me"} keyId={4}/>
            <HelpListItem color={"#FFB2AB"} image={faPencilAlt} title={"Wishlist"} keyId={5}/>
            <HelpListItem color={"#F2F2F2"} image={faCog} title={"General"} keyId={6}/>
        </StyledUl>
    )
}

export default HelpList
