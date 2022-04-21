import { setupServer } from "msw/node";
import { handlers } from "./handlers";
import { rest } from "msw";

const apis = [
  ...handlers,
  rest.get<Record<string, never>, Record<string, never>>(
    `http://localhost/error-response`,
    (req, res, ctx) => {
      const {
        params,
        url: { searchParams },
      } = req;

      return res(
        ctx.status(400),
        ctx.json({
          code: 400,
          status: "OK",
          message: "This is axios error",
        })
      );
    }
  ),
];

export const server = setupServer(...apis);
