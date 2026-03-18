/// <reference lib="deno.unstable" />

/**
 * Deno KV storage layer for Newsletter Subscribers.
 */

export interface Subscriber {
  email: string;
  timestamp: number;
  status: "active" | "unsubscribed";
}

let kvInstance: Deno.Kv | null = null;

async function getKv() {
  if (typeof Deno.openKv !== "function") {
    console.warn(
      "Deno.openKv is not available. (Hint: run with --unstable-kv)",
    );
    return null;
  }
  if (!kvInstance) {
    kvInstance = await Deno.openKv();
  }
  return kvInstance;
}

export async function subscribe(email: string) {
  const kv = await getKv();
  if (!kv) return;
  const subscriber: Subscriber = {
    email,
    timestamp: Date.now(),
    status: "active",
  };
  await kv.set(["subscribers", email], subscriber);
}

export async function unsubscribe(email: string) {
  const kv = await getKv();
  if (!kv) return;
  const subscriber: Subscriber = {
    email,
    timestamp: Date.now(),
    status: "unsubscribed",
  };
  await kv.set(["subscribers", email], subscriber);
}

export async function isSubscribed(email: string): Promise<boolean> {
  const kv = await getKv();
  if (!kv) return false;
  const res = await kv.get<Subscriber>(["subscribers", email]);
  return res.value?.status === "active";
}

export async function getSubscriber(email: string): Promise<Subscriber | null> {
  const kv = await getKv();
  if (!kv) return null;
  const res = await kv.get<Subscriber>(["subscribers", email]);
  return res.value;
}

export async function closeKv() {
  if (kvInstance) {
    await kvInstance.close();
    kvInstance = null;
  }
}
