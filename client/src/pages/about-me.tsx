import React from "react";
import { AboutMe } from "../components/about-me";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

// example object agenda
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
    activeLocation: "Toronto, Canada",
    image: ""
}


const AboutMePage: React.FunctionComponent<Ipage> = props => {

    return (
        <BaseLayout backgroundStyle={"accent4"} PageTitle={`About ${user.firstName}`} >
           <AboutMe/>
        </BaseLayout>
    )
}

export default AboutMePage;