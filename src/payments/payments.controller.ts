import { Controller, Get, Post } from "@nestjs/common";
import { PaymentsService } from "./payments.service";

@Controller("payments")
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post("create-payment-session")
  createPaymentSession() {
    return "createPaymentSession";
  }

  @Get("success")
  success() {
    return {
      ok: true,
      message: "Payment Successful"
    };
  }

  @Get("cancel")
  cancel() {
    return {
      ok: true,
      message: "Payment Cancelled"
    };
  }

  @Post("webhook")
  async stripeCallback() {
    return "stripe web callback";
  }
}
