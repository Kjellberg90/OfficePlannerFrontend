import { Routes, Route } from "react-router-dom"
import Layout from "./Compontents/Layout";
import Startpage from "./Compontents/Startpage";
import Test from "./Compontents/Test";


const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Startpage />}/>
                <Route path="/test" element={<Test/>}/>
            </Route>
        </Routes>

    )
}

export default AppRouter;