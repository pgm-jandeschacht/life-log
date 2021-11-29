import IRoute from "../interfaces/route";
// import AboutPage from "../pages/about";
import AboutMePage from "../pages/about-me";
import HomePage from "../pages/home";
import MyAgendaPage from "../pages/my-agenda";
import MyPicturesPage from "../pages/my-pictures";
import MyFamilyPage from "../pages/my-family";
import WishlistPage from "../pages/my-wishlist";
import SettingsPage from "../pages/Settings";
import HelpPage from "../pages/Help";
import MyAgendaAdd from "../pages/my-agenda_Add";
import MyWishlistAdd from "../pages/my-wishlist_Add";
import MyWishListEdit from "../pages/my-wishlist_Edit";
import MyFamilyDetail from "../pages/my-family_detail";
import ProfileSettingsPage from "../pages/ProfileSettings";
import MyPicturesUserPage from "../pages/my-pictures_user";
import MyPicturesRecentPage from "../pages/my-pictures_recent";
import MyPicturesLikedPage from "../pages/my-pictures_liked";

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: HomePage,
        exact: true
        
    },
    {
        path: '/about-me',
        name: 'About Me Page',
        component: AboutMePage,
        exact: true
        
    },
    {
        path: '/my-agenda',
        name: 'My Agenda',
        component: MyAgendaPage,
        exact: true
        
    },
    {
        path: '/my-pictures',
        name: 'My Pictures Page',
        component: MyPicturesPage,
        exact: true
        
    },
    {
        path: '/my-wishlist',
        name: 'My WishList Page',
        component: WishlistPage,
        exact: true
        
    },
    {
        path: '/my-family',
        name: 'My Family Page',
        component: MyFamilyPage,
        exact: true
        
    },
    {
        path: '/settings',
        name: 'Settings Page',
        component: SettingsPage,
        exact: true
        
    },
    {
        path: '/help',
        name: 'Help Page',
        component: HelpPage,
        exact: true
        
    },
    {
        path: '/my-agenda/add',
        name: 'Add item to agenda page',
        component: MyAgendaAdd,
        exact: true
        
    },
    {
        path: '/my-wishlist/add',
        name: 'Add item to wishlist page',
        component: MyWishlistAdd,
        exact: true
        
    },
    {
        path: '/my-family/:userId',
        name: 'Detail page family member',
        component: MyFamilyDetail,
        exact: true

    },
    {
        path: '/my-pictures/user/:userId',
        name: 'Detail page familymember pictures',
        component: MyPicturesUserPage,
        exact: true

    },
    {
        path: '/my-pictures/recent',
        name: 'Recently added pictures',
        component: MyPicturesRecentPage,
        exact: true

    },
    {
        path: '/my-pictures/liked',
        name: 'Liked pictures',
        component: MyPicturesLikedPage,
        exact: true

    },
    {
        path: '/my-wishlist/edit',
        name: 'Edit page wishlist',
        component: MyWishListEdit,
        exact: true

    },
    {
        path: '/settings/profile',
        name: 'Profile settings page',
        component: ProfileSettingsPage,
        exact: true

    },
]

export default routes;