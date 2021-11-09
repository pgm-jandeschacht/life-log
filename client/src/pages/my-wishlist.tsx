import React from "react";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const WishlistPage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout>
           <p>This is the MY WISHLIST page!</p>
        </BaseLayout>
    )
}

export default WishlistPage;