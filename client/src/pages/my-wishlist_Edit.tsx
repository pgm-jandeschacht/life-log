import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router";
import { EditWishListItem } from "../components/wishlist";
import { GET_WISHLISTITEM_BY_WISHLISTITEM_ID } from "../graphql/wishListItems";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const MyWishlistEdit: React.FunctionComponent<Ipage> = props => {
    const { wishListId } = useParams<{ wishListId: any }>();

    const { data, loading, error } = useQuery(GET_WISHLISTITEM_BY_WISHLISTITEM_ID, {
        variables : {
            id: parseInt(wishListId)
        }
    });
    if(!loading && data) {
        console.log(data);
    }

    return (
        <BaseLayout formPage={true} backgroundStyle={"accent5"} PageTitle={"Edit item in wishlist"}>
           <EditWishListItem wish={data?.wishListItem}/>
        </BaseLayout>
    )
}

export default MyWishlistEdit;