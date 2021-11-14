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
]

export default routes;