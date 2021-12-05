import React from 'react'
import styled from 'styled-components'
import { TextAreaError, DropDownError } from '../forms'
import { FormTemplate } from '../layout'
import { Formik, Field } from 'formik'
import * as yup from 'yup';
import { Breakpoint, Colors, Shadow } from '../../variables'
import { useHistory } from 'react-router'
import { CREATE_AGENDAITEM } from '../../graphql/agendaItems'
import { useMutation, useQuery } from '@apollo/client'
import { Error, Loading } from '../alerts'
import { FamilyRelationsData } from '../../interfaces'
import { GET_RELATEDFAMILYMEMBERS_BY_FAMILYMEMBER_ID } from '../../graphql/familyRelations'

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
    @media (min-width: ${Breakpoint.large}) {
        display: flex;
        width: 100%;
    }
`

const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    font-weight: 900;
    margin-bottom: 1rem;
    @media (min-width: ${Breakpoint.small}) {
        margin-bottom: 1.5rem;
        font-size: 2rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        margin-bottom: 2rem;
        font-size: 2.5rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        margin-bottom: 1.5rem;
        font-size: 2rem;
        width: 100%;
        margin-right: 1.5rem;
    }
    
    span {
        color: ${Colors.red};
    }
    
    textarea {
        margin-top: 1rem;
        border: 3px solid ${Colors.primary};
        border-radius: 10px;
        box-shadow: ${Shadow.small};
        background: ${Colors.secondary};
        padding: 1rem;
        font-size: 1.2rem;
        font-weight: 500;
        color: ${Colors.primary};
        @media (min-width: ${Breakpoint.small}) {
            margin-top: 1.5rem;
            padding: 1.25rem;
            font-size: 1.5rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            margin-top: 2rem;
            padding: 1.5rem;
            font-size: 2rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            margin-top: 1.5rem;
            padding: 1.25rem;
            font-size: 1.5rem;
        }
    }
`

const StyledLabelSelect = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    font-weight: 900;
    margin-bottom: 1rem;
    @media (min-width: ${Breakpoint.small}) {
        margin-bottom: 1.5rem;
        font-size: 2rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        margin-bottom: 2rem;
        font-size: 2.5rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        margin-bottom: 1.5rem;
        font-size: 2rem;
        width: 100%;
    }

    span {
            color: ${Colors.red};
        }

    select {
        margin-top: 1rem;
        padding: 1rem;
        border: 3px solid ${Colors.primary};
        border-radius: 10px;
        box-shadow: ${Shadow.small};
        font-size: 1.2rem;
        font-weight: 700;
        color: ${Colors.primary};
        background: ${Colors.secondary};
        cursor: pointer;
        @media (min-width: ${Breakpoint.small}) {
            margin-top: 1.5rem;
            padding: 1.25rem;
            font-size: 1.5rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            margin-top: 2rem;
            padding: 1.5rem;
            font-size: 2rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            margin-top: 1.5rem;
            padding: 1.25rem;
            font-size: 1.5rem;
        }
    }
`

const validationSchema = yup.object({
    agendaItem: yup.string().required(),
    user: yup.string().required()
})

const AddAgendaItem = () => {
    const familyMemberId = localStorage.getItem('familyMemberId') || '';
    let relatedFamilyMembersForDropDown: any[] = [];
    const history = useHistory();

    const [addAgendatItem, { data: dataWish, loading: loadingWish, error: errorWish  }] = useMutation(CREATE_AGENDAITEM);

    const { data, loading, error } = useQuery<FamilyRelationsData> (GET_RELATEDFAMILYMEMBERS_BY_FAMILYMEMBER_ID, {
        variables: {
            id: parseInt(familyMemberId)
        }
    });
    if(loading) return <Loading />;
    if(error) return <Error error={error.message}/>;
    if(!loading && data) {
        data?.familyRelationsByFamilyMemberId.forEach(member => {
            const famMember = {
                id: member.relatedFamilyMember.id,
                value: member.relatedFamilyMember.firstname + ' ' + member.relatedFamilyMember.lastname
            }
            relatedFamilyMembersForDropDown.push(famMember);
         })        
    }

    return (
        <Formik
            initialValues={{
                agendaItem: '',
                user: '',
            }}
            validationSchema={validationSchema}
            // rename data, niet zelfde als usemutation
            onSubmit={(data, { setSubmitting }) => {
                setSubmitting(true);

                addAgendatItem({
                    variables: {
                        input: {
                            created_at: new Date(),
                            updated_at: new Date(),
                            content: data.agendaItem,
                            authorId: parseInt(familyMemberId),
                            date: new Date(),
                        }
                    }
                })

                setSubmitting(false);
                history.push('/my-agenda');
                }}
            >

            {({values, errors, isSubmitting, handleChange, handleBlur, handleSubmit}) => (
                <StyledForm onSubmit={handleSubmit}>
                    <StyledLabel>
                        <p>Today I <span>*</span></p>
                        <Field  placeholder="Write here what you did today" name="agendaItem" as={TextAreaError} type="textarea" />
                        {/* <TextArea placeholder={"Write here what you did today"}>Today I</TextArea> */}
                    </StyledLabel>

                    {/* Send the options to the dropdown with props */}
                    <StyledLabelSelect>
                        <p>This was with <span>*</span></p>
                        <DropDownError dropDownTitle={'Select a family member'}  dummyText={relatedFamilyMembersForDropDown} name={"user"} onChange={handleChange} onBlur={handleBlur} /> 
                    </StyledLabelSelect>
                    
                    <FormTemplate submitting={isSubmitting} page={"agenda"} color={"#FFECB0"} />
                </StyledForm>
        )}
        </Formik>
    )
}

export default AddAgendaItem

