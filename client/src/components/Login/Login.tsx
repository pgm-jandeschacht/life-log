import React from 'react'
import styled from 'styled-components'
import { Colors, Shadow, Transition, Breakpoint } from '../../variables'
import logo from '../../assets/images/logo.png'
import { Formik, Field } from 'formik'
import { TextFieldError, PasswordFieldError } from '../forms'
import { ButtonForm } from '../buttons'
import * as yup from 'yup';

async function loginUser(credentials: any) {
    return fetch('' + process.env.REACT_APP_AUTH_DOMAIN, {
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

const LoginContainer = styled.section`
    background: ${Colors.primary};
    position: fixed;
    overflow-y: auto;
    z-index: 1;
    background: ${Colors.primary};
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

const StyledDiv = styled.div`
    max-width: 80rem;
    margin: auto;
    @media (min-width: ${Breakpoint.large}) {
        display: flex;
        align-items: center;
        height: 100%;
    }

    h2 {
        font-size: 2.5rem;
        font-weight: 900;
        margin-bottom: 2rem;
        @media (min-width: ${Breakpoint.small}) {
            font-size: 3rem;
            margin-bottom: 3rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            margin-bottom: 4rem;
            font-size: 4rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            margin-bottom: 2rem;
            font-size: 2.5rem;
        }
    }
`

const StyledLogo = styled.div`
    background: ${Colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem 3rem;
    @media (min-width: ${Breakpoint.small}) {
        padding: 6rem 4rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        width: 40%;
    }
    
    img {
        width: 100%;
        max-width: 20rem;
        @media (min-width: ${Breakpoint.small}) {
            max-width: 25rem;
        }
    }
`

const StyledContainer = styled.div`
    background: ${Colors.secondary};
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    padding: 3rem 2rem;
    @media (min-width: ${Breakpoint.small}) {
        padding: 4rem 2rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        padding: 3rem 2rem;
        height: auto;
        width: 60%;
    }
`

const StyledForm = styled.form`
    
    label {
        display: flex;
        flex-direction: column;
        font-size: 1.5rem;
        font-weight: 900;
        margin-bottom: 2rem;
        @media (min-width: ${Breakpoint.small}) {
            margin-bottom: 2.5rem;
            font-size: 2rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            margin-bottom: 3rem;
            font-size: 2.5rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            margin-bottom: 2rem;
            font-size: 1.5rem;
        }
        
        span {
            color: ${Colors.red};
        }

        input {
            margin-top: 1rem;
            border: 3px solid ${Colors.primary};
            border-radius: 10px;
            box-shadow: ${Shadow.small};
            background: ${Colors.secondary};
            padding: 1rem;
            font-size: 1.5rem;
            font-weight: 500;
            color: ${Colors.primary};
            transition: ${Transition.normal};
            @media (min-width: ${Breakpoint.medium}) {
                margin-top: 2rem;
                font-size: 2rem;
            }
            @media (min-width: ${Breakpoint.large}) {
                margin-top: 1rem;
                font-size: 1.5rem;
            }

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

    button, a {
        width: 100%;
        padding: 1rem;
        background: ${Colors.ternary};
        border-radius: 10px;
        box-shadow: ${Shadow.altSmall};
        transition: ${Transition.normal};
        font-size: 1.5rem;
        font-weight: 700;
        text-align: center;
        @media (min-width: ${Breakpoint.small}) {
            padding: 1.25rem;
            font-size: 1.75rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            padding: 1.5rem;
            font-size: 2rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            padding: 1rem;
            font-size: 1.5rem;
        }
        
        &:hover {
            transform: translateY(-5px);
            background: ${Colors.primary};
            color: ${Colors.secondary};
        }
    }
    
    button {
        color: ${Colors.secondary};
        margin-left: 1rem;
        background: ${Colors.primary};
        @media (min-width: ${Breakpoint.small}) {
            margin-left: 1.5rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            margin-left: 1.25rem;
        }
        
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
        <LoginContainer>
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
        </LoginContainer>

    )
}
