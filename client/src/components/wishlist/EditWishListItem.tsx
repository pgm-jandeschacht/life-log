import React, {useEffect} from 'react'
import styled from 'styled-components'
import { FormTemplate } from '../layout'
import { TextAreaError, DropDownError } from '../forms'
import { Formik, Field } from 'formik'
import * as yup from 'yup';
import { Breakpoint, Colors, Shadow } from '../../variables'
import { useHistory, useParams } from 'react-router'
import { useMutation, useQuery } from '@apollo/client'
import { FamilyRelationsData, WishListItemData } from '../../interfaces'
import { GET_RELATEDFAMILYMEMBERS_BY_FAMILYMEMBER_ID } from '../../graphql/familyRelations'
import { GET_WISHLISTITEM_BY_WISHLISTITEM_ID, UPDATE_WISHLISTITEM } from '../../graphql/wishListItems'
import { Error, Loading } from '../alerts'
import { beautifyDate } from '../../services/format/date'

interface EditWishListItemProps {
    // wish: WishListItemType | undefined;
}

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
    @media (min-width: ${Breakpoint.large}) {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
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
        width: calc(50% - 0.75rem);
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
        width: calc(50% - 0.75rem);
        margin-right: 1.5rem;
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
    date: yup.string().required(),
    wish: yup.string().required(),
    user: yup.string().required()
})

// const EditWishListItem: React.FC<EditWishListItemProps> = ({ wish }) => {
const EditWishListItem: React.FC<EditWishListItemProps> = () => {
    const familyMemberId = localStorage.getItem('familyMemberId') || '';
    const { wishListId } = useParams<{ wishListId: any }>();
    let relatedFamilyMembersForDropDown: any[] = [];
    const history = useHistory();
    
    // console.log('wish in component.....',wish);

    // const [addWishListItem, { data: dataWish, loading: loadingWish, error: errorWish  }] = useMutation(CREATE_WISHLISTITEM);
    // const [addFamilyMemberToWishListItem, { }] = useMutation(ADD_FAMILYMEMBER_TO_FAMILYMEMBER_IN_WISHLISTITEM);


    const { data, loading, error } = useQuery<FamilyRelationsData> (GET_RELATEDFAMILYMEMBERS_BY_FAMILYMEMBER_ID, {
        variables: {
            id: parseInt(familyMemberId)
        }
    });

    const { data: dataWish, loading: loadingWish, error: errorWish } = useQuery<WishListItemData> (GET_WISHLISTITEM_BY_WISHLISTITEM_ID, {
        variables: {
            id: parseInt(wishListId)
        }
    });

    const [updateWishListItem, { data: dataWishUpdate, loading: loadingWishUpdate, error: errorWishUpdate  }] = useMutation(UPDATE_WISHLISTITEM);



    // add date from wishlistitem to array of dates
    useEffect(() => {
        if(!loadingWish && dataWish && dataWish.wishListItem.dueDate) {
            example2.unshift({
                    id: 0,
                    value: beautifyDate(dataWish?.wishListItem?.dueDate)
                });
            }
    }, [])

    if(loading ) return <Loading />;
    if(error  ) return <Error error={error.message}/>;
    if(!loading && data) {
        data?.familyRelationsByFamilyMemberId.forEach(member => {
            const famMember = {
                id: member.relatedFamilyMember.id,
                value: member.relatedFamilyMember.firstname + ' ' + member.relatedFamilyMember.lastname
            }
            relatedFamilyMembersForDropDown.push(famMember);
         })        
    }

    if(loadingWish ) return <Loading />;
    if(errorWish  ) return <Error error={errorWish.message}/>;
    console.log('datawish.....',dataWish);
    


    console.log(dataWish?.wishListItem?.inWishListItem[0].familyMember.id)

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

                updateWishListItem({
                    variables: {
                        id: parseInt(wishListId),
                        input: {
                            updated_at: new Date(),
                            content: data.wish,
                            authorId: parseInt(familyMemberId),
                            dueDate: data.date,
                            inWish: [parseInt(data.user)]
                        }
                    }
                })


                setSubmitting(false);
                history.push('/my-wishlist');
                }}
            >

            {({values, errors, isSubmitting, handleChange, handleBlur, handleSubmit}) => (
                <StyledForm onSubmit={handleSubmit}>
                    <StyledLabelSelect>
                        <p>Who do you want to bring it? <span>*</span></p>
                        <DropDownError dropDownTitle={'Select a family member'}  dummyText={relatedFamilyMembersForDropDown} name={"user"} onChange={handleChange} onBlur={handleBlur} selected={dataWish?.wishListItem?.inWishListItem[0].familyMember.id} /> 
                    </StyledLabelSelect>
                    
                    <StyledLabel>
                        <p>What do they need to bring? <span>*</span></p>
                        <Field  placeholder="Write here what you want" value={dataWish?.wishListItem?.content}  name={"wish"} as={TextAreaError} type="textarea" />
                    </StyledLabel>
                    <StyledLabelSelect>
                        <p>When do they have to bring it? <span>*</span></p>
                        <DropDownError dropDownTitle={'Select a date'} dummyText={example2} name={"date"} onChange={handleChange} onBlur={handleBlur} /> 
                    </StyledLabelSelect>

                    <FormTemplate submitting={isSubmitting} page={"wishlist"} color={"#FFB2AB"} />
                </StyledForm>
        )}
        </Formik>
    )
}

export default EditWishListItem