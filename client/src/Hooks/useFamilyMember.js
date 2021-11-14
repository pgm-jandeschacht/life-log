import { useState } from 'react';

export default function useFamilyMember() {
  const getFamilyMember = () => {
    const familyMemberString = localStorage.getItem('familyMemberId');
    const familyMemberId = JSON.parse(familyMemberString);

    return familyMemberId;
  };
  const [familyMemberId, setFamilyMemberId] = useState(getFamilyMember());

  const saveFamilyMember = familyMemberId => {
    // sessionStorage.setItem('token', JSON.stringify(userToken));
    localStorage.setItem('familyMemberId', JSON.stringify(familyMemberId));
    // setFamilyMember(familyMember.familyMemberById);
    setFamilyMemberId(familyMemberId);
  }

  return {
    setFamilyMemberId: saveFamilyMember,
    familyMemberId
  }
}