import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./routes";
import AppLayout from "./components/app-layout";

function App() {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                {appRoutes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Route>
        </Routes>
    );
}

export default App;
