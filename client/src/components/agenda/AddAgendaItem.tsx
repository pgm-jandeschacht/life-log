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

const StyledForm = styled.form`
    label:last-of-type {
        margin-bottom: 0;
    }
`

const AddAgendaItem = () => {
    return (
        <StyledForm>
            <TextArea placeholder={"Write here what you did today"}>Today I</TextArea>

            {/* Send the options to the dropdown with props */}
            <DropDown dummyText={example}>This was with</DropDown> 
            
            <FormTemplate page={"agenda"} color={"#FFECB0"} />
        </StyledForm>
    )
}

export default AddAgendaItem

