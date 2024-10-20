import {RouteObject, useRoutes} from "react-router-dom";
import {IGlobalProps} from "./App.typing";
import {PrivatePages} from "./components/PricatePages";
import {MainPage} from "./pages/MainPage";
import {SoftwareCatalogPage} from "./pages/SoftwareCatalogPage";
import {SoftwarePage} from "./pages/SoftwarePage";

export const AppRoutes = (props: IGlobalProps) => {
    const routes: RouteObject[] = [
        {
            path: "/",
            element: <PrivatePages {...props} />,
            children: [
                {
                    path: "",
                    element: <MainPage {...props} />,
                },
                {
                    path: "software_catalog",
                    element: <SoftwareCatalogPage {...props} />,
                },
                {
                    path: "software/:id",
                    element: <SoftwarePage/>,
                },
                // /* {
                //   path: "basket",
                //   element: <BasketPage />,
                // }, */
                // {
                //     path: "about",
                //     element: <AboutPage />,
                // },
            ],
        },
        // {
        //     path: "/auth",
        //     element: <AuthPage {...props} />,
        // },

        // {
        //     path: "*",
        //     element: <NotFoundPage />,
        // },
    ];

    const routeResult = useRoutes(routes);

    return <>{routeResult}</>;
};