/**
 * Main types
 */

export interface AgendaItem {
    id: number;
    title: string;
    authorId?: number;
    author: FamilyMember;
    inAgendaItem?: InAgendaItem[];
    date: Date;
}

export interface AlbumItem {
    id: number;
    location?: string;
    description?: string;
    uploaderId?: number;
    image?: string;
    uploader: FamilyMember;
    inPicture: FamilyMember[];
    inAlbumItem?: InAlbumItem[];
}

export interface AlbumItemData {
    albumItemsByAuthor: AlbumItem[];
}


///////
// export interface AlbumItem {
//     id: number;
//     date: string;
// }

// export interface AlbumItemData {
//     albumItems: AlbumItem[]
// }
///////

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
    wishListItems?: WishListItemType[];
    albumitems?: AlbumItem[];
    agendaItems?: AgendaItem[];
    
    father?: FamilyMember;
    mother?: FamilyMember;
    partner?: FamilyMember;
    children?: FamilyMember[];
    
    inAlbumItems?: AlbumItem[];
    invitedAgendaItems?: AgendaItem[];
    inWishListItem?: WishListItemType[];
}

export interface FamilyRelation {
    id: number
    familyMember: FamilyMember
    relationType: RelationType
    relatedFamilyMember: FamilyMember
}

export interface Note {
    id: number;
    content: string;
    authorId?: number;
    author: FamilyMember;
    createdOn: Date;
}

export interface WishListItemType {
    id: number;
    content: string;
    completed: boolean;
    authorId?: number;
    dueDate?: Date;
    author: FamilyMember;
    inWishListItem: InWishListItem[];
}

export interface RelationType {
    id: number;
    name: string
}


/**
 * Many to many relations
 */

export interface InAgendaItem {
  id: number;
  familyMember: FamilyMember;
  agendaItem: AgendaItem;
}

export interface InAlbumItem {
  id: number;
  familyMember: FamilyMember;
  albumItem: AlbumItem;
}

export interface InWishListItem {
  id: number;
  familyMember: FamilyMember;
  wishListItem: WishListItemType;
}


/**
 * Data types incoming from queries
 */

export interface AgendaItemsData {
  agendaItemsByAuthor: AgendaItem[];
}

export interface AlbumItemsData {
  albumItemsByAuthor: AlbumItem[];
}

export interface WishListItemsData {
  wishListItemsByAuthor: WishListItemType[];
}

export interface FamilyRelationsData {
  familyRelationsByFamilyMemberId: FamilyRelation[];
}

export interface FamilyMembersData {
  familyMembers: FamilyMember[]
}

export interface FamilyMemberData {
  familyMemberById: FamilyMember
}

export interface FamilyRelationData {
  familyRelationsByFamilyMemberId: FamilyRelation[]
}

export interface InAlbumItemData {
  FamilyMemberInAlbumItemsByFamilyMemberId: InAlbumItem[]
}