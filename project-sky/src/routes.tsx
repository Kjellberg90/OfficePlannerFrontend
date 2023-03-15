import { Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout/Layout";
import Startpage from "./Components/Startpage/Startpage";
import Groups from "./Components/Groups/Groups";
import RoomsPage from "./Components/Rooms/RoomsPage";
import GroupInfoPage from "./Components/Groups/Group-Info-Page";
import AdminLayout from "./Components/Admin/AdminLayout";
import AdminHomePage from "./Components/Admin/AdminHomePage";
import AdminGroups from "./Components/Admin/AdminGroups";
import AdminRooms from "./Components/Admin/AdminRooms";
import ProtectedRoutes from "./Components/ProtectedRoute/ProtectedRoutes";
import LoginPage from "./Components/Login/Login";

import AdminBooking from "./Components/Admin/AdminBooking";
import Week from "./Components/Admin/Week";
import Weeks from "./Components/Admin/Weeks";
import AdminSingleBooking from "./Components/Admin/AdminSingleBooking";

const AppRouter = () => {

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<LoginPage />}/>
                <Route path="/" element={<ProtectedRoutes />}>
                <Route path="/start" element={<Startpage />}/>
                <Route path="/groups" element={<Groups/>}/>
                <Route path="/info" element={<GroupInfoPage />} />  
                <Route path="/rooms" element={<RoomsPage />}/>
                <Route path="/login" element={<LoginPage />} />                
                    <Route path="/admin" element={<AdminLayout /> }>
                        <Route path="home" element={<AdminHomePage />} />
                        <Route path="groups" element={<AdminGroups />} />
                        <Route path="rooms" element={<AdminRooms />} />
                        <Route path="booking" element={<AdminBooking />} >
                            <Route path="weeks" element={<Weeks />} />
                            <Route path="week" element={<Week />} />
                        </Route>
                        <Route path="singlebooking" element={<AdminSingleBooking />} />
                    </Route>
                </Route>
            </Route>
        </Routes>
    )
}

export default AppRouter;