import { useQuery } from "@apollo/client";
import { QUERY_COMMENTS } from "../api/graphql";

export default function Comments() {
    const { data } = useQuery(QUERY_COMMENTS, { variables: { postId: 1 } });

    return (
        <div className="p-4 border border-gray-700 rounded bg-gray-800">
            <h2 className="text-lg mb-3">Comments (Post 1)</h2>

            <div className="space-y-2 text-sm">
                {data?.comments?.map((c: any) => (
                    <div
                        key={c.id}
                        className="p-2 bg-gray-900 rounded border border-gray-700"
                    >
                        <div>{c.text}</div>
                        <div className="text-gray-400 text-xs">by {c.author}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
