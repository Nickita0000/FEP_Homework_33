import { Route, Routes} from "react-router-dom";
import NotFound from "./NotFound";
import Users from "./Users";
import AlbumsRoutes from "./AlbumsRoutes";

export default function UsersRoutes() {
    return (
            <Routes>
                <Route path='/' element={<Users />}/>
                <Route path='/:userId/albums/*' element={<AlbumsRoutes />}/>
                <Route path='/*' element={<NotFound />}/>
            </Routes>
    )
}