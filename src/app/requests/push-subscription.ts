export class PushSubscription {
  endpoint: string;
  expirationTime: string | null;
  keys: {
    p256dh: string,
    auth: string
  };
}
