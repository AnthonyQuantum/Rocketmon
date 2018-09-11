import { Component, Input, AfterViewInit, ViewChild } from '@angular/core';
import { Panel } from '../store-panel/Panel.model';
import { CookiesService } from '../../services/cookies.service';
import { PaymentService } from '../../services/payment.service';

@Component({
    moduleId: module.id,
    selector: 'store',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.css']
})

export class StoreComponent implements AfterViewInit {
    @Input() amount: number;
    @Input() label: string;
    elements: any;
    paymentRequest: any;
    prButton: any;
    @ViewChild('payElement') payElement: any;
    @Input() panel: Panel;
    products: Panel[];
    services: Panel[];
    word1: string;
    word2: string;
    constructor(private cookiesService: CookiesService, private pmt: PaymentService) {
        if (cookiesService.getCookie("lang") == "us") {
            this.word1 = "Products";
            this.word2 = "Services";
        }
        else {
            this.word1 = decodeURIComponent('%D0%9F%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D1%8B');
            this.word2 = decodeURIComponent('%D0%A3%D1%81%D0%BB%D1%83%D0%B3%D0%B8');
        }
        this.products = [
            new Panel(1, 'app/../img/store/Spr.png', 'Sparrow rocket', '$20', true),
            new Panel(2, 'app/../img/store/AvionicsKit1.png', 'Avionics kit #1', '$50', true),
        ];
        this.services = [
            new Panel(3, 'app/../img/store/graph.png', '1 point measurement', '$100', false)
        ];
    }

    ngAfterViewInit() {
        this.paymentRequest = this.pmt.stripe.paymentRequest({
            country: 'US',
            currency: 'usd',
            total: {
                amount: this.amount,
                label: this.label,
            }
        });
        this.elements = this.pmt.stripe.elements();
        this.paymentRequest.on('source', async (event: any) => {
            console.log(event);
            //call the backend
            setTimeout(() => {
                event.complete('success')
            }, 1000)
        });

        this.prButton = this.elements.create('paymentRequestButton', {
            paymentRequest: this.paymentRequest,
            style: {
                paymentRequestButton: {
                    type: 'buy',
                    theme: 'dark'
                },
            }
        });

        this.mountButton()
    }

    async mountButton() {
        const result = await this.paymentRequest.canMakePayment();

        if (result) {
            this.prButton.mount(this.payElement.nativeElement);
        } else {
            console.error('not supported');
        }
    }
}
