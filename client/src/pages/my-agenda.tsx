import React from "react";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";

const MyAgendaPage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout>
           <p>This is the MY AGENDA page!</p>
        </BaseLayout>
    )}

export default MyAgendaPage;