import type { AppRouter } from "@/server/api/root";
import type { inferRouterOutputs } from "@trpc/server";
import type { JSX } from "react";

type RouterOutput = inferRouterOutputs<AppRouter>;

type Messages = RouterOutput["user"]["getFileMessages"]["messages"];

type OmitText = Omit<Messages[number], "text">;

type ExtendedText = {
  text: string | JSX.Element;
};

export type ExtendedMessage = OmitText & ExtendedText;
