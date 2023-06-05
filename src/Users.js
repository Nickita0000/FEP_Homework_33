import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import GalleryApi from "./GalleryAPI/GalleryAPI";
import {initialList} from "./App";

export default function Users() {
    const [usersList, setUsersList] = useState(initialList)
    useEffect(() => {
        GalleryApi.getListOfUsers().then((newList) => {
            setUsersList([ ...newList])
         })
    }, [])

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {
                    usersList.map(user => (
                        <li key={user.id}>
                            <Link to={`/${user.id}/albums`}>
                                {user.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}