import { useEffect, useState } from "react";
import { api } from "../api/rest";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.products().then(setProducts);
    }, []);

    return (
        <div className="p-4 border border-gray-700 rounded bg-gray-800">
            <h2 className="text-lg mb-3">Products</h2>

            <table className="w-full text-sm">
                <thead className="bg-gray-900">
                <tr>
                    <th className="p-2 text-left">ID</th>
                    <th className="p-2 text-left">Name</th>
                    <th className="p-2 text-left">Price</th>
                </tr>
                </thead>
                <tbody>
                {products.map((p: any) => (
                    <tr key={p.id} className="border-b border-gray-700">
                        <td className="p-2">{p.id}</td>
                        <td className="p-2">{p.name}</td>
                        <td className="p-2">${p.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
