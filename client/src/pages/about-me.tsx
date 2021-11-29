import React from "react";
import { AboutMe } from "../components/about-me";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

// example object user
const user = {
    id: 1,
    firstName: "Anna",
    lastName: "Boloise",
    gender: "F",
    dob: "4th august 1949",
    maritalStatus: "Widow",
    partner: "John mcCafé",
    nursingHome: "Maynard Nursing Home",
    carreer: "Risk Analist at IBM",
    location: "Toronto, Canada",
    image: "anna_boloise.jpg"
}


const AboutMePage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout backgroundStyle={"accent4"} PageTitle={`About me`} >
           <AboutMe />
           {/* <AboutMe profile={user}/> */}
        </BaseLayout>
    )
}

export default AboutMePage;