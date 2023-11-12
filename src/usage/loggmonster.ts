type Options = {
  /**
   * Event name
   *
   * For example, "New user signed up"
   */
  event: string;
  /**
   * One single emoji
   *
   * For example, "😻"
   */
  emoji?: string;
  /**
   * User email or ID
   *
   * For example, "raul@logg.monster" or a UUID
   */
  user?: string;
};

export class LoggMonster {
  private readonly key: string;

  constructor(key: string) {
    this.key = key;
  }

  public async track(opts: Options) {
    const body = JSON.stringify({
      ...opts,
    });

    const res = await fetch('api.thumbsup.to/logg/create', {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.key}`,
      },
    });

    if (!res.ok) throw new Error('Error tracking event');

    return true;
  }
}
