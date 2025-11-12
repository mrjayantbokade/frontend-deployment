import { useEffect, useState } from "react";
import { notificationSocket } from "../api/sockets";

interface N {
    id: number;
    title: string;
    message: string;
    type: string;
    timestamp: string;
}

export default function Notifications() {
    const [list, setList] = useState<N[]>([]);

    useEffect(() => {
        notificationSocket.on("notification", n => setList(p => [...p, n]));
    }, []);

    return (
        <div className="p-4 border border-gray-700 rounded bg-gray-800">
            <h2 className="text-lg mb-3">Live Notifications</h2>

            <div className="space-y-2 h-40 overflow-auto">
                {list.map(n => (
                    <div
                        key={n.id}
                        className="p-2 bg-gray-900 rounded border border-gray-700"
                    >
                        <div className="font-semibold">{n.title}</div>
                        <div className="text-sm">{n.message}</div>
                        <div className="text-gray-400 text-xs">{n.timestamp}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
