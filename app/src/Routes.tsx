import {RouteObject, useRoutes} from "react-router-dom";
import {IGlobalProps} from "./App.typing";
import {MainPage} from "./pages/MainPage";
import {SoftwareCatalogPage} from "./pages/SoftwareCatalogPage";
import {SoftwarePage} from "./pages/SoftwarePage";
import {InstallSoftwareRequestPage} from "./pages/InstallSoftwareRequestPage";
import {RegistrationPage} from "./pages/RegistrationPage";
import {LoginPage} from "./pages/LogInPage";
import {NotFoundPage} from "./pages/NotFoundPage";
import {ForbiddenPage} from "./pages/ForbiddenPage";
import {UserAccountPage} from "./pages/UserAccountPage";

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
        {
            path: "/install_software_request/:id",
            element: <InstallSoftwareRequestPage {...props}/>,
        },
        {
            path: "/registration",
            element: <RegistrationPage {...props}/>,
        },
        {
            path: "/login",
            element: <LoginPage {...props}/>,
        },
        {
            path: "/user_account",
            element: <UserAccountPage {...props}/>,
        },
        {
            path: "/forbidden",
            element: <ForbiddenPage/>,
        },
        {
            path: "*",
            element: <NotFoundPage/>,
        },
    ];

    const routeResult = useRoutes(routes);

    return <>{routeResult}</>;
};