import React from "react";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const WishlistPage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout altPage={true} backgroundStyle={"accent5"} PageTitle={"My wishlist"}>
           <p>This is the MY WISHLIST page!</p>
        </BaseLayout>
    )
}

export default WishlistPage;