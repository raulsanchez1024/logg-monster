# logg-monster

A Javascript package that helps you track what matters the most.

# Installation

Install npm package

## npm

```
$ npm install logg-monster
```

## yarn

```
$ yarn add logg-monster
```

# Usage

## Initialize `logg-monster`

Copy/paste your API key from https://logg.monster/overview

```typescript
import { LoggMonster } from 'logg-monster';

const loggMonster = new LoggMonster(API_KEY);
```

## Tracking events

```typescript
router.post('user', async () => {
  // Your logic...

  loggMonster.track({
    event: 'New user signed up',
    emoji: '😻',
    user: user.email,
  });
});
```

# API

## Options

```typescript
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
```

Crafted in Colorado 🏔️
