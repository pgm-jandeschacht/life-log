import React, { useEffect, useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";
import { useFetch } from '../Hooks'
import { GET_ALL_FAMILYMEMBERS, GET_FAMILYMEMBER_BY_ID } from "../graphql/familyMembers";
import { FamilyMember, FamilyMemberData, FamilyMembersData } from "../interfaces";
import { Loading, Error } from "../components/alerts";
import  FamilyMemberInfo from "../components/FamilyMember/FamilyMemberInfo";
import { AgendaList } from "../components/agenda";
// import { useFetch } from 'usehooks-ts'
const HomePage: React.FunctionComponent<Ipage> = props => {
    const [longitude, setLongitude] = useState('51.228443');
    const [latitude, setLatitude] = useState('2.934465');

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.permissions
                .query({
                    name: "geolocation"
                })
                .then(function(result) {
                    const geoSuccess = (position: any) => {
                        setLatitude(position.coords.latitude)
                        setLongitude(position.coords.longitude)
                    };

                    const geoError = (error: any) => {
                        if (error.code === 1) {
                            console.error(error.message)
                          }
                    };

                    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
                    
                    // if (result.state === "denied") {
                    //     geoError(Error);
                    // }

                    // result.onchange = function() {
                    //     if (result.state === 'denied') {
                    //         geoError(Error);
                    //     }
                    // }
                });
        }
    }, [navigator.geolocation.getCurrentPosition])

    const url = `${process.env.REACT_APP_WEATHER_BASE_URL}lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_KEY}`

    const [data, isLoading, error] = useFetch(url);
    const weather = data;
    console.log(weather)

    // icon url
    // https://openweathermap.org/img/wn/04n.png

    // To make bigger
    // http://openweathermap.org/img/wn/10d@2x.png
    
    return (
        <BaseLayout PageTitle={"Home"} >
            {/* <p>This is the HOME page!</p>
            
            <FamilyMemberInfo/>
            <h1>Upcoming visits</h1>
            <AgendaList/> */}


            
        </BaseLayout>
    )
}

export default HomePage;