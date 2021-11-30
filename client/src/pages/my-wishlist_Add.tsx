import React from "react";
import { AddWishListItem } from "../components/wishlist";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const MyWishlistAdd: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout formPage={true} backgroundStyle={"accent5"} PageTitle={"Add to wishlist"}>
           <AddWishListItem/>
        </BaseLayout>
    )
}

export default MyWishlistAdd;