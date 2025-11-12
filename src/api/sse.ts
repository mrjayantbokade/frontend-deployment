export function listenSSE(url: string, onData: (data: any) => void) {
    const ev = new EventSource(url);
    ev.onmessage = e => onData(JSON.parse(e.data));
    return ev;
}
