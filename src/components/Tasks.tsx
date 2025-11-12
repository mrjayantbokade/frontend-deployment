import { useEffect, useState } from "react";
import { api } from "../api/rest";
import { listenSSE } from "../api/sse";

export default function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [events, setEvents] = useState<any>(null);
    const [progress, setProgress] = useState<any>(null);

    useEffect(() => {
        api.tasks().then(setTasks);

        const ev = listenSSE("http://localhost:8001/tasks/events", setEvents);
        const pr = listenSSE("http://localhost:8001/tasks/progress", setProgress);

        return () => {
            ev.close();
            pr.close();
        };
    }, []);

    return (
        <div className="p-4 border border-gray-700 rounded bg-gray-800">
            <h2 className="text-lg mb-3">Tasks</h2>

            <div className="space-y-1 text-sm mb-4">
                {tasks.map((t: any) => (
                    <div key={t.id} className="p-2 bg-gray-900 rounded border border-gray-700">
                        {t.title}{" "}
                        <span className="text-gray-400 text-xs">
              {t.completed ? "done" : "pending"}
            </span>
                    </div>
                ))}
            </div>

            <h3 className="text-md">Events</h3>
            <pre className="bg-gray-900 p-2 rounded text-xs mb-3">
        {JSON.stringify(events, null, 2)}
      </pre>

            <h3 className="text-md">Progress</h3>
            <div className="w-full bg-gray-900 rounded h-3 mb-2 relative">
                <div
                    className="bg-green-500 h-3 rounded"
                    style={{ width: `${progress?.progress || 0}%` }}
                ></div>
            </div>
            <div className="text-xs text-gray-400">{progress?.status}</div>
        </div>
    );
}
