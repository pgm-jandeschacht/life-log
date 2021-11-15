import React from "react";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";
import { FamilyDetail } from '../components/familyDetail'
 
const user = {
    id: 1,
    profilePic: "karina_cox.jpg",
    firstName: "Karina",
    lastName: "Cox",
    familyMember: "Granddaughter",
    age: "35",
    city: "Toronto",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis arcu auctor, pretium nunc sed, dictum ipsum. Duis tincidunt et nulla ac porta. Phasellus id leo nec tortor rutrum gravida eget a sapien",
    maritalStatus: "Married",
    partner: "Peter Kox",
    children: [
        {
            name: 'Maria Kox',
            
        },
        {
            name: 'Oscar Kox',
        },
    ]
}

const MyFamilyDetail: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout backgroundStyle={"accent2"} PageTitle={"My family"}>
           <FamilyDetail profile={user}/>
        </BaseLayout>
    )
}

export default MyFamilyDetail;