import { Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout";
import Startpage from "./Components/Startpage";
import Test from "./Components/Test";
import Groups from "./Components/Groups";
import Rooms from "./Components/Rooms";
import GroupInfoPage from "./Components/Group-Info-Page";


const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Startpage />}/>
                <Route path="/test" element={<Test/>}/>
                <Route path="/groups" element={<Groups/>}/>
                {/* Hårdkodat värde */}
                    <Route path="info/DQT" element={<GroupInfoPage />} />  
                <Route path="/rooms" element={<Rooms/>}/>
            </Route>
        </Routes>

    )
}

export default AppRouter;