import Products from "../components/Products";
import Tasks from "../components/Tasks";
import Posts from "../components/Posts";
import Comments from "../components/Comments";
import Chat from "../components/Chat";
import Notifications from "../components/Notifications";
import Users from "../components/User.tsx";

export default function Home() {
    return (
        <div className="grid grid-cols-2 gap-6">
            <Users />
            <Products />
            <Tasks />
            <Posts />
            <Comments />
            <Chat />
            <Notifications />
        </div>
    );
}
