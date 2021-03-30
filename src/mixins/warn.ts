export default function warn(msg: unknown): void {
    console.error(`[Rabbit] Error: ${msg}`);
    return;
}
