import { Routes, Route } from "react-router-dom"
import Layout from "./Compontents/Layout";
import Welcome from "./Compontents/Welcome";
import Test from "./Compontents/Test";


const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Welcome />}/>
                <Route path="test" element={<Test />}/>
            </Route>
        </Routes>

    )
}

export default AppRouter;