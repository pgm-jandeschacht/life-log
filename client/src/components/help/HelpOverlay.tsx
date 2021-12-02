import React, { useState, useEffect  } from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import { Breakpoint, Colors, Transition } from '../../variables'
import HelpImage from './HelpImage'
import HelpText from './HelpText'
import { ButtonIcon } from '../buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import HelpProgress from './HelpProgress'

const helpExample = [
    {
        id: 1,
        title: "My pictures",
        content: [
            {
                id: 1,
                img: "screenshot-pictures1.png",
                title: "Recent pictures",
                text: "Dicta quo similique molestiae omnis qui. Itaque qui tempore deserunt pariatur sed corporis veniam aut deserunt.",
            },
            {
                id: 2,
                img: "screenshot-pictures2.png",
                title: "Pictures I liked",
                text: "Quam dicta quo similique molestiae omnis qui. Itaque qui tempore deserunt pariatur sed corporis veniam aut deserunt. Et fugiat tempore quidem eveniet quas est ipsa.",
            },
            {
                id: 3,
                img: "screenshot-pictures3.png",
                title: "Pictures from...",
                text: "Itaque qui tempore deserunt pariatur sed corporis veniam aut deserunt. Et fugiat tempore quidem eveniet quas est ipsa.",
            },
        ]
    },
    {
        id: 2,
        title: "My family",
        content: [
            {
                id: 1,
                img: "screenshot-family1.png",
                title: "Familymembers list",
                text: "Dicta quo similique molestiae omnis qui. Itaque qui tempore deserunt pariatur sed corporis veniam aut deserunt.",
            },
            {
                id: 2,
                img: "screenshot-family2.png",
                title: "Familymember detail",
                text: "Quam dicta quo similique molestiae omnis qui. Itaque qui tempore deserunt pariatur sed corporis veniam aut deserunt. Et fugiat tempore quidem eveniet quas est ipsa.",
            },
        ]
    },
]

interface HelpOverlayProps {
    show: boolean,
    onClose: (open: boolean) => void,
    color: string,
}

interface StyledDivProps {
    hide?: boolean,
    background?: string,
    left?: boolean
}

const StyledDiv = styled.div<StyledDivProps>`
    color: ${Colors.secondary};
    position: fixed;
    overflow-y: auto;
    top: 0;
    left: 0;
    z-index: 5;
    background: ${Colors.primary};
    width: 100%;
    height: 100%;
    display: ${(StyledDivProps) => (StyledDivProps.hide ? 'block' : 'none')};
`

const ContentContainer = styled.div`
    max-width: 80rem;
    margin: auto;
    padding: 0 2rem 2.5rem 2rem;
    
    @media (min-width: ${Breakpoint.small}) {
        padding: 0 3rem 3.5rem 3rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        padding: 0 4rem 3.5rem 4rem;
        display: flex;
    }
    @media (min-width: ${Breakpoint.large}) {
        padding: 0 4rem 4.5rem 4rem;
    }
    `

const Flex = styled.div`
    @media (min-width: ${Breakpoint.medium}) {
        width: 50%;
        margin-right: 2rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        width: 30%;
        margin-right: 4rem;
    }
`

const StyledHeader = styled.div`
    max-width: 80rem;
    margin: auto;
    padding: 2.5rem 2rem;
    @media (min-width: ${Breakpoint.small}) {
        padding: 4rem 3rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        padding: 5rem 4rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        padding: 3rem 4rem;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1 {
            font-weight: 900;
            font-size: 2rem;
            @media (min-width: ${Breakpoint.small}) {
                font-size: 2.5rem;
            }
            @media (min-width: ${Breakpoint.medium}) {
                font-size: 3.25rem;
            }
        }
    }

    p {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        @media (min-width: ${Breakpoint.small}) {
            font-size: 2rem;
            margin-bottom: 0.75rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            margin-bottom: 1rem;
            font-size: 2.5rem;
        }
    }

`

const ContentContainerSpecial = styled(ContentContainer)`
    display: flex;
    align-items: center;
`

const StyledButtons = styled.div<StyledDivProps>`
    width: 50%;
    display: flex;
    justify-content: ${(StyledDiv) => (StyledDiv.left ? 'flex-start' : 'flex-end')};
    
    button {
        border: 3px solid transparent;
        border-radius: 10px;
        color: ${Colors.primary};
        background: ${(StyledDiv) => StyledDiv.background};
        padding: 0.5rem 1rem;
        font-size: 1.25rem;
        font-weight: 700;
        transition: ${Transition.normal};
        @media (min-width: ${Breakpoint.small}) {
            padding: 0.6rem 1.2rem;
            font-size: 1.5rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            padding: 0.75rem 1.5rem;
            font-size: 1.75rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            font-size: 1.75rem;
            padding: 0.6rem 1.2rem;
        }
        
        &:hover {
            transform: translateY(-5px);
            border-color: ${(StyledDiv) => StyledDiv.background};
            background: ${Colors.primary};
            color: ${(StyledDiv) => StyledDiv.background};
        }
    }
`

const HelpOverlay: React.FC<HelpOverlayProps> = ({ show, onClose, color }) => {
    const [helpClose, setHelpClose] = useState(true)
    const handleClosing = () => {
        setHelpClose(false);
        setCounter(0);
    }
    
    useEffect(() => {
        onClose(helpClose);
        setHelpClose(true);
    }, [onClose, helpClose]);

    ////////////////////////
    const [helpId, setHelpId] = useState(0)
    const url = useLocation().pathname.split('/')[1];

    useEffect(() => {
        if(url === 'my-pictures') {
            setHelpId(1);
        } else if(url === 'my-family') {
            setHelpId(2);
        } else if(url === 'my-agenda') {
            setHelpId(3);
        } else if(url === 'about-me') {
            setHelpId(4);
        } else if(url === 'my-wishlist') {
            setHelpId(5);
        } else {
            setHelpId(0);
        }

    }, [url]);
    
    const filteredHelp = helpExample.filter(helpContent => helpContent.id === helpId);
    const [counter, setCounter] = useState(0)
    
    const handleCounter = (e: React.MouseEvent<HTMLButtonElement>) => {
        let event = e.target as HTMLInputElement;
        console.log(event)
        if (event.innerText === "Next") {
            setCounter(counter + 1);
        } else if (event.innerText === "Previous") {
            setCounter(counter - 1);
        }
    }
    
    return (
        <StyledDiv hide={show}>
            {
                filteredHelp.map((filtered) => (
                    <>
                        <StyledHeader>
                            <p>Help</p>
                            <div>
                                <h1>{filtered.title}</h1>

                                <ButtonIcon background={color} onClick={handleClosing} ><FontAwesomeIcon icon={faTimes} /></ButtonIcon>
                            </div>

                        </StyledHeader>
                        <ContentContainer>
                            <Flex>
                                <HelpImage data={filtered.content[counter]}/>

                                <HelpProgress count={counter} background={color} data={filtered}/>
                            </Flex>

                            <HelpText data={filtered.content[counter]}/>
                        </ContentContainer>
                    </>
                ))
            }

            <ContentContainerSpecial>
                <StyledButtons left={true} background={color}>
                    {counter === 0 ? '' : <button onClick={handleCounter}>Previous</button>}
                </StyledButtons>

                <StyledButtons left={false} background={color}>
                    {counter + 1 < filteredHelp.map(filtered => (filtered.content.length))[0] ? <button onClick={handleCounter}>Next</button> : <button onClick={handleClosing}><FontAwesomeIcon icon={faTimes} /></button>}
                </StyledButtons>
            </ContentContainerSpecial>
        </StyledDiv>
    )
}

export default HelpOverlay
