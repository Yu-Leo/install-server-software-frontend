import {RouteObject, useRoutes} from "react-router-dom";
import {IGlobalProps} from "./App.typing";
import {MainPage} from "./pages/MainPage";
import {SoftwareCatalogPage} from "./pages/SoftwareCatalogPage";
import {SoftwarePage} from "./pages/SoftwarePage";

export const AppRoutes = (props: IGlobalProps) => {
    const routes: RouteObject[] = [
        {
            path: "/",
            element: <MainPage {...props} />,
        },
        {
            path: "/software_catalog",
            element: <SoftwareCatalogPage {...props} />,
        },
        {
            path: "/software/:id",
            element: <SoftwarePage/>,
        },
    ];

    const routeResult = useRoutes(routes);

    return <>{routeResult}</>;
};