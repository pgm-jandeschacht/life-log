import React from "react";
import Ipage from "../interfaces/page";
import { BaseLayout } from "../layouts";
import { AgendaList } from "../components/agenda";
import { FamilyMemberAgendaItems } from "../components/FamilyMember";

const MyAgendaPage: React.FunctionComponent<Ipage> = props => {
    return (
        <BaseLayout altLink={"my-agenda/add"} altButton={true} backgroundStyle={"accent3"} PageTitle={"My agenda"}>
            {/* <FamilyMemberAgendaItems/> */}
            <AgendaList/>
        </BaseLayout>
    )}

export default MyAgendaPage;