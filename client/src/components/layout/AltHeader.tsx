import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useFetch } from '../../Hooks'
import { Breakpoint, Colors } from '../../variables';

const HeaderTop = styled.div`
    background: ${Colors.primary};
    padding: 0.75rem 1.5rem;
    @media (min-width: ${Breakpoint.small}) {
        padding: 1rem 3rem;
    }
    @media (min-width: ${Breakpoint.medium}) {
        padding: 2rem 4rem;
    }
    @media (min-width: ${Breakpoint.large}) {
        padding: 1rem 4rem;
    }
    
    div {
        max-width: 80rem;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${Colors.secondary};
        font-weight: 500;
        font-size: 1rem;
        @media (min-width: ${Breakpoint.small}) {
            font-size: 1.2rem;
        }
        @media (min-width: ${Breakpoint.medium}) {
            font-size: 1.5rem;
        }
        @media (min-width: ${Breakpoint.large}) {
            font-size: 1.2rem;
        }
    }    
`

const StyledWeather = styled.div`
    max-width: none;
    margin: 0!important;
    display: flex;
    align-items: center;
`


const AltHeader: React.FC = () => {
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
    
    const url = `${process.env.REACT_APP_WEATHER_BASE_URL}lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`
    
    const [data, isLoading, error] = useFetch(url);
    
    const weatherIcon: any = data.cod === 200 ? data.weather[0].icon : data.cod;
    const weatherTemp: any = data.cod === 200 ? data.main.temp : data.cod;

    const today = new Date().toDateString()

    return (
        <header>
            <HeaderTop>
                <div>
                    <p>{today}</p>

                    <StyledWeather>
                        <p>{weatherTemp}°C</p>
                        
                        <img src={`https://openweathermap.org/img/wn/${weatherIcon}.png`} alt="Current weather" />
                    </StyledWeather>
                </div>
            </HeaderTop>
        </header>
    )
}

export default AltHeader
