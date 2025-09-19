import { Body, Controller, Post } from "@nestjs/common";
import { CreatePaymentUseCase } from "@/contexts/payments/application/create-payment-use-case";
import { CreatePaymentHttpDto } from "./dto/create-payment.http-dto";
import { PrimitivePayment } from "../../domain/payment";

@Controller('payments')
export class PaymentController{

    constructor(
        private createPaymentUseCase: CreatePaymentUseCase
    ) { }

    @Post()
    async run(@Body() createPaymentHttpDto: CreatePaymentHttpDto) {

        return await this.createPaymentUseCase.execute({
            amount: createPaymentHttpDto.amount,
            customerId: createPaymentHttpDto.customerId
        });

    }

}