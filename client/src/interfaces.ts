export interface AgendaItem {
    id: number;
    title: string;
    authorId?: number;
    author: FamilyMember;
    with?: FamilyMember[];
}

export interface AlbumItem {
    id: number;
    location?: string;
    description?: string;
    uploaderId?: number;
    uploader: FamilyMember;
    inPicture: FamilyMember[];
}

export interface FamilyMember {
    id: number;
    firstname: string;
    lastname: string;
    gender: string;
    bio: string;
    isSender?: boolean;
    isAlive?: boolean;
    father?: FamilyMember;
    mother?: FamilyMember;
    partner?: FamilyMember;
    children?: FamilyMember[];
    notes?: Note[];
    albumitems?: AlbumItem[];
    inAlbumItems?: AlbumItem[];
    agendaItems?: AgendaItem[];
    invitedAgendaItems?: AgendaItem[];
    wishListItems?: WishListItem[];
    inWishListItem?: WishListItem[];
}

// export interface FamilyMembersData {
//     familyMemberByUserId: FamilyMember[]
// }
export interface FamilyMembersData {
    familyMembers: FamilyMember[]
}
export interface FamilyMemberData {
    familyMemberById: FamilyMember
}
// export interface FamilyMemberData {
//     familyMemberById: FamilyMember
// }

export interface Note {
    id: number;
    content: string;
    authorId?: number;
    author: FamilyMember;
    createdOn: Date;
}

export interface WishListItem {
    id: number;
    content: string;
    completed: boolean;
    authorId?: number;
    author: FamilyMember;
    for?: FamilyMember[];
}
