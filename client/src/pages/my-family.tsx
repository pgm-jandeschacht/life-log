import React from "react";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";
// import { FamilyList } from "../components/Family"
import { FamilyList } from '../components/family'

const users = [
    {
        id: 1,
        profilePic: "karina_cox.jpg",
        firstName: "Karina",
        lastName: "Cox",
        familyMember: "Granddaughter"
    },
    {
        id: 1,
        profilePic: "landyn_foster.jpg",
        firstName: "Landyn",
        lastName: "Foster",
        familyMember: "Daughter"
    },
    {
        id: 1,
        profilePic: "lucia_mullen.jpg",
        firstName: "Lucia",
        lastName: "Mullen",
        familyMember: "Granddaughter"
    },
    {
        id: 1,
        profilePic: "maria_kox.jpg",
        firstName: "Maria",
        lastName: "Kox",
        familyMember: "Great-granddaughter"
    },
    {
        id: 1,
        profilePic: "peter_kox.jpg",
        firstName: "Peter",
        lastName: "Kox",
        familyMember: "Son in law"
    },
    {
        id: 1,
        profilePic: "oscar_kox.jpg",
        firstName: "Oscar",
        lastName: "Kox",
        familyMember: "Great-grandson"
    },
    {
        id: 1,
        profilePic: "max_thomson.jpg",
        firstName: "Max",
        lastName: "Thomson",
        familyMember: "Great-grandson"
    },
]

const MyFamilyPage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout backgroundStyle={"accent2"} PageTitle={"My family"}>
            <FamilyList />
        </BaseLayout>
    )
}

export default MyFamilyPage;