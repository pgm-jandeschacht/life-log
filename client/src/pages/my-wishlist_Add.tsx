import React from "react";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const MyWishlistAdd: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout backgroundStyle={"accent5"} PageTitle={"Add item to wishlist"}>
           <p>This is the ADD ITEM WISHLIST PAGE page!</p>
        </BaseLayout>
    )
}

export default MyWishlistAdd;