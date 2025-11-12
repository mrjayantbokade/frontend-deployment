import { useEffect, useState } from "react";
import { api } from "../api/rest";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.users().then(setUsers);
    }, []);

    return (
        <div>
            <h2 className="text-xl mb-2">Users</h2>
            <pre>{JSON.stringify(users, null, 2)}</pre>
        </div>
    );
}
