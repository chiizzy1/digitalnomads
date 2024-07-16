import { z } from "zod";
import services from '@/data/services.json'


export const GET = async (
    req: Request,
    { params }: { params: { id: string } }
  ) => {
    const id = params.id;
    try {
      
  
        const service = services.data.find(item => item.id === id)
        if (!service) {
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
          data: service,
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