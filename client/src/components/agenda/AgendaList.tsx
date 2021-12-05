import React from 'react';
import DayList from './DayList';
import styled from 'styled-components';
import { useQuery } from "@apollo/client";
// import { GET_AGENDAITEMS_BY_FAMILYMEMBER_ID } from '../../graphql/familyMembers';
import { GET_AGENDAITEMS_BY_FAMILYMEMBER_ID} from '../../graphql/agendaItems';
import { FamilyMemberData, AgendaItemsData } from '../../interfaces';
import _ from 'lodash';
import { Error, Loading } from '../alerts';
import { Breakpoint, Colors, Shadow, Transition } from '../../variables';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

interface AgendaListProps {
    isHome?: boolean
}

// example object agenda
const agenda = [
    {
        id: 1,
        day: {
            date: "14 November, 2021",
            content: [
                "Max Thomson visited at 2:00 PM",
                "I will have sausage with potatoes and carrots for dinner at 6:00 PM",
            ]
        } 
    },
    {
        id: 2,
        day: {
            date: "15 November, 2021",
            content: [
                "I will have bread with jam for lunch at 12:00 PM",
                "I will play bingo in de common room at 3:00 PM",
                "Karina Cox will visit you at 5:30 PM for her weekly visit",
                "I will have lasagna for dinner at 6:00 PM",
            ]
        } 
    },
    {
        id: 3,
        day: {
            date: "16 November, 2021",
            content: [
                "I will have bread with jam for lunch at 12:00 PM",
                "I will play bingo in de common room at 3:00 PM",
                "Karina Cox will visit you at 5:30 PM for her weekly visit",
                "I will have lasagna for dinner at 6:00 PM",
            ]
        } 
    },
]

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    @media (min-width: ${Breakpoint.large}) {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
    }
`

const StyledAnchors = styled.a`
    position: fixed;
    bottom: 6.5rem;
    right: 1rem;
    padding: 0.6rem 0.8rem;
    border-radius: 50px;
    font-size: 1.2rem;
    font-weight: 700;
    transition: ${Transition.slow};
    box-shadow: ${Shadow.large};
    background: ${Colors.primary};
    color: ${Colors.accent3};
    border: 4px solid transparent;
    @media (min-width: ${Breakpoint.small}) {
        font-size: 1.4rem;
        padding: 0.8rem 1rem;
        bottom: 7.5rem;
        right: 1.5rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        right: 2rem;
        font-size: 1.6rem;
        padding: 1rem 1.3rem;
        bottom: 9.5rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        font-size: 1.4rem;
        padding: 0.8rem 1rem;
        bottom: 7.5rem;
    }
    @media (min-width: ${Breakpoint.max}) {
        right: calc(50vw - 38.5rem);
    }
    
    &:hover {
        transform: translateY(-5px);
        background: ${Colors.accent3};
        color: ${Colors.primary};
        border-color: ${Colors.primary};
    }
`

const StyledAnchor = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
    @media (min-width: ${Breakpoint.large}) {
        margin: auto;
    }
    
    a {
        background: ${Colors.accent3};
        font-size: 1.2rem;
        font-weight: 700;
        padding: 0.6rem 1.2rem;
        border-radius: 10px;
        transition: ${Transition.normal};
        box-shadow: ${Shadow.small};
        @media (min-width: ${Breakpoint.small}) {
            font-size: 1.5rem;
            padding: 0.75rem 1.5rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            font-size: 1.75rem;
            padding: 1rem 2rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            font-size: 1.5rem;
            padding: 0.75rem 1.5rem;
        }
        
        &:hover {
            transform: translateY(-5px);
            background: ${Colors.primary};
            color: ${Colors.accent3};
            box-shadow: ${Shadow.large};
        }
    }
`

const AgendaList: React.FC<AgendaListProps> = ({isHome = false}) => {
    const familyMemberId = localStorage.getItem('familyMemberId') || '';

    const { data, loading, error } = useQuery<AgendaItemsData >(GET_AGENDAITEMS_BY_FAMILYMEMBER_ID, {
        variables: {
            id: parseInt(familyMemberId)
        }
    });

    if(loading) return <Loading/>;
    if(error) return <Error error={error.message}/>;
    
    const agendaItems = data?.agendaItemsByAuthor || [];
    const sortedAgendaItems = _.sortBy(agendaItems, ['date']);
    const reverseAgenda = sortedAgendaItems.reverse();

    const today = new Date().toDateString();
    return (
        <StyledUl>
            {
                isHome ? '' : 
                <StyledAnchors title={`Go to today, ${today}`} href={"#today"}><FontAwesomeIcon icon={faCalendarDay}/></StyledAnchors>
            }
            {  reverseAgenda.map((agendaItem, index) => (
                isHome && index > 3 ? '' : 
                <DayList isGrey={isHome} test={agendaItem} keyId={agendaItem.id} />
                )) }
            
            {
                isHome ? 
                <StyledAnchor>
                    <Link to={"/my-agenda/"} title={"My agenda"}>See all agenda items</Link>
                </StyledAnchor>
                : ''
            }
        </StyledUl>
    )
}

export default AgendaList;
