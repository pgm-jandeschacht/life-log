import React, { useEffect, useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";
import { useFetch } from '../Hooks'
import { GET_ALL_FAMILYMEMBERS, GET_FAMILYMEMBER_BY_ID } from "../graphql/familyMembers";
import { FamilyMember, FamilyMemberData, FamilyMembersData } from "../interfaces";

import  FamilyMemberInfo from "../components/FamilyMember/FamilyMemberInfo";
import { AgendaList } from "../components/agenda";


const HomePage: React.FunctionComponent<Ipage> = props => {
    // const [weather, setWeather] = useState('');
    const [isLocation, setIsLocation] = useState(false);
    // const [latitude, setLatitude] = useState(0);
    // const [longitude, setLongitude] = useState(0);
    // let latitude: number = 0;
    // let longitude: number = 0;
    // let url: string = '';
    // let weather: string = ''

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {

            setIsLocation(true);

            // setWeather(`${process.env.REACT_APP_WEATHERURL}${process.env.REACT_APP_WEATHERURL_KEY}&q=${position.coords.latitude}%2C${position.coords.longitude}`)
            // weather = `${process.env.REACT_APP_WEATHERURL}${process.env.REACT_APP_WEATHERURL_KEY}&q=${position.coords.latitude}%2C${position.coords.longitude}`
            //   setLatitude(position.coords.latitude);
            //   setLongitude(position.coords.longitude);
            });
        } else {
            navigator.geolocation.getCurrentPosition(function(error) {
                console.error(error)
            });
        }
    }, []);

    console.log(isLocation)


    //   console.log(process.env.REACT_APP_WEATHERURL)
    //   console.log(process.env.REACT_APP_WEATHERURL_KEY)

    //   const url = `${process.env.REACT_APP_WEATHERURL}${process.env.REACT_APP_WEATHERURL_KEY}&q=${latitude}%2C${longitude}`

    //   console.log(weather)

    //   const API_URL = `${movieDatabase.baseUrl}/3/${(location === 'shows') ? 'tv' : 'movie' }/${checked}?api_key=${movieDatabase.apiKey}&language=en-US&page=${page}`;
    //   const [data, isLoading, error] = useFetch(API_URL);
    
    return (
        <BaseLayout PageTitle={"Home"} >
            {

            }
            {/* <p>This is the HOME page!</p>
            
            <FamilyMemberInfo/>
            <h1>Upcoming visits</h1>
            <AgendaList/> */}


            
        </BaseLayout>
    )
}

export default HomePage;