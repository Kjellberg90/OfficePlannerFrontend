import { Routes, Route } from "react-router-dom"
import Layout from "./Compontents/Layout";
import Startpage from "./Compontents/Startpage";
import Test from "./Compontents/Test";
import Groups from "./Compontents/Groups";
import Rooms from "./Compontents/Rooms"


const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Startpage />}/>
                <Route path="/test" element={<Test/>}/>
                <Route path="/groups" element={<Groups/>}/>
                <Route path="/rooms" element={<Rooms/>}/>
            </Route>
        </Routes>

    )
}

export default AppRouter;