import React from "react";
import { EditWishListItem } from "../components/wishlist";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const MyWishlistEdit: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout formPage={true} backgroundStyle={"accent5"} PageTitle={"Edit item in wishlist"}>
           <EditWishListItem />
        </BaseLayout>
    )
}

export default MyWishlistEdit;