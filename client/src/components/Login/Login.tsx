import React, { useState} from 'react'
// import PropTypes from 'prop-types'
import './Login.css'

import { useQuery } from '@apollo/client';


// import useFamilyMember from '../../hooks/useFamilyMember';
import { GET_FAMILYMEMBER_BY_USERID } from '../../graphql/familyMembers';
// '../../graphql/queries';
import { FamilyMemberData } from '../../interfaces';

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
    setFamilyMember: any
}

export const Login = ({ setToken, setFamilyMember }:LoginProps) => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const token = await loginUser ({
            username,
            password
        });

        if(!token?.msg ) {
            setToken(token);

            // Query for familyMember
            const { loading, error, data } = useQuery<FamilyMemberData>(GET_FAMILYMEMBER_BY_USERID, {
                fetchPolicy: 'cache-first',
                variables: {
                    id: token.user.id
                }
            });

            if(loading) console.log("loading ...");
            if(error) console.log("ERRRORRR!!");
            
            if(data){
                setFamilyMember(data);
            }
        }
        // if(token?.acces_token) {
        //     console.log('token',token.acccess_token);
        //     setToken(true);
        // } else {
        //     console.log('NOT TOKEN');
        //     setToken(false)
        // }
        // console.log('token in login', token);

        // setUserStatus(true);
    }
    
    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUsername(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={ e=> setPassword(e.target.value) } />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

