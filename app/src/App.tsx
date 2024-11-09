import "./App.css";
import {BrowserRouter} from "react-router-dom";
import {AppRoutes} from "./Routes";
import {Provider} from "react-redux";
import {store} from "./core/store";

function App() {
    return (
        <BrowserRouter basename="/install-server-software-frontend">
            <Provider store={store}>
                <AppRoutes/>
            </Provider>
        </BrowserRouter>
    );
}

export default App;