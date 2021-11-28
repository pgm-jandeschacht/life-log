import React from 'react'
import styled from 'styled-components'
import { FormTemplate } from '../layout'
import { TextAreaError, DropDownError } from '../forms'
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
    date: yup.string().required(),
    wish: yup.string().required(),
    user: yup.string().required()
})

const AddWishListItem = () => {
    return (
        <Formik
            initialValues={{
                date: '',
                wish: '',
                user: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(data, { setSubmitting }) => {
                setSubmitting(true);

                setSubmitting(false);
                }}
            >

            {({values, errors, isSubmitting, handleChange, handleBlur, handleSubmit}) => (
                <StyledForm onSubmit={handleSubmit}>
                    <StyledLabelSelect>
                        <p>Who do you want to bring it? <span>*</span></p>
                        <DropDownError dummyText={example} name={"user"} onChange={handleChange} onBlur={handleBlur} /> 
                    </StyledLabelSelect>
                    
                    <StyledLabel>
                        <p>What do they need to bring? <span>*</span></p>
                        <Field  placeholder="Write here what you want" name={"wish"} as={TextAreaError} type="textarea" />
                    </StyledLabel>
                    <StyledLabelSelect>
                        <p>When do they have to bring it? <span>*</span></p>
                        <DropDownError dummyText={example2} name={"date"} onChange={handleChange} onBlur={handleBlur} /> 
                    </StyledLabelSelect>

                    <FormTemplate submitting={isSubmitting} page={"wishlist"} color={"#FFB2AB"} />
                </StyledForm>
        )}
        </Formik>
    )
}

export default AddWishListItem