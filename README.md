# bun-trpc-react

A bun monorepo boilerplate project for using [bun](https://bun.sh) with [trpc](https://trpc.io) and [React](https://reactjs.org).

This project includes:
- monorepo:
  - bun
  - prettier
- [apps/frontend](apps/frontend)
  - vite
  - tailwind
  - react
- Backend:
  - [apps/backend](apps/backend)
    - elysia
    - trpc
    - zod

**To install dependencies:**

```bash
bun install
```

**To run:**

```bash
bun dev
```
- Frontend: http://localhost:5173
- Trpc panel: http://localhost:8080/trpc-panel
