(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-topo></app-topo>\n\n<div *ngIf=\"jogoEmAndamento; else fimDeJogo \">\n    <app-painel (encerrarJogo)=\"encerrarJogo($event)\"></app-painel>\n</div>\n<ng-template #fimDeJogo>\n    <div *ngIf=\"tipoEncerramento === 'derrota'; else fimDeJogoVitoria\" class=\"container\" style=\"margin-top: 50px\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <h3 style=\"color: red\">Fim de jogo, infelizmente você perdeu :S</h3>\n                <button class=\"btn btn-primary\" (click)=\"reiniciarJogo()\">Jogar novamente</button>\n            </div>\n        </div>\n    </div>\n</ng-template>    \n<ng-template #fimDeJogoVitoria>\n    <div class=\"container\" style=\"margin-top: 50px\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <h3 style=\"color: green\">Fim de jogo, você ganhou! :D</h3>\n                <button class=\"btn btn-primary\" (click)=\"reiniciarJogo()\">Jogar novamente</button>\n            </div>\n        </div>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/painel/painel.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/painel/painel.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"jumbotron\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <app-progresso [progresso]=\"progresso\"></app-progresso>\n            </div>\n            <div class=\"col-sm-6\">\n                <div class=\"d-flex justify-content-end\">\n                    <app-tentativas [tentativas]=\"tentativas\"></app-tentativas>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col\">\n                <h6>{{ instrucao }}</h6>\n                <p>{{ rodadaFrase.fraseEng }}</p>\n\n                <div class=\"form-group\">\n                    <textarea \n                        class=\"form-control\" \n                        rows=\"3\"\n                        (input)=\"atualizaResposta($event)\"\n                        [value]=\"resposta\"\n                        ></textarea>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"d-flex justify-content-end\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"verificarResposta()\">Verificar</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/progresso/progresso.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/progresso/progresso.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\n    <div class=\"progress-bar w-{{ progresso }}\" role=\"progressbar\"></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tentativas/tentativas.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tentativas/tentativas.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n<img [src]=\"coracaoVazio\" />\n<img [src]=\"coracaoVazio\" />\n<img [src]=\"coracaoVazio\" />\n<img [src]=\"coracaoVazio\" />\n<img [src]=\"coracaoVazio\" />\n<img [src]=\"coracaoVazio\" />\n-->\n\n<img *ngFor=\"let coracao of coracoes\" [src]=\"coracao.exibeCoracao()\" />"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/topo/topo.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/topo/topo.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse bg-faded\">\r\n    <h1 class=\"navbar-brand mb-0\">{{ titulo }}</h1>\r\n</nav>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n    font-size: 25px;\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.jogoEmAndamento = true;
    }
    encerrarJogo(tipo) {
        this.jogoEmAndamento = false;
        this.tipoEncerramento = tipo;
    }
    reiniciarJogo() {
        this.jogoEmAndamento = true;
        this.tipoEncerramento = undefined;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _topo_topo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topo/topo.component */ "./src/app/topo/topo.component.ts");
/* harmony import */ var _painel_painel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./painel/painel.component */ "./src/app/painel/painel.component.ts");
/* harmony import */ var _tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tentativas/tentativas.component */ "./src/app/tentativas/tentativas.component.ts");
/* harmony import */ var _progresso_progresso_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./progresso/progresso.component */ "./src/app/progresso/progresso.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _topo_topo_component__WEBPACK_IMPORTED_MODULE_5__["TopoComponent"],
            _painel_painel_component__WEBPACK_IMPORTED_MODULE_6__["PainelComponent"],
            _tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_7__["TentativasComponent"],
            _progresso_progresso_component__WEBPACK_IMPORTED_MODULE_8__["ProgressoComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/painel/frases-mock.ts":
/*!***************************************!*\
  !*** ./src/app/painel/frases-mock.ts ***!
  \***************************************/
/*! exports provided: FRASES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRASES", function() { return FRASES; });
const FRASES = [
    { fraseEng: 'I like to learn', frasePtBr: 'Eu gosto de aprender' },
    { fraseEng: 'I watch tv', frasePtBr: 'Eu assisto tv' },
    { fraseEng: 'How are you?', frasePtBr: 'Como vai você?' },
    { fraseEng: 'I eat bread', frasePtBr: 'Eu como pão' }
];


/***/ }),

/***/ "./src/app/painel/painel.component.css":
/*!*********************************************!*\
  !*** ./src/app/painel/painel.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    margin-top: 20px;\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFpbmVsL3BhaW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9wYWluZWwvcGFpbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/painel/painel.component.ts":
/*!********************************************!*\
  !*** ./src/app/painel/painel.component.ts ***!
  \********************************************/
/*! exports provided: PainelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelComponent", function() { return PainelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _frases_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frases-mock */ "./src/app/painel/frases-mock.ts");



let PainelComponent = class PainelComponent {
    constructor() {
        this.frases = _frases_mock__WEBPACK_IMPORTED_MODULE_2__["FRASES"];
        this.instrucao = 'Traduza a frase:';
        this.resposta = '';
        this.rodada = 0;
        this.progresso = 0;
        this.tentativas = 3;
        this.encerrarJogo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.atualizaRodada();
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    atualizaResposta(resposta) {
        this.resposta = resposta.target.value;
        //console.log(this.resposta)
    }
    verificarResposta() {
        if (this.rodadaFrase.frasePtBr == this.resposta) {
            //trocar pergunta da rodada
            this.rodada++;
            //progresso
            this.progresso = this.progresso + (100 / this.frases.length);
            //
            if (this.rodada === 4) {
                this.encerrarJogo.emit('vitória');
            }
            //atualiza o objeto rodadaFrase
            this.atualizaRodada();
        }
        else {
            //diminuir a variável tentativas
            this.tentativas--;
            if (this.tentativas === -1) {
                this.encerrarJogo.emit('derrota');
            }
        }
    }
    atualizaRodada() {
        // define a frase da rodada com base em alguma lógica
        this.rodadaFrase = this.frases[this.rodada];
        //limpar a resposta
        this.resposta = '';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PainelComponent.prototype, "encerrarJogo", void 0);
PainelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-painel',
        template: __webpack_require__(/*! raw-loader!./painel.component.html */ "./node_modules/raw-loader/index.js!./src/app/painel/painel.component.html"),
        styles: [__webpack_require__(/*! ./painel.component.css */ "./src/app/painel/painel.component.css")]
    })
], PainelComponent);



/***/ }),

/***/ "./src/app/progresso/progresso.component.css":
/*!***************************************************!*\
  !*** ./src/app/progresso/progresso.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progress {\r\n    background: #EEF8DA;\r\n    border: solid 1 px #99CE28;\r\n}\r\n\r\n.progress-bar {\r\n    background: #99CE28;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3Jlc3NvL3Byb2dyZXNzby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyZXNzby9wcm9ncmVzc28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUVGOERBO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxIHB4ICM5OUNFMjg7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXIge1xyXG4gICAgYmFja2dyb3VuZDogIzk5Q0UyODtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/progresso/progresso.component.ts":
/*!**************************************************!*\
  !*** ./src/app/progresso/progresso.component.ts ***!
  \**************************************************/
/*! exports provided: ProgressoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressoComponent", function() { return ProgressoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProgressoComponent = class ProgressoComponent {
    constructor() {
        this.progresso = 0;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressoComponent.prototype, "progresso", void 0);
ProgressoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-progresso',
        template: __webpack_require__(/*! raw-loader!./progresso.component.html */ "./node_modules/raw-loader/index.js!./src/app/progresso/progresso.component.html"),
        styles: [__webpack_require__(/*! ./progresso.component.css */ "./src/app/progresso/progresso.component.css")]
    })
], ProgressoComponent);



/***/ }),

/***/ "./src/app/shared/coracao.model.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/coracao.model.ts ***!
  \*****************************************/
/*! exports provided: Coracao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coracao", function() { return Coracao; });
class Coracao {
    constructor(cheio, urlCoracaoCheio = '/assets/coracao_cheio.png', urlCoracaoVazio = '/assets/coracao_vazio.png') {
        this.cheio = cheio;
        this.urlCoracaoCheio = urlCoracaoCheio;
        this.urlCoracaoVazio = urlCoracaoVazio;
    }
    exibeCoracao() {
        if (this.cheio) {
            return this.urlCoracaoCheio;
        }
        else {
            return this.urlCoracaoVazio;
        }
    }
}
Coracao.ctorParameters = () => [
    { type: Boolean },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/tentativas/tentativas.component.css":
/*!*****************************************************!*\
  !*** ./src/app/tentativas/tentativas.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbnRhdGl2YXMvdGVudGF0aXZhcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/tentativas/tentativas.component.ts":
/*!****************************************************!*\
  !*** ./src/app/tentativas/tentativas.component.ts ***!
  \****************************************************/
/*! exports provided: TentativasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TentativasComponent", function() { return TentativasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_coracao_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/coracao.model */ "./src/app/shared/coracao.model.ts");



let TentativasComponent = class TentativasComponent {
    constructor() {
        this.coracoes = [
            new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_2__["Coracao"](true), new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_2__["Coracao"](true), new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_2__["Coracao"](true)
        ];
    }
    ngOnChanges() {
        //this.tentativas
        //this.coracoes.length
        if (this.tentativas !== this.coracoes.length) {
            let indice = this.coracoes.length - this.tentativas;
            this.coracoes[indice - 1].cheio = false;
        }
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TentativasComponent.prototype, "tentativas", void 0);
TentativasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tentativas',
        template: __webpack_require__(/*! raw-loader!./tentativas.component.html */ "./node_modules/raw-loader/index.js!./src/app/tentativas/tentativas.component.html"),
        styles: [__webpack_require__(/*! ./tentativas.component.css */ "./src/app/tentativas/tentativas.component.css")]
    })
], TentativasComponent);



/***/ }),

/***/ "./src/app/topo/topo.component.css":
/*!*****************************************!*\
  !*** ./src/app/topo/topo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n    background: #1CB0F6\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wby90b3BvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdG9wby90b3BvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICAgIGJhY2tncm91bmQ6ICMxQ0IwRjZcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/topo/topo.component.ts":
/*!****************************************!*\
  !*** ./src/app/topo/topo.component.ts ***!
  \****************************************/
/*! exports provided: TopoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopoComponent", function() { return TopoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TopoComponent = class TopoComponent {
    constructor() {
        this.titulo = "Aprendendo Inglês";
    }
};
TopoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topo',
        template: __webpack_require__(/*! raw-loader!./topo.component.html */ "./node_modules/raw-loader/index.js!./src/app/topo/topo.component.html"),
        styles: [__webpack_require__(/*! ./topo.component.css */ "./src/app/topo/topo.component.css")]
    })
], TopoComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\leandrofm\cursoweb\angular\projetos\app1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map