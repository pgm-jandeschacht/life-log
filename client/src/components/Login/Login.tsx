import React from 'react'
import styled from 'styled-components'
import { Colors, Shadow, Transition } from '../../variables'
import logo from '../../assets/images/logo.png'
import { Formik, Field } from 'formik'
import { TextFieldError, PasswordFieldError } from '../forms'
import { ButtonForm } from '../buttons'
import * as yup from 'yup';

async function loginUser(credentials: any) {
    return fetch('http://localhost:3000/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(res => {
        // console.log(res.status);
        // Server error, user does not exist
        if(res.status === 500) {
            return {
                'msg' :'internal server error'
            }
        }
        // User password is incorrect (unauthorized)
        if(res.status === 401) {
            return {
                'msg' : 'user password is wrong'
            }
        }
        // User password is correct
        if(res.status === 201) {
            return res.json()
            // 'msg' : 'Logged in!'
        }
        return {
            'msg' : 'something went wrong'
        }
    })
}

interface LoginProps {
    setToken: any,
    setFamilyMemberId: any
}

const StyledDiv = styled.div`
    position: fixed;
    z-index: 1;
    background: ${Colors.primary};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    h2 {
        font-size: 4rem;
        font-weight: 900;
        margin-bottom: 5rem;
    }
`

const StyledLogo = styled.div`
    background: ${Colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6rem 4rem;
    
    img {
        width: 100%;
        max-width: 25rem;
    }
`

const StyledContainer = styled.div`
    background: ${Colors.secondary};
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: 20px 20px 0 0 ;
    padding: 4rem 2rem;
`

const StyledForm = styled.form`
    
    label {
        display: flex;
        flex-direction: column;
        font-size: 2.5rem;
        font-weight: 900;
        margin-bottom: 2rem;

        span {
            color: ${Colors.red};
        }

        input {
            margin-top: 2rem;
            border: 3px solid ${Colors.primary};
            border-radius: 10px;
            box-shadow: ${Shadow.small};
            background: ${Colors.secondary};
            padding: 1.5rem;
            font-size: 2rem;
            font-weight: 500;
            color: ${Colors.primary};
            transition: ${Transition.normal};

            &:focus {
                background: ${Colors.white};
                transform: translateY(-5px);
            }
        }
    }
`

const StyledButtons = styled.div`
    display: flex;
    width: 100%;
    bottom: 0;
    left: 0;
    margin-top: 3rem;

    button, a {
        width: 100%;
        padding: 1.5rem;
        background: ${Colors.ternary};
        border-radius: 10px;
        box-shadow: ${Shadow.altSmall};
        transition: ${Transition.normal};
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        
        &:hover {
            transform: translateY(-5px);
            background: ${Colors.primary};
            color: ${Colors.secondary};
        }
    }
    
    button {
        color: ${Colors.secondary};
        margin-left: 1.5rem;
        background: ${Colors.primary};
        
        &:hover {
            background: ${Colors.ternary};
            color: ${Colors.primary};
        }
    }
`

const validationSchema = yup.object({
    username: yup.string().required(),
    password: yup.string().required()
})

export const Login: React.FC<LoginProps> = ({ setToken, setFamilyMemberId }) => {    
    return (
        <StyledDiv>
            <StyledLogo>
                <img src={logo} alt="Logo of Life log" />
            </StyledLogo>

            <StyledContainer>
                <h2>Please sign in</h2>
                
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (data, { setSubmitting }) => {
                        setSubmitting(true);

                        const username = data.username;
                        const password = data.password;
                        
                        const token = await loginUser ({
                            username,
                            password
                        });
                
                        if(!token?.msg ) {                
                            setToken(token);
                            setFamilyMemberId(token.familyMemberId);
                        }

                        setSubmitting(false);
                      }}
                    >

                    {({values, errors, isSubmitting, handleChange, handleBlur, handleSubmit}) => (
                        <StyledForm onSubmit={handleSubmit}>
                            <label>
                                <p>Username <span>*</span></p>
                                <Field  placeholder="username" name="username" as={TextFieldError} type="input" />
                            </label>
                            <label>
                                <p>Password <span>*</span></p>
                                <Field  placeholder="password" name="password" as={PasswordFieldError} type="input" />
                            </label>
                            <StyledButtons>
                                <a href="/">Register</a>
                                <ButtonForm disabled={isSubmitting} type="submit">Sign in</ButtonForm>
                            </StyledButtons>
                        </StyledForm>
                    )}
                    </Formik>
            </StyledContainer>
        </StyledDiv>

    )
}
