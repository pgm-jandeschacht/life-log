import React from "react";
import { WishList } from "../components/wishlist";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const WishlistPage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout altLink={"my-wishlist/add"} altButton={true} backgroundStyle={"accent5"} PageTitle={"My wishlist"}>
            <WishList/>
        </BaseLayout>
    )
}

export default WishlistPage;