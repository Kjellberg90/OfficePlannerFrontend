import { Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout/Layout";
import Startpage from "./Components/Startpage/Startpage";
import Groups from "./Components/Groups/Groups";
import RoomsPage from "./Components/Rooms/RoomsPage";
import GroupInfoPage from "./Components/Groups/Group-Info-Page";
import ProtectedRoutes from "./Components/ProtectedRoute/ProtectedRoutes";
import AdminPage from "./Components/Admin/Admin";
import LoginPage from "./Components/Login/Login";


const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Startpage />}/>
                <Route path="/groups" element={<Groups/>}/>
                <Route path="/info" element={<GroupInfoPage />} />  
                <Route path="/rooms" element={<RoomsPage />}/>
                <Route path="/login" element={<LoginPage />} />
                
                <Route path="/admin" element={<ProtectedRoutes />}>
                  <Route path="/admin" element={<AdminPage />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default AppRouter;