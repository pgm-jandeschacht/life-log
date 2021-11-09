import React from "react";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const MyAgendaPage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout backgroundStyle={"accent3"} PageTitle={"My agenda"}>
           <p>This is the MY AGENDA page!</p>
        </BaseLayout>
    )}

export default MyAgendaPage;