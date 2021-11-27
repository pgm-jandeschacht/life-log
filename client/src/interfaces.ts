export interface AgendaItem {
    id: number;
    title: string;
    authorId?: number;
    author: FamilyMember;
    with?: FamilyMember[];
    date: Date;
}

export interface AgendaItemsData {
    agendaItemsByAuthor: AgendaItem[];
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
    image: string;
    dob: string;
    occupation: string;
    country: string;
    city: string;
    isSender?: boolean;
    isAlive?: boolean;
    notes?: Note[];
    wishListItems?: WishListItem[];
    albumitems?: AlbumItem[];
    agendaItems?: AgendaItem[];
    
    father?: FamilyMember;
    mother?: FamilyMember;
    partner?: FamilyMember;
    children?: FamilyMember[];
    
    inAlbumItems?: AlbumItem[];
    invitedAgendaItems?: AgendaItem[];
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

export interface FamilyRelationData {
    familyRelationsByFamilyMemberId: FamilyRelation[]
}


export interface FamilyRelation {
    id: number
    familyMember: FamilyMember
    relationType: RelationType
    relatedFamilyMember: FamilyMember
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
    duedate?: Date;
    author: FamilyMember;
    for?: FamilyMember[];
}

export interface RelationType {
    id: number;
    name: string
}


