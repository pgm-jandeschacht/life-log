import React from 'react'
import styled from 'styled-components'
import helpImage1 from '../../assets/images/help/screenshot-pictures1.png'

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
            <img src={`/assets/images/help/${data.img}`} alt="" />
        </StyledImg>
    )
}

export default HelpImage
