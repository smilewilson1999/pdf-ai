import { z } from "zod";

import { createTRPCRouter, privateProcedure } from "@/server/api/trpc";

import { db } from "@/server/db";
import { TRPCError } from "@trpc/server";
import { INFINITE_QUERY_LIMIT } from "@/config/infinite-query";

export const userRouter = createTRPCRouter({
  getUserFiles: privateProcedure.query(async ({ ctx }) => {
    const { userId } = ctx;

    const files = await db.file.findMany({
      where: {
        userId,
      },
    });

    return files;
  }),
  deleteFile: privateProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx;
      const { id } = input;

      const file = await db.file.findUnique({
        where: {
          id,
          userId,
        },
      });

      if (!file) throw new TRPCError({ code: "NOT_FOUND" });

      await db.file.delete({ where: { id } });
    }),
  getFile: privateProcedure
    .input(z.object({ key: z.string() }))
    .query(async ({ ctx, input }) => {
      const { userId } = ctx;
      const { key } = input;

      const file = await db.file.findUnique({
        where: {
          key,
          userId,
        },
      });

      if (!file) throw new TRPCError({ code: "NOT_FOUND" });

      return file;
    }),
  getFileMessages: privateProcedure
    .input(
      z.object({
        fileId: z.string(),
        limit: z
          .number()
          .min(1)
          .max(100)
          .default(INFINITE_QUERY_LIMIT)
          .nullish(),
        cursor: z.string().nullish(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { fileId, limit, cursor } = input;
      const { userId } = ctx;

      const file = await db.file.findUnique({
        where: {
          id: fileId,
          userId,
        },
      });

      if (!file) throw new TRPCError({ code: "NOT_FOUND" });

      const messages = await db.message.findMany({
        take: limit! + 1,
        where: {
          fileId,
        },
        orderBy: {
          createdAt: "desc",
        },
        cursor: cursor ? { id: cursor } : undefined,
        select: {
          id: true,
          isUserMessage: true,
          createdAt: true,
          text: true,
        },
      });

      let nextCursor: typeof cursor | undefined = undefined;

      if (messages.length > limit!) {
        const nextItem = messages.pop();
        nextCursor = nextItem?.id;
      }

      return {
        messages,
        nextCursor,
      };
    }),
  getFileUploadStatus: privateProcedure
    .input(z.object({ fileId: z.string() }))
    .query(async ({ ctx, input }) => {
      const { fileId } = input;
      const { userId } = ctx;

      const file = await db.file.findUnique({
        where: { id: fileId, userId },
      });

      if (!file) return { status: "PENDING" as const };

      return { status: file.uploadStatus };
    }),
});
