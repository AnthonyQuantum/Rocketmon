"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Panel_model_1 = require("../store-panel/Panel.model");
var cookies_service_1 = require("../../services/cookies.service");
var payment_service_1 = require("../../services/payment.service");
var StoreComponent = (function () {
    function StoreComponent(cookiesService, pmt) {
        this.cookiesService = cookiesService;
        this.pmt = pmt;
        if (cookiesService.getCookie("lang") == "us") {
            this.word1 = "Products";
            this.word2 = "Services";
        }
        else {
            this.word1 = decodeURIComponent('%D0%9F%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D1%8B');
            this.word2 = decodeURIComponent('%D0%A3%D1%81%D0%BB%D1%83%D0%B3%D0%B8');
        }
        this.products = [
            new Panel_model_1.Panel(1, 'app/../img/store/Spr.png', 'Sparrow rocket', '$20', true),
            new Panel_model_1.Panel(2, 'app/../img/store/AvionicsKit1.png', 'Avionics kit #1', '$50', true),
        ];
        this.services = [
            new Panel_model_1.Panel(3, 'app/../img/store/graph.png', '1 point measurement', '$100', false)
        ];
    }
    StoreComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.paymentRequest = this.pmt.stripe.paymentRequest({
            country: 'US',
            currency: 'usd',
            total: {
                amount: this.amount,
                label: this.label,
            }
        });
        this.elements = this.pmt.stripe.elements();
        this.paymentRequest.on('source', function (event) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(event);
                //call the backend
                setTimeout(function () {
                    event.complete('success');
                }, 1000);
                return [2 /*return*/];
            });
        }); });
        this.prButton = this.elements.create('paymentRequestButton', {
            paymentRequest: this.paymentRequest,
            style: {
                paymentRequestButton: {
                    type: 'buy',
                    theme: 'dark'
                },
            }
        });
        this.mountButton();
    };
    StoreComponent.prototype.mountButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.paymentRequest.canMakePayment()];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.prButton.mount(this.payElement.nativeElement);
                        }
                        else {
                            console.error('not supported');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return StoreComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], StoreComponent.prototype, "amount", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StoreComponent.prototype, "label", void 0);
__decorate([
    core_1.ViewChild('payElement'),
    __metadata("design:type", Object)
], StoreComponent.prototype, "payElement", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Panel_model_1.Panel)
], StoreComponent.prototype, "panel", void 0);
StoreComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'store',
        templateUrl: './store.component.html',
        styleUrls: ['./store.component.css']
    }),
    __metadata("design:paramtypes", [cookies_service_1.CookiesService, payment_service_1.PaymentService])
], StoreComponent);
exports.StoreComponent = StoreComponent;
//# sourceMappingURL=store.component.js.map