import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../api/graphql";

export default function Posts() {
    const { data } = useQuery(QUERY_POSTS);

    return (
        <div className="p-4 border border-gray-700 rounded bg-gray-800">
            <h2 className="text-lg mb-3">Posts</h2>

            <div className="space-y-3">
                {data?.posts?.map((p: any) => (
                    <div
                        key={p.id}
                        className="p-3 bg-gray-900 border border-gray-700 rounded"
                    >
                        <div className="font-semibold">{p.title}</div>
                        <div className="text-sm">{p.content}</div>
                        <div className="text-xs text-gray-400">by {p.author}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
