/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test2_2_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test2_2_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__test2_2_css__);

class Fade {
    constructor(piclist, optionlist, oBtn) {
        this.piclist = piclist;
        this.optionlist = optionlist;
        this.oBtn = oBtn;
        this.len = optionlist.length;
        this.index = 0;
    }
    init() {
        this.optionSwitch();
        this.btnSwitch();
    }

    optionSwitch() {
        for (let i = 0; i < this.len; i++) {
            this.optionlist[i].addEventListener("mouseover", () => {
                this.optionlist[this.index].className = "";
                this.optionlist[i].className = "active";
                this.piclist[this.index].className = "";
                this.piclist[i].className = "block";
                this.index = i;
            });
        }
    }

    btnSwitch() {
        for (let i = 0; i < 2; i++) {
            this.oBtn[i].addEventListener("click", () => {
                this.optionlist[this.index].className = "";
                this.piclist[this.index].className = "";
                if (i) {
                    this.index++;
                    if (this.index == this.len) {
                        this.index = 0;
                    }
                } else {
                    this.index--;
                    if (this.index == -1) {
                        this.index = this.len - 1;
                    }
                    console.log(this.index);
                }
                this.optionlist[this.index].className = "active";
                this.piclist[this.index].className = "block";
            });
        }
    }
}

class FadeChildren extends Fade {
    constructor(piclist, optionlist, oBtn, wrap) {
        super(piclist, optionlist, oBtn);
        this.wrap = wrap;
        this.timer = null;
    }
    init() {
        this.play();
        this.pause();
        this.optionSwitch();
        this.btnSwitch();
    }

    play() {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.optionlist[this.index].className = "";
            this.piclist[this.index].className = "";
            this.index++;
            if (this.index == this.len) {
                this.index = 0;
            }
            this.optionlist[this.index].className = "active";
            this.piclist[this.index].className = "block";
        }, 2000);
    }

    pause() {
        this.wrap.addEventListener("mouseover", () => {
            clearInterval(this.timer);
        });
        this.wrap.addEventListener("mouseout", () => {
            this.play();
        });
    }
}

let piclist = document.querySelectorAll("#picture li");
let optionlist = document.querySelectorAll("#option li");
let oBtn = document.querySelectorAll("#btn a");
let wrap = document.querySelector("#mycarousel");

new FadeChildren(piclist, optionlist, oBtn, wrap).init();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);