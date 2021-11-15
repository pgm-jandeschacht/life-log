import React from "react";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";
import { AddAgendaItem } from "../components/agenda";

const MyAgendaAdd: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout formPage={true} backgroundStyle={"accent3"} PageTitle={"Add item to agenda"}>
           <AddAgendaItem/>
        </BaseLayout>
    )
}

export default MyAgendaAdd;