import { cors } from "@elysiajs/cors";
import { html } from "@elysiajs/html";
import { trpc } from "@elysiajs/trpc";
import { Elysia } from "elysia";
import { renderTrpcPanel } from "trpc-panel";
import { z } from "zod";

import { publicProcedure, router } from "./trpc";

export const elysiaRouter = router({
  hello: publicProcedure.input(z.string().nullish()).query(({ input }) => {
    return `Hello ${input ?? "World"}! from Elysia 🦊`;
  }),
});

export type ElysiaRouter = typeof elysiaRouter;

const app = new Elysia()
  .use(cors({ origin: "*" }))
  .use(trpc(elysiaRouter))
  .use(html())
  .get("/trpc-panel", () => {
    return renderTrpcPanel(elysiaRouter, {
      url: `http://localhost:8080/trpc`,
    });
  })
  .listen(8080);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
