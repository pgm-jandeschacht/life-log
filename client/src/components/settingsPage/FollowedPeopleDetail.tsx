import React from 'react'
import styled from 'styled-components'
import { Breakpoint, Colors, Transition } from '../../variables'

const StyledDiv = styled.div`
    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        @media (min-width: ${Breakpoint.small}) {
            font-size: 2rem;
            margin-bottom: 1.5rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            font-size: 2.5rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
    }
`

const StyledForm = styled.form`
    margin-top: 1.5rem;
    display: flex;
    flex-wrap: wrap;

    label {
        cursor: pointer;
        margin-bottom: 0.5rem;
        margin-right: 0.5rem;
        @media (min-width: ${Breakpoint.small}) {
            margin-bottom: 0.75rem;
            margin-right: 0.75rem;
        } 
        @media (min-width: ${Breakpoint.medium}) {
            margin-bottom: 1rem;
            margin-right: 1rem;
        } 
        @media (min-width: ${Breakpoint.large}) {
            margin-bottom: 0.75rem;
            margin-right: 0.75rem;
        } 
        
        input {
            visibility: hidden;
            position: absolute;
            
            &:checked {
                & + span {
                    background: ${Colors.primary};
                    color: ${Colors.secondary};
                }
            }
        }
        
        span {
            background: ${Colors.secondary};
            padding: 0.6rem 1.2rem ;
            font-weight: 700;
            font-size: 1.2rem;
            transition: ${Transition.normal};
            border-radius: 10px;
            display: block;
            @media (min-width: ${Breakpoint.small}) {
                padding: 0.75rem 1.5rem ;
                font-size: 1.5rem;
            } 
            @media (min-width: ${Breakpoint.medium}) {
                padding: 1rem 2rem ;
                font-size: 2rem;
            } 
            @media (min-width: ${Breakpoint.large}) {
                padding: 0.75rem 1.5rem ;
                font-size: 1.5rem;
            } 
        }
        
        &:hover {
            span {
                transform: translateY(-5px);
                background: ${Colors.ternary};
            }
        }
    }
`

const FollowedPeople: React.FC = () => {
    return (
        <StyledDiv>
            <h2>Choose which people to follow</h2>

            <StyledForm>
                <label htmlFor="1">
                    <input id="1" value="1" type="checkbox" />
                    <span>Karina Cox</span>
                </label>
                <label htmlFor="2">
                    <input id="2" value="2" type="checkbox" />
                    <span>Landyn Foster</span>
                </label>
                <label htmlFor="3">
                    <input id="3" value="3" type="checkbox" />
                    <span>Lucia Mullen</span>
                </label>
                <label htmlFor="4">
                    <input id="4" value="4" type="checkbox" />
                    <span>Max Thomson</span>
                </label>
                <label htmlFor="5">
                    <input id="5" value="5" type="checkbox" />
                    <span>Peter Kox</span>
                </label>
                <label htmlFor="6">
                    <input id="6" value="5" type="checkbox" />
                    <span>Maria Kox</span>
                </label>
                <label htmlFor="7">
                    <input id="7" value="5" type="checkbox" />
                    <span>Oscar Kox</span>
                </label>
            </StyledForm>
        </StyledDiv>
    )
}

export default FollowedPeople
