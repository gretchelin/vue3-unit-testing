import { afterAll, afterEach, beforeAll } from "vitest";
import { server } from "@/mocks/server";

// setup msw
beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
