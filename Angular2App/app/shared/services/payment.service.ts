import { Injectable } from '@angular/core';

@Injectable()
export class PaymentService {
    stripe = Stripe('pk_test_ZNDRjkXpC0QPJ500jkR5hg1P');
}