import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return "Product Management API";
  }

  @Get("health")
  healthCheck() {
    return { status: "ok", timestamp: new Date().toISOString() };
  }
}
