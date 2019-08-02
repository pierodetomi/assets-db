(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api/assets.api.ts":
/*!***********************************!*\
  !*** ./src/app/api/assets.api.ts ***!
  \***********************************/
/*! exports provided: AssetsApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsApi", function() { return AssetsApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var AssetsApi = /** @class */ (function () {
    function AssetsApi(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/api/assets";
    }
    AssetsApi.prototype.addType = function (type, callback) {
        var url = this.baseUrl + "/type";
        this.http.put(url, type)
            .subscribe(function (data) {
            callback(data);
        });
    };
    AssetsApi.prototype.getAllTypes = function (callback) {
        var url = this.baseUrl + "/types";
        this.http.get(url)
            .subscribe(function (data) {
            callback(data);
        });
    };
    AssetsApi.prototype.updateType = function (type, callback) {
        var url = this.baseUrl + "/type";
        this.http.patch(url, type)
            .subscribe(function (data) {
            callback(data);
        });
    };
    AssetsApi.prototype.deleteType = function (id, callback) {
        var url = this.baseUrl + "/type/" + id;
        this.http.delete(url)
            .subscribe(function () {
            callback();
        });
    };
    AssetsApi.prototype.addCategory = function (category, callback) {
        var url = this.baseUrl + "/category";
        this.http.put(url, category)
            .subscribe(function (data) {
            callback(data);
        });
    };
    AssetsApi.prototype.getAllCategories = function (callback) {
        var url = this.baseUrl + "/categories";
        this.http.get(url)
            .subscribe(function (data) {
            callback(data);
        });
    };
    AssetsApi.prototype.updateCategory = function (category, callback) {
        var url = this.baseUrl + "/category";
        this.http.patch(url, category)
            .subscribe(function (data) {
            callback(data);
        });
    };
    AssetsApi.prototype.deleteCategory = function (id, callback) {
        var url = this.baseUrl + "/category/" + id;
        this.http.delete(url)
            .subscribe(function () {
            callback();
        });
    };
    AssetsApi.prototype.getAssets = function (filter, callback) {
        var url = this.baseUrl;
        this.http.post(url, filter)
            .subscribe(function (data) {
            callback(data);
        });
    };
    AssetsApi.prototype.getAssetById = function (id, callback) {
        var url = this.baseUrl + "/" + id;
        this.http.get(url)
            .subscribe(function (data) {
            callback(data);
        });
    };
    AssetsApi.prototype.addAsset = function (asset, callback) {
        var url = this.baseUrl;
        this.http.put(url, asset)
            .subscribe(function (data) {
            callback(data);
        });
    };
    AssetsApi.prototype.addAssetFile = function (id, file, callback) {
        var form = new FormData();
        form.append("file", file);
        var url = (this.baseUrl + "/" + id + "/files");
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("encoding", "multipart/form-data");
        this.http.put(url, form, { headers: headers })
            .subscribe(function (data) {
            callback(data);
        });
    };
    AssetsApi.prototype.getAssetFiles = function (assetId, callback) {
        var url = this.baseUrl + "/" + assetId + "/files";
        this.http.get(url)
            .subscribe(function (files) { return callback(files); });
    };
    AssetsApi.prototype.downloadAssetFile = function (assetId, fileId) {
        var url = (this.baseUrl + "/" + assetId + "/files/" + fileId + "/download");
        window.location.href = url;
    };
    AssetsApi.prototype.deleteAssetFile = function (assetId, fileId, callback) {
        var url = this.baseUrl + "/" + assetId + "/files/" + fileId;
        this.http.delete(url)
            .subscribe(function () { return callback(); });
    };
    AssetsApi = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AssetsApi);
    return AssetsApi;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\r\n<router-outlet></router-outlet>\r\n\r\n<new-asset></new-asset>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_app_routing_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config/app-routing.config */ "./src/app/config/app-routing.config.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_assets_page_assets_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/assets-page/assets-page.component */ "./src/app/components/assets-page/assets-page.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_side_filters_side_filters_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/side-filters/side-filters.component */ "./src/app/components/side-filters/side-filters.component.ts");
/* harmony import */ var _components_assets_viewer_assets_viewer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/assets-viewer/assets-viewer.component */ "./src/app/components/assets-viewer/assets-viewer.component.ts");
/* harmony import */ var _components_ui_check_ui_check_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ui-check/ui-check.component */ "./src/app/components/ui-check/ui-check.component.ts");
/* harmony import */ var _components_asset_types_page_asset_types_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/asset-types-page/asset-types-page.component */ "./src/app/components/asset-types-page/asset-types-page.component.ts");
/* harmony import */ var _components_asset_categories_page_asset_categories_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/asset-categories-page/asset-categories-page.component */ "./src/app/components/asset-categories-page/asset-categories-page.component.ts");
/* harmony import */ var _components_new_asset_new_asset_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/new-asset/new-asset.component */ "./src/app/components/new-asset/new-asset.component.ts");
/* harmony import */ var _components_ui_tags_input_ui_tags_input_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/ui-tags-input/ui-tags-input.component */ "./src/app/components/ui-tags-input/ui-tags-input.component.ts");
/* harmony import */ var _components_ui_thumbnail_picker_ui_thumbnail_picker_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/ui-thumbnail-picker/ui-thumbnail-picker.component */ "./src/app/components/ui-thumbnail-picker/ui-thumbnail-picker.component.ts");
/* harmony import */ var _components_asset_page_asset_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/asset-page/asset-page.component */ "./src/app/components/asset-page/asset-page.component.ts");
/* harmony import */ var _pipes_file_size_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pipes/file-size.pipe */ "./src/app/pipes/file-size.pipe.ts");






// Config

// Components













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_ui_check_ui_check_component__WEBPACK_IMPORTED_MODULE_12__["UICheckComponent"],
                _components_ui_tags_input_ui_tags_input_component__WEBPACK_IMPORTED_MODULE_16__["UITagsInputComponent"],
                _components_ui_thumbnail_picker_ui_thumbnail_picker_component__WEBPACK_IMPORTED_MODULE_17__["UIThumbnailPickerComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _components_side_filters_side_filters_component__WEBPACK_IMPORTED_MODULE_10__["SideFiltersComponent"],
                _components_assets_viewer_assets_viewer_component__WEBPACK_IMPORTED_MODULE_11__["AssetsViewerComponent"],
                _components_new_asset_new_asset_component__WEBPACK_IMPORTED_MODULE_15__["NewAssetComponent"],
                _components_assets_page_assets_page_component__WEBPACK_IMPORTED_MODULE_8__["AssetsPageComponent"],
                _components_asset_page_asset_page_component__WEBPACK_IMPORTED_MODULE_18__["AssetPageComponent"],
                _components_asset_types_page_asset_types_page_component__WEBPACK_IMPORTED_MODULE_13__["AssetTypesPageComponent"],
                _components_asset_categories_page_asset_categories_page_component__WEBPACK_IMPORTED_MODULE_14__["AssetCategoriesPageComponent"],
                _pipes_file_size_pipe__WEBPACK_IMPORTED_MODULE_19__["FileSizePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_config_app_routing_config__WEBPACK_IMPORTED_MODULE_6__["ROUTES"]),
            ],
            providers: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/asset-categories-page/asset-categories-page.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/asset-categories-page/asset-categories-page.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"asset-categories-page\" *ngIf=\"!isLoading\">\r\n    <div class=\"box\">\r\n        Add new asset category:\r\n        <input class=\"add-input\" type=\"text\" placeholder=\"name\" [(ngModel)]=\"newCategoryName\" />\r\n        <button class=\"btn-green\" [disabled]=\"!canAdd()\" (click)=\"add()\">+ Add Category</button>\r\n    </div>\r\n\r\n    <h2>Categories</h2>\r\n\r\n    <div class=\"asset-categories\">\r\n        <div class=\"asset-category\" [ngClass]=\"{ 'editing': _category.isEditing }\" *ngFor=\"let _category of categories\">\r\n            <span *ngIf=\"!_category.isEditing\">{{_category.name}}</span>\r\n            <input *ngIf=\"_category.isEditing\" type=\"text\" [(ngModel)]=\"_category.editingName\" />\r\n\r\n            <span class=\"actions\">\r\n                <span class=\"action\" *ngIf=\"!_category.isEditing\" (click)=\"rename(_category)\">Rename</span>\r\n                <span class=\"action red\" *ngIf=\"!_category.isEditing\">Delete</span>\r\n                \r\n                <span class=\"action green\" *ngIf=\"_category.isEditing\" (click)=\"confirmRename(_category)\">Save</span>\r\n                <span class=\"action\" *ngIf=\"_category.isEditing\" (click)=\"cancelRename(_category)\">Cancel</span>\r\n            </span>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/asset-categories-page/asset-categories-page.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/asset-categories-page/asset-categories-page.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".asset-categories-page {\n  padding: 20px; }\n  .asset-categories-page .add-input {\n    font-size: 24px;\n    font-weight: 300;\n    padding: 15px; }\n  .asset-categories-page .asset-categories .asset-category {\n    position: relative;\n    margin: 5px 0;\n    background: #4c4c4c;\n    padding: 10px;\n    border-radius: 2px;\n    transition: 300ms all; }\n  .asset-categories-page .asset-categories .asset-category:hover .actions, .asset-categories-page .asset-categories .asset-category.editing .actions {\n      display: inline-block; }\n  .asset-categories-page .asset-categories .asset-category .actions {\n      display: none;\n      position: absolute;\n      top: 50%;\n      transform: translateY(-50%);\n      right: 10px;\n      cursor: pointer; }\n  .asset-categories-page .asset-categories .asset-category .actions .action {\n        display: inline-block;\n        margin: 0 10px;\n        font-size: 14px;\n        font-weight: 600;\n        letter-spacing: 1px;\n        text-transform: uppercase; }\n  .asset-categories-page .asset-categories .asset-category .actions .action.red {\n          color: #c44d4d; }\n  .asset-categories-page .asset-categories .asset-category .actions .action.green {\n          color: #45ad74; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hc3NldC1jYXRlZ29yaWVzLXBhZ2UvQzpcXFVzZXJzXFxkZV90b21pXFxEb2N1bWVudHNcXHdvcmtzcGFjZVxcX19vdGhlclxcYXNzZXRzLWRiXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFzc2V0LWNhdGVnb3JpZXMtcGFnZVxcYXNzZXQtY2F0ZWdvcmllcy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Fzc2V0LWNhdGVnb3JpZXMtcGFnZS9DOlxcVXNlcnNcXGRlX3RvbWlcXERvY3VtZW50c1xcd29ya3NwYWNlXFxfX290aGVyXFxhc3NldHMtZGJcXGNsaWVudC9zcmNcXGFwcFxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFhLEVBQUE7RUFEakI7SUFJUSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWEsRUFBQTtFQU5yQjtJQVdZLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQXNDO0lBQ3RDLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCLEVBQUE7RUFoQmpDO01Bb0JvQixxQkFBcUIsRUFBQTtFQXBCekM7TUF5QmdCLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLDJCQUEyQjtNQUMzQixXQUFXO01BQ1gsZUFBZSxFQUFBO0VBOUIvQjtRQWlDb0IscUJBQXFCO1FBQ3JCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQix5QkFBeUIsRUFBQTtFQXRDN0M7VUF5Q3dCLGNDMUNYLEVBQUE7RURDYjtVQTZDd0IsY0MvQ1QsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXNzZXQtY2F0ZWdvcmllcy1wYWdlL2Fzc2V0LWNhdGVnb3JpZXMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XHJcblxyXG4uYXNzZXQtY2F0ZWdvcmllcy1wYWdlIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgLmFkZC1pbnB1dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuYXNzZXQtY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgLmFzc2V0LWNhdGVnb3J5IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRhcHAtYm94ZXMtYmcsIDglKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcyBhbGw7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyLCAmLmVkaXRpbmcge1xyXG4gICAgICAgICAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgLmFjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJi5yZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHJlZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICYuZ3JlZW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIiRncmVlbjogIzQ1YWQ3NDtcclxuJHJlZDogI2M0NGQ0ZDtcclxuJHdoaXRlOiAjZmZmO1xyXG4kZGlydHktd2hpdGU6ICNlNGU0ZTQ7XHJcbiRkYXJrLWdyYXk6ICMyZTJlMmU7XHJcbiRtaWQtZ3JheTogIzM4MzgzODtcclxuJGxpZ2h0LWdyYXk6ICM1NDU0NTQ7XHJcblxyXG4kYXBwLWJnOiAkZGFyay1ncmF5O1xyXG4kYXBwLWJveGVzLWJnOiAkbWlkLWdyYXk7XHJcbiRhcHAtdGV4dC1jb2xvcjogJGRpcnR5LXdoaXRlO1xyXG5cclxuJGFwcC1mb250OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuXHJcbiRhcHAtb3ZlcmxheS1iZzogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4kYXBwLW1vZGFsLWJnOiBsaWdodGVuKCRhcHAtYm94ZXMtYmcsIDUlKTtcclxuXHJcbiRhcHAtaW5wdXQtYmc6IGxpZ2h0ZW4oJGFwcC1tb2RhbC1iZywgMTAlKTsiXX0= */"

/***/ }),

/***/ "./src/app/components/asset-categories-page/asset-categories-page.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/asset-categories-page/asset-categories-page.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AssetCategoriesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetCategoriesPageComponent", function() { return AssetCategoriesPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_api_assets_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/assets.api */ "./src/app/api/assets.api.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");




var AssetCategoriesPageComponent = /** @class */ (function () {
    function AssetCategoriesPageComponent(assetsApi, data) {
        this.assetsApi = assetsApi;
        this.data = data;
        this.categories = null;
        this.newCategoryName = null;
        this.isLoading = true;
    }
    AssetCategoriesPageComponent.prototype.ngOnInit = function () {
        var self = this;
        this.dataSubscription = this.dataSubscription = this.data.onAssetCategoriesChanged(function (categories) {
            self.categories = categories;
            self.isLoading = false;
        });
    };
    AssetCategoriesPageComponent.prototype.ngOnDestroy = function () {
        this.dataSubscription.unsubscribe();
    };
    AssetCategoriesPageComponent.prototype.canAdd = function () {
        return (this.newCategoryName !== undefined &&
            this.newCategoryName !== null &&
            this.newCategoryName.length > 0);
    };
    AssetCategoriesPageComponent.prototype.add = function () {
        var self = this;
        this.assetsApi.addCategory({
            id: null,
            name: this.newCategoryName
        }, function (category) {
            self.newCategoryName = null;
            self.categories.push(category);
            self.data.refreshAssetCategories(self.categories);
        });
    };
    AssetCategoriesPageComponent.prototype.rename = function (category) {
        var c = category;
        c.editingName = c.name;
        c.isEditing = true;
    };
    AssetCategoriesPageComponent.prototype.cancelRename = function (category) {
        var c = category;
        c.isEditing = false;
    };
    AssetCategoriesPageComponent.prototype.confirmRename = function (category) {
        var c = category;
        if (!c.editingName || c.editingName == null || c.editingName == "")
            return;
        c.name = c.editingName;
        this.assetsApi.updateCategory(category, function (updatedCategory) {
            c.isEditing = false;
        });
    };
    AssetCategoriesPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "asset-categories-page",
            template: __webpack_require__(/*! ./asset-categories-page.component.html */ "./src/app/components/asset-categories-page/asset-categories-page.component.html"),
            styles: [__webpack_require__(/*! ./asset-categories-page.component.scss */ "./src/app/components/asset-categories-page/asset-categories-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_api_assets_api__WEBPACK_IMPORTED_MODULE_2__["AssetsApi"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], AssetCategoriesPageComponent);
    return AssetCategoriesPageComponent;
}());



/***/ }),

/***/ "./src/app/components/asset-page/asset-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/asset-page/asset-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"asset-page\" *ngIf=\"!isLoading\">\r\n    <h1>{{asset.name}}</h1>\r\n\r\n    <div class=\"meta\">\r\n        <div class=\"thumb\">\r\n            <img [src]=\"getThumbnailUrl()\" />\r\n        </div>\r\n    \r\n        <div class=\"details\">\r\n            <div class=\"box\">\r\n                <div class=\"info-block\">\r\n                    <span class=\"label\">Type</span>\r\n                    <span class=\"value\">{{getTypeName()}}</span>\r\n                </div>\r\n        \r\n                <div class=\"info-block\">\r\n                    <span class=\"label\">Category 1</span>\r\n                    <span class=\"value\">{{getCategoryName(asset.category1Id)}}</span>\r\n                </div>\r\n        \r\n                <div class=\"info-block\">\r\n                    <span class=\"label\">Category 2</span>\r\n                    <span class=\"value\">{{getCategoryName(asset.category2Id)}}</span>\r\n                </div>\r\n        \r\n                <div class=\"info-block\">\r\n                    <span class=\"label\">Category 3</span>\r\n                    <span class=\"value\">{{getCategoryName(asset.category3Id)}}</span>\r\n                </div>\r\n        \r\n                <div class=\"info-block\">\r\n                    <span class=\"label\">Tags</span>\r\n                    <span class=\"value\">{{asset.tags}}</span>\r\n                </div>\r\n        \r\n                <div class=\"info-block\">\r\n                    <span class=\"label\">Engine</span>\r\n                    <span class=\"value\">{{asset.engine}}</span>\r\n                </div>\r\n        \r\n                <div class=\"info-block\">\r\n                    <span class=\"label\">Engine Version</span>\r\n                    <span class=\"value\">{{asset.engineVersion}}</span>\r\n                </div>\r\n        \r\n                <div class=\"info-block\">\r\n                    <span class=\"label\">Note</span>\r\n                    <span class=\"value\">{{asset.note}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"files-container\">\r\n        <h2>Files</h2>\r\n\r\n        <div class=\"box\">\r\n            <div class=\"add-file-area\">\r\n                <input type=\"file\" name=\"file\" placeholder=\"Select a file\" (change)=\"onSelectedFileForUpload($event)\" />\r\n                <button class=\"btn-green\" [disabled]=\"!canAddFile()\" (click)=\"addFile()\">+ Add file</button>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"files\">\r\n            <div class=\"file\" *ngFor=\"let _file of files\">\r\n                <div class=\"actions\">\r\n                    <span class=\"action green\" (click)=\"downloadFile(_file)\">download</span>\r\n                    <span class=\"action red\" (click)=\"deleteFile(_file)\">delete</span>\r\n                </div>\r\n                <div class=\"name\">{{_file.name}}</div>\r\n                <div class=\"size\">{{_file.size | fileSize}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/asset-page/asset-page.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/asset-page/asset-page.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".asset-page {\n  padding: 20px; }\n  .asset-page .meta {\n    position: relative; }\n  .asset-page .meta:after {\n      content: \"\";\n      display: table;\n      clear: both; }\n  .asset-page .thumb {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 400px; }\n  .asset-page .thumb img {\n      width: 100%; }\n  .asset-page .details {\n    position: relative;\n    padding-left: 420px; }\n  .asset-page .details .box {\n      padding: 10px 20px;\n      background: #383838; }\n  .asset-page .details .box .info-block {\n        margin: 10px 0; }\n  .asset-page .details .box .info-block .label {\n          opacity: 0.5;\n          display: inline-block;\n          width: 150px;\n          font-size: 14px;\n          font-weight: 600;\n          text-transform: uppercase; }\n  .asset-page .details .box .info-block .value {\n          margin-left: 10px; }\n  .asset-page .files-container .files .file {\n    margin: 5px 0;\n    background: #4c4c4c;\n    padding: 10px;\n    border-radius: 2px; }\n  .asset-page .files-container .files .file .size {\n      font-size: 14px;\n      font-weight: 600;\n      opacity: 0.4; }\n  .asset-page .files-container .files .file:hover .actions {\n      display: initial; }\n  .asset-page .files-container .files .file .actions {\n      display: none;\n      float: right; }\n  .asset-page .files-container .files .file .actions .action {\n        display: inline-block;\n        margin: 0 10px;\n        vertical-align: middle;\n        font-size: 14px;\n        font-weight: 600;\n        letter-spacing: 1px;\n        text-transform: uppercase;\n        cursor: pointer; }\n  .asset-page .files-container .files .file .actions .action.green:hover {\n          color: #45ad74; }\n  .asset-page .files-container .files .file .actions .action.red:hover {\n          color: #c44d4d; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hc3NldC1wYWdlL0M6XFxVc2Vyc1xcZGVfdG9taVxcRG9jdW1lbnRzXFx3b3Jrc3BhY2VcXF9fb3RoZXJcXGFzc2V0cy1kYlxcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxhc3NldC1wYWdlXFxhc3NldC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Fzc2V0LXBhZ2UvQzpcXFVzZXJzXFxkZV90b21pXFxEb2N1bWVudHNcXHdvcmtzcGFjZVxcX19vdGhlclxcYXNzZXRzLWRiXFxjbGllbnQvc3JjXFxhcHBcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBYSxFQUFBO0VBRGpCO0lBSVEsa0JBQWtCLEVBQUE7RUFKMUI7TUFPWSxXQUFXO01BQ1gsY0FBYztNQUNkLFdBQVcsRUFBQTtFQVR2QjtJQWNRLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVksRUFBQTtFQWpCcEI7TUFvQlksV0FBVyxFQUFBO0VBcEJ2QjtJQXlCUSxrQkFBa0I7SUFDbEIsbUJBQW1CLEVBQUE7RUExQjNCO01BNkJZLGtCQUFrQjtNQUNsQixtQkMzQk0sRUFBQTtFREhsQjtRQWlDZ0IsY0FBYyxFQUFBO0VBakM5QjtVQW9Db0IsWUFBWTtVQUNaLHFCQUFxQjtVQUNyQixZQUFZO1VBQ1osZUFBZTtVQUNmLGdCQUFnQjtVQUNoQix5QkFBeUIsRUFBQTtFQXpDN0M7VUE2Q29CLGlCQUFpQixFQUFBO0VBN0NyQztJQXNEZ0IsYUFBYTtJQUNiLG1CQUFzQztJQUN0QyxhQUFhO0lBQ2Isa0JBQWtCLEVBQUE7RUF6RGxDO01BNERvQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLFlBQVksRUFBQTtFQTlEaEM7TUFtRXdCLGdCQUFnQixFQUFBO0VBbkV4QztNQXdFb0IsYUFBYTtNQUNiLFlBQVksRUFBQTtFQXpFaEM7UUE0RXdCLHFCQUFxQjtRQUNyQixjQUFjO1FBQ2Qsc0JBQXNCO1FBQ3RCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLHlCQUF5QjtRQUN6QixlQUFlLEVBQUE7RUFuRnZDO1VBdUZnQyxjQ3pGakIsRUFBQTtFREVmO1VBNkZnQyxjQzlGbkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXNzZXQtcGFnZS9hc3NldC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbi5hc3NldC1wYWdlIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgLm1ldGEge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRodW1iIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRldGFpbHMge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQyMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5ib3gge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRhcHAtYm94ZXMtYmc7XHJcbiAgICBcclxuICAgICAgICAgICAgLmluZm8tYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLnZhbHVlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZmlsZXMtY29udGFpbmVyIHtcclxuICAgICAgICAuZmlsZXMge1xyXG4gICAgICAgICAgICAuZmlsZSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRlbigkYXBwLWJveGVzLWJnLCA4JSk7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgIC5zaXplIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5hY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuZ3JlZW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5yZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIkZ3JlZW46ICM0NWFkNzQ7XHJcbiRyZWQ6ICNjNDRkNGQ7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJGRpcnR5LXdoaXRlOiAjZTRlNGU0O1xyXG4kZGFyay1ncmF5OiAjMmUyZTJlO1xyXG4kbWlkLWdyYXk6ICMzODM4Mzg7XHJcbiRsaWdodC1ncmF5OiAjNTQ1NDU0O1xyXG5cclxuJGFwcC1iZzogJGRhcmstZ3JheTtcclxuJGFwcC1ib3hlcy1iZzogJG1pZC1ncmF5O1xyXG4kYXBwLXRleHQtY29sb3I6ICRkaXJ0eS13aGl0ZTtcclxuXHJcbiRhcHAtZm9udDogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcblxyXG4kYXBwLW92ZXJsYXktYmc6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuJGFwcC1tb2RhbC1iZzogbGlnaHRlbigkYXBwLWJveGVzLWJnLCA1JSk7XHJcblxyXG4kYXBwLWlucHV0LWJnOiBsaWdodGVuKCRhcHAtbW9kYWwtYmcsIDEwJSk7Il19 */"

/***/ }),

/***/ "./src/app/components/asset-page/asset-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/asset-page/asset-page.component.ts ***!
  \***************************************************************/
/*! exports provided: AssetPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetPageComponent", function() { return AssetPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_api_assets_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/assets.api */ "./src/app/api/assets.api.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");





var AssetPageComponent = /** @class */ (function () {
    function AssetPageComponent(route, data, assetsApi) {
        this.route = route;
        this.data = data;
        this.assetsApi = assetsApi;
        this.imageNotFoundUrl = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAcHBwcHBwgICAgLCwoLCxAODQ0OEBgREhESERgkFhoWFhoWJCAmHx0fJiA5LScnLTlCNzQ3Qk9HR09kX2SDg7ABBwcHBwcHCAgICAsLCgsLEA4NDQ4QGBESERIRGCQWGhYWGhYkICYfHR8mIDktJyctOUI3NDdCT0dHT2RfZIODsP/CABEIAkAEDgMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcBBQgEAwL/2gAIAQEAAAAAiIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABljOAZMZMM4yxkGGcAAAAAAAAAAAAAAAA2O8AAAAAGh8AAAAAAAAAAAAAAAAsK7xjIAAAAUVAwAAAAAAAAAAAAAABYN4fjyAAAAA9n6oqBgAAAAAAAAAAAAAACwbwjXOAAAAAOld/RUDAAAAAAAAAAAAAAAFg3hG+cgAAAz+WR0lv6KgYAAAAAAAAAAAAAAAsG8I3zkAAANncEt8FYV6dJb+ioGAAAAAAAAAAAAAAALBvCN85AAAH36T24pWucdJb+ioGAAAAAAAAAAAAAAALBvCN85AJxBwAWJdoarmLPSW/oqBgAAAAAAAAAAAAAACwbwjfOQH26kqerQAti2Q/HKLpLf0VAwAAAAAAAAAAAAAABYN4RvnICwrvxz/DwBMr/CLc7Z6S39FQMAAAAAAAAAAAAAAAWDeEb5yA6Elrx846gAXpPTy89xx0lv6KgYAAAAAAAAAAAAAAAsG8I3zkDa9N5NBzp8ABOZZ4a71h0lv6KgYAAAAAAAAAAAAAAAsG8I3zkC17aCB0XgAAdJb+ioGAAAAAAAAAAAAAAALBvCN85A6Z3GMsZqCrQAB0lv6KgYAAAAAAAAAAAAAAAsG8I3zkEr6HwD80BDwfv8AOkt/RUDAAAAAAAAAAAAAAAFg3hG+cgu6wwxl4ucdSLHs7nH4AdJb+ioGAAAAAAAAAAAAAAALBvCN85D79RegGMtBzp8PRdc+VtS4HSW/oqBgAAAAAAAAAAAAAACwbwjfOQsG8DGTGSCVTfG5Mc9xMHSW/oqBgAAAAAAAAAAAAAACwbwjfORjoWWGcAZxkw1PNnwDpLf0VAwAAAAAAAxkAAAAAAAWDeEb5yNr03kAACtaYDpLf0VAwAAAAAAAAAAAAAABYN4RvnIte2cgYzjOGcZYzjnyJDpLf0VAwAAAAAAAAAAAAAABYN4RvnJnpnb4MmMsMmGcM6jmz4HSW/oqBgAAAAAAAAAAAAAACwbwjfOSV9DAGGcZBjLFb0udJb+ioGAAAAAAAAAAAAAAALBvCN85LtsQABjID88+xJ0lv6KgYAAAAAAAAAAAAAAAsG8I3zli5fQAAADU1S6S39FQMAAAAAAAAAAAAAAAWDeEb5yAAAAB0lv6KgYAAAAAAAAAAAAAAAsG8NHSAAAAALz3FFQMAAAAAAAAAAAAAAAWDeAAAAAAoqBgAAAAAAAAAAAAAACf3WAAAAAKOgwAAAAAAAAAAAAAAAfgAAAAAfrIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADNrRmUVLZHyr20YjHJpYkUrW62nqnYWdUNoVlY8ug2tsFGa3l0/VRO5RX0cl1eWvB5hV9qxKxvjWmjAAAAAAAAAAAAA/XRkCtbmroeJVB0FoKcv/nqx4Nf9FebU7rpClLEq2wqRv6nd5J6k81mfaAyWX070HVc4pLpCob3oC3613MJu7m7IAAAAAAAAAAAAP30XA9/9vj8dBu5jR9l1bctW3bXkag26tfYe6t/VV1xw7MqqJZc60Om89c3bHJHSXSNQS/f+2sdlVnTHM/6AAAAAAAAAAAAB++i4Fq7roqcb+rpjGbCiE3qq6K811Zbq1q06L5kveEzXnuWSqoll/GuttesLmFEdAwOaVNKNBdVN2Lq/LTIAAAAAAxkAAAAAA2nn+fq8Pt/es+3p8Uj03y2T5ar6ezX7XV+jfx34/f7eJ68eV695HPn7d3Hc/bxbbxbH46sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAhAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAFAAAAAAAAAAAAAAAAAAAABFAAAAAAAAAAIoAAAAAAAAEUEUAAAAAAAACKAAAAAAAAAAQoAAAAAAAAAECgAAAAAAAAJSAsUAAAAAAAABABQAAAAAAAAQAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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";
        this.id = null;
        this.types = [];
        this.categories = [];
        this.asset = null;
        this.files = null;
        this.selectedFileForUpload = null;
        this.isLoading = true;
    }
    AssetPageComponent.prototype.ngOnInit = function () {
        var self = this;
        this.typesSubscription = this.data.onAssetTypesChanged(function (types) {
            self.types = types;
        });
        this.categoriesSubscription = this.data.onAssetCategoriesChanged(function (categories) {
            self.categories = categories;
        });
        this.routeSubscription = this.route.params.subscribe(function (params) {
            self.id = params["id"];
            self.assetsApi.getAssetById(self.id, function (asset) {
                self.asset = asset;
                self.assetsApi.getAssetFiles(self.id, function (files) {
                    self.files = files;
                    self.isLoading = false;
                });
            });
        });
    };
    AssetPageComponent.prototype.ngOnDestroy = function () {
        this.typesSubscription.unsubscribe();
        this.categoriesSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    };
    AssetPageComponent.prototype.getThumbnailUrl = function () {
        var hasThumbnailUrl = (this.asset.thumbnailUrl !== undefined &&
            this.asset.thumbnailUrl !== null &&
            this.asset.thumbnailUrl.length > 0);
        return (hasThumbnailUrl ? this.asset.thumbnailUrl : this.imageNotFoundUrl);
    };
    AssetPageComponent.prototype.getTypeName = function () {
        var type = null;
        for (var i = 0; i < this.types.length; i++)
            if (this.types[i].id === this.asset.typeId) {
                type = this.types[i];
                break;
            }
        return type !== null ? type.name : "-";
    };
    AssetPageComponent.prototype.getCategoryName = function (categoryId) {
        if (categoryId === undefined || categoryId === null || categoryId === "")
            return "-";
        var category = null;
        for (var i = 0; i < this.categories.length; i++)
            if (this.categories[i].id === categoryId) {
                category = this.categories[i];
                break;
            }
        return category !== null ? category.name : "-";
    };
    AssetPageComponent.prototype.onSelectedFileForUpload = function (event) {
        var hasFile = (event.target.files && event.target.files.length);
        if (!hasFile) {
            this.selectedFileForUpload = null;
            return;
        }
        this.selectedFileForUpload = event.target.files[0];
    };
    AssetPageComponent.prototype.canAddFile = function () {
        return (this.selectedFileForUpload !== undefined && this.selectedFileForUpload !== null);
    };
    AssetPageComponent.prototype.addFile = function () {
        var self = this;
        this.assetsApi.addAssetFile(this.id, this.selectedFileForUpload, function (assetFile) {
            self.selectedFileForUpload = null;
            console.log(assetFile);
        });
    };
    AssetPageComponent.prototype.downloadFile = function (file) {
        this.assetsApi.downloadAssetFile(this.id, file.id);
    };
    AssetPageComponent.prototype.deleteFile = function (file) {
        var self = this;
        this.assetsApi.deleteAssetFile(this.id, file.id, function () {
            var indexToRemove = self.files.indexOf(file);
            self.files.splice(indexToRemove, 1);
        });
    };
    AssetPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "asset-page",
            template: __webpack_require__(/*! ./asset-page.component.html */ "./src/app/components/asset-page/asset-page.component.html"),
            styles: [__webpack_require__(/*! ./asset-page.component.scss */ "./src/app/components/asset-page/asset-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], src_app_api_assets_api__WEBPACK_IMPORTED_MODULE_3__["AssetsApi"]])
    ], AssetPageComponent);
    return AssetPageComponent;
}());



/***/ }),

/***/ "./src/app/components/asset-types-page/asset-types-page.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/asset-types-page/asset-types-page.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"asset-types-page\" *ngIf=\"!isLoading\">\r\n    <div class=\"box\">\r\n        Add new asset type:\r\n        <input class=\"add-input\" type=\"text\" placeholder=\"name\" [(ngModel)]=\"newTypeName\" />\r\n        <button class=\"btn-green\" [disabled]=\"!canAdd()\" (click)=\"add()\">+ Add Type</button>\r\n    </div>\r\n\r\n    <h2>Types</h2>\r\n\r\n    <div class=\"asset-types\">\r\n        <div class=\"asset-type\" *ngFor=\"let _type of types\">\r\n            {{_type.name}}\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/asset-types-page/asset-types-page.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/asset-types-page/asset-types-page.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".asset-types-page {\n  padding: 20px; }\n  .asset-types-page .add-input {\n    font-size: 24px;\n    font-weight: 300;\n    padding: 15px; }\n  .asset-types-page .asset-types .asset-type {\n    margin: 5px 0;\n    background: #4c4c4c;\n    padding: 10px;\n    border-radius: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hc3NldC10eXBlcy1wYWdlL0M6XFxVc2Vyc1xcZGVfdG9taVxcRG9jdW1lbnRzXFx3b3Jrc3BhY2VcXF9fb3RoZXJcXGFzc2V0cy1kYlxcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxhc3NldC10eXBlcy1wYWdlXFxhc3NldC10eXBlcy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBYSxFQUFBO0VBRGpCO0lBSVEsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhLEVBQUE7RUFOckI7SUFXWSxhQUFhO0lBQ2IsbUJBQXNDO0lBQ3RDLGFBQWE7SUFDYixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXNzZXQtdHlwZXMtcGFnZS9hc3NldC10eXBlcy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbi5hc3NldC10eXBlcy1wYWdlIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgLmFkZC1pbnB1dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuYXNzZXQtdHlwZXMge1xyXG4gICAgICAgIC5hc3NldC10eXBlIHtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRlbigkYXBwLWJveGVzLWJnLCA4JSk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/asset-types-page/asset-types-page.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/asset-types-page/asset-types-page.component.ts ***!
  \***************************************************************************/
/*! exports provided: AssetTypesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetTypesPageComponent", function() { return AssetTypesPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_api_assets_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/assets.api */ "./src/app/api/assets.api.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");




var AssetTypesPageComponent = /** @class */ (function () {
    function AssetTypesPageComponent(assetsApi, data) {
        this.assetsApi = assetsApi;
        this.data = data;
        this.types = null;
        this.newTypeName = null;
        this.isLoading = true;
    }
    AssetTypesPageComponent.prototype.ngOnInit = function () {
        var self = this;
        this.dataSubscription = this.data.onAssetTypesChanged(function (types) {
            self.types = types;
            self.isLoading = false;
        });
    };
    AssetTypesPageComponent.prototype.ngOnDestroy = function () {
        this.dataSubscription.unsubscribe();
    };
    AssetTypesPageComponent.prototype.canAdd = function () {
        return (this.newTypeName !== undefined &&
            this.newTypeName !== null &&
            this.newTypeName.length > 0);
    };
    AssetTypesPageComponent.prototype.add = function () {
        var self = this;
        this.assetsApi.addType({
            id: null,
            name: this.newTypeName
        }, function (type) {
            self.newTypeName = null;
            self.types.push(type);
            self.data.refreshAssetTypes(self.types);
        });
    };
    AssetTypesPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "asset-types-page",
            template: __webpack_require__(/*! ./asset-types-page.component.html */ "./src/app/components/asset-types-page/asset-types-page.component.html"),
            styles: [__webpack_require__(/*! ./asset-types-page.component.scss */ "./src/app/components/asset-types-page/asset-types-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_api_assets_api__WEBPACK_IMPORTED_MODULE_2__["AssetsApi"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], AssetTypesPageComponent);
    return AssetTypesPageComponent;
}());



/***/ }),

/***/ "./src/app/components/assets-page/assets-page.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/assets-page/assets-page.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"assets-page\">\r\n    <side-filters></side-filters>\r\n    <assets-viewer></assets-viewer>\r\n</div>"

/***/ }),

/***/ "./src/app/components/assets-page/assets-page.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/assets-page/assets-page.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXNzZXRzLXBhZ2UvYXNzZXRzLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/assets-page/assets-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/assets-page/assets-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: AssetsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsPageComponent", function() { return AssetsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AssetsPageComponent = /** @class */ (function () {
    function AssetsPageComponent() {
    }
    AssetsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "assets-page",
            template: __webpack_require__(/*! ./assets-page.component.html */ "./src/app/components/assets-page/assets-page.component.html"),
            styles: [__webpack_require__(/*! ./assets-page.component.scss */ "./src/app/components/assets-page/assets-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AssetsPageComponent);
    return AssetsPageComponent;
}());



/***/ }),

/***/ "./src/app/components/assets-viewer/assets-viewer.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/assets-viewer/assets-viewer.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"assets-viewer\">\r\n    <div class=\"search\">\r\n        <input class=\"search-box\" type=\"search\" placeholder=\"Type to search ...\" [(ngModel)]=\"searchQuery\" (keypress)=\"onSearchKeyPress($event)\" />\r\n    </div>\r\n\r\n    <div class=\"viewer\" *ngIf=\"hasAssets\">\r\n        <div class=\"asset-box\" *ngFor=\"let _asset of assets\" [routerLink]=\"'/asset/' + _asset.id\">\r\n            <img class=\"thumb\" [src]=\"getAssetThumbnailUrl(_asset)\" />\r\n            <div class=\"details\">\r\n                <div class=\"name\">{{_asset.name}}</div>\r\n                <div class=\"type\">{{getAssetTypeName(_asset.typeId)}}</div>\r\n                <div class=\"categories\">\r\n                    in:\r\n                    <span>{{getAssetCategoryName(_asset.category1Id)}}</span>\r\n                    <span>{{getAssetCategoryName(_asset.category2Id)}}</span>\r\n                    <span>{{getAssetCategoryName(_asset.category3Id)}}</span>\r\n\r\n                    |\r\n\r\n                    <span>{{_asset.tags}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/assets-viewer/assets-viewer.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/assets-viewer/assets-viewer.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".assets-viewer {\n  position: absolute;\n  left: 300px;\n  right: 0;\n  top: 65px;\n  bottom: 0; }\n  .assets-viewer .search {\n    padding: 20px;\n    padding-top: 0; }\n  .assets-viewer .search .search-box {\n      width: 100%;\n      padding: 20px;\n      background: #545454;\n      border: none;\n      font-family: \"Source Sans Pro\", sans-serif;\n      font-size: 22px;\n      font-weight: 300;\n      color: #e4e4e4; }\n  .assets-viewer .search .search-box:focus, .assets-viewer .search .search-box:active {\n        outline: none; }\n  .assets-viewer .viewer {\n    position: absolute;\n    padding: 20px;\n    top: 75px;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    overflow-y: auto; }\n  .assets-viewer .viewer .asset-box {\n      display: inline-block;\n      height: 300px;\n      margin: 2px;\n      background: #454545;\n      cursor: pointer; }\n  .assets-viewer .viewer .asset-box .thumb {\n        height: 250px; }\n  .assets-viewer .viewer .asset-box .details {\n        position: relative;\n        height: 50px;\n        padding: 10px; }\n  .assets-viewer .viewer .asset-box .details .name {\n          float: left;\n          font-weight: 600; }\n  .assets-viewer .viewer .asset-box .details .type {\n          float: right; }\n  .assets-viewer .viewer .asset-box .categories {\n        position: absolute;\n        bottom: 6px;\n        right: 10px;\n        font-size: 12px;\n        color: #e4e4e4; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hc3NldHMtdmlld2VyL0M6XFxVc2Vyc1xcZGVfdG9taVxcRG9jdW1lbnRzXFx3b3Jrc3BhY2VcXF9fb3RoZXJcXGFzc2V0cy1kYlxcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxhc3NldHMtdmlld2VyXFxhc3NldHMtdmlld2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Fzc2V0cy12aWV3ZXIvQzpcXFVzZXJzXFxkZV90b21pXFxEb2N1bWVudHNcXHdvcmtzcGFjZVxcX19vdGhlclxcYXNzZXRzLWRiXFxjbGllbnQvc3JjXFxhcHBcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsU0FBUztFQUNULFNBQVMsRUFBQTtFQUxiO0lBUVEsYUFBYTtJQUNiLGNBQWMsRUFBQTtFQVR0QjtNQVlZLFdBQVc7TUFDWCxhQUFhO01BQ2IsbUJDYlE7TURjUixZQUFZO01BQ1osMENDVDRCO01EVTVCLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsY0NyQlMsRUFBQTtFREVyQjtRQXNCZ0IsYUFBYSxFQUFBO0VBdEI3QjtJQTRCUSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFNBQVM7SUFDVCxTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixnQkFBZ0IsRUFBQTtFQWxDeEI7TUFxQ1kscUJBQXFCO01BQ3JCLGFBQWE7TUFDYixXQUFXO01BQ1gsbUJBMUM2QjtNQTJDN0IsZUFBZSxFQUFBO0VBekMzQjtRQTRDZ0IsYUFBYSxFQUFBO0VBNUM3QjtRQWdEZ0Isa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixhQUFhLEVBQUE7RUFsRDdCO1VBcURvQixXQUFXO1VBQ1gsZ0JBQWdCLEVBQUE7RUF0RHBDO1VBMERvQixZQUFZLEVBQUE7RUExRGhDO1FBK0RnQixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFdBQVc7UUFDWCxlQUFlO1FBQ2YsY0NyRUssRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXNzZXRzLXZpZXdlci9hc3NldHMtdmlld2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbiRzZWFyY2gtYm94LWJnOiAkbGlnaHQtZ3JheTtcclxuJGFzc2V0LWJveC1iZzogbGlnaHRlbigkYXBwLWJveGVzLWJnLCA1JSk7XHJcblxyXG4uYXNzZXRzLXZpZXdlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAzMDBweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA2NXB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG5cclxuICAgIC5zZWFyY2gge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcblxyXG4gICAgICAgIC5zZWFyY2gtYm94IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRzZWFyY2gtYm94LWJnO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkYXBwLWZvbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgY29sb3I6ICRhcHAtdGV4dC1jb2xvcjtcclxuXHJcbiAgICAgICAgICAgICY6Zm9jdXMsICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnZpZXdlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgdG9wOiA3NXB4O1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICAgICAgIC5hc3NldC1ib3gge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYXNzZXQtYm94LWJnO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAudGh1bWIge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudHlwZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDZweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRhcHAtdGV4dC1jb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIiRncmVlbjogIzQ1YWQ3NDtcclxuJHJlZDogI2M0NGQ0ZDtcclxuJHdoaXRlOiAjZmZmO1xyXG4kZGlydHktd2hpdGU6ICNlNGU0ZTQ7XHJcbiRkYXJrLWdyYXk6ICMyZTJlMmU7XHJcbiRtaWQtZ3JheTogIzM4MzgzODtcclxuJGxpZ2h0LWdyYXk6ICM1NDU0NTQ7XHJcblxyXG4kYXBwLWJnOiAkZGFyay1ncmF5O1xyXG4kYXBwLWJveGVzLWJnOiAkbWlkLWdyYXk7XHJcbiRhcHAtdGV4dC1jb2xvcjogJGRpcnR5LXdoaXRlO1xyXG5cclxuJGFwcC1mb250OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuXHJcbiRhcHAtb3ZlcmxheS1iZzogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4kYXBwLW1vZGFsLWJnOiBsaWdodGVuKCRhcHAtYm94ZXMtYmcsIDUlKTtcclxuXHJcbiRhcHAtaW5wdXQtYmc6IGxpZ2h0ZW4oJGFwcC1tb2RhbC1iZywgMTAlKTsiXX0= */"

/***/ }),

/***/ "./src/app/components/assets-viewer/assets-viewer.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/assets-viewer/assets-viewer.component.ts ***!
  \*********************************************************************/
/*! exports provided: AssetsViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsViewerComponent", function() { return AssetsViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_asset_viewer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/asset-viewer.service */ "./src/app/services/asset-viewer.service.ts");
/* harmony import */ var src_app_api_assets_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/assets.api */ "./src/app/api/assets.api.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");





var AssetsViewerComponent = /** @class */ (function () {
    function AssetsViewerComponent(assetViewer, data, assetsApi) {
        this.assetViewer = assetViewer;
        this.data = data;
        this.assetsApi = assetsApi;
        this.imageNotFoundUrl = "data:image/jpeg;base64,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46sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAhAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAFAAAAAAAAAAAAAAAAAAAABFAAAAAAAAAAIoAAAAAAAAEUEUAAAAAAAACKAAAAAAAAAAQoAAAAAAAAAECgAAAAAAAAJSAsUAAAAAAAABABQAAAAAAAAQAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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";
        this.types = [];
        this.assets = [];
    }
    AssetsViewerComponent.prototype.ngOnInit = function () {
        var self = this;
        this.typesSubscription = this.data.onAssetTypesChanged(function (types) {
            self.types = types;
        });
        this.categoriesSubscription = this.data.onAssetCategoriesChanged(function (categories) {
            self.categories = categories;
        });
        this.filterSubscription = this.assetViewer.onFilterChanged(function (filter) {
            self.loadAssets(filter);
        });
    };
    AssetsViewerComponent.prototype.ngOnDestroy = function () {
        this.typesSubscription.unsubscribe();
        this.categoriesSubscription.unsubscribe();
        this.filterSubscription.unsubscribe();
    };
    Object.defineProperty(AssetsViewerComponent.prototype, "hasAssets", {
        get: function () {
            return (this.assets !== undefined &&
                this.assets !== null &&
                this.assets.length > 0);
        },
        enumerable: true,
        configurable: true
    });
    AssetsViewerComponent.prototype.getAssetThumbnailUrl = function (asset) {
        var hasThumbnailUrl = (asset.thumbnailUrl !== undefined &&
            asset.thumbnailUrl !== null &&
            asset.thumbnailUrl.length > 0);
        return (hasThumbnailUrl ? asset.thumbnailUrl : this.imageNotFoundUrl);
    };
    AssetsViewerComponent.prototype.getAssetTypeName = function (typeId) {
        var type = null;
        for (var i = 0; i < this.types.length; i++)
            if (this.types[i].id === typeId) {
                type = this.types[i];
                break;
            }
        return type !== null ? type.name : "-";
    };
    AssetsViewerComponent.prototype.getAssetCategoryName = function (categoryId) {
        if (categoryId === undefined || categoryId === null || categoryId === "")
            return "";
        var category = null;
        for (var i = 0; i < this.categories.length; i++)
            if (this.categories[i].id === categoryId) {
                category = this.categories[i];
                break;
            }
        return category !== null ? category.name : "-";
    };
    AssetsViewerComponent.prototype.onSearchKeyPress = function (event) {
        var isEnter = (event.which === 13);
        if (!isEnter)
            return;
        this.assetViewer.updateFilter({ query: this.searchQuery });
    };
    AssetsViewerComponent.prototype.loadAssets = function (filter) {
        if (filter == undefined || filter == null || filter.types == undefined || filter.types == null)
            return;
        var self = this;
        this.assetsApi.getAssets(filter, function (assets) {
            self.assets = assets;
        });
    };
    AssetsViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "assets-viewer",
            template: __webpack_require__(/*! ./assets-viewer.component.html */ "./src/app/components/assets-viewer/assets-viewer.component.html"),
            styles: [__webpack_require__(/*! ./assets-viewer.component.scss */ "./src/app/components/assets-viewer/assets-viewer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_asset_viewer_service__WEBPACK_IMPORTED_MODULE_2__["AssetViewerService"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], src_app_api_assets_api__WEBPACK_IMPORTED_MODULE_3__["AssetsApi"]])
    ], AssetsViewerComponent);
    return AssetsViewerComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\r\n    <ul class=\"menu-items\">\r\n        <li class=\"menu-item\"><a routerLink=\"/\">Assets</a></li>\r\n        <li class=\"menu-item\"><a routerLink=\"/types\">Types</a></li>\r\n        <li class=\"menu-item\"><a routerLink=\"/categories\">Categories</a></li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  padding: 20px; }\n  .navbar .menu-items {\n    list-style: none;\n    padding: 0;\n    margin: 0; }\n  .navbar .menu-items .menu-item {\n      display: inline-block;\n      margin: 0 20px; }\n  .navbar .menu-items .menu-item a {\n        color: #e4e4e4;\n        font-weight: 600;\n        font-size: 18px;\n        text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvQzpcXFVzZXJzXFxkZV90b21pXFxEb2N1bWVudHNcXHdvcmtzcGFjZVxcX19vdGhlclxcYXNzZXRzLWRiXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9DOlxcVXNlcnNcXGRlX3RvbWlcXERvY3VtZW50c1xcd29ya3NwYWNlXFxfX290aGVyXFxhc3NldHMtZGJcXGNsaWVudC9zcmNcXGFwcFxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFhLEVBQUE7RUFEakI7SUFJUSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFNBQVMsRUFBQTtFQU5qQjtNQVNZLHFCQUFxQjtNQUNyQixjQUFjLEVBQUE7RUFWMUI7UUFhZ0IsY0NaSztRRGFMLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLm5hdmJhciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgIC5tZW51LWl0ZW1zIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICAubWVudS1pdGVtIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuXHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRhcHAtdGV4dC1jb2xvcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIkZ3JlZW46ICM0NWFkNzQ7XHJcbiRyZWQ6ICNjNDRkNGQ7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJGRpcnR5LXdoaXRlOiAjZTRlNGU0O1xyXG4kZGFyay1ncmF5OiAjMmUyZTJlO1xyXG4kbWlkLWdyYXk6ICMzODM4Mzg7XHJcbiRsaWdodC1ncmF5OiAjNTQ1NDU0O1xyXG5cclxuJGFwcC1iZzogJGRhcmstZ3JheTtcclxuJGFwcC1ib3hlcy1iZzogJG1pZC1ncmF5O1xyXG4kYXBwLXRleHQtY29sb3I6ICRkaXJ0eS13aGl0ZTtcclxuXHJcbiRhcHAtZm9udDogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcblxyXG4kYXBwLW92ZXJsYXktYmc6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuJGFwcC1tb2RhbC1iZzogbGlnaHRlbigkYXBwLWJveGVzLWJnLCA1JSk7XHJcblxyXG4kYXBwLWlucHV0LWJnOiBsaWdodGVuKCRhcHAtbW9kYWwtYmcsIDEwJSk7Il19 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "navbar",
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/new-asset/new-asset.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/new-asset/new-asset.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"new-asset\" [ngClass]=\"{ 'open': isOpen }\">\r\n    <div class=\"overlay\"></div>\r\n    <div class=\"modal\">\r\n        <div class=\"header\">\r\n            <h1>Add new asset</h1>\r\n\r\n            <span class=\"close\" (click)=\"close()\">&#10005;</span>\r\n        </div>\r\n\r\n        <div class=\"content\">\r\n            <div>\r\n                <div class=\"form-control\">\r\n                    <div class=\"label\">Thumbnail</div>\r\n                    <div class=\"control\">\r\n                        <ui-thumbnail-picker [(thumbnailUrl)]=\"asset.thumbnailUrl\"></ui-thumbnail-picker>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div>\r\n                <div class=\"form-control\">\r\n                    <div class=\"label\">Name</div>\r\n                    <div class=\"control\">\r\n                        <input type=\"text\" placeholder=\"Name\" [(ngModel)]=\"asset.name\" />\r\n                    </div>\r\n                </div>\r\n    \r\n                <div class=\"form-control\">\r\n                    <div class=\"label\">Type</div>\r\n                    <div class=\"control\">\r\n                        <select placeholder=\"Type\" [(ngModel)]=\"asset.typeId\">\r\n                            <option *ngFor=\"let _type of types\" [value]=\"_type.id\">{{_type.name}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div>\r\n                <div class=\"form-control\">\r\n                    <div class=\"label\">Category 1</div>\r\n                    <div class=\"control\">\r\n                        <select placeholder=\"Category 1\" [(ngModel)]=\"asset.category1Id\">\r\n                            <option *ngFor=\"let _category of categories\" [value]=\"_category.id\">{{_category.name}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n    \r\n                <div class=\"form-control\">\r\n                    <div class=\"label\">Category 2</div>\r\n                    <div class=\"control\">\r\n                        <select placeholder=\"Category 2\" [(ngModel)]=\"asset.category2Id\">\r\n                            <option *ngFor=\"let _category of categories\" [value]=\"_category.id\">{{_category.name}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div>\r\n                <div class=\"form-control\">\r\n                    <div class=\"label\">Category 3</div>\r\n                    <div class=\"control\">\r\n                        <select placeholder=\"Category 3\" [(ngModel)]=\"asset.category3Id\">\r\n                            <option *ngFor=\"let _category of categories\" [value]=\"_category.id\">{{_category.name}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n    \r\n                <div class=\"form-control\">\r\n                    <div class=\"label\">Engine / Software</div>\r\n                    <div class=\"control\">\r\n                        <select placeholder=\"Engine\" [(ngModel)]=\"asset.engine\">\r\n                            <option value=\"\"></option>\r\n                            <option value=\"Blender\">Photoshop</option>\r\n                            <option value=\"Blender\">Blender</option>\r\n                            <option value=\"Unreal Engine\">Unreal Engine</option>\r\n                            <option value=\"Unity 3D\">Unity 3D</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div>\r\n                <div class=\"form-control\">\r\n                    <div class=\"label\">Engine / Software Version</div>\r\n                    <div class=\"control\">\r\n                        <input type=\"text\" placeholder=\"Engine Version\" [(ngModel)]=\"asset.engineVersion\" />\r\n                    </div>\r\n                </div>\r\n    \r\n                <div class=\"form-control\">\r\n                    <div class=\"label\">Tags</div>\r\n                    <div class=\"control\">\r\n                        <ui-tags-input [(tags)]=\"asset.tags\"></ui-tags-input>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-control\">\r\n                <div class=\"label\">Note</div>\r\n                <div class=\"control\">\r\n                    <textarea [(ngModel)]=\"asset.note\"></textarea>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"footer\">\r\n            <button class=\"btn-green\" (click)=\"save()\">\r\n                Save\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/new-asset/new-asset.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/new-asset/new-asset.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new-asset {\n  display: none; }\n  .new-asset.open {\n    display: initial; }\n  .new-asset .overlay {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, 0.6);\n    z-index: 1000; }\n  .new-asset .modal {\n    position: fixed;\n    top: 50px;\n    bottom: 50px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 800px;\n    background: #454545;\n    border-radius: 2px;\n    overflow-y: auto;\n    z-index: 1001; }\n  .new-asset .modal .header {\n      position: relative;\n      background: #2b2b2b;\n      padding: 20px;\n      text-align: center; }\n  .new-asset .modal .header h1 {\n        margin: 0;\n        font-weight: 600; }\n  .new-asset .modal .header .close {\n        position: absolute;\n        top: 10px;\n        right: 15px;\n        font-size: 20px;\n        font-weight: 700;\n        cursor: pointer; }\n  .new-asset .modal .content {\n      padding: 20px; }\n  .new-asset .modal .content .form-control {\n        display: inline-block;\n        width: 50%;\n        margin: 10px 0;\n        padding: 0 5px; }\n  .new-asset .modal .content .form-control .label {\n          font-size: 14px;\n          font-weight: 600;\n          color: #e4e4e4;\n          text-transform: uppercase; }\n  .new-asset .modal .content .form-control .control {\n          margin-top: 10px; }\n  .new-asset .modal .footer {\n      text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXctYXNzZXQvQzpcXFVzZXJzXFxkZV90b21pXFxEb2N1bWVudHNcXHdvcmtzcGFjZVxcX19vdGhlclxcYXNzZXRzLWRiXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5ldy1hc3NldFxcbmV3LWFzc2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25ldy1hc3NldC9DOlxcVXNlcnNcXGRlX3RvbWlcXERvY3VtZW50c1xcd29ya3NwYWNlXFxfX290aGVyXFxhc3NldHMtZGJcXGNsaWVudC9zcmNcXGFwcFxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxhQUFhLEVBQUE7RUFEakI7SUFJUSxnQkFBZ0IsRUFBQTtFQUp4QjtJQVFRLGVBQWU7SUFDZixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsOEJDSDJCO0lESTNCLGFBQWEsRUFBQTtFQWRyQjtJQWtCUSxlQUFlO0lBQ2YsU0FBUztJQUNULFlBQVk7SUFDWixTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixtQkNiaUM7SURjakMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhLEVBQUE7RUEzQnJCO01BOEJZLGtCQUFrQjtNQUNsQixtQkFqQzBCO01Ba0MxQixhQUFhO01BQ2Isa0JBQWtCLEVBQUE7RUFqQzlCO1FBb0NnQixTQUFTO1FBQ1QsZ0JBQWdCLEVBQUE7RUFyQ2hDO1FBeUNnQixrQkFBa0I7UUFDbEIsU0FBUztRQUNULFdBQVc7UUFDWCxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGVBQWUsRUFBQTtFQTlDL0I7TUFtRFksYUFBYSxFQUFBO0VBbkR6QjtRQXNEZ0IscUJBQXFCO1FBQ3JCLFVBQVU7UUFDVixjQUFjO1FBQ2QsY0FBYyxFQUFBO0VBekQ5QjtVQTREb0IsZUFBZTtVQUNmLGdCQUFnQjtVQUNoQixjQy9EQztVRGdFRCx5QkFBeUIsRUFBQTtFQS9EN0M7VUFtRW9CLGdCQUFnQixFQUFBO0VBbkVwQztNQStHWSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3LWFzc2V0L25ldy1hc3NldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XHJcblxyXG4kaGVhZGVyLWJnOiBkYXJrZW4oJGFwcC1tb2RhbC1iZywgMTAlKTtcclxuXHJcbi5uZXctYXNzZXQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAmLm9wZW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGluaXRpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLm92ZXJsYXkge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGFwcC1vdmVybGF5LWJnO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vZGFsIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgIGJvdHRvbTogNTBweDtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYXBwLW1vZGFsLWJnO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDE7XHJcblxyXG4gICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRoZWFkZXItYmc7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jbG9zZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICAgICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGFwcC10ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRyb2wge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGlucHV0LCB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgIC8vICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgLy8gICAgIGJhY2tncm91bmQ6ICRpbnB1dHMtYmc7XHJcbiAgICAgICAgICAgIC8vICAgICBjb2xvcjogJGFwcC10ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgICAvLyAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAvLyAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgLy8gICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgICAvLyAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIC8vICAgICBmb250LWZhbWlseTogJGFwcC1mb250O1xyXG4gICAgICAgICAgICAvLyAgICAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICY6Zm9jdXMsICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAvLyBzZWxlY3Qge1xyXG4gICAgICAgICAgICAvLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kOiAkaW5wdXRzLWJnO1xyXG4gICAgICAgICAgICAvLyAgICAgY29sb3I6ICRhcHAtdGV4dC1jb2xvcjtcclxuICAgICAgICAgICAgLy8gICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgLy8gICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIC8vICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAvLyAgICAgZm9udC1mYW1pbHk6ICRhcHAtZm9udDtcclxuICAgICAgICAgICAgLy8gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAmOmZvY3VzLCAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgLy8gdWktdGFncy1pbnB1dCB7XHJcbiAgICAgICAgICAgIC8vICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgLy8gICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgICAvLyAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIkZ3JlZW46ICM0NWFkNzQ7XHJcbiRyZWQ6ICNjNDRkNGQ7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJGRpcnR5LXdoaXRlOiAjZTRlNGU0O1xyXG4kZGFyay1ncmF5OiAjMmUyZTJlO1xyXG4kbWlkLWdyYXk6ICMzODM4Mzg7XHJcbiRsaWdodC1ncmF5OiAjNTQ1NDU0O1xyXG5cclxuJGFwcC1iZzogJGRhcmstZ3JheTtcclxuJGFwcC1ib3hlcy1iZzogJG1pZC1ncmF5O1xyXG4kYXBwLXRleHQtY29sb3I6ICRkaXJ0eS13aGl0ZTtcclxuXHJcbiRhcHAtZm9udDogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcblxyXG4kYXBwLW92ZXJsYXktYmc6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuJGFwcC1tb2RhbC1iZzogbGlnaHRlbigkYXBwLWJveGVzLWJnLCA1JSk7XHJcblxyXG4kYXBwLWlucHV0LWJnOiBsaWdodGVuKCRhcHAtbW9kYWwtYmcsIDEwJSk7Il19 */"

/***/ }),

/***/ "./src/app/components/new-asset/new-asset.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/new-asset/new-asset.component.ts ***!
  \*************************************************************/
/*! exports provided: NewAssetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAssetComponent", function() { return NewAssetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_api_assets_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/assets.api */ "./src/app/api/assets.api.ts");
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ui-service */ "./src/app/services/ui-service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");





var NewAssetComponent = /** @class */ (function () {
    function NewAssetComponent(data, assetsApi, ui) {
        this.data = data;
        this.assetsApi = assetsApi;
        this.ui = ui;
        this.types = [];
        this.categories = [];
        this.asset = {};
        this.isOpen = false;
    }
    NewAssetComponent.prototype.ngOnInit = function () {
        var self = this;
        this.typesSubscription = this.data.onAssetTypesChanged(function (types) {
            self.types = types;
        });
        this.categoriesSubscription = this.data.onAssetCategoriesChanged(function (categories) {
            self.categories = categories;
        });
        this.modalSubscription = this.ui.onModalChanged(function (modalName) {
            self.isOpen = (modalName === "new-asset");
        });
    };
    NewAssetComponent.prototype.ngOnDestroy = function () {
        this.typesSubscription.unsubscribe();
        this.categoriesSubscription.unsubscribe();
        this.modalSubscription.unsubscribe();
    };
    NewAssetComponent.prototype.close = function () {
        this.ui.setCurrentModal(null);
        this.asset = {};
    };
    NewAssetComponent.prototype.save = function () {
        var data = {};
        for (var key in this.asset)
            data[key] = this.asset[key];
        var tags = (data.tags);
        data.tags = tags.join(",");
        var self = this;
        this.assetsApi.addAsset(data, function (asset) {
            console.log("Asset created: ", asset);
            self.close();
        });
    };
    NewAssetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "new-asset",
            template: __webpack_require__(/*! ./new-asset.component.html */ "./src/app/components/new-asset/new-asset.component.html"),
            styles: [__webpack_require__(/*! ./new-asset.component.scss */ "./src/app/components/new-asset/new-asset.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], src_app_api_assets_api__WEBPACK_IMPORTED_MODULE_2__["AssetsApi"], src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__["UIService"]])
    ], NewAssetComponent);
    return NewAssetComponent;
}());



/***/ }),

/***/ "./src/app/components/side-filters/side-filters.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/side-filters/side-filters.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"side-filters\">\r\n    <div class=\"actions\">\r\n        <button class=\"btn-green\" (click)=\"openNewAssetModal()\">\r\n            + Add New\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"block\">\r\n        <div class=\"title\">Asset Types</div>\r\n        <div class=\"body\" *ngIf=\"!isLoading\">\r\n            <div class=\"check-filter\" *ngFor=\"let _type of types\">\r\n                <ui-check [(checked)]=\"_type.isChecked\" (checkedChange)=\"onFilterChanged()\"></ui-check> <span class=\"label\">{{_type.name}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"block\">\r\n        <div class=\"title\">Categories</div>\r\n        <div class=\"body \">\r\n            <div class=\"category-item\" [ngClass]=\"{ 'active': selectedCategory == null }\" (click)=\"selectCategory()\">All</div>\r\n\r\n            <div class=\"category-item\" [ngClass]=\"{ 'active': selectedCategory == _category }\" *ngFor=\"let _category of categories\" (click)=\"selectCategory(_category)\">\r\n                {{_category.name}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/side-filters/side-filters.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/side-filters/side-filters.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-filters {\n  position: absolute;\n  background: #383838;\n  left: 0;\n  width: 300px;\n  top: 65px;\n  bottom: 0;\n  overflow-y: auto; }\n  .side-filters .actions {\n    padding-top: 20px;\n    text-align: center; }\n  .side-filters .block {\n    margin: 20px 0; }\n  .side-filters .block .title {\n      padding: 10px;\n      background: #262626;\n      font-size: 14px;\n      font-weight: 600;\n      text-transform: uppercase;\n      text-align: center; }\n  .side-filters .block .body {\n      padding: 20px; }\n  .side-filters .block .body .check-filter {\n        margin: 5px 0; }\n  .side-filters .block .body .check-filter .label {\n          vertical-align: middle;\n          margin-left: 10px; }\n  .side-filters .block .body .category-item {\n        padding: 5px 0;\n        cursor: pointer;\n        transition: 300ms color; }\n  .side-filters .block .body .category-item:hover {\n          color: #2f764f; }\n  .side-filters .block .body .category-item.active {\n          color: #45ad74; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWZpbHRlcnMvQzpcXFVzZXJzXFxkZV90b21pXFxEb2N1bWVudHNcXHdvcmtzcGFjZVxcX19vdGhlclxcYXNzZXRzLWRiXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNpZGUtZmlsdGVyc1xcc2lkZS1maWx0ZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZGUtZmlsdGVycy9DOlxcVXNlcnNcXGRlX3RvbWlcXERvY3VtZW50c1xcd29ya3NwYWNlXFxfX290aGVyXFxhc3NldHMtZGJcXGNsaWVudC9zcmNcXGFwcFxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxrQkFBa0I7RUFDbEIsbUJDRGM7RURFZCxPQUFPO0VBQ1AsWUFBWTtFQUNaLFNBQVM7RUFDVCxTQUFTO0VBQ1QsZ0JBQWdCLEVBQUE7RUFQcEI7SUFVUSxpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7RUFYMUI7SUFlUSxjQUFjLEVBQUE7RUFmdEI7TUFrQlksYUFBYTtNQUNiLG1CQXJCd0I7TUFzQnhCLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIseUJBQXlCO01BQ3pCLGtCQUFrQixFQUFBO0VBdkI5QjtNQTJCWSxhQUFhLEVBQUE7RUEzQnpCO1FBOEJnQixhQUFhLEVBQUE7RUE5QjdCO1VBaUNvQixzQkFBc0I7VUFDdEIsaUJBQWlCLEVBQUE7RUFsQ3JDO1FBdUNnQixjQUFjO1FBQ2QsZUFBZTtRQUNmLHVCQUF1QixFQUFBO0VBekN2QztVQTRDb0IsY0FBMEIsRUFBQTtFQTVDOUM7VUFnRG9CLGNDcERMLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGUtZmlsdGVycy9zaWRlLWZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuJGJsb2NrLXRpdGxlLWJnOiBkYXJrZW4oJGFwcC1iZywgMyUpO1xyXG5cclxuLnNpZGUtZmlsdGVycyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYXBwLWJveGVzLWJnO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIHRvcDogNjVweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICAgLmFjdGlvbnMge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuYmxvY2sge1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG5cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmxvY2stdGl0bGUtYmc7O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ib2R5IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICAgICAgICAgIC5jaGVjay1maWx0ZXIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY2F0ZWdvcnktaXRlbSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDMwMG1zIGNvbG9yO1xyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJGdyZWVuLCAxNSUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiJGdyZWVuOiAjNDVhZDc0O1xyXG4kcmVkOiAjYzQ0ZDRkO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRkaXJ0eS13aGl0ZTogI2U0ZTRlNDtcclxuJGRhcmstZ3JheTogIzJlMmUyZTtcclxuJG1pZC1ncmF5OiAjMzgzODM4O1xyXG4kbGlnaHQtZ3JheTogIzU0NTQ1NDtcclxuXHJcbiRhcHAtYmc6ICRkYXJrLWdyYXk7XHJcbiRhcHAtYm94ZXMtYmc6ICRtaWQtZ3JheTtcclxuJGFwcC10ZXh0LWNvbG9yOiAkZGlydHktd2hpdGU7XHJcblxyXG4kYXBwLWZvbnQ6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG5cclxuJGFwcC1vdmVybGF5LWJnOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiRhcHAtbW9kYWwtYmc6IGxpZ2h0ZW4oJGFwcC1ib3hlcy1iZywgNSUpO1xyXG5cclxuJGFwcC1pbnB1dC1iZzogbGlnaHRlbigkYXBwLW1vZGFsLWJnLCAxMCUpOyJdfQ== */"

/***/ }),

/***/ "./src/app/components/side-filters/side-filters.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/side-filters/side-filters.component.ts ***!
  \*******************************************************************/
/*! exports provided: SideFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideFiltersComponent", function() { return SideFiltersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_api_assets_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/assets.api */ "./src/app/api/assets.api.ts");
/* harmony import */ var src_app_services_asset_viewer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/asset-viewer.service */ "./src/app/services/asset-viewer.service.ts");
/* harmony import */ var src_app_models_assets_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/assets-filter */ "./src/app/models/assets-filter.ts");
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ui-service */ "./src/app/services/ui-service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");







var SideFiltersComponent = /** @class */ (function () {
    function SideFiltersComponent(data, assets, assetViewer, ui) {
        this.data = data;
        this.assets = assets;
        this.assetViewer = assetViewer;
        this.ui = ui;
        this.types = [];
        this.categories = [];
        this.selectedCategory = null;
    }
    SideFiltersComponent.prototype.ngOnInit = function () {
        var self = this;
        this.typesSubscription = this.data.onAssetTypesChanged(function (types) {
            for (var t = 0; t < types.length; t++)
                (types[t]).isChecked = true;
            self.types = types;
            var filter = new src_app_models_assets_filter__WEBPACK_IMPORTED_MODULE_4__["AssetsFilter"]();
            for (var i = 0; i < self.types.length; i++)
                filter.types.push(self.types[i].id);
            self.assetViewer.setFilter(filter);
        });
        this.categoriesSubscription = this.data.onAssetCategoriesChanged(function (categories) {
            self.categories = categories;
        });
    };
    SideFiltersComponent.prototype.ngOnDestroy = function () {
        this.typesSubscription.unsubscribe();
        this.categoriesSubscription.unsubscribe();
    };
    SideFiltersComponent.prototype.openNewAssetModal = function () {
        this.ui.setCurrentModal("new-asset");
    };
    SideFiltersComponent.prototype.onFilterChanged = function () {
        var filter = new src_app_models_assets_filter__WEBPACK_IMPORTED_MODULE_4__["AssetsFilter"]();
        for (var i = 0; i < this.types.length; i++)
            if ((this.types[i]).isChecked)
                filter.types.push(this.types[i].id);
        if (this.selectedCategory == null)
            filter.category = null;
        else
            filter.category = this.selectedCategory.id;
        this.assetViewer.setFilter(filter);
    };
    SideFiltersComponent.prototype.selectCategory = function (category) {
        if (category === void 0) { category = null; }
        this.selectedCategory = category;
        this.onFilterChanged();
    };
    SideFiltersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "side-filters",
            template: __webpack_require__(/*! ./side-filters.component.html */ "./src/app/components/side-filters/side-filters.component.html"),
            styles: [__webpack_require__(/*! ./side-filters.component.scss */ "./src/app/components/side-filters/side-filters.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], src_app_api_assets_api__WEBPACK_IMPORTED_MODULE_2__["AssetsApi"], src_app_services_asset_viewer_service__WEBPACK_IMPORTED_MODULE_3__["AssetViewerService"], src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_5__["UIService"]])
    ], SideFiltersComponent);
    return SideFiltersComponent;
}());



/***/ }),

/***/ "./src/app/components/ui-check/ui-check.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/ui-check/ui-check.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-check\" (click)=\"toggleChecked()\">\r\n    <div class=\"bg\" [ngClass]=\"{ 'checked': checked }\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/ui-check/ui-check.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/ui-check/ui-check.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-check {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle; }\n  .ui-check .bg {\n    width: 100%;\n    height: 100%;\n    border: solid 2px #545454;\n    border-radius: 2px;\n    background: none;\n    color: #e4e4e4;\n    line-height: 14px;\n    text-align: center;\n    cursor: pointer;\n    transition: 200ms all; }\n  .ui-check .bg.checked {\n      background: #45ad74;\n      border-color: #45ad74; }\n  .ui-check .bg.checked:after {\n        content: '\\2713';\n        font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91aS1jaGVjay9DOlxcVXNlcnNcXGRlX3RvbWlcXERvY3VtZW50c1xcd29ya3NwYWNlXFxfX290aGVyXFxhc3NldHMtZGJcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcdWktY2hlY2tcXHVpLWNoZWNrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3VpLWNoZWNrL0M6XFxVc2Vyc1xcZGVfdG9taVxcRG9jdW1lbnRzXFx3b3Jrc3BhY2VcXF9fb3RoZXJcXGFzc2V0cy1kYlxcY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNJLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQixFQUFBO0VBSjFCO0lBT1EsV0FBVztJQUNYLFlBQVk7SUFDWix5QkNUWTtJRFVaLGtCQUFrQjtJQUNsQixnQkFkQztJQWVELGNDZmE7SURnQmIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YscUJBQXFCLEVBQUE7RUFoQjdCO01BbUJZLG1CQ3pCRztNRDBCSCxxQkMxQkcsRUFBQTtFRE1mO1FBdUJnQixnQkFBZ0I7UUFDaEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VpLWNoZWNrL3VpLWNoZWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbiRib3JkZXItY29sb3I6ICRsaWdodC1ncmF5O1xyXG4kYmc6IG5vbmU7XHJcbiRjaGVja2VkLWJnOiAkZ3JlZW47XHJcblxyXG4udWktY2hlY2sge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cclxuICAgIC5iZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMnB4ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRiZztcclxuICAgICAgICBjb2xvcjogJGFwcC10ZXh0LWNvbG9yO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMjAwbXMgYWxsO1xyXG5cclxuICAgICAgICAmLmNoZWNrZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY2hlY2tlZC1iZztcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY2hlY2tlZC1iZztcclxuXHJcbiAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ1xcMjcxMyc7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiJGdyZWVuOiAjNDVhZDc0O1xyXG4kcmVkOiAjYzQ0ZDRkO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRkaXJ0eS13aGl0ZTogI2U0ZTRlNDtcclxuJGRhcmstZ3JheTogIzJlMmUyZTtcclxuJG1pZC1ncmF5OiAjMzgzODM4O1xyXG4kbGlnaHQtZ3JheTogIzU0NTQ1NDtcclxuXHJcbiRhcHAtYmc6ICRkYXJrLWdyYXk7XHJcbiRhcHAtYm94ZXMtYmc6ICRtaWQtZ3JheTtcclxuJGFwcC10ZXh0LWNvbG9yOiAkZGlydHktd2hpdGU7XHJcblxyXG4kYXBwLWZvbnQ6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG5cclxuJGFwcC1vdmVybGF5LWJnOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiRhcHAtbW9kYWwtYmc6IGxpZ2h0ZW4oJGFwcC1ib3hlcy1iZywgNSUpO1xyXG5cclxuJGFwcC1pbnB1dC1iZzogbGlnaHRlbigkYXBwLW1vZGFsLWJnLCAxMCUpOyJdfQ== */"

/***/ }),

/***/ "./src/app/components/ui-check/ui-check.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/ui-check/ui-check.component.ts ***!
  \***********************************************************/
/*! exports provided: UICheckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UICheckComponent", function() { return UICheckComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UICheckComponent = /** @class */ (function () {
    function UICheckComponent() {
        this.checkedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    UICheckComponent.prototype.toggleChecked = function () {
        this.checked = !this.checked;
        this.checkedChange.emit(this.checked);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], UICheckComponent.prototype, "checked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UICheckComponent.prototype, "checkedChange", void 0);
    UICheckComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            selector: "ui-check",
            template: __webpack_require__(/*! ./ui-check.component.html */ "./src/app/components/ui-check/ui-check.component.html"),
            styles: [__webpack_require__(/*! ./ui-check.component.scss */ "./src/app/components/ui-check/ui-check.component.scss")]
        })
    ], UICheckComponent);
    return UICheckComponent;
}());



/***/ }),

/***/ "./src/app/components/ui-tags-input/ui-tags-input.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/ui-tags-input/ui-tags-input.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-tags-input\">\r\n    <span class=\"tag\" *ngFor=\"let _tag of tags\">{{_tag}}</span>\r\n    <input class=\"tag-input\" type=\"text\" placeholder=\"Type and press ENTER ...\" (keydown)=\"onKeyDown($event)\" (keypress)=\"onKeyPress($event)\" [(ngModel)]=\"tag\" />\r\n</div>"

/***/ }),

/***/ "./src/app/components/ui-tags-input/ui-tags-input.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/ui-tags-input/ui-tags-input.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-tags-input {\n  min-width: 100px;\n  min-height: 30px;\n  background: #5e5e5e;\n  padding: 8px; }\n  .ui-tags-input .tag {\n    display: inline-block;\n    padding: 2px 10px;\n    margin: 4px;\n    border-radius: 2px;\n    font-size: 14px;\n    background: #45ad74;\n    color: #e4e4e4; }\n  .ui-tags-input .tag-input {\n    display: inline-block;\n    min-width: 10px;\n    background: none;\n    border: none;\n    color: #e4e4e4;\n    width: auto;\n    margin-left: 5px;\n    font-family: \"Source Sans Pro\", sans-serif;\n    font-family: 16px; }\n  .ui-tags-input .tag-input:focus, .ui-tags-input .tag-input:active {\n      outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91aS10YWdzLWlucHV0L0M6XFxVc2Vyc1xcZGVfdG9taVxcRG9jdW1lbnRzXFx3b3Jrc3BhY2VcXF9fb3RoZXJcXGFzc2V0cy1kYlxcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFx1aS10YWdzLWlucHV0XFx1aS10YWdzLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3VpLXRhZ3MtaW5wdXQvQzpcXFVzZXJzXFxkZV90b21pXFxEb2N1bWVudHNcXHdvcmtzcGFjZVxcX19vdGhlclxcYXNzZXRzLWRiXFxjbGllbnQvc3JjXFxhcHBcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkNNc0M7RURMdEMsWUFBWSxFQUFBO0VBSmhCO0lBT1EscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkNwQk87SURxQlAsY0NsQmEsRUFBQTtFREtyQjtJQWlCUSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osY0MxQmE7SUQyQmIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQiwwQ0NwQmdDO0lEcUJoQyxpQkFBaUIsRUFBQTtFQXpCekI7TUE0QlksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91aS10YWdzLWlucHV0L3VpLXRhZ3MtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuJGJnOiAkYXBwLWlucHV0LWJnO1xyXG4kdGFnLWJnOiAkZ3JlZW47XHJcbiR0YWctY29sb3I6ICRhcHAtdGV4dC1jb2xvcjtcclxuJGlucHV0LWZvbnQ6ICRhcHAtZm9udDtcclxuJGlucHV0LWNvbG9yOiAkYXBwLXRleHQtY29sb3I7XHJcblxyXG4udWktdGFncy1pbnB1dCB7XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICRiZztcclxuICAgIHBhZGRpbmc6IDhweDtcclxuXHJcbiAgICAudGFnIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luOiA0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkdGFnLWJnO1xyXG4gICAgICAgIGNvbG9yOiAkdGFnLWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC50YWctaW5wdXQge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtaW4td2lkdGg6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICRpbnB1dC1jb2xvcjtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkaW5wdXQtZm9udDtcclxuICAgICAgICBmb250LWZhbWlseTogMTZweDtcclxuXHJcbiAgICAgICAgJjpmb2N1cywgJjphY3RpdmUge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIiRncmVlbjogIzQ1YWQ3NDtcclxuJHJlZDogI2M0NGQ0ZDtcclxuJHdoaXRlOiAjZmZmO1xyXG4kZGlydHktd2hpdGU6ICNlNGU0ZTQ7XHJcbiRkYXJrLWdyYXk6ICMyZTJlMmU7XHJcbiRtaWQtZ3JheTogIzM4MzgzODtcclxuJGxpZ2h0LWdyYXk6ICM1NDU0NTQ7XHJcblxyXG4kYXBwLWJnOiAkZGFyay1ncmF5O1xyXG4kYXBwLWJveGVzLWJnOiAkbWlkLWdyYXk7XHJcbiRhcHAtdGV4dC1jb2xvcjogJGRpcnR5LXdoaXRlO1xyXG5cclxuJGFwcC1mb250OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuXHJcbiRhcHAtb3ZlcmxheS1iZzogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4kYXBwLW1vZGFsLWJnOiBsaWdodGVuKCRhcHAtYm94ZXMtYmcsIDUlKTtcclxuXHJcbiRhcHAtaW5wdXQtYmc6IGxpZ2h0ZW4oJGFwcC1tb2RhbC1iZywgMTAlKTsiXX0= */"

/***/ }),

/***/ "./src/app/components/ui-tags-input/ui-tags-input.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/ui-tags-input/ui-tags-input.component.ts ***!
  \*********************************************************************/
/*! exports provided: UITagsInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UITagsInputComponent", function() { return UITagsInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UITagsInputComponent = /** @class */ (function () {
    function UITagsInputComponent() {
        this.tagsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    UITagsInputComponent.prototype.onKeyDown = function (evt) {
        var isBackspace = (evt.which === 8);
        if (!isBackspace)
            return;
        var hasTagText = !(this.tag == undefined || this.tag == null || this.tag.length == 0);
        if (hasTagText)
            return;
        var hasTags = !(this.tags == undefined || this.tags == null || this.tags.length == 0);
        if (!hasTags)
            return;
        this.tags.pop();
        this.tagsChange.emit(this.tags);
        return false;
    };
    UITagsInputComponent.prototype.onKeyPress = function (evt) {
        var isEnterKey = (evt.which === 13);
        var isCommaKey = (evt.which === 44);
        if (!isEnterKey && !isCommaKey)
            return;
        if (this.tag == undefined || this.tag == null || this.tag.length == 0)
            return;
        if (this.tags == undefined || this.tags == null)
            this.tags = [];
        this.tags.push(this.tag);
        this.tagsChange.emit(this.tags);
        this.tag = null;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], UITagsInputComponent.prototype, "tags", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UITagsInputComponent.prototype, "tagsChange", void 0);
    UITagsInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "ui-tags-input",
            template: __webpack_require__(/*! ./ui-tags-input.component.html */ "./src/app/components/ui-tags-input/ui-tags-input.component.html"),
            styles: [__webpack_require__(/*! ./ui-tags-input.component.scss */ "./src/app/components/ui-tags-input/ui-tags-input.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UITagsInputComponent);
    return UITagsInputComponent;
}());



/***/ }),

/***/ "./src/app/components/ui-thumbnail-picker/ui-thumbnail-picker.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/ui-thumbnail-picker/ui-thumbnail-picker.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-thumbnail-picker\">\r\n    <input class=\"file-picker\" type=\"file\" (change)=\"onThumbChange($event)\" *ngIf=\"!hasThumbnail\" />\r\n    \r\n    <div class=\"thumb\" *ngIf=\"hasThumbnail\">\r\n        <img [src]=\"thumbnailUrl\" />\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/ui-thumbnail-picker/ui-thumbnail-picker.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/ui-thumbnail-picker/ui-thumbnail-picker.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-thumbnail-picker .thumb {\n  width: 100%;\n  height: 100%;\n  max-width: 600px;\n  max-height: 600px; }\n  .ui-thumbnail-picker .thumb img {\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91aS10aHVtYm5haWwtcGlja2VyL0M6XFxVc2Vyc1xcZGVfdG9taVxcRG9jdW1lbnRzXFx3b3Jrc3BhY2VcXF9fb3RoZXJcXGFzc2V0cy1kYlxcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFx1aS10aHVtYm5haWwtcGlja2VyXFx1aS10aHVtYm5haWwtcGlja2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBZ0NRLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBO0VBbkN6QjtJQXNDWSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VpLXRodW1ibmFpbC1waWNrZXIvdWktdGh1bWJuYWlsLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS10aHVtYm5haWwtcGlja2VyIHtcclxuICAgIC5maWxlLXBpY2tlciB7XHJcbiAgICAgICAgLy8gJjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xyXG4gICAgICAgIC8vICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyAmOjpiZWZvcmUge1xyXG4gICAgICAgIC8vICAgICBjb250ZW50OiAnU2VsZWN0IHNvbWUgZmlsZXMnO1xyXG4gICAgICAgIC8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgLy8gICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcbiAgICAgICAgLy8gICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAvLyAgICAgcGFkZGluZzogNXB4IDhweDtcclxuICAgICAgICAvLyAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAvLyAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAvLyAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAvLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIC8vICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAjZmZmO1xyXG4gICAgICAgIC8vICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIC8vICAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyAmOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgICAgIC8vICAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gLy8gJjphY3RpdmU6OmJlZm9yZSB7XHJcbiAgICAgICAgLy8gLy8gICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2UzZTNlMywgI2Y5ZjlmOSk7XHJcbiAgICAgICAgLy8gLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIC50aHVtYiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNjAwcHg7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/ui-thumbnail-picker/ui-thumbnail-picker.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/ui-thumbnail-picker/ui-thumbnail-picker.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UIThumbnailPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIThumbnailPickerComponent", function() { return UIThumbnailPickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UIThumbnailPickerComponent = /** @class */ (function () {
    function UIThumbnailPickerComponent(elementRef) {
        this.elementRef = elementRef;
        this.thumbnailUrlChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    UIThumbnailPickerComponent.prototype.onThumbChange = function (event) {
        var file = this.elementRef.nativeElement.querySelector('input[type="file"]');
        this.getBase64(file.files[0]);
    };
    UIThumbnailPickerComponent.prototype.getBase64 = function (file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        var self = this;
        reader.onload = function () {
            console.log(reader.result);
            self.thumbnailUrl = (reader.result);
            self.thumbnailUrlChange.emit(self.thumbnailUrl);
            self.hasThumbnail = true;
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UIThumbnailPickerComponent.prototype, "thumbnailUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UIThumbnailPickerComponent.prototype, "thumbnailUrlChange", void 0);
    UIThumbnailPickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "ui-thumbnail-picker",
            template: __webpack_require__(/*! ./ui-thumbnail-picker.component.html */ "./src/app/components/ui-thumbnail-picker/ui-thumbnail-picker.component.html"),
            styles: [__webpack_require__(/*! ./ui-thumbnail-picker.component.scss */ "./src/app/components/ui-thumbnail-picker/ui-thumbnail-picker.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], UIThumbnailPickerComponent);
    return UIThumbnailPickerComponent;
}());



/***/ }),

/***/ "./src/app/config/app-routing.config.ts":
/*!**********************************************!*\
  !*** ./src/app/config/app-routing.config.ts ***!
  \**********************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _components_assets_page_assets_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/assets-page/assets-page.component */ "./src/app/components/assets-page/assets-page.component.ts");
/* harmony import */ var _components_asset_types_page_asset_types_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/asset-types-page/asset-types-page.component */ "./src/app/components/asset-types-page/asset-types-page.component.ts");
/* harmony import */ var _components_asset_categories_page_asset_categories_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/asset-categories-page/asset-categories-page.component */ "./src/app/components/asset-categories-page/asset-categories-page.component.ts");
/* harmony import */ var _components_asset_page_asset_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/asset-page/asset-page.component */ "./src/app/components/asset-page/asset-page.component.ts");




//import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
var ROUTES = [
    { path: "", redirectTo: "/assets", pathMatch: "full" },
    { path: "assets", component: _components_assets_page_assets_page_component__WEBPACK_IMPORTED_MODULE_0__["AssetsPageComponent"] },
    { path: "asset/:id", component: _components_asset_page_asset_page_component__WEBPACK_IMPORTED_MODULE_3__["AssetPageComponent"] },
    { path: "types", component: _components_asset_types_page_asset_types_page_component__WEBPACK_IMPORTED_MODULE_1__["AssetTypesPageComponent"] },
    { path: "categories", component: _components_asset_categories_page_asset_categories_page_component__WEBPACK_IMPORTED_MODULE_2__["AssetCategoriesPageComponent"] }
    // ,
    // { path: "**", component: PageNotFoundComponent }
];


/***/ }),

/***/ "./src/app/models/assets-filter.ts":
/*!*****************************************!*\
  !*** ./src/app/models/assets-filter.ts ***!
  \*****************************************/
/*! exports provided: AssetsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsFilter", function() { return AssetsFilter; });
var AssetsFilter = /** @class */ (function () {
    function AssetsFilter() {
        this.query = null;
        this.types = [];
        this.category = null;
    }
    return AssetsFilter;
}());



/***/ }),

/***/ "./src/app/pipes/file-size.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/file-size.pipe.ts ***!
  \*****************************************/
/*! exports provided: FileSizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSizePipe", function() { return FileSizePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FileSizePipe = /** @class */ (function () {
    function FileSizePipe() {
    }
    FileSizePipe.prototype.transform = function (number, args) {
        if (isNaN(number))
            return null; // will only work value is a number
        if (number === null)
            return null;
        if (number === 0)
            return "0 Kb";
        var abs = Math.abs(number);
        if (abs < 1000)
            return "" + Math.round(number) + " Kb";
        var rounder = Math.pow(10, 1);
        var isNegative = number < 0; // will also work for Negative numbers
        var key = "";
        var powers = [
            //{ key: "Q", value: Math.pow(10, 15) },
            { key: "Tb", value: Math.pow(10, 12) },
            { key: "Gb", value: Math.pow(10, 9) },
            { key: "Mb", value: Math.pow(10, 6) },
            { key: "Kb", value: 1000 }
        ];
        for (var i = 0; i < powers.length; i++) {
            var reduced = abs / powers[i].value;
            reduced = Math.round(reduced * rounder) / rounder;
            if (reduced >= 1) {
                abs = reduced;
                key = powers[i].key;
                break;
            }
        }
        return (isNegative ? "-" : "") + abs + " " + key;
    };
    FileSizePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: "fileSize"
        })
    ], FileSizePipe);
    return FileSizePipe;
}());



/***/ }),

/***/ "./src/app/services/asset-viewer.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/asset-viewer.service.ts ***!
  \**************************************************/
/*! exports provided: AssetViewerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetViewerService", function() { return AssetViewerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var AssetViewerService = /** @class */ (function () {
    function AssetViewerService() {
        this.filter = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    AssetViewerService.prototype.setFilter = function (filter) {
        this.filter.next(filter);
    };
    AssetViewerService.prototype.updateFilter = function (fragment) {
        var actual = this.filter.getValue();
        for (var key in fragment)
            actual[key] = fragment[key];
        this.filter.next(actual);
    };
    AssetViewerService.prototype.onFilterChanged = function (callback) {
        return this.filter.asObservable().subscribe(function (filter) { return callback(filter); });
    };
    AssetViewerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AssetViewerService);
    return AssetViewerService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _api_assets_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/assets.api */ "./src/app/api/assets.api.ts");




var DataService = /** @class */ (function () {
    function DataService(assetsApi) {
        this.assetsApi = assetsApi;
        this.assetTypes = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.assetCategories = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        var self = this;
        this.assetsApi.getAllTypes(function (types) {
            self.assetTypes.next(types);
        });
        this.assetsApi.getAllCategories(function (categories) {
            self.assetCategories.next(categories);
        });
    }
    DataService.prototype.refreshAssetTypes = function (types) {
        this.assetTypes.next(types);
    };
    DataService.prototype.refreshAssetCategories = function (categories) {
        this.assetCategories.next(categories);
    };
    DataService.prototype.onAssetTypesChanged = function (callback) {
        return this.assetTypes.asObservable().subscribe(function (types) { return callback(types); });
    };
    DataService.prototype.onAssetCategoriesChanged = function (callback) {
        return this.assetCategories.asObservable().subscribe(function (categories) { return callback(categories); });
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_assets_api__WEBPACK_IMPORTED_MODULE_3__["AssetsApi"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/ui-service.ts":
/*!****************************************!*\
  !*** ./src/app/services/ui-service.ts ***!
  \****************************************/
/*! exports provided: UIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIService", function() { return UIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var UIService = /** @class */ (function () {
    function UIService() {
        this.currentModal = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    UIService.prototype.setCurrentModal = function (modalName) {
        this.currentModal.next(modalName);
    };
    UIService.prototype.onModalChanged = function (callback) {
        return this.currentModal.asObservable().subscribe(function (modal) { return callback(modal); });
    };
    UIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UIService);
    return UIService;
}());



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
var environment = {
    production: false,
    apiBaseUrl: "http://localhost:3000"
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\de_tomi\Documents\workspace\__other\assets-db\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map