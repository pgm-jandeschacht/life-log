import React from "react";
import { useParams } from "react-router";
import { Picture } from "../components/picturesDetail";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";
import { GET_ALBUMITEM_BY_ID } from '../graphql/albumItems';
import { useQuery } from "@apollo/client"; 
import { AlbumItemData } from "../interfaces";
import { Loading, Error } from "../components/alerts";

const MyPicturesDetailPage: React.FunctionComponent<Ipage> = props => {
    const { userId } = useParams<{ userId: any }>();

    const { data, loading, error } = useQuery<AlbumItemData >(GET_ALBUMITEM_BY_ID, {
        variables: {
            id: parseInt(userId)
        }
    });

    if(loading) return <Loading />;
    if(error) return <Error error={error.message}/>;




    return (
        <BaseLayout backButton={true} backgroundStyle={"accent1"} PageTitle={`Picture from ${data?.albumItem.uploader.firstname}`}>
            <Picture/>
        </BaseLayout>
    )
}

export default MyPicturesDetailPage;