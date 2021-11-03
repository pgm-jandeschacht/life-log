// path = url after domain
// name = name of the page
// exact = routing path has to be exact y/n
// component = exported component
// props to make routing configuration
export default interface IRoute {
    path: string;
    name: string;
    exact: boolean;
    component: any;
    props?: any;
}