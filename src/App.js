import {Routes, Route} from "react-router-dom";
import NotFound from "./NotFound";
import UsersRoutes from './UsersRoutes'
import './styles.css'
export const initialList = []

function App() {
        return (
            <div>
                <Routes>
                    <Route path='*' element={<UsersRoutes />} />
                    <Route path='/*' element={<NotFound />}/>
                </Routes>
            </div>
        )
}

export default App;
