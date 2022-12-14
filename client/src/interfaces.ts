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
    created_at: Date;
    updated_at: Date;
}

export interface HelpPage {
  id: number;
  page: string;
  step: number;
  title: string;
  text: string;
  image: string;
}


export interface LikedPicture {

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
    hidePictures: boolean
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

export interface LikedPicture {
  id: number;
  familyMember: FamilyMember;
  albumitem: AlbumItem;
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

export interface AlbumItemsAllData {
  albumItems: AlbumItem[];
}

export interface AlbumItemData {
  albumItem: AlbumItem;
}

export interface WishListItemData {
  wishListItem: WishListItemType;
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

export interface FamilyRelationByIds {
  familyRelationsByRelatedAndFamilyMemberId: FamilyRelation
}

export interface InAlbumItemData {
  FamilyMemberInAlbumItemsByFamilyMemberId: InAlbumItem[]
}

export interface LikedPicturesData {
  likedPicturesByFamilyMemberId: LikedPicture[];
}

export interface LikedPictureData {
  likedPicture: LikedPicture;
}

export interface HelpPagesData {
  helpPagesByPageName: HelpPage[];
}