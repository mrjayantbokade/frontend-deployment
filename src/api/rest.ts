const BASE = "http://localhost:8001";

export const api = {
    users: () => fetch(`${BASE}/users`).then(r => r.json()),
    products: () => fetch(`${BASE}/products`).then(r => r.json()),
    tasks: () => fetch(`${BASE}/tasks`).then(r => r.json()),
};
