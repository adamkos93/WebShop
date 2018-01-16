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

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n  <app-category></app-category>\n  <div class=\"page\">\n    <app-navbar></app-navbar>\n    <div class=\"page-content\">\n      <div *ngIf=\"!isLoaderVisible\">\n        <router-outlet></router-outlet>\n      </div>\n      <app-loader *ngIf=\"isLoaderVisible\"></app-loader>\n    </div>\n  </div>\n</div>\n"

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
var http_service_1 = __webpack_require__("../../../../../src/app/shared/services/http.service.ts");
var AppComponent = (function () {
    function AppComponent(httpService) {
        this.httpService = httpService;
        this.apiValues = [];
        this.isLoaderVisible = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.isLoading.subscribe(function (value) {
            _this.isLoaderVisible = value;
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
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
                index_1.CategoryComponent,
                index_1.LoginComponent,
                index_1.LoaderComponent,
                index_1.RegisterComponent,
                index_1.ProductComponent,
                index_1.ProductListComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                forms_1.ReactiveFormsModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                app_router_1.routes
            ],
            providers: [index_1.LoginFormModel, index_1.AccountService, index_1.HttpService, index_1.RegisterFormModel],
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
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var index_1 = __webpack_require__("../../../../../src/app/index.ts");
var product_list_component_1 = __webpack_require__("../../../../../src/app/product-list/product-list.component.ts");
var register_component_1 = __webpack_require__("../../../../../src/app/register/register.component.ts");
exports.router = [
    {
        path: '',
        redirectTo: 'home/index',
        pathMatch: 'full'
    },
    {
        path: 'home/index',
        component: login_component_1.LoginComponent,
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
        path: 'product',
        component: index_1.ProductComponent,
        pathMatch: 'full',
    },
    {
        path: 'product-list',
        component: product_list_component_1.ProductListComponent,
        pathMatch: 'full',
    },
];
exports.routes = router_1.RouterModule.forRoot(exports.router);


/***/ }),

/***/ "../../../../../src/app/category/category.compoent.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar expanded\">\r\n    <div class=\"sidebar-item no-hover\" id=\"burger\">\r\n      <i class=\"fa fa-bars hand\" aria-hidden=\"true\"></i>\r\n      <span class=\"sidebar-item-title\">Astuce Media</span>\r\n    </div>\r\n    <div class=\"sidebar-item active\">\r\n      <a href=\"#\">\r\n        <i class=\"fa fa-database\" aria-hidden=\"true\"></i>\r\n        <span class=\"sidebar-item-title\">Data Management</span>\r\n      </a>\r\n    </div>\r\n    <div class=\"sidebar-item\">\r\n      <a href=\"#\">\r\n        <i class=\"fa fa-map-o\" aria-hidden=\"true\"></i>\r\n        <span class=\"sidebar-item-title\">Location</span>\r\n      </a>\r\n    </div>\r\n    <div class=\"sidebar-item\">\r\n      <a href=\"#\">\r\n        <i class=\"fa fa-link\" aria-hidden=\"true\"></i>\r\n        <span class=\"sidebar-item-title\">Dynamic Links</span>\r\n      </a>\r\n    </div>\r\n    <div class=\"sidebar-item\">\r\n      <a href=\"#\">\r\n        <i class=\"fa fa-code\" aria-hidden=\"true\"></i>\r\n        <span class=\"sidebar-item-title\">Custom Scripting</span>\r\n      </a>\r\n    </div>\r\n    <div class=\"sidebar-item\">\r\n      <a href=\"#\">\r\n        <i class=\"fa fa-picture-o\" aria-hidden=\"true\"></i>\r\n        <span class=\"sidebar-item-title\">Asset Management</span>\r\n      </a>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/category/category.component.ts":
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
var CategoryComponent = (function () {
    function CategoryComponent() {
    }
    CategoryComponent.prototype.ngOnInit = function () {
    };
    CategoryComponent = __decorate([
        core_1.Component({
            selector: 'app-category',
            template: __webpack_require__("../../../../../src/app/category/category.compoent.html")
        }),
        __metadata("design:paramtypes", [])
    ], CategoryComponent);
    return CategoryComponent;
}());
exports.CategoryComponent = CategoryComponent;


/***/ }),

/***/ "../../../../../src/app/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/navbar/navbar.component.ts"));
__export(__webpack_require__("../../../../../src/app/category/category.component.ts"));
__export(__webpack_require__("../../../../../src/app/login/login.component.ts"));
__export(__webpack_require__("../../../../../src/app/login/login.form-model.ts"));
__export(__webpack_require__("../../../../../src/app/app.component.ts"));
__export(__webpack_require__("../../../../../src/app/shared/index.ts"));
__export(__webpack_require__("../../../../../src/app/register/register.component.ts"));
__export(__webpack_require__("../../../../../src/app/register/register.form-model.ts"));
__export(__webpack_require__("../../../../../src/app/product-list/product-list.component.ts"));
__export(__webpack_require__("../../../../../src/app/product/product.component.ts"));


/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-4\"></div>\r\n  <div class=\"col-md-4\">\r\n    <h1 class=\"sign-in\">Zaloguj</h1>\r\n    <form [formGroup]=\"loginForm\">\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">Email</label>\r\n        <input formControlName=\"email\" type=\"text\" class=\"form-control\" placeholder=\"email\">\r\n        <div class=\"invalid-control\" *ngIf=\"!loginForm.controls['email'].valid && loginForm.controls['email'].touched\">Email jest nieprawidłowy.</div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Hasło</label>\r\n        <input formControlName=\"password\" type=\"password\" class=\"form-control\" placeholder=\"hasło\">\r\n        <div class=\"invalid-control\" *ngIf=\"!loginForm.controls['password'].valid && loginForm.controls['password'].touched\">Hasło musi się składać z conajmniej 6 znaków.</div>\r\n      </div>\r\n\r\n      <a routerLink=\"/register\" class=\"sign-up\">Zarejestruj się</a>\r\n      <br>\r\n      <button type=\"submit\" class=\"btn btn-default login-btn\" (click)=\"submit()\">Wyślij</button>\r\n    </form>\r\n  </div>\r\n  <div class=\"col-md-4\"></div>\r\n</div>\r\n"

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
                    var response = data.json();
                    if (response['token']) {
                        localStorage.setItem('token', response['token']);
                    }
                    if (response['role']) {
                        localStorage.setItem('role', response['role']);
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

module.exports = "<div class=\"top-nav\">\r\n    <a href=\"#\" class=\"top-nav-item no-hover\">Page Title</a>\r\n    <a href=\"#\" class=\"top-nav-item\">Page Link</a>\r\n    <a href=\"#\" class=\"top-nav-item\">Page Link</a>\r\n    <a href=\"#\" class=\"top-nav-item\">Page Link</a>\r\n    <a *ngIf=\"isLogged\" class=\"top-nav-item item-right\" (click)=\"logout()\">\r\n      <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n      <span class=\"sidebar-item-title\">Wyloguj</span>\r\n    </a>\r\n    <a *ngIf=\"!isLogged\" href=\"#\" class=\"top-nav-item item-right\" routerLink=\"/login\">\r\n        <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n        <span class=\"sidebar-item-title\">Zaloguj</span>\r\n    </a>\r\n    <a href=\"#\" class=\"top-nav-item item-right\">\r\n        <i class=\"fa fa-shopping-basket\" aria-hidden=\"true\"></i>\r\n    </a>\r\n</div>\r\n\r\n"

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
var NavbarComponent = (function () {
    function NavbarComponent(accoutnService) {
        this.accoutnService = accoutnService;
        this.isLogged = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accoutnService.isLogged.subscribe(function (data) {
            _this.isLogged = data;
        });
    };
    NavbarComponent.prototype.logout = function () {
        // czyszczenie ciastek, sesji, localStorage
        // czyszczenie po stronie backendu sesji
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [account_service_1.AccountService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = ""

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
var account_service_1 = __webpack_require__("../../../../../src/app/shared/services/account.service.ts");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ProductListComponent = (function () {
    function ProductListComponent(accountService) {
        this.accountService = accountService;
    }
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'app-product-list',
            template: __webpack_require__("../../../../../src/app/product-list/product-list.component.html")
        }),
        __metadata("design:paramtypes", [account_service_1.AccountService])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;


/***/ }),

/***/ "../../../../../src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = ""

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ProductComponent = (function () {
    function ProductComponent() {
    }
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'app-product',
            template: __webpack_require__("../../../../../src/app/product/product.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;


/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-4\"></div>\r\n    <div class=\"col-md-4\">\r\n      <h1 class=\"sign-in\">Rejestracja</h1>\r\n      <form [formGroup]=\"registerForm\">\r\n        <div class=\"form-group\">\r\n            <label for=\"login\">Login</label>\r\n            <input formControlName=\"login\" type=\"text\" class=\"form-control\" placeholder=\"login\">\r\n            <div class=\"invalid-control\" *ngIf=\"!registerForm.controls['login'].valid && registerForm.controls['login'].touched\">Login jest nieprawidłowy.</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email</label>\r\n          <input formControlName=\"email\" type=\"text\" class=\"form-control\" placeholder=\"email\">\r\n          <div class=\"invalid-control\" *ngIf=\"!registerForm.controls['email'].valid && registerForm.controls['email'].touched\">Email jest nieprawidłowy.</div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Hasło</label>\r\n          <input formControlName=\"password\" type=\"password\" class=\"form-control\" placeholder=\"hasło\">\r\n          <div class=\"invalid-control\" *ngIf=\"!registerForm.controls['password'].valid && registerForm.controls['password'].touched\">Hasło musi się składać z conajmniej 6 znaków.</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"confirmPassword\">Potwierdź hasło</label>\r\n            <input formControlName=\"confirmPassword\" type=\"password\" class=\"form-control\" placeholder=\"potwierdź hasło\">\r\n            <div class=\"invalid-control\" *ngIf=\"!registerForm.controls['confirmPassword'].valid && registerForm.controls['confirmPassword'].touched\">Hasła nie pasują do siebie.</div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-default register-btn\" (click)=\"save()\">Wyślij</button>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-md-4\"></div>\r\n  </div>\r\n"

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
__export(__webpack_require__("../../../../../src/app/shared/loader/loader.component.ts"));


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
    AccountService.prototype.login = function (model) {
        return this.httpService.post('user/loginAsync', model);
    };
    AccountService.prototype.logout = function () {
    };
    AccountService.prototype.register = function (model) {
        return this.httpService.post('user/registerAsync', model);
    };
    AccountService.prototype.test = function () {
        return this.httpService.get('user/test');
    };
    AccountService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;


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
        if (localStorage.getItem('token') !== undefined && localStorage.getItem('token') !== null) {
            options.headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
        }
        options.headers.append('Content-Type', 'application/json');
        return options;
    };
    HttpService.prototype.intercept = function (observable) {
        var _this = this;
        this.isLoading.next(true);
        return observable.catch(function (err, source) {
            //if (err.status  == 401 && !_.endsWith(err.url, '/login')) {
            if (err.status == 401) {
                _this.router.navigateByUrl('login');
                return Rx_1.Observable.empty();
            }
            else {
                return Rx_1.Observable.throw(err);
            }
        }).finally(function () {
            _this.isLoading.next(false);
        });
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


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