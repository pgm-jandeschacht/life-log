import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router";
import { Loading } from "../components/alerts";
import { PicturesList } from "../components/picturesLists";
import { GET_FAMILYMEMBER_BY_ID } from "../graphql/familyMembers";
import { FamilyMemberData } from "../interfaces";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const MyPicturesUserPage: React.FunctionComponent<Ipage> = props => {
    const { userId } = useParams<{ userId: any }>();
    const { data, loading, error } = useQuery<FamilyMemberData>(GET_FAMILYMEMBER_BY_ID, {
        variables: {
            id: parseInt(userId)
        }
    });

    if(loading) return <Loading/>;
    if(error) return <p>{error.message}</p>;

    return (
        <BaseLayout backgroundStyle={"accent1"} PageTitle={`Pictures from ${data?.familyMemberById.firstname}`}>
            <PicturesList user={userId}/>
        </BaseLayout>
    )
}

export default MyPicturesUserPage;