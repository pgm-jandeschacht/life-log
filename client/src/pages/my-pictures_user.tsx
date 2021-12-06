import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router";
import { Error, Loading } from "../components/alerts";
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
    if(error) return <Error error={error.message}/>;

    return (
        <BaseLayout backButton={true} backgroundStyle={"accent1"} PageTitle={`Pictures with ${data?.familyMemberById.firstname}`}>
            <PicturesList user={userId} liked={false}/>
        </BaseLayout>
    )
}

export default MyPicturesUserPage;