import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  create: publicProcedure.input(z.object({ title: z.string() })).mutation(async ({ ctx, input }) => {
    return {
      id: "1",
      title: input.title,
    };
  }),
});