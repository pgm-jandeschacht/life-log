import React from 'react'
import styled from 'styled-components'
import { TextAreaError, DropDownError } from '../forms'
import { FormTemplate } from '../layout'
import { Formik, Field } from 'formik'
import * as yup from 'yup';
import { Colors, Shadow } from '../../variables'

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

const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 2.5rem;
    font-weight: 900;
    margin-bottom: 2rem;

    span {
            color: ${Colors.red};
        }

    textarea {
        margin-top: 2rem;
        border: 3px solid ${Colors.primary};
        border-radius: 10px;
        box-shadow: ${Shadow.small};
        background: ${Colors.secondary};
        padding: 1.5rem;
        font-size: 2rem;
        font-weight: 500;
        color: ${Colors.primary};
    }
`

const StyledLabelSelect = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 2.5rem;
    font-weight: 900;
    margin-bottom: 2rem;

    span {
            color: ${Colors.red};
        }

    select {
        margin-top: 2rem;
        padding: 1.5rem;
        border: 3px solid ${Colors.primary};
        border-radius: 10px;
        box-shadow: ${Shadow.small};
        font-size: 2rem;
        font-weight: 700;
        color: ${Colors.primary};
        background: ${Colors.secondary};
        cursor: pointer;
    }
`

const validationSchema = yup.object({
    note: yup.string().required(),
    user: yup.string().required()
})

const AddAgendaItem = () => {

// maak mutation-query, error & loading useMutation

    return (
        <Formik
            initialValues={{
                note: '',
                user: '',
            }}
            validationSchema={validationSchema}
            // rename data, niet zelfde als usemutation
            onSubmit={(data, { setSubmitting }) => {
                setSubmitting(true);

                // call name of useMutation, voeg variables toe, refetchquery-options

                setSubmitting(false);
                }}
            >

            {({values, errors, isSubmitting, handleChange, handleBlur, handleSubmit}) => (
                <StyledForm onSubmit={handleSubmit}>
                    <StyledLabel>
                        <p>Today I <span>*</span></p>
                        <Field  placeholder="Write here what you did today" name="note" as={TextAreaError} type="textarea" />
                        {/* <TextArea placeholder={"Write here what you did today"}>Today I</TextArea> */}
                    </StyledLabel>

                    {/* Send the options to the dropdown with props */}
                    <StyledLabelSelect>
                        <p>This was with <span>*</span></p>
                        <DropDownError dummyText={example} name={"user"} onChange={handleChange} onBlur={handleBlur} /> 
                    </StyledLabelSelect>
                    
                    <FormTemplate submitting={isSubmitting} page={"agenda"} color={"#FFECB0"} />
                </StyledForm>
        )}
        </Formik>
    )
}

export default AddAgendaItem

