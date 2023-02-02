import { Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout/Layout";
import Startpage from "./Components/Startpage/Startpage";
import Groups from "./Components/Groups/Groups";
import RoomsPage from "./Components/Rooms/RoomsPage";
import GroupInfoPage from "./Components/Groups/Group-Info-Page";
import AdminLayout from "./Components/Admin/AdminLayout";

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Startpage />}/>
                <Route path="/groups" element={<Groups/>}/>
                <Route path="/info" element={<GroupInfoPage />} />  
                <Route path="/rooms" element={<RoomsPage />}/>
                <Route path="/admin" element={<AdminLayout />} />
            </Route>
        </Routes>
    )
}

export default AppRouter;