import React from "react";
import { PicturesQuickNav, PicturesNames } from "../components/pictures";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const users = [
    {
        id: 1,
        profilePic: "karina_cox.jpg",
        firstName: "Karina",
        lastName: "Cox",
    },
    {
        id: 1,
        profilePic: "landyn_foster.jpg",
        firstName: "Landyn",
        lastName: "Foster",
    },
    {
        id: 1,
        profilePic: "lucia_mullen.jpg",
        firstName: "Lucia",
        lastName: "Mullen",
    },
    {
        id: 1,
        profilePic: "maria_kox.jpg",
        firstName: "Maria",
        lastName: "Kox",
    },
    {
        id: 1,
        profilePic: "peter_kox.jpg",
        firstName: "Peter",
        lastName: "Kox",
    },
    {
        id: 1,
        profilePic: "oscar_kox.jpg",
        firstName: "Oscar",
        lastName: "Kox",
    },
    {
        id: 1,
        profilePic: "max_thomson.jpg",
        firstName: "Max",
        lastName: "Thomson",
    },
]

const MyPicturesPage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout backgroundStyle={"accent1"} PageTitle={"My pictures"}>
           <PicturesQuickNav/>

           <PicturesNames users={users} />
        </BaseLayout>
    )
}

export default MyPicturesPage;