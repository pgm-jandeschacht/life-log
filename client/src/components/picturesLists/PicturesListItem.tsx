import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import vacationImg from '../../assets/images/vacation.jpg'
import { Breakpoint, Shadow, Transition } from '../../variables'

interface PicturesListItemProps {
    pics?: any
}

const StyledLi = styled.li`
    transition: ${Transition.normal};
    box-shadow: ${Shadow.small};
    border-radius: 5px;
    overflow: hidden;
    margin-right: 0.5rem;
    width: calc(33.3% - 0.33rem);
    margin-bottom: 0.5rem;
    &:nth-of-type(3n) {
        margin-right: 0;
    }
    @media (min-width: ${Breakpoint.small}) {
        width: calc(33.3% - 0.5rem);
        margin-bottom: 0.75rem;
        margin-right: 0.75rem;
        
    }
    @media (min-width: ${Breakpoint.medium}) {
        margin-right: 1rem;
        margin-bottom: 1rem;
        width: calc(33.3% - 0.66rem);
    }
    @media (min-width: ${Breakpoint.large}) {
        width: calc(25% - 0.75rem);
        margin-right: 1rem;
        &:nth-of-type(3n) {
            margin-right: 1rem;
        }
        &:nth-of-type(4n) {
            margin-right: 0;
        }
    }
    
    &:hover {
        box-shadow: ${Shadow.medium};
        transform: translateY(-5px);
    }
`

const StyledImg = styled.div`
    height: 0;
    padding-bottom: 100%;
    position: relative;
    
    img {
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`

const PicturesListItem: React.FC<PicturesListItemProps> = ({ pics }) => {
    return (
        <StyledLi key={(pics !== undefined ? pics.albumItem.id : 1)}>
            <Link to={`/my-pictures/detail/${(pics !== undefined ? `${pics.albumItem.id}` : 1)}`} title={"Picture detail"}>
                <StyledImg>
                    <img src={(pics !== undefined ? pics.albumItem.image : vacationImg)} alt={(pics !== undefined ? pics.albumItem.location : 'Vacation')} />
                </StyledImg>
            </Link>
        </StyledLi>
    )
}

export default PicturesListItem
