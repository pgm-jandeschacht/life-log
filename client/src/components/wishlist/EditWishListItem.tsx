import React from 'react'
import styled from 'styled-components'
import { TextArea, DropDown } from '../forms'
import { FormTemplate } from '../layout'

const example = [
    {
        id: 1,
        value: "Karina Cox"
    },
    {
        id: 2,
        value: "Landyn Foster"
    },
    {
        id: 3,
        value: "Lucia Mullen"
    },
    {
        id: 4,
        value: "Peter Kox"
    },
    {
        id: 5,
        value: "Maria Kox"
    },
    {
        id: 6,
        value: "Oscar Kox"
    },
    {
        id: 7,
        value: "Max Thomson"
    },
]

const example2 = [
    {
        id: 1,
        value: "As soon as possible"
    },
    {
        id: 2,
        value: "Next time they visit"
    },
    {
        id: 3,
        value: "16 November, 2021"
    },
    {
        id: 4,
        value: "17 November, 2021"
    },
    {
        id: 5,
        value: "18 November, 2021"
    }
]

const StyledForm = styled.form`
    label:last-of-type {
        margin-bottom: 0;
    }
`

const EditWishListItem = () => {
    return (
        <StyledForm>
            {/* Send the options to the dropdown with props */}
            <DropDown dummyText={example}>Who do you want to this to?</DropDown> 
            
            <TextArea placeholder={"Write here what you did today"}>What do they need to bring?</TextArea>

            {/* Send the options to the dropdown with props */}
            <DropDown dummyText={example2}>When do they have to bring it?</DropDown> 
        
            <FormTemplate page={"wishlist"} color={"#FFB2AB"}/>
        </StyledForm>
    )
}

export default EditWishListItem