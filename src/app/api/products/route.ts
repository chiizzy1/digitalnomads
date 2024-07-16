import { z } from "zod";
import products from "@/data/products.json";

export const GET = async (req: Request) => {
  try {
    if (!products) {
      return new Response(
        JSON.stringify({
          error: "Not Found",
          data: null,
        }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({
        error: null,
        data: products,
      }),
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({
          error: error.issues,
          data: null,
        }),
        { status: 401 }
      );
    }

    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        data: null,
      }),
      { status: 500 }
    );
  }
};
