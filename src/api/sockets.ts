import { io } from "socket.io-client";

export const chatSocket = io("http://localhost:8001");
export const notificationSocket = io("http://localhost:8001/notifications");
