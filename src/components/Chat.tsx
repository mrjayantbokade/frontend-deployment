import { useEffect, useState } from "react";
import { chatSocket } from "../api/sockets";

interface Msg {
    user: string;
    message: string;
    timestamp: string;
}

export default function Chat() {
    const [msgs, setMsgs] = useState<Msg[]>([]);
    const [text, setText] = useState("");

    useEffect(() => {
        chatSocket.emit("join", { user: "Client" });
        chatSocket.on("message", m => setMsgs(p => [...p, m]));
    }, []);

    return (
        <div className="p-4 border border-gray-700 rounded bg-gray-800">
            <h2 className="text-lg mb-3">Chat</h2>

            <div className="h-40 overflow-auto bg-gray-900 p-2 text-sm mb-3 rounded">
                {msgs.map((m, i) => (
                    <div key={i} className="mb-1">
                        <span className="text-blue-400">{m.user}:</span>{" "}
                        <span>{m.message}</span>
                        <div className="text-gray-500 text-xs">{m.timestamp}</div>
                    </div>
                ))}
            </div>

            <div className="flex gap-2">
                <input
                    className="p-2 text-black flex-1 rounded"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button
                    className="px-4 py-2 bg-blue-600 rounded"
                    onClick={() => {
                        chatSocket.emit("message", { user: "Client", message: text });
                        setText("");
                    }}
                >
                    Send
                </button>
            </div>
        </div>
    );
}
