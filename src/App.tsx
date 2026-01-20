import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./routes";
import AppLayout from "./components/app-layout";
import AuthLayout from "./components/auth-layout";

function App() {
    const appPages = appRoutes.filter((r) => r.layout === "app");
    const authPages = appRoutes.filter((r) => r.layout === "auth");

    return (
        <Routes>
            {/* auth layout routes */}
            <Route element={<AuthLayout />}>
                {authPages.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Route>

            {/* app layout routes */}
            <Route element={<AppLayout />}>
                {appPages.map((route) => (
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
