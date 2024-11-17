import {RouteObject, useRoutes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {SoftwareCatalogPage} from "./pages/SoftwareCatalogPage";
import {SoftwarePage} from "./pages/SoftwarePage";
import {InstallSoftwareRequestPage} from "./pages/InstallSoftwareRequestPage";
import {RegistrationPage} from "./pages/RegistrationPage";
import {LoginPage} from "./pages/LogInPage";
import {NotFoundPage} from "./pages/NotFoundPage";
import {ForbiddenPage} from "./pages/ForbiddenPage";
import {UserAccountPage} from "./pages/UserAccountPage";
import {InstallSoftwareRequestsListPage} from "./pages/InstallSoftwareRequestsListPage";
import {MainLayout} from "./components/MainLayout";
import {PrivatePageFirewall} from "./components/PrivatePageFirewall";

export const AppRoutes = () => {
    const routes: RouteObject[] = [
        {
            element: <MainLayout/>,
            children: [
                {
                    element: <PrivatePageFirewall/>,
                    children: [
                        {
                            path: "/install_software_request/:id",
                            element: <InstallSoftwareRequestPage/>,
                        },
                        {
                            path: "/install_software_requests_list",
                            element: <InstallSoftwareRequestsListPage/>,
                        },
                    ],
                },
                {
                    path: "/",
                    element: <MainPage/>,
                },
                {
                    path: "/software_catalog",
                    element: <SoftwareCatalogPage/>,
                },
                {
                    path: "/software/:id",
                    element: <SoftwarePage/>,
                },
                {
                    path: "/registration",
                    element: <RegistrationPage/>,
                },
                {
                    path: "/login",
                    element: <LoginPage/>,
                },
                {
                    path: "/user_account",
                    element: <UserAccountPage/>,
                },
                {
                    path: "/forbidden",
                    element: <ForbiddenPage/>,
                },
                {
                    path: "*",
                    element: <NotFoundPage/>,
                },
            ],
        },

    ];

    const routeResult = useRoutes(routes);

    return <>{routeResult}</>;
};