import IRoute from "../interfaces/route";
import AboutPage from "../pages/about";
import AboutMePage from "../pages/about-me";
import HomePage from "../pages/home";
import MyAgendaPage from "../pages/my-agenda";
import MyAlbumPage from "../pages/my-album";
import MyFamilyPage from "../pages/my-family";
import MyNotesPage from "../pages/my-notes";
import WishlistPage from "../pages/wishlist";

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
        path: '/my-notes',
        name: 'My Notes',
        component: MyNotesPage,
        exact: true
        
    },
    {
        path: '/my-agenda',
        name: 'My Agenda',
        component: MyAgendaPage,
        exact: true
        
    },
    {
        path: '/my-album',
        name: 'My Album Page',
        component: MyAlbumPage,
        exact: true
        
    },
    {
        path: '/wishlist',
        name: 'WishList Page',
        component: WishlistPage,
        exact: true
        
    },
    {
        path: '/my-family',
        name: 'My Family Page',
        component: MyFamilyPage,
        exact: true
        
    },
]

export default routes;