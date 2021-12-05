import React from 'react'
import styled from 'styled-components'
import helpImage1 from '../../assets/images/help/screenshot-pictures1.png'
import { Transition } from '../../variables'

interface HelpImageProps {
    data: any
}

const StyledImg = styled.div`
    margin-bottom: 1.5rem;
    
    img {
        overflow: hidden;
        border-radius: 20px;
    }
`

const HelpImage: React.FC<HelpImageProps> = ({ data }) => {
    return (
        <StyledImg>
            <img src={`/assets/images/help/${data.image}`} alt="" />
        </StyledImg>
    )
}

export default HelpImage
