import React from "react";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const MyAgendaAdd: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout backgroundStyle={"accent3"} PageTitle={"Add item to agenda"}>
           <p>This is the ADD ITEM AGENDA PAGE page!</p>
        </BaseLayout>
    )
}

export default MyAgendaAdd;