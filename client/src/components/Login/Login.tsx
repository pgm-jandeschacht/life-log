import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import { Colors, Shadow, Transition } from '../../variables'
import logo from '../../assets/images/logo.png'

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

export const Login = ({ setToken, setFamilyMemberId }:LoginProps) => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const token = await loginUser ({
            username,
            password
        });

        if(!token?.msg ) {
            // Token has 
            // {
            //     token: '....'
            //     user: { id, email }
            //     familyMemberId: "..."
            // }

            setToken(token);
            setFamilyMemberId(token.familyMemberId);
        }
    }
    
    return (
        <StyledDiv>

            <StyledLogo>
                <img src={logo} alt="Logo of Life log" />
            </StyledLogo>

            <StyledContainer>
                <h2>Please sign in</h2>

                <StyledForm onSubmit={handleSubmit}>
                    <label>
                        Username
                        <input required type="text" onChange={e => setUsername(e.target.value)}/>
                    </label>
                    <label>
                        Password
                        <input required type="password" onChange={ e=> setPassword(e.target.value) } />
                    </label>
                    <StyledButtons>
                        <a href="/">Register</a>
                        <button type="submit">Sign in</button>
                    </StyledButtons>
                </StyledForm>
            </StyledContainer>
        </StyledDiv>
    )
}

