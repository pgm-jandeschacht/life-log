import React, { useState, useEffect, ReactNode } from 'react'
import styled from 'styled-components'
import { Header, Footer } from '../components/layout'
import { Breakpoint } from '../variables'
import { Colors } from '../variables'

import { useQuery, useLazyQuery } from '@apollo/client';

import useToken from '../Hooks/useToken';
import useFamilyMember from '../Hooks/useFamilyMember';

import { Login } from '../components/Login';
import { FamilyMemberData } from '../interfaces';

// import { GET_FAMILYMEMBER_BY_USERID } from '../graphql/familyMembers';

import { GET_FAMILYMEMBER_BY_USERID }   from '../graphql/familyMembers';

interface BaseLayoutProps {
    children: React.ReactNode,
    PageTitle: string,
    backgroundStyle?: string,
    altButton?: boolean,
    altLink?: string,
    formPage?: boolean,
    backButton?: boolean,
}

const Main = styled.main`
    max-width: 80rem;
    margin: auto;
    position: relative;
    padding: 0 2rem 7rem 2rem;
    
    @media (min-width: ${Breakpoint.small}) {
        padding: 0 3rem 9rem 3rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        padding: 0 4rem 13.25rem 4rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        padding: 0 4rem 9rem 4rem;
    }
`
    
const BaseLayout = ({ children, PageTitle, backgroundStyle = 'blue', altButton = false, altLink, formPage = false, backButton = false } : BaseLayoutProps) => {
    
    // Change background color of navigation according to the page
    const [background, setBackground] = useState(Colors.primary)
    const [isBlue, setIsBlue] = useState(true)

    const {  token, setToken } = useToken();
    const { familyMemberId, setFamilyMemberId } = useFamilyMember();

    useEffect(() => {
        if(backgroundStyle === 'accent1') {
            setBackground(Colors.accent1);
            setIsBlue(false);
        } else if(backgroundStyle === 'accent2') {
            setBackground(Colors.accent2);
            setIsBlue(false);
        } else if(backgroundStyle === 'accent3') {
            setBackground(Colors.accent3);
            setIsBlue(false);
        } else if(backgroundStyle === 'accent4') {
            setBackground(Colors.accent4);
            setIsBlue(false);
        } else if(backgroundStyle === 'accent5') {
            setBackground(Colors.accent5);
            setIsBlue(false);
        } else if (backgroundStyle === 'blue') {
            setIsBlue(true);
        }
    }, [backgroundStyle]);

    return (
        <>
            <Header back={backButton} form={formPage} link={altLink} button={altButton} title={PageTitle} backgroundColor={background} />

            <Main>
                
            {( !token  ) ? (
                <Login setToken={setToken} setFamilyMemberId={setFamilyMemberId}   />
            ) : (
                <>        
                    { children }
                </>
                )}
        
            </Main>

            <Footer form={formPage} blue={isBlue} backgroundColor={background} />
        </>
    )
}

export default BaseLayout;
