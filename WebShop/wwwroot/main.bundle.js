webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-order/add-order.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-4\"></div>\r\n    <div class=\"col-md-4\">\r\n      <h1 class=\"sign-in\">Zamówienie</h1>\r\n      <form [formGroup]=\"addOrderForm\">\r\n        <div class=\"form-group\">\r\n            <label for=\"city\">Miasto</label>\r\n            <input formControlName=\"city\" type=\"text\" class=\"form-control\" placeholder=\"miasto\">\r\n            <div class=\"invalid-control\" *ngIf=\"!addOrderForm.controls['city'].valid && addOrderForm.controls['city'].touched\">Miasto jest nieprawidłowe.</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"postCode\">Kod pocztowy</label>\r\n            <input formControlName=\"postCode\" type=\"text\" class=\"form-control\" placeholder=\"kod pocztowy\">\r\n            <div class=\"invalid-control\" *ngIf=\"!addOrderForm.controls['postCode'].valid && addOrderForm.controls['postCode'].touched\">Kod pocztowy jest nieprawidłowy.</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"street\">Ulica</label>\r\n          <input formControlName=\"street\" type=\"text\" class=\"form-control\" placeholder=\"ulica\">\r\n          <div class=\"invalid-control\" *ngIf=\"!addOrderForm.controls['street'].valid && addOrderForm.controls['street'].touched\">Ulica jest nieprawidłowa.</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"streetNumber\">Numer domu</label>\r\n            <input formControlName=\"streetNumber\" type=\"text\" class=\"form-control\" placeholder=\"numer domu\">\r\n            <div class=\"invalid-control\" *ngIf=\"!addOrderForm.controls['streetNumber'].valid && addOrderForm.controls['streetNumber'].touched\">Numer domu jest nieprawidłowy.</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"flatNumber\">Numer mieszkania</label>\r\n            <input formControlName=\"flatNumber\" type=\"text\" class=\"form-control\" placeholder=\"numer mieszkania\">\r\n            <div class=\"invalid-control\" *ngIf=\"!addOrderForm.controls['flatNumber'].valid && addOrderForm.controls['flatNumber'].touched\">Numer mieszkania jest nieprawidłowy.</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"flatNumber\">Numer telefonu</label>\r\n          <input formControlName=\"phoneNumber\" type=\"text\" class=\"form-control\" placeholder=\"numer telefonu\">\r\n          <div class=\"invalid-control\" *ngIf=\"!addOrderForm.controls['phoneNumber'].valid && addOrderForm.controls['phoneNumber'].touched\">Numer telefonu jest nieprawidłowy.</div>\r\n      </div>\r\n        <button type=\"submit\" class=\"btn btn-default submit-btn\" (click)=\"save()\">Wyślij</button>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-md-4\"></div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/add-order/add-order.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var order_from_model_1 = __webpack_require__("../../../../../src/app/order/order.from-model.ts");
var order_service_1 = __webpack_require__("../../../../../src/app/shared/services/order.service.ts");
var order_status_enum_1 = __webpack_require__("../../../../../src/app/shared/enums/order-status.enum.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AddOrderComponent = (function () {
    function AddOrderComponent(orderFormModel, router, orderService) {
        this.orderFormModel = orderFormModel;
        this.router = router;
        this.orderService = orderService;
    }
    Object.defineProperty(AddOrderComponent.prototype, "addOrderForm", {
        get: function () {
            return this.orderFormModel.model;
        },
        enumerable: true,
        configurable: true
    });
    AddOrderComponent.prototype.ngOnInit = function () {
        this.initializeFormModel(null);
    };
    AddOrderComponent.prototype.initializeFormModel = function (data) {
        this.orderFormModel.initializeModel(data);
    };
    AddOrderComponent.prototype.save = function () {
        var _this = this;
        if (this.addOrderForm.valid) {
            var model = this.addOrderForm.value;
            model.status = order_status_enum_1.OrderStatusEnum[0];
            this.orderService.addOrder(model).subscribe(function (data) {
                _this.router.navigateByUrl('order-list');
            });
        }
    };
    AddOrderComponent = __decorate([
        core_1.Component({
            selector: 'app-add-order',
            template: __webpack_require__("../../../../../src/app/add-order/add-order.component.html")
        }),
        __metadata("design:paramtypes", [order_from_model_1.OrderFormModel, router_1.Router, order_service_1.OrderService])
    ], AddOrderComponent);
    return AddOrderComponent;
}());
exports.AddOrderComponent = AddOrderComponent;


/***/ }),

/***/ "../../../../../src/app/add-product/add-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4\"></div>\r\n    <div class=\"col-md-4\">\r\n      <h1 class=\"sign-in\">Dodaj produkt</h1>\r\n      <form [formGroup]=\"productForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n            <label for=\"category\">Wybierz kategorie:</label>\r\n            <select class=\"form-control\" formControlName=\"categoryId\"  *ngIf=\"categories.length > 1\">\r\n                <option value=\"\" selected>Wybierz</option>\r\n                <option *ngFor=\"let option of categories\" [value]=\"option.id\">{{option.name}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Nazwa</label>\r\n          <input formControlName=\"name\" type=\"text\" class=\"form-control\" placeholder=\"nazwa\" [maxLength]=\"22\">\r\n          <div class=\"invalid-control\" *ngIf=\"!productForm.controls['name'].valid && productForm.controls['name'].touched\">Nazwa jest nieprawidłowy.</div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"price\">Cena</label>\r\n          <input formControlName=\"price\" type=\"text\" class=\"form-control\" placeholder=\"cena\">\r\n          <div class=\"invalid-control\" *ngIf=\"!productForm.controls['price'].valid && productForm.controls['price'].touched\">Cena jest nieprawidłowa.</div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"image\">Dodaj zdjęcie</label>\r\n            <input id=\"image\" type=\"file\" class=\"form-control\" accept=\".png, .jpg, .jpeg\" (change)=\"onFileChange($event)\" #imageInput [disabled]=\"image\">\r\n            <div class=\"invalid-control\" *ngIf=\"!productForm.controls['image'].valid && productForm.controls['image'].touched\">Obraz jest nieprawidłowy.</div>\r\n        </div>\r\n        <div class=\"img-holder\">\r\n          <img *ngIf=\"image\" [src]=\"image\" style=\"height:150px; width:200px;\">\r\n          <a *ngIf=\"image\" class=\"link\" (click)=\"removeImage($event)\"><i class=\"fa fa-times-circle\" style=\"color:red;\" aria-hidden=\"true\"></i></a>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"amount\">Ilość</label>\r\n          <input formControlName=\"amount\" type=\"number\" class=\"form-control amount-input\">\r\n          <div class=\"invalid-control\" *ngIf=\"!productForm.controls['amount'].valid && productForm.controls['amount'].touched\">Ilość jest nieprawidłowa.</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"description\">Opis</label>\r\n            <textarea formControlName=\"description\" class=\"form-control\" rows=\"4\" id=\"description\" [maxLength]=\"631\"></textarea>\r\n       </div>\r\n\r\n      <button type=\"submit\" [disabled]=\"productForm.invalid\" class=\"btn btn-default submit-btn\">Wyślij</button>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-md-4\"></div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/add-product/add-product.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var product_form_model_1 = __webpack_require__("../../../../../src/app/product/product.form-model.ts");
var product_service_1 = __webpack_require__("../../../../../src/app/shared/services/product.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AddProductComponent = (function () {
    function AddProductComponent(productFormModel, router, productService) {
        this.productFormModel = productFormModel;
        this.router = router;
        this.productService = productService;
        this.image = '';
        this.categories = [];
        this.title = "Dodaj produkt";
    }
    Object.defineProperty(AddProductComponent.prototype, "productForm", {
        get: function () {
            return this.productFormModel.model;
        },
        enumerable: true,
        configurable: true
    });
    // this.categories = [
    //   {key: '1', value: 'Sport' },
    //   {key: '2', value: 'Dom'}
    // ];
    AddProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeFormModel(null);
        this.productService.getAllCategories().subscribe(function (data) {
            _this.categories = data;
        });
    };
    AddProductComponent.prototype.initializeFormModel = function (data) {
        this.productFormModel.initializeModel(data, true);
    };
    AddProductComponent.prototype.onFileChange = function (event) {
        var _this = this;
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            var myReader_1 = new FileReader();
            myReader_1.onloadend = function (e) {
                _this.image = myReader_1.result;
                console.log(_this.image);
            };
            myReader_1.readAsDataURL(file);
        }
    };
    AddProductComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.image) {
            this.productForm.get('image').setValue(this.image);
        }
        var price = this.productForm.get('price').value;
        if (price) {
            this.productForm.get('price').setValue(price.replace(',', '.')); //todo: dodanie walidacji
        }
        if (this.productForm.valid) {
            var model = this.productForm.value;
            this.productService.addProduct(model).subscribe(function (data) {
                _this.router.navigateByUrl('product-list');
            });
        }
        else {
            this.router.navigateByUrl('add-product');
        }
    };
    AddProductComponent.prototype.removeImage = function (event) {
        event.preventDefault();
        this.productForm.get('image').reset();
        this.image = '';
        this.imageInput.nativeElement.value = "";
    };
    __decorate([
        core_1.ViewChild("imageInput"),
        __metadata("design:type", core_1.ElementRef)
    ], AddProductComponent.prototype, "imageInput", void 0);
    AddProductComponent = __decorate([
        core_1.Component({
            selector: 'app-add-product',
            template: __webpack_require__("../../../../../src/app/add-product/add-product.component.html")
        }),
        __metadata("design:paramtypes", [product_form_model_1.ProductFormModel, router_1.Router, product_service_1.ProductService])
    ], AddProductComponent);
    return AddProductComponent;
}());
exports.AddProductComponent = AddProductComponent;


/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n  <app-filter></app-filter>\n  <div class=\"page\">\n    <app-navbar></app-navbar>\n    <div class=\"page-content\">\n      <div [hidden]=\"isLoaderVisible\"> <!--TODO: UPEWNIC SIE CZY TO DOBRE ROZWIAZANIE!-->\n        <router-outlet></router-outlet>\n      </div>\n      <app-loader *ngIf=\"isLoaderVisible\"></app-loader>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var account_service_1 = __webpack_require__("../../../../../src/app/shared/services/account.service.ts");
var http_service_1 = __webpack_require__("../../../../../src/app/shared/services/http.service.ts");
var product_service_1 = __webpack_require__("../../../../../src/app/shared/services/product.service.ts");
var AppComponent = (function () {
    function AppComponent(httpService, productService, accountService) {
        this.httpService = httpService;
        this.productService = productService;
        this.accountService = accountService;
        this.apiValues = [];
        this.isLoaderVisible = false;
        this.isRouterOutletVisible = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderSubscription = this.httpService.isLoading.subscribe(function (value) {
            setTimeout(function () {
                _this.isLoaderVisible = value;
            }, 0);
        });
        this.accountService.isUserLogged().subscribe(function (value) {
            var result = (value === 'true');
            _this.accountService.isLogged.next(result);
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.loaderSubscription.unsubscribe();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, product_service_1.ProductService, account_service_1.AccountService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__("../../../../../src/app/index.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var app_router_1 = __webpack_require__("../../../../../src/app/app.router.ts");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                index_1.AppComponent,
                index_1.NavbarComponent,
                index_1.FilterComponent,
                index_1.LoginComponent,
                index_1.LoaderComponent,
                index_1.RegisterComponent,
                index_1.ProductComponent,
                index_1.ProductListComponent,
                index_1.AddProductComponent,
                index_1.EditProductComponent,
                index_1.PaginationComponent,
                index_1.ShoppingBasketComponent,
                index_1.AddOrderComponent,
                index_1.OrderListComponent,
                index_1.OrderComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                forms_1.ReactiveFormsModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                app_router_1.routes
            ],
            providers: [index_1.LoginFormModel, index_1.CookieService, index_1.AccountService, index_1.HttpService, index_1.RegisterFormModel, index_1.ProductFormModel, index_1.ProductService, index_1.LoaderService, index_1.OrderFormModel, index_1.OrderService],
            bootstrap: [index_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var add_order_component_1 = __webpack_require__("../../../../../src/app/add-order/add-order.component.ts");
var add_product_component_1 = __webpack_require__("../../../../../src/app/add-product/add-product.component.ts");
var edit_product_component_1 = __webpack_require__("../../../../../src/app/edit-product/edit-product.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var order_component_1 = __webpack_require__("../../../../../src/app/order/order.component.ts");
var order_list_component_1 = __webpack_require__("../../../../../src/app/order-list/order-list.component.ts");
var product_component_1 = __webpack_require__("../../../../../src/app/product/product.component.ts");
var product_list_component_1 = __webpack_require__("../../../../../src/app/product-list/product-list.component.ts");
var register_component_1 = __webpack_require__("../../../../../src/app/register/register.component.ts");
var shopping_basket_component_1 = __webpack_require__("../../../../../src/app/shopping-basket/shopping-basket.component.ts");
exports.router = [
    {
        path: '',
        redirectTo: 'home/index',
        pathMatch: 'full'
    },
    {
        path: 'home/index',
        component: product_list_component_1.ProductListComponent,
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent,
        pathMatch: 'full',
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent,
        pathMatch: 'full',
    },
    {
        path: 'product/:productId',
        component: product_component_1.ProductComponent,
        pathMatch: 'full',
    },
    {
        path: 'product-list',
        component: product_list_component_1.ProductListComponent,
        pathMatch: 'full',
    },
    {
        path: 'add-product',
        component: add_product_component_1.AddProductComponent,
        pathMatch: 'full',
    },
    {
        path: 'edit-product/:productId',
        component: edit_product_component_1.EditProductComponent,
        pathMatch: 'full',
    },
    {
        path: 'shopping-basket',
        component: shopping_basket_component_1.ShoppingBasketComponent,
        pathMatch: 'full',
    },
    {
        path: 'add-order',
        component: add_order_component_1.AddOrderComponent,
        pathMatch: 'full',
    },
    {
        path: 'order-list',
        component: order_list_component_1.OrderListComponent,
        pathMatch: 'full',
    },
    {
        path: 'order/:orderId',
        component: order_component_1.OrderComponent,
        pathMatch: 'full',
    },
];
exports.routes = router_1.RouterModule.forRoot(exports.router);


/***/ }),

/***/ "../../../../../src/app/edit-product/edit-product.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var product_form_model_1 = __webpack_require__("../../../../../src/app/product/product.form-model.ts");
var product_service_1 = __webpack_require__("../../../../../src/app/shared/services/product.service.ts");
var router_2 = __webpack_require__("../../../router/esm5/router.js");
var EditProductComponent = (function () {
    function EditProductComponent(productFormModel, router, productService, activatedRoute) {
        this.productFormModel = productFormModel;
        this.router = router;
        this.productService = productService;
        this.activatedRoute = activatedRoute;
        this.image = '';
        this.categories = [];
        this.title = "Edytuj produkt";
    }
    Object.defineProperty(EditProductComponent.prototype, "productForm", {
        get: function () {
            return this.productFormModel.model;
        },
        enumerable: true,
        configurable: true
    });
    EditProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getAllCategories().subscribe(function (data) {
            _this.categories = data;
        });
        this.sub = this.activatedRoute.params.subscribe(function (params) {
            _this.productId = +params['productId'];
            if (_this.productId > 0) {
                _this.productService.getProductById(_this.productId).subscribe(function (data) {
                    if (data) {
                        _this.initializeFormModel(data);
                        _this.image = data.image;
                    }
                });
            }
            // In a real app: dispatch action to load the details here.
        });
    };
    EditProductComponent.prototype.initializeFormModel = function (data) {
        this.productFormModel.initializeModel(data);
    };
    EditProductComponent.prototype.onFileChange = function (event) {
        var _this = this;
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            var myReader_1 = new FileReader();
            myReader_1.onloadend = function (e) {
                _this.image = myReader_1.result;
                console.log(_this.image);
            };
            myReader_1.readAsDataURL(file);
        }
    };
    EditProductComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.image) {
            this.productForm.get('image').setValue(this.image);
        }
        var price = this.productForm.get('price').value;
        if (price) {
            this.productForm.get('price').setValue(price.toString().replace(',', '.')); //todo: dodanie walidacji 
        }
        if (this.productForm.valid) {
            var model_1 = this.productForm.value;
            this.productService.updateProduct(model_1).subscribe(function (data) {
                _this.router.navigateByUrl('product/' + model_1.id.toString());
            });
        }
        else {
            this.router.navigateByUrl('edit-product/' + this.productId.toString());
        }
    };
    EditProductComponent.prototype.removeImage = function (event) {
        event.preventDefault();
        this.productForm.get('image').reset();
        this.image = '';
        this.imageInput.nativeElement.value = "";
    };
    __decorate([
        core_1.ViewChild("imageInput"),
        __metadata("design:type", core_1.ElementRef)
    ], EditProductComponent.prototype, "imageInput", void 0);
    EditProductComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-product',
            template: __webpack_require__("../../../../../src/app/add-product/add-product.component.html")
        }),
        __metadata("design:paramtypes", [product_form_model_1.ProductFormModel, router_2.Router, product_service_1.ProductService, router_1.ActivatedRoute])
    ], EditProductComponent);
    return EditProductComponent;
}());
exports.EditProductComponent = EditProductComponent;


/***/ }),

/***/ "../../../../../src/app/filter/filter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\" [ngClass]=\"{'expanded': isOpen }\" #sidebar>\r\n    <div class=\"sidebar-item no-hover\" #burger (click)=\"toggleMenu()\">\r\n      <i class=\"fa fa-bars hand\" aria-hidden=\"true\"></i>\r\n      <span class=\"sidebar-item-title\" [ngClass]=\"{'hide': !isOpen }\">Filtry</span>\r\n    </div>\r\n    <div class=\"filter-category-container\" *ngIf=\"isOpen\">\r\n      <h5 class=\"filter-head\">Kategorie:</h5>\r\n      <div class=\"filter-category-content\" id=\"style-1\">\r\n        <!-- <a style=\"display:block;\"  href=\"\"></a> -->\r\n        <label class=\"category-list\" *ngFor=\"let category of categories\"><input type=\"radio\" name=\"category\" [value]=\"category.id\" (click)=\"selectedCategory(category.id)\"> {{category.name}}</label>\r\n      </div>\r\n\r\n      <h5 class=\"filter-head\">Cena:</h5>\r\n      <div class=\"price-container row\">\r\n        <p class=\"price-input-text\">od</p><input id=\"number\" type=\"number\" class=\"form-control price-input\" (focusout)=\"selctedMinPrice($event)\"><p class=\"price-input-text\">do</p><input id=\"number\" type=\"number\" class=\"form-control price-input\" (focusout)=\"selctedMaxPrice($event)\">\r\n      </div>\r\n\r\n      <h5 class=\"filter-head search-title\">Nazwa:</h5>\r\n      <input class=\"form-control search-input\" type=\"search\" placeholder=\"search\" (focusout)=\"selctedName($event)\" />\r\n      <button type=\"button\" class=\"btn btn-default filter-btn\" (click)=\"search($event)\">Szukaj</button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/filter/filter.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var product_service_1 = __webpack_require__("../../../../../src/app/shared/services/product.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var FilterComponent = (function () {
    function FilterComponent(productService, router) {
        this.productService = productService;
        this.router = router;
        this.categories = [];
        this.isOpen = true;
        this.parameters = {};
    }
    FilterComponent.prototype.ngOnInit = function () {
        this.loadCategories();
    };
    FilterComponent.prototype.loadCategories = function () {
        var _this = this;
        this.productService.getAllCategories().subscribe(function (value) {
            if (!value) {
                return;
            }
            _this.categories = value;
            localStorage.setItem('categories', JSON.stringify(value));
        });
    };
    FilterComponent.prototype.toggleMenu = function () {
        this.isOpen = !this.isOpen;
    };
    FilterComponent.prototype.search = function () {
        this.router.navigateByUrl('product-list');
        this.productService.filterProductParameters.next(this.parameters);
    };
    FilterComponent.prototype.selectedCategory = function (categoryId) {
        if (!categoryId) {
            this.parameters.categoryId = null;
            return;
        }
        this.parameters.categoryId = +categoryId;
    };
    FilterComponent.prototype.selctedName = function (event) {
        var value = event.target.value;
        if (!value) {
            this.parameters.name = null;
            return;
        }
        this.parameters.name = value;
    };
    FilterComponent.prototype.selctedMinPrice = function (event) {
        var value = event.target.value;
        if (!value) {
            this.parameters.minPrice = null;
            return;
        }
        this.parameters.minPrice = +value;
    };
    FilterComponent.prototype.selctedMaxPrice = function (event) {
        var value = event.target.value;
        if (!value) {
            this.parameters.maxPrice = null;
            return;
        }
        this.parameters.maxPrice = +value;
    };
    __decorate([
        core_1.ViewChild('burger'),
        __metadata("design:type", Object)
    ], FilterComponent.prototype, "burger", void 0);
    __decorate([
        core_1.ViewChild('sidebar'),
        __metadata("design:type", Object)
    ], FilterComponent.prototype, "sidebar", void 0);
    FilterComponent = __decorate([
        core_1.Component({
            selector: 'app-filter',
            template: __webpack_require__("../../../../../src/app/filter/filter.component.html")
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService, router_1.Router])
    ], FilterComponent);
    return FilterComponent;
}());
exports.FilterComponent = FilterComponent;


/***/ }),

/***/ "../../../../../src/app/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/navbar/navbar.component.ts"));
__export(__webpack_require__("../../../../../src/app/filter/filter.component.ts"));
__export(__webpack_require__("../../../../../src/app/login/login.component.ts"));
__export(__webpack_require__("../../../../../src/app/login/login.form-model.ts"));
__export(__webpack_require__("../../../../../src/app/app.component.ts"));
__export(__webpack_require__("../../../../../src/app/shared/index.ts"));
__export(__webpack_require__("../../../../../src/app/register/register.component.ts"));
__export(__webpack_require__("../../../../../src/app/register/register.form-model.ts"));
__export(__webpack_require__("../../../../../src/app/product-list/product-list.component.ts"));
__export(__webpack_require__("../../../../../src/app/product/product.component.ts"));
__export(__webpack_require__("../../../../../src/app/add-product/add-product.component.ts"));
__export(__webpack_require__("../../../../../src/app/product/product.form-model.ts"));
__export(__webpack_require__("../../../../../src/app/edit-product/edit-product.component.ts"));
__export(__webpack_require__("../../../../../src/app/pagination/pagination.component.ts"));
__export(__webpack_require__("../../../../../src/app/shopping-basket/shopping-basket.component.ts"));
__export(__webpack_require__("../../../../../src/app/order/order.from-model.ts"));
__export(__webpack_require__("../../../../../src/app/add-order/add-order.component.ts"));
__export(__webpack_require__("../../../../../src/app/order-list/order-list.component.ts"));
__export(__webpack_require__("../../../../../src/app/order/order.component.ts"));


/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-4\"></div>\r\n  <div class=\"col-md-4\">\r\n    <h1 class=\"sign-in\">Zaloguj</h1>\r\n    <form [formGroup]=\"loginForm\">\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">Email</label>\r\n        <input formControlName=\"email\" type=\"text\" class=\"form-control\" placeholder=\"email\">\r\n        <div class=\"invalid-control\" *ngIf=\"!loginForm.controls['email'].valid && loginForm.controls['email'].touched\">Email jest nieprawidłowy.</div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Hasło</label>\r\n        <input formControlName=\"password\" type=\"password\" class=\"form-control\" placeholder=\"hasło\">\r\n        <div class=\"invalid-control\" *ngIf=\"!loginForm.controls['password'].valid && loginForm.controls['password'].touched\">Hasło musi się składać z conajmniej 6 znaków.</div>\r\n      </div>\r\n\r\n      <a routerLink=\"/register\" class=\"sign-up\">Zarejestruj się</a>\r\n      <br>\r\n      <button type=\"button\" class=\"btn btn-default login-btn\" (click)=\"submit()\">Wyślij</button>\r\n    </form>\r\n  </div>\r\n  <div class=\"col-md-4\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var account_service_1 = __webpack_require__("../../../../../src/app/shared/services/account.service.ts");
var login_form_model_1 = __webpack_require__("../../../../../src/app/login/login.form-model.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var LoginComponent = (function () {
    function LoginComponent(loginFormModel, accountService, router) {
        this.loginFormModel = loginFormModel;
        this.accountService = accountService;
        this.router = router;
    }
    Object.defineProperty(LoginComponent.prototype, "loginForm", {
        get: function () {
            return this.loginFormModel.model;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
        this.initializeFormModel(null);
        this.accountService.isLogged.next(false);
    };
    LoginComponent.prototype.initializeFormModel = function (data) {
        this.loginFormModel.initializeModel(data);
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        if (this.loginForm.valid) {
            var model = this.loginForm.value;
            this.accountService.login(model).subscribe(function (data) {
                if (data) {
                    if (data.token) {
                        localStorage.setItem('token', data.token);
                    }
                    if (data.role) {
                        localStorage.setItem('role', data.role);
                    }
                    _this.setLogged(true);
                    _this.router.navigateByUrl('product-list');
                }
                else {
                    _this.router.navigateByUrl('login');
                }
            });
        }
    };
    LoginComponent.prototype.setLogged = function (value) {
        this.accountService.isLogged.next(value);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html")
        }),
        __metadata("design:paramtypes", [login_form_model_1.LoginFormModel, account_service_1.AccountService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/login/login.form-model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var email_validator_1 = __webpack_require__("../../../../../src/app/shared/validators/email.validator.ts");
var form_model_1 = __webpack_require__("../../../../../src/app/shared/form/form-model.ts");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var LoginFormModel = (function (_super) {
    __extends(LoginFormModel, _super);
    function LoginFormModel(fb) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        return _this;
    }
    LoginFormModel.prototype.initializeModel = function (data) {
        if (!this.form) {
            this.form = this.fb.group({
                email: ['', email_validator_1.EmailValidator.valid()],
                password: ['', forms_1.Validators.minLength(5)]
            });
        }
        if (data) {
            this.form.patchValue(data, { emitEvent: false }); //do sprawdzenia!
        }
        return this.form;
    };
    LoginFormModel = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], LoginFormModel);
    return LoginFormModel;
}(form_model_1.FormModel));
exports.LoginFormModel = LoginFormModel;


/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"top-nav\">\r\n    <a routerLink=\"/product-list\" class=\"top-nav-item\">Lista produktów</a>\r\n    <a href=\"#\" class=\"top-nav-item no-hover\" routerLink=\"/order-list\">Zamówienia</a>\r\n    <a *ngIf=\"isAdmin\" routerLink=\"/add-product\" class=\"top-nav-item\">Dodaj produkt</a>\r\n    <a *ngIf=\"isLogged\" class=\"top-nav-item item-right\" (click)=\"logout()\">\r\n      <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n      <span class=\"sidebar-item-title\">Wyloguj</span>\r\n    </a>\r\n    <a *ngIf=\"!isLogged\" href=\"#\" class=\"top-nav-item item-right\" routerLink=\"/login\">\r\n        <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n        <span class=\"sidebar-item-title\">Zaloguj</span>\r\n    </a>\r\n    <a routerLink=\"/shopping-basket\" class=\"top-nav-item item-right\">\r\n        <i class=\"fa fa-shopping-basket\" aria-hidden=\"true\"><span *ngIf=\"basketItemsCounter\">{{basketItemsCounter}}</span></i>\r\n    </a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var account_service_1 = __webpack_require__("../../../../../src/app/shared/services/account.service.ts");
var cookie_service_1 = __webpack_require__("../../../../../src/app/shared/services/cookie.service.ts");
var product_service_1 = __webpack_require__("../../../../../src/app/shared/services/product.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var NavbarComponent = (function () {
    function NavbarComponent(accountService, router, productService, cookieService) {
        this.accountService = accountService;
        this.router = router;
        this.productService = productService;
        this.cookieService = cookieService;
        this.isLogged = false;
        this.isAdmin = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkBasketItemsCounter();
        this.isLoggedSubscription = this.accountService.isLogged.subscribe(function (data) {
            _this.isLogged = data;
            _this.isAdmin = _this.accountService.checkIsAdmin();
        });
        this.addToBasketSubscription = this.productService.shoppingBasket.subscribe(function (data) {
            if (!data) {
                return;
            }
            _this.processShoppingBasket(data);
            _this.checkBasketItemsCounter();
        });
        this.basketCounterSubscription = this.productService.refresBasketCounter.subscribe(function (data) {
            if (data) {
                _this.checkBasketItemsCounter();
            }
        });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.isLoggedSubscription.unsubscribe();
        this.addToBasketSubscription.unsubscribe();
        this.basketCounterSubscription.unsubscribe();
    };
    NavbarComponent.prototype.addProduct = function (event) {
        event.preventDefault();
        this.router.navigateByUrl('add-product');
    };
    NavbarComponent.prototype.checkBasketItemsCounter = function () {
        var items = this.cookieService.getCookie('basketItems');
        var itemsArray = items ? JSON.parse(items) : [];
        this.basketItemsCounter = itemsArray.length;
    };
    NavbarComponent.prototype.processShoppingBasket = function (item) {
        var newItemsArray = [];
        var items = this.cookieService.getCookie('basketItems');
        newItemsArray = items ? JSON.parse(items) : [];
        newItemsArray.push(item);
        this.cookieService.setCookie('basketItems', JSON.stringify(newItemsArray), 1);
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.accountService.logout().subscribe(function (value) {
            _this.isLogged = false;
            _this.isAdmin = false;
            _this.cookieService.deleteCookie('basketItems');
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            _this.checkBasketItemsCounter();
            _this.router.navigateByUrl('product-list');
        });
        //TODO
        // czyszczenie ciastek, sesji, localStorage
        // czyszczenie po stronie backendu sesji
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [account_service_1.AccountService,
            router_1.Router,
            product_service_1.ProductService,
            cookie_service_1.CookieService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "../../../../../src/app/order-list/order-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"order-container\">\r\n  <h1 class=\"order-head\">Zamówienia</h1>\r\n  <div class=\"order-content\" id=\"style-3\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-1\"></div>\r\n      <div class=\"col-md-3\"><h5>Nazwa</h5></div>\r\n      <div class=\"col-md-3\"><h5>Data utworzenia <i class=\"fa fa-angle-up\"  [ngClass]=\"{'arrow-clicked': isDateAsc === SortingEnum.Ascending }\" (click)=\"sortDate(SortingEnum.Ascending)\"></i><i class=\"fa fa-angle-down\" [ngClass]=\"{'arrow-clicked': isDateAsc === SortingEnum.Descending }\" (click)=\"sortDate(SortingEnum.Descending)\"></i></h5></div>\r\n      <div class=\"col-md-2\"><h5>Status <i class=\"fa fa-angle-up\" [ngClass]=\"{'arrow-clicked': isStatusAsc === SortingEnum.Ascending }\" (click)=\"sortStatus(SortingEnum.Ascending)\"></i><i class=\"fa fa-angle-down\" [ngClass]=\"{'arrow-clicked': isStatusAsc === SortingEnum.Descending }\" (click)=\"sortStatus(SortingEnum.Descending)\"></i></h5></div>\r\n      <div class=\"col-md-3\"><h5></h5></div>\r\n    </div>\r\n    <ng-container *ngIf=\"orders && orders.length\">\r\n      <div class=\"row order-item\" *ngFor=\"let order of orders\" [routerLink]=\"['/order', order.id]\">\r\n          <div class=\"col-md-1\"></div>\r\n          <div class=\"col-md-3\">Zamówienie nr {{order.id}}</div>\r\n          <div class=\"col-md-3\">{{order.createdAt  | date:'dd/MM/yyyy hh:mm:ss'}}</div>\r\n          <div class=\"col-md-2\">{{order.status}}</div>\r\n          <div class=\"col-md-3\"><span *ngIf=\"isAdmin\" class=\"remove-order-btn\"><i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"removeItem(order.id)\"></i></span></div>\r\n        </div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n<app-pagination *ngIf=\"totalRecords\" [totalRecords]=\"totalRecords\" [max]=\"4\" (selectedPageEmitter)=\"selectedPageEmitter($event)\"></app-pagination>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/order-list/order-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var account_service_1 = __webpack_require__("../../../../../src/app/shared/services/account.service.ts");
var order_service_1 = __webpack_require__("../../../../../src/app/shared/services/order.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var SortingEnum;
(function (SortingEnum) {
    SortingEnum[SortingEnum["None"] = 0] = "None";
    SortingEnum[SortingEnum["Ascending"] = 1] = "Ascending";
    SortingEnum[SortingEnum["Descending"] = 2] = "Descending";
})(SortingEnum = exports.SortingEnum || (exports.SortingEnum = {}));
var OrderListComponent = (function () {
    function OrderListComponent(orderService, router, accountService) {
        this.orderService = orderService;
        this.router = router;
        this.accountService = accountService;
        this.orders = [];
        this.isDateAsc = SortingEnum.None;
        this.isStatusAsc = SortingEnum.None;
        this.SortingEnum = SortingEnum;
        this.filterOrderParameters = {};
        this.isAdmin = false;
    }
    OrderListComponent.prototype.ngOnInit = function () {
        this.filterOrderParameters.isDateAsc = null;
        this.filterOrderParameters.isStatusAsc = null;
        this.getOrders(this.filterOrderParameters);
        this.isAdmin = this.accountService.checkIsAdmin();
    };
    OrderListComponent.prototype.getOrders = function (parameters) {
        var _this = this;
        if (!parameters.page) {
            parameters.page = 1;
        }
        if (!parameters.max) {
            parameters.max = 4;
        }
        this.filterOrderParameters = parameters;
        this.orderService.getOrdersByUser(this.filterOrderParameters).subscribe(function (data) {
            if (!data) {
                return;
            }
            var result = data;
            if (result) {
                _this.orders = result.orders;
                _this.totalRecords = result.totalRecords;
            }
        });
    };
    OrderListComponent.prototype.removeItem = function (orderId) {
        var _this = this;
        this.orderService.deleteOrder(orderId).subscribe(function (data) {
            _this.router.navigateByUrl('order-list');
        });
    };
    OrderListComponent.prototype.sortDate = function (value) {
        this.isDateAsc = value;
        this.isStatusAsc = SortingEnum.None;
        this.filterOrderParameters.page = 1;
        this.filterOrderParameters.isDateAsc = this.isDateAsc === SortingEnum.Ascending;
        this.filterOrderParameters.isStatusAsc = null;
        this.getOrders(this.filterOrderParameters);
    };
    OrderListComponent.prototype.sortStatus = function (value) {
        this.isStatusAsc = value;
        this.isDateAsc = SortingEnum.None;
        this.filterOrderParameters.page = 1;
        this.filterOrderParameters.isDateAsc = null;
        this.filterOrderParameters.isStatusAsc = this.isStatusAsc === SortingEnum.Ascending;
        this.getOrders(this.filterOrderParameters);
    };
    OrderListComponent.prototype.selectedPageEmitter = function (event) {
        var page = event;
        if (page) {
            this.filterOrderParameters.page = page;
            this.getOrders(this.filterOrderParameters);
        }
    };
    OrderListComponent = __decorate([
        core_1.Component({
            selector: 'app-order-list',
            template: __webpack_require__("../../../../../src/app/order-list/order-list.component.html")
        }),
        __metadata("design:paramtypes", [order_service_1.OrderService, router_1.Router, account_service_1.AccountService])
    ], OrderListComponent);
    return OrderListComponent;
}());
exports.OrderListComponent = OrderListComponent;


/***/ }),

/***/ "../../../../../src/app/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container content-order\"  *ngIf=\"orderProducts\">\r\n  <h1 class=\"content-order-header\">Szczegóły zamówienia</h1>\r\n  <div class=\"row adress\">\r\n    <div class=\"col-md-4 offset-md-1\">\r\n      <h5>Miasto: {{orderProducts.city}}</h5>\r\n      <h5>Kod pocztowy: {{orderProducts.postCode}}</h5>\r\n      <h5 class=\"street-header\">Adres: {{orderProducts.street}} <h5> {{orderProducts.streetNumber}}</h5><h5 *ngIf=\"orderProducts.flatNumber\"> / {{orderProducts.flatNumber}}</h5></h5>\r\n    </div>\r\n    <div class=\"col-md-4 offset-md-1\">\r\n        <h5>Data utworzenia: {{orderProducts.createdAt  | date:'dd/MM/yyyy hh:mm:ss' }}</h5>\r\n        <h5>Status: {{orderProducts.status}}</h5>\r\n    </div>\r\n  </div>\r\n  <div class=\"order-product-container\" *ngIf=\"orderProducts.orderProducts && orderProducts.orderProducts.length\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">Nazwa produktu</div>\r\n        <div class=\"col-md-4\">Ilość</div>\r\n        <div class=\"col-md-4\">Cena</div>\r\n    </div>\r\n    <div class=\"order-product-content\" id=\"style-4\">\r\n      <div class=\"row order-product-item\" *ngFor=\"let product of orderProducts.orderProducts\">\r\n          <div class=\"col-md-4\">{{product.productName}}</div>\r\n          <div class=\"col-md-4\">{{product.count}}</div>\r\n          <div class=\"col-md-4\">{{product.price}} zł</div>\r\n      </div>\r\n    </div>\r\n    <span *ngIf=\"isAdmin\" class=\"order-footer\">\r\n        <i class=\"fa fa-cog\" aria-hidden=\"true\" (click)=\"showButtons()\" style=\"display:inline-block\"></i>\r\n        <h5 *ngIf=\"isButtonsVisible\" style=\"display:inline-block\">Zmień status na:\r\n          <ng-container *ngFor=\"let status of statuses\">\r\n            <button *ngIf=\"status !== orderProducts.status\" type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"updateStatus(status)\">{{status}}</button>\r\n          </ng-container>\r\n        </h5>\r\n    </span>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/order/order.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var account_service_1 = __webpack_require__("../../../../../src/app/shared/services/account.service.ts");
var order_service_1 = __webpack_require__("../../../../../src/app/shared/services/order.service.ts");
var order_status_enum_1 = __webpack_require__("../../../../../src/app/shared/enums/order-status.enum.ts");
var OrderComponent = (function () {
    function OrderComponent(route, orderService, router, accountService) {
        this.route = route;
        this.orderService = orderService;
        this.router = router;
        this.accountService = accountService;
        this.isButtonsVisible = false;
        this.isAdmin = false;
        this.OrderStatusEnum = order_status_enum_1.OrderStatusEnum;
        this.statuses = ['Anulowane', 'Przetwarzane', 'Wysłane'];
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.orderId = +params['orderId'];
            if (_this.orderId > 0) {
                _this.orderService.getOrderById(_this.orderId).subscribe(function (data) {
                    if (data) {
                        console.log(data);
                        _this.orderProducts = data;
                    }
                });
            }
        });
        this.isAdmin = this.accountService.checkIsAdmin();
    };
    OrderComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    OrderComponent.prototype.showButtons = function () {
        this.isButtonsVisible = !this.isButtonsVisible;
    };
    OrderComponent.prototype.updateStatus = function (status) {
        var _this = this;
        this.orderService.updateStatusOrder(this.orderId, status).subscribe(function (data) {
            _this.router.navigateByUrl('order-list');
        });
    };
    OrderComponent = __decorate([
        core_1.Component({
            selector: 'app-order',
            template: __webpack_require__("../../../../../src/app/order/order.component.html")
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, order_service_1.OrderService, router_1.Router, account_service_1.AccountService])
    ], OrderComponent);
    return OrderComponent;
}());
exports.OrderComponent = OrderComponent;


/***/ }),

/***/ "../../../../../src/app/order/order.from-model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var form_model_1 = __webpack_require__("../../../../../src/app/shared/form/form-model.ts");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var OrderFormModel = (function (_super) {
    __extends(OrderFormModel, _super);
    function OrderFormModel(fb) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        return _this;
    }
    OrderFormModel.prototype.initializeModel = function (data, clear) {
        if (clear === void 0) { clear = false; }
        if (!this.form || clear) {
            this.form = this.fb.group({
                id: [''],
                city: ['', forms_1.Validators.required],
                createdAt: [''],
                postCode: ['', forms_1.Validators.required],
                flatNumber: [''],
                street: ['', forms_1.Validators.required],
                streetNumber: ['', forms_1.Validators.required],
                status: [''],
                phoneNumber: ['', forms_1.Validators.required]
            });
        }
        if (data && !clear) {
            this.form.patchValue(data, { emitEvent: false }); //do sprawdzenia!
        }
        return this.form;
    };
    OrderFormModel = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], OrderFormModel);
    return OrderFormModel;
}(form_model_1.FormModel));
exports.OrderFormModel = OrderFormModel;


/***/ }),

/***/ "../../../../../src/app/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pagination-container\">\r\n  <div class=\"pagination p1\">\r\n    <ul>\r\n      <a (click)=\"changeSelectedPage(1)\"><li><<</li></a>\r\n      <a (click)=\"changeSelectedPage(selectedPage-1)\"><li><</li></a>\r\n      <ng-container *ngFor=\"let in of counter(buttonCounter); let i = index\">\r\n        <a *ngIf=\"showPage(i+1, selectedPage)\" [ngClass]=\"{'is-active': i+1 === selectedPage }\"  (click)=\"changeSelectedPage(i+1)\"><li>{{i+1}}</li></a>\r\n      </ng-container>\r\n      <a (click)=\"changeSelectedPage(selectedPage+1)\"><li>></li></a>\r\n      <a (click)=\"changeSelectedPage(buttonCounter)\"><li>>></li></a>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pagination/pagination.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.selectedPageEmitter = new core_1.EventEmitter();
        this.selectedPage = 1;
    }
    PaginationComponent.prototype.ngOnInit = function () {
        console.log(this.totalRecords, this.max);
        //this.test = 60;
        //this.buttonCounter = Math.ceil(this.totalRecords / this.max);
    };
    PaginationComponent.prototype.ngOnChanges = function (changes) {
        if (changes['totalRecords']) {
            this.totalRecords = changes['totalRecords'].currentValue;
        }
        if (changes['max']) {
            this.max = changes['max'].currentValue;
        }
        this.buttonCounter = Math.ceil(this.totalRecords / this.max);
    };
    PaginationComponent.prototype.counter = function (i) {
        return new Array(i);
    };
    PaginationComponent.prototype.changeSelectedPage = function (i) {
        var temporaryValue = this.selectedPage;
        if (i < 1) {
            this.selectedPage = 1;
        }
        else if (i > this.buttonCounter) {
            this.selectedPage = this.buttonCounter;
        }
        else {
            this.selectedPage = i;
        }
        if (temporaryValue === this.selectedPage) {
            return;
        }
        this.selectedPageEmitter.emit(this.selectedPage);
    };
    PaginationComponent.prototype.showPage = function (i, selectedPage) {
        if (this.selectedPage - 1 >= 1 && this.buttonCounter - selectedPage >= 1) {
            if (i >= selectedPage - 1 && i <= selectedPage + 1) {
                return true;
            }
        }
        else if (selectedPage - 1 < 1) {
            if (i <= 3) {
                return true;
            }
        }
        else if (this.buttonCounter - selectedPage < 1) {
            if (i >= this.buttonCounter - 2) {
                return true;
            }
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "totalRecords", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "max", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "selectedPageEmitter", void 0);
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'app-pagination',
            template: __webpack_require__("../../../../../src/app/pagination/pagination.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;


/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\r\n  <div class=\"row\">\r\n    <div *ngFor=\"let product of products\" class=\"col-md-3 product-item\">\r\n      <a class=\"product-link\" [routerLink]=\"['/product', product.id]\">\r\n        <div class=\"image-wrapper\">\r\n            <img *ngIf=\"product.image\" [src]=\"product.image\" class=\"product-image\">\r\n            <img *ngIf=\"!product.image\" src=\"./../../assets/no_foto.png\" class=\"product-image\">\r\n        </div>\r\n        <h5 class=\"product-name\">{{product.name}}</h5>\r\n        <h5 class=\"product-price\">{{product.price}} zł</h5>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-pagination *ngIf=\"totalRecords\" [totalRecords]=\"totalRecords\" [max]=\"12\" (selectedPageEmitter)=\"selectedPageEmitter($event)\"></app-pagination>\r\n"

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var product_service_1 = __webpack_require__("../../../../../src/app/shared/services/product.service.ts");
var ProductListComponent = (function () {
    function ProductListComponent(productService, http) {
        this.productService = productService;
        this.http = http;
        this.products = [];
        this.filterProductParameters = {};
        this.isDataLoaded = false;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.productService.filterProductParameters.subscribe(function (data) {
            if (data) {
                _this.getFilteredProducts(data);
                _this.isDataLoaded = true;
            }
        });
        if (!this.isDataLoaded) {
            this.getFilteredProducts(this.filterProductParameters);
        }
    };
    ProductListComponent.prototype.getFilteredProducts = function (parameters) {
        var _this = this;
        if (!parameters.page) {
            parameters.page = 1;
        }
        if (!parameters.max) {
            parameters.max = 12;
        }
        this.filterProductParameters = parameters;
        this.productService.getFilteredProducts(parameters).subscribe(function (data) {
            var result = data;
            if (result) {
                _this.products = result.products;
                _this.totalRecords = result.totalRecords;
            }
        });
    };
    ProductListComponent.prototype.selectedPageEmitter = function (event) {
        var page = event;
        if (page) {
            this.filterProductParameters.page = page;
            this.getFilteredProducts(this.filterProductParameters);
        }
    };
    ProductListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'app-product-list',
            template: __webpack_require__("../../../../../src/app/product-list/product-list.component.html")
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService, http_1.Http])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;


/***/ }),

/***/ "../../../../../src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container content-product\"  *ngIf=\"product\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <img *ngIf=\"product.image\" [src]=\"product.image\" class=\"product-content-image\">\r\n        <img *ngIf=\"!product.image\" src=\"./../../assets/no_foto.png\" class=\"product-content-image\">\r\n        <h5 class=\"product-content-title\">{{product.name}}</h5>\r\n        <a *ngIf=\"category\" routerLink=\"/\" class=\"product-content-category\">{{category.name}}</a><!--TODO: routerLink productList with categoryId-->\r\n        <div *ngIf=\"!isInBasket && basketItemMaxAmount\" class=\"row amount-content\">\r\n          <input #basketItemAmount type=\"number\" class=\"form-control basket-item-amount\" min=\"1\" [max]=\"basketItemMaxAmount\" value=\"1\">\r\n          <p class=\"basket-amount-text\"> z {{basketItemMaxAmount.toString()}}</p>\r\n        </div>\r\n      </div>\r\n    <div class=\"col-md-6\">\r\n        <h5 class=\"product-content-price\">{{product.price}} zł</h5>\r\n        <h5 class=\"product-content-description\">{{product.description}}</h5>\r\n        <div class=\"center-block product-content-button\">\r\n          <button *ngIf=\"!isInBasket && basketItemMaxAmount\"  type=\"button\" class=\"btn btn-default add-to-basket-btn\" (click)=\"addToBasket(product.id)\">Dodaj do koszyka <i class=\"fa fa-shopping-basket\" aria-hidden=\"true\"></i></button>\r\n          <h5 *ngIf=\"!basketItemMaxAmount\">Produkt niedostępny!</h5>\r\n          <h5 *ngIf=\"isInBasket\">Produkt dodany do koszyka!</h5>\r\n        </div>\r\n  </div>\r\n  <span *ngIf=\"isAdmin\" class=\"product-footer\">\r\n      <i class=\"fa fa-cog\" aria-hidden=\"true\" (click)=\"showButtons()\"></i>\r\n      <button *ngIf=\"isButtonsVisible\" type=\"button\" class=\"btn btn-secondary btn-sm\" [routerLink]=\"['/edit-product', product.id]\">Edytuj</button>\r\n      <button *ngIf=\"isButtonsVisible\" type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"removeProduct(product.id)\">Usuń</button>\r\n  </span>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/product/product.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("../../../../lodash/lodash.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var account_service_1 = __webpack_require__("../../../../../src/app/shared/services/account.service.ts");
var cookie_service_1 = __webpack_require__("../../../../../src/app/shared/services/cookie.service.ts");
var product_service_1 = __webpack_require__("../../../../../src/app/shared/services/product.service.ts");
var ProductComponent = (function () {
    function ProductComponent(route, productService, router, cookieService, accountService) {
        this.route = route;
        this.productService = productService;
        this.router = router;
        this.cookieService = cookieService;
        this.accountService = accountService;
        this.isButtonsVisible = false;
        this.isInBasket = false;
        this.basketItemMaxAmount = 0;
        this.isAdmin = false;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.productId = +params['productId'];
            if (_this.productId > 0) {
                _this.productService.getProductById(_this.productId).subscribe(function (data) {
                    if (data) {
                        _this.product = data;
                        _this.category = _this.productService.getCategoryName(_this.product.categoryId);
                        _this.basketItemMaxAmount = data.amount;
                    }
                });
                _this.checkIsInBasket(_this.productId);
            }
        });
        this.isAdmin = this.accountService.checkIsAdmin();
    };
    ProductComponent.prototype.addToBasket = function (productId) {
        var amount = this.basketItemAmount.nativeElement.value;
        if (productId && amount) {
            var payload = {
                productId: productId,
                amount: +amount
            };
            this.productService.shoppingBasket.next(payload);
            this.isInBasket = true;
        }
    };
    ProductComponent.prototype.checkIsInBasket = function (productId) {
        var cookieItems = this.cookieService.getCookie('basketItems');
        var items = cookieItems ? JSON.parse(cookieItems) : [];
        if (_.find(items, { 'productId': productId })) {
            this.isInBasket = true;
        }
        else {
            this.isInBasket = false;
        }
    };
    ProductComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProductComponent.prototype.showButtons = function () {
        this.isButtonsVisible = !this.isButtonsVisible;
    };
    ProductComponent.prototype.removeProduct = function (productId) {
        var _this = this;
        this.productService.removeProduct(productId).subscribe(function (data) {
            _this.router.navigateByUrl('product-list');
        });
    };
    __decorate([
        core_1.ViewChild('basketItemAmount'),
        __metadata("design:type", core_1.ElementRef)
    ], ProductComponent.prototype, "basketItemAmount", void 0);
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'app-product',
            template: __webpack_require__("../../../../../src/app/product/product.component.html")
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, product_service_1.ProductService, router_1.Router, cookie_service_1.CookieService, account_service_1.AccountService])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;


/***/ }),

/***/ "../../../../../src/app/product/product.form-model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var form_model_1 = __webpack_require__("../../../../../src/app/shared/form/form-model.ts");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ProductFormModel = (function (_super) {
    __extends(ProductFormModel, _super);
    function ProductFormModel(fb) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        return _this;
    }
    ProductFormModel.prototype.initializeModel = function (data, clear) {
        if (clear === void 0) { clear = false; }
        if (!this.form || clear) {
            this.form = this.fb.group({
                id: [''],
                name: ['', forms_1.Validators.required],
                price: ['', forms_1.Validators.required],
                categoryId: [null, forms_1.Validators.required],
                image: null,
                description: ['', forms_1.Validators.required],
                amount: ['', forms_1.Validators.required]
            });
        }
        if (data && !clear) {
            this.form.patchValue(data, { emitEvent: false }); //do sprawdzenia!
        }
        return this.form;
    };
    ProductFormModel = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], ProductFormModel);
    return ProductFormModel;
}(form_model_1.FormModel));
exports.ProductFormModel = ProductFormModel;


/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-4\"></div>\r\n    <div class=\"col-md-4\">\r\n      <h1 class=\"sign-in\">Rejestracja</h1>\r\n      <form [formGroup]=\"registerForm\">\r\n        <div class=\"form-group\">\r\n            <label for=\"login\">Login</label>\r\n            <input formControlName=\"login\" type=\"text\" class=\"form-control\" placeholder=\"login\">\r\n            <div class=\"invalid-control\" *ngIf=\"!registerForm.controls['login'].valid && registerForm.controls['login'].touched\">Login jest nieprawidłowy.</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email</label>\r\n          <input formControlName=\"email\" type=\"text\" class=\"form-control\" placeholder=\"email\">\r\n          <div class=\"invalid-control\" *ngIf=\"!registerForm.controls['email'].valid && registerForm.controls['email'].touched\">Email jest nieprawidłowy.</div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Hasło</label>\r\n          <input formControlName=\"password\" type=\"password\" class=\"form-control\" placeholder=\"hasło\">\r\n          <div class=\"invalid-control\" *ngIf=\"!registerForm.controls['password'].valid && registerForm.controls['password'].touched\">Hasło musi się składać z conajmniej 6 znaków.</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"confirmPassword\">Potwierdź hasło</label>\r\n            <input formControlName=\"confirmPassword\" type=\"password\" class=\"form-control\" placeholder=\"potwierdź hasło\">\r\n            <div class=\"invalid-control\" *ngIf=\"!registerForm.controls['confirmPassword'].valid && registerForm.controls['confirmPassword'].touched\">Hasła nie pasują do siebie.</div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-default submit-btn\" (click)=\"save()\">Wyślij</button>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-md-4\"></div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var account_service_1 = __webpack_require__("../../../../../src/app/shared/services/account.service.ts");
var register_form_model_1 = __webpack_require__("../../../../../src/app/register/register.form-model.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var RegisterComponent = (function () {
    function RegisterComponent(registerFormModel, accountService, router) {
        this.registerFormModel = registerFormModel;
        this.accountService = accountService;
        this.router = router;
    }
    Object.defineProperty(RegisterComponent.prototype, "registerForm", {
        get: function () {
            return this.registerFormModel.model;
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.ngOnInit = function () {
        this.initializeFormModel(null);
    };
    RegisterComponent.prototype.initializeFormModel = function (data) {
        this.registerFormModel.initializeModel(data);
    };
    RegisterComponent.prototype.save = function () {
        var _this = this;
        if (this.registerForm.valid) {
            var model = this.registerForm.value;
            this.accountService.register(model).subscribe(function (data) {
                console.log(data);
                _this.router.navigateByUrl('login');
            });
        }
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html")
        }),
        __metadata("design:paramtypes", [register_form_model_1.RegisterFormModel, account_service_1.AccountService, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "../../../../../src/app/register/register.form-model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var email_validator_1 = __webpack_require__("../../../../../src/app/shared/validators/email.validator.ts");
var form_model_1 = __webpack_require__("../../../../../src/app/shared/form/form-model.ts");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var RegisterFormModel = (function (_super) {
    __extends(RegisterFormModel, _super);
    function RegisterFormModel(fb) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        return _this;
    }
    RegisterFormModel.prototype.initializeModel = function (data) {
        if (!this.form) {
            this.form = this.fb.group({
                login: ['', forms_1.Validators.minLength(3)],
                email: ['', email_validator_1.EmailValidator.valid()],
                password: ['', forms_1.Validators.minLength(5)],
                confirmPassword: ['', forms_1.Validators.minLength(5)]
            });
        }
        if (data) {
            this.form.patchValue(data, { emitEvent: false }); //do sprawdzenia!
        }
        return this.form;
    };
    RegisterFormModel = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], RegisterFormModel);
    return RegisterFormModel;
}(form_model_1.FormModel));
exports.RegisterFormModel = RegisterFormModel;


/***/ }),

/***/ "../../../../../src/app/shared/enums/order-status.enum.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OrderStatusEnum;
(function (OrderStatusEnum) {
    OrderStatusEnum[OrderStatusEnum["Przetwarzane"] = 0] = "Przetwarzane";
    OrderStatusEnum[OrderStatusEnum["Wys\u0142ane"] = 1] = "Wys\u0142ane";
    OrderStatusEnum[OrderStatusEnum["Anulowane"] = 2] = "Anulowane";
})(OrderStatusEnum = exports.OrderStatusEnum || (exports.OrderStatusEnum = {}));


/***/ }),

/***/ "../../../../../src/app/shared/form/form-model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var FormModel = (function () {
    function FormModel() {
    }
    Object.defineProperty(FormModel.prototype, "model", {
        get: function () {
            if (!this.form) {
                this.initializeModel(null);
            }
            return this.form;
        },
        enumerable: true,
        configurable: true
    });
    FormModel = __decorate([
        core_1.Injectable()
    ], FormModel);
    return FormModel;
}());
exports.FormModel = FormModel;


/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/shared/form/form-model.ts"));
__export(__webpack_require__("../../../../../src/app/shared/services/http.service.ts"));
__export(__webpack_require__("../../../../../src/app/shared/services/account.service.ts"));
__export(__webpack_require__("../../../../../src/app/shared/services/product.service.ts"));
__export(__webpack_require__("../../../../../src/app/shared/services/loader.service.ts"));
__export(__webpack_require__("../../../../../src/app/shared/loader/loader.component.ts"));
__export(__webpack_require__("../../../../../src/app/shared/services/cookie.service.ts"));
__export(__webpack_require__("../../../../../src/app/shared/services/order.service.ts"));


/***/ }),

/***/ "../../../../../src/app/shared/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"loader\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/loader/loader.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var LoaderComponent = (function () {
    function LoaderComponent() {
    }
    LoaderComponent = __decorate([
        core_1.Component({
            selector: 'app-loader',
            template: __webpack_require__("../../../../../src/app/shared/loader/loader.component.html"),
        })
    ], LoaderComponent);
    return LoaderComponent;
}());
exports.LoaderComponent = LoaderComponent;


/***/ }),

/***/ "../../../../../src/app/shared/services/account.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var Rx_1 = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var http_service_1 = __webpack_require__("../../../../../src/app/shared/services/http.service.ts");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AccountService = (function () {
    function AccountService(httpService) {
        this.httpService = httpService;
        this.isLogged = new Rx_1.BehaviorSubject(false);
    }
    AccountService.prototype.checkIsAdmin = function () {
        return localStorage.getItem('role') === 'admin';
    };
    AccountService.prototype.login = function (model) {
        return this.httpService.post('user/loginAsync', model);
    };
    AccountService.prototype.logout = function () {
        return this.httpService.get('user/logout');
    };
    AccountService.prototype.register = function (model) {
        return this.httpService.post('user/registerAsync', model);
    };
    AccountService.prototype.isUserLogged = function () {
        return this.httpService.get('user/isUserLogged');
    };
    AccountService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;


/***/ }),

/***/ "../../../../../src/app/shared/services/cookie.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("../../../../lodash/lodash.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var CookieService = (function () {
    function CookieService() {
    }
    CookieService.prototype.setCookie = function (name, value, expireDays) {
        var date = new Date();
        date.setTime(date.getTime() + (expireDays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + date.toUTCString();
        document.cookie = name + '=' + value + '; ' + expires + ';path=/';
    };
    CookieService.prototype.getCookie = function (name) {
        var cookieName = name + '=';
        var cookieArray = document.cookie.split(';');
        var cookieValue = "";
        _.forEach(cookieArray, function (cookie, index) {
            var selectedCookie = cookieArray[index];
            _.forEach(selectedCookie, function (char) {
                if (char.charAt(0) === ' ') {
                    selectedCookie = selectedCookie.substring(1);
                }
            });
            if (selectedCookie.indexOf(name) === 0) {
                cookieValue = selectedCookie.substring(cookieName.length, selectedCookie.length);
                return false;
            }
        });
        return cookieValue;
    };
    CookieService.prototype.deleteCookie = function (name) {
        this.setCookie(name, "", -1);
    };
    CookieService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CookieService);
    return CookieService;
}());
exports.CookieService = CookieService;


/***/ }),

/***/ "../../../../../src/app/shared/services/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var Rx_1 = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var HttpService = (function () {
    function HttpService(http, router) {
        this.http = http;
        this.router = router;
        this.isLoading = new Rx_1.BehaviorSubject(false);
    }
    HttpService.prototype.get = function (url, options) {
        return this.intercept(this.http.get(url, this.getRequestOptionArgs(options)));
    };
    HttpService.prototype.post = function (url, body, options) {
        return this.intercept(this.http.post(url, body, this.getRequestOptionArgs(options)));
    };
    HttpService.prototype.put = function (url, body, options) {
        return this.intercept(this.http.put(url, body, this.getRequestOptionArgs(options)));
    };
    HttpService.prototype.delete = function (url, options) {
        return this.intercept(this.http.delete(url, this.getRequestOptionArgs(options)));
    };
    HttpService.prototype.getRequestOptionArgs = function (options) {
        if (options == null) {
            options = new http_1.RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new http_1.Headers();
        }
        if (!options.headers.has('Content-Type')) {
            options.headers.append('Content-Type', 'application/json');
        }
        if (localStorage.getItem('token') !== undefined && localStorage.getItem('token') !== null) {
            options.headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
        }
        return options;
    };
    HttpService.prototype.intercept = function (observable) {
        var _this = this;
        setTimeout(function () { _this.isLoading.next(true); }, 0);
        return observable.map(this.extract).catch(function (err, source) {
            if (err.status === 401) {
                console.log(err);
                _this.router.navigateByUrl('login');
                return Rx_1.Observable.empty();
            }
            else {
                return Rx_1.Observable.throw(err);
            }
        }).finally(function () {
            setTimeout(function () { _this.isLoading.next(false); }, 0);
        });
    };
    HttpService.prototype.extract = function (response) {
        try {
            var result = response.json() || response;
            return result._body && result._body === 'null' ? null : result;
        }
        catch (e) {
            console.log('error from httpservice', e);
            return null;
        }
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "../../../../../src/app/shared/services/loader.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var Rx_1 = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var LoaderService = (function () {
    function LoaderService() {
        this.isLoading = new Rx_1.BehaviorSubject(false);
        this.counter = 0;
    }
    LoaderService.prototype.setCounter = function (increase) {
        this.counter = increase === true ? ++this.counter : --this.counter;
        console.log('counter', this.counter, 'isLoading', this.isLoading.value);
        if (this.counter > 0 && !this.isLoading.value) {
            this.isLoading.next(true);
            return;
        }
        this.isLoading.next(false);
    };
    LoaderService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());
exports.LoaderService = LoaderService;


/***/ }),

/***/ "../../../../../src/app/shared/services/order.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var http_service_1 = __webpack_require__("../../../../../src/app/shared/services/http.service.ts");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var OrderService = (function () {
    function OrderService(httpService) {
        this.httpService = httpService;
    }
    OrderService.prototype.addOrder = function (order) {
        return this.httpService.post('order/addOrder', order);
    };
    OrderService.prototype.getOrdersByUser = function (parameters) {
        var urlStringParameters = '?page=' + parameters.page + '&max=' + parameters.max;
        urlStringParameters += '&isDateAsc=' + parameters.isDateAsc;
        urlStringParameters += '&isStatusAsc=' + parameters.isStatusAsc;
        return this.httpService.get('order/getOrdersByUser' + urlStringParameters);
    };
    OrderService.prototype.getAllOrders = function (parameters) {
        var urlStringParameters = '?page=' + parameters.page + '&max=' + parameters.max;
        urlStringParameters += '&isDateAsc=' + parameters.isDateAsc;
        urlStringParameters += '&isStatusAsc=' + parameters.isStatusAsc;
        return this.httpService.get('order/getAllOrders' + urlStringParameters);
    };
    OrderService.prototype.getOrderById = function (orderId) {
        return this.httpService.get('order/getOrderById?orderId=' + orderId);
    };
    OrderService.prototype.deleteOrder = function (orderId) {
        return this.httpService.delete('order/deleteOrder?orderId=' + orderId);
    };
    OrderService.prototype.updateStatusOrder = function (orderId, status) {
        return this.httpService.get('order/updateStatus?orderId=' + orderId + '&status=' + status);
    };
    OrderService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], OrderService);
    return OrderService;
}());
exports.OrderService = OrderService;


/***/ }),

/***/ "../../../../../src/app/shared/services/product.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("../../../../lodash/lodash.js");
var Rx_1 = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var http_service_1 = __webpack_require__("../../../../../src/app/shared/services/http.service.ts");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ProductService = (function () {
    function ProductService(httpService) {
        this.httpService = httpService;
        this._categories = [];
        this.filterProductParameters = new Rx_1.BehaviorSubject(null);
        this.shoppingBasket = new Rx_1.BehaviorSubject(null);
        this.refresBasketCounter = new Rx_1.BehaviorSubject(false);
    }
    Object.defineProperty(ProductService.prototype, "categories", {
        get: function () {
            if (!this._categories || !this._categories.length) {
                this._categories = JSON.parse(localStorage.getItem("categories"));
            }
            return this._categories;
        },
        enumerable: true,
        configurable: true
    });
    ProductService.prototype.addProduct = function (product) {
        return this.httpService.post('product/addProduct', product);
    };
    ProductService.prototype.updateProduct = function (product) {
        return this.httpService.put('product/updateProduct', product);
    };
    ProductService.prototype.removeProduct = function (productId) {
        return this.httpService.delete('product/removeProduct?productId=' + productId);
    };
    ProductService.prototype.getAllProducts = function () {
        return this.httpService.get('product/getAll');
    };
    ProductService.prototype.getSelectedProducts = function () {
        return this.httpService.get('product/getSelectedProducts');
    };
    ProductService.prototype.getFilteredProducts = function (parameters) {
        var urlStringParameters = '?page=' + parameters.page + '&max=' + parameters.max;
        if (parameters.name) {
            urlStringParameters += '&name=' + parameters.name;
        }
        if (parameters.minPrice) {
            urlStringParameters += '&minPrice=' + parameters.minPrice;
        }
        if (parameters.maxPrice) {
            urlStringParameters += '&maxPrice=' + parameters.maxPrice;
        }
        if (parameters.categoryId) {
            urlStringParameters += '&categoryId=' + parameters.categoryId;
        }
        return this.httpService.get('product/getFilteredProducts' + urlStringParameters);
    };
    ProductService.prototype.getProductById = function (productId) {
        return this.httpService.get('product/getById?productId=' + productId);
    };
    ProductService.prototype.getAllCategories = function () {
        if (!this.categories || !this.categories.length) {
            return this.httpService.get('product/getCategories');
        }
        else {
            return Rx_1.Observable.of(this.categories);
        }
    };
    ProductService.prototype.getCategoryName = function (categoryId) {
        if (!categoryId) {
            return;
        }
        if (!this.categories || !this.categories.length) {
            return;
        }
        var result = _.find(this.categories, { 'id': categoryId });
        return result;
    };
    ProductService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;


/***/ }),

/***/ "../../../../../src/app/shared/validators/email.validator.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.valid = function () {
        return function (control) {
            var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var email = control.value;
            if (control.value && !emailRegex.test(email)) {
                return { 'email': true };
            }
            return null;
        };
    };
    return EmailValidator;
}());
exports.EmailValidator = EmailValidator;


/***/ }),

/***/ "../../../../../src/app/shopping-basket/shopping-basket.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"basket-container\">\r\n  <h1 class=\"basket-head\">Koszyk</h1>\r\n  <div class=\"basket-content\" id=\"style-2\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\">\r\n          <h5></h5>\r\n      </div>\r\n      <div class=\"col-md-4\"><h5>Nazwa</h5></div>\r\n      <div class=\"col-md-2\"><h5>Ilość</h5></div>\r\n      <div class=\"col-md-2\"><h5>Cena</h5></div>\r\n      <div class=\"col-md-2\"><h5></h5></div>\r\n    </div>\r\n    <ng-container *ngIf=\"productsItem && productsItem.length\">\r\n      <div class=\"row basket-item\" *ngFor=\"let productItem of productsItem\">\r\n          <div class=\"col-md-2\">\r\n              <img *ngIf=\"productItem.product.image\" [src]=\"productItem.product.image\" class=\"basket-image\">\r\n              <img *ngIf=\"!productItem.product.image\" src=\"./../../assets/no_foto.png\" class=\"basket-image\">\r\n          </div>\r\n          <div class=\"col-md-4\">{{productItem.product.name}}</div>\r\n          <div class=\"col-md-2\">{{productItem.amount}}</div>\r\n          <div class=\"col-md-2\">{{productItem.product.price}} zł</div>\r\n          <div class=\"col-md-2\"><span class=\"remove-basket-btn\"><i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"removeItem(productItem.product.id)\"></i></span></div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n  <div class=\"row basket-summary\">\r\n    <p class=\"basket-summary-title\">Suma: {{sum}} zł</p> <button type=\"button\" class=\"btn btn-secondary btn-sm basket-btn\" routerLink=\"/add-order\">Zamów</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shopping-basket/shopping-basket.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("../../../../lodash/lodash.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var cookie_service_1 = __webpack_require__("../../../../../src/app/shared/services/cookie.service.ts");
var product_service_1 = __webpack_require__("../../../../../src/app/shared/services/product.service.ts");
var ShoppingBasketComponent = (function () {
    function ShoppingBasketComponent(cookieService, productService) {
        this.cookieService = cookieService;
        this.productService = productService;
        this.items = {};
        this.products = [];
        this.productsItem = {};
        this.sum = 0;
    }
    ShoppingBasketComponent.prototype.ngOnInit = function () {
        var basketItems = this.cookieService.getCookie('basketItems');
        this.items = basketItems ? JSON.parse(basketItems) : [];
        this.getProducts();
    };
    ShoppingBasketComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getSelectedProducts().subscribe(function (data) {
            if (!data) {
                return;
            }
            console.log(data);
            _this.products = data;
            _this.productsItem = _this.processProductItems(_this.products, _this.items);
        });
    };
    ShoppingBasketComponent.prototype.processProductItems = function (products, items) {
        var _this = this;
        var productsItemArray = [];
        if (!this.products || !this.items) {
            return;
        }
        _.forEach(products, function (product) {
            var productAmount = _.find(items, { 'productId': product.id });
            if (!productAmount) {
                return;
            }
            var productItem = {
                product: product,
                amount: productAmount.amount
            };
            _this.sum += productItem.amount * +productItem.product.price;
            productsItemArray.push(productItem);
        });
        return productsItemArray;
    };
    ShoppingBasketComponent.prototype.removeItem = function (productId) {
        var _this = this;
        _.forEach(this.items, function (item, index) {
            if (item.productId === productId) {
                _this.items.splice(index, 1);
                _this.cookieService.setCookie('basketItems', JSON.stringify(_this.items), 1);
                return false;
            }
        });
        _.forEach(this.productsItem, function (item, index) {
            if (item.product.id === productId) {
                _this.sum = _this.sum - (item.amount * +item.product.price);
                _this.productsItem.splice(index, 1);
                return false;
            }
        });
        this.productService.refresBasketCounter.next(true);
    };
    ShoppingBasketComponent = __decorate([
        core_1.Component({
            selector: 'app-shopping-basket',
            template: __webpack_require__("../../../../../src/app/shopping-basket/shopping-basket.component.html")
        }),
        __metadata("design:paramtypes", [cookie_service_1.CookieService, product_service_1.ProductService])
    ], ShoppingBasketComponent);
    return ShoppingBasketComponent;
}());
exports.ShoppingBasketComponent = ShoppingBasketComponent;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map