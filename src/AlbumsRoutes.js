import { Routes, Route } from "react-router-dom";
import Albums from "./Albums";
import NotFound from "./NotFound";
import Photos from "./Photos";

export default function AlbumsRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Albums />}/>
            <Route path='/:albumId/photos' element={<Photos />}/>
            <Route path='/*' element={<NotFound />}/>
        </Routes>
    )
}