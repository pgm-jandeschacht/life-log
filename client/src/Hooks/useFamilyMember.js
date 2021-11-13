import { useState } from 'react';

export default function useFamilyMember() {
  const getFamilyMember = () => {
    // const tokenString = sessionStorage.getItem('token');
    const familyMemberString = localStorage.getItem('familyMember');
    const familyMember = JSON.parse(familyMemberString);

    return familyMember?.id;
  };
  const [familyMember, setFamilyMember] = useState(getFamilyMember());

  const saveFamilyMember = userToken => {
    // sessionStorage.setItem('token', JSON.stringify(userToken));
    localStorage.setItem('familyMember', JSON.stringify(familyMember));
    // setFamilyMember(familyMember.familyMemberById);
    setFamilyMember(familyMember.id);
  }

  return {
    setFamilyMember: saveFamilyMember,
    familyMember
  }
}