import {RouteObject, useRoutes} from "react-router-dom";
import {IGlobalProps} from "./App.typing";
import {PrivatePages} from "./components/PricatePages";
import {MainPage} from "./pages/MainPage";

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
                // {
                //     path: "planet/:id",
                //     element: <PlanetPage />,
                // },
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