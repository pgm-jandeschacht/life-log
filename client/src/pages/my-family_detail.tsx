import React from "react";
import Ipage from '../interfaces/page';
import { BaseLayout } from "../layouts";
import { FamilyDetail } from '../components/familyDetail'
import { useParams } from "react-router";
 
const MyFamilyDetail: React.FunctionComponent<Ipage> = () => {
    const { userId } = useParams<{ userId: any }>();
    return (
        <BaseLayout backButton={true} backgroundStyle={"accent2"} PageTitle={"My family"}>
           <FamilyDetail userId={userId}/>
        </BaseLayout>
    )
}

export default MyFamilyDetail;