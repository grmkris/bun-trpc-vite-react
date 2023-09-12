import { createTRPCReact } from "@trpc/react-query";
import { ElysiaRouter } from "backend/src";

export const trpcClient = createTRPCReact<ElysiaRouter>();
