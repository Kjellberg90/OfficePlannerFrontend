import { Routes, Route } from "react-router-dom"
import Layout from "./Compontents/Layout";
import Welcome from "./Compontents/Welcome";


const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Welcome />}/>
            </Route>
        </Routes>

    )
}

export default AppRouter;