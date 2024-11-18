import "./App.css";
import {AppRoutes} from "./Routes";
import {useDispatch} from "./core/store";
import {USER_NAME, IS_MANAGER} from "./env.tsx";
import {saveUser} from "./core/store/slices/userSlice.ts";

function App() {
    const dispatch = useDispatch();
    const username = localStorage.getItem(USER_NAME);
    const isManager = localStorage.getItem(IS_MANAGER);

    dispatch(
        saveUser({
            username: username || "",
            isManager: isManager == "true",
        })
    );

    return (
        <AppRoutes/>
    );
}

export default App;