/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  --FontColor: #191919;
  font-family: "Playfair Display", sans-serif;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

#App {
  width: 90vw;
  height: 90vh;
  display: flex;
  flex-direction: row;
}

#LeftContainer {
  flex: 1;
  display: flex;
  flex-direction: column;
}

#MainInfoContainer {
  padding-top: 5%;
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 1fr 1fr;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 40%;
}

#SearchContainer {
  align-items: center;
  padding-bottom: 5%;
  flex: 1;
}

#SearchContainer input {
  height: 2rem;
  border-radius: 5px;
  border: none;
  border-bottom: 1px solid var(--FontColor);
  background-color: transparent;
  font-size: 1rem;
  font-family: "Playfair Display", sans-serif;
  cursor: pointer;
}

#SearchContainer input:focus {
  outline: none;
  border: 1px solid var(--FontColor);
}

#SearchContainer button {
  --BackgroundColorDark: #288abf;
  width: fit-content;
  height: 2rem;
  border-radius: 5px;
  background-color: var(--BackgroundColorDark);
  cursor: pointer;
}

#SearchContainer button:hover {
  animation: fillColorRtoL 0.3s ease-in forwards;
}

@keyframes fillColorRtoL {
  0% {
    background-color: var(--BackgroundColorDark);
  }
  100% {
    background-color: var(--BackgroundColor);
  }
}
#SearchContainer button:active {
  animation: fillColorLtoR 0.1s ease-in forwards;
}

@keyframes fillColorLtoR {
  0% {
    background-color: var(--BackgroundColor);
  }
  100% {
    background-color: var(--BackgroundColorDark);
  }
}
#City {
  grid-row: 2/3;
  font-size: 2em;
  font-weight: 700;
}

#Temp {
  flex: 2;
  font-size: 3em;
  font-weight: 700;
  text-align: start;
}

#TempAndIconContainer {
  width: fit-content;
  grid-row: 1/2;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: left;
}

#Icon {
  flex: 1;
  width: 100px;
  align-items: start;
}

#ExtraInfo {
  grid-row: 3/4;
  display: flex;
  justify-content: start;
  align-items: start;
  text-align: start;
  flex-wrap: wrap;
  width: 40%;
  height: 100%;
}

#Time {
  flex: 1;
  font-size: 1em;
  font-weight: 700;
}

#Humidity {
  position: relative;
  flex: 1;
  margin-right: 5px;
  font-size: 1em;
  font-weight: 700;
}

#Humidity::after {
  content: "";
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s ease-in-out 0s;
  display: block;
}

#Humidity:hover::after {
  content: "Humidity";
  opacity: 1;
  font-size: smaller;
  font-weight: lighter;
}

#ChanceOfRain {
  flex: 1;
  margin-right: 5px;
  font-size: 1em;
  font-weight: 700;
}

#ChanceOfRain::after {
  content: "";
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s ease-in-out 0s;
  display: block;
}

#ChanceOfRain:hover::after {
  content: "Rain Chance";
  opacity: 1;
  font-size: small;
  font-weight: 500;
}

#RightContainer {
  flex: 2;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-items: center;
}

#HourlyContainer {
  position: relative;
  display: flex;
  overflow-x: auto;
  justify-content: space-between;
  align-items: center;
  border-radius: 10%;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

#HourlyContainer::-webkit-scrollbar {
  display: none;
}

.DescriptionContainer {
  position: absolute;
  top: 0;
  width: 100%;
  box-sizing: border-box;
}

.Description {
  position: relative;
  top: 0;
  left: 0;
  width: fit-content;
  font-size: 1em;
  font-weight: 700;
}

.HourlyInfo {
  flex: 0 0 auto;
  margin-right: 5px;
  height: 15%;
  border-right: 1px rgba(0, 0, 0, 0.276) solid;
  border-radius: 5px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
}

.HourlyInfo::-webkit-scrollbar {
  display: none;
}

.HourlyTime {
  font-size: 1em;
  font-weight: 400;
  grid-row: 1/2;
}

.HourlyTemp {
  font-size: 1em;
  font-weight: 400;
  grid-row: 3/4;
}

.HourlyIcon {
  grid-row: 2/3;
  width: 2em;
  height: 2em;
  font-size: 1.5em;
  font-weight: 700;
}

#DailyContainer {
  display: flex;
  position: relative;
  overflow-x: hidden;
  justify-content: space-between;
  align-items: center;
  padding: 5% 2% 2% 2%;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

#dailyContainer::-webkit-scrollbar {
  display: none;
}

#DailyTitle {
  position: absolute;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  font-size: 1.5em;
  font-weight: 700;
}

.DailyInfo {
  flex: 0 0 auto;
  margin-right: 5px;
  width: 12.8571428571%;
  display: grid;
  grid-template-rows: 1fr 1fr 3fr;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
}

.Date {
  font-size: 1em;
  font-weight: 700;
  grid-row: 1/2;
}

.DailyTemp {
  font-size: 1em;
  font-weight: 700;
  grid-row: 2/3;
}

.DailyIcon {
  grid-row: 3/4;
  width: 2em;
  height: 2em;
  font-size: 1.5em;
  font-weight: 700;
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["body{\r\n    \r\n  --FontColor: #191919;\r\n\r\n    font-family:'Playfair Display',sans-serif;\r\n    font-size: 1.2rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    overflow: hidden;\r\n  \r\n}\r\n#App{\r\n    width: 90vw;\r\n    height: 90vh;\r\n    display: flex;\r\n    flex-direction: row;\r\n    \r\n   \r\n\r\n}\r\n#LeftContainer{\r\n    flex: 1;\r\n    \r\n    display: flex;\r\n    flex-direction: column;\r\n    \r\n   \r\n}\r\n#MainInfoContainer{\r\n    padding-top: 5%; \r\n    flex: 1;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 2fr 1fr 1fr;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    margin-bottom: 40%;\r\n   \r\n\r\n}\r\n#SearchContainer{\r\n    align-items: center;\r\n    padding-bottom: 5%;\r\n    flex: 1;\r\n}\r\n\r\n\r\n\r\n#SearchContainer input{\r\n    height: 2rem;\r\n    border-radius: 5px;\r\n    border: none;\r\n    border-bottom: 1px solid var(--FontColor) ;\r\n    background-color: transparent;\r\n    font-size: 1rem;\r\n    font-family: 'Playfair Display',sans-serif;\r\n    cursor: pointer;\r\n}\r\n#SearchContainer input:focus{\r\n    outline: none;\r\n    border: 1px solid var(--FontColor);\r\n}\r\n#SearchContainer button{\r\n   \r\n    --BackgroundColorDark: #288abf;\r\n    width: fit-content;\r\n    height: 2rem;\r\n    border-radius: 5px;\r\n    background-color: var(--BackgroundColorDark);\r\n    cursor: pointer;\r\n}\r\n#SearchContainer button:hover{\r\n    \r\n    animation: fillColorRtoL 0.3s ease-in forwards;\r\n}\r\n@keyframes fillColorRtoL{\r\n    0%{\r\n        background-color: var(--BackgroundColorDark);\r\n        \r\n    }\r\n    100%{\r\n        background-color: var(--BackgroundColor);\r\n        \r\n    }\r\n\r\n}\r\n#SearchContainer button:active{\r\n    animation: fillColorLtoR 0.1s ease-in forwards;\r\n}\r\n@keyframes fillColorLtoR{\r\n    0%{\r\n        background-color: var(--BackgroundColor);\r\n        \r\n    }\r\n    100%{\r\n        background-color: var(--BackgroundColorDark);\r\n        \r\n    }\r\n\r\n}\r\n#City{\r\n    grid-row: 2/3;\r\n    font-size: 2em;\r\n    font-weight: 700;\r\n}\r\n\r\n#Temp{\r\n\r\n    flex: 2;\r\n    font-size: 3em;\r\n    font-weight: 700;\r\n    text-align: start;\r\n}\r\n#TempAndIconContainer{\r\n    width: fit-content;\r\n    grid-row: 1/2;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: left;\r\n    align-items: left;\r\n    \r\n}\r\n#Icon{\r\n    flex: 1;\r\n    width:100px;\r\n    align-items: start;\r\n   \r\n}\r\n\r\n#ExtraInfo{\r\n    grid-row: 3/4;\r\n    display: flex;\r\n    justify-content: start;\r\n    align-items: start;\r\n    text-align: start;\r\n    flex-wrap: wrap;\r\n    width: 40%;\r\n    height: 100%;\r\n}\r\n#Time{\r\n    flex: 1;\r\n    font-size: 1em;\r\n    font-weight: 700;\r\n}\r\n#Humidity{\r\n    position: relative;\r\n    flex: 1;\r\n    margin-right: 5px;\r\n    font-size: 1em;\r\n    font-weight: 700;\r\n\r\n}#Humidity::after {\r\n    content: \"\";\r\n        top: 0; \r\n    left: 0; \r\n    opacity: 0;\r\n    transition: opacity 0.3s ease-in-out 0s;\r\n    display: block; \r\n\r\n}\r\n\r\n#Humidity:hover::after {\r\n   \r\n    \r\n    content: \"Humidity\";\r\n    opacity: 1;\r\n    font-size: smaller;\r\n    font-weight: lighter;\r\n    \r\n}\r\n#ChanceOfRain{\r\n    flex: 1;\r\n    margin-right: 5px;\r\n    font-size: 1em;\r\n    font-weight: 700;\r\n}\r\n#ChanceOfRain::after {\r\n    content: \"\";\r\n        top: 0; \r\n    left: 0; \r\n    opacity: 0;\r\n    transition: opacity 0.3s ease-in-out 0s;\r\n    display: block; \r\n\r\n}\r\n\r\n#ChanceOfRain:hover::after {\r\n   \r\n   \r\n    content: \"Rain Chance\"; \r\n    opacity: 1;\r\n    font-size:small;\r\n    font-weight:500;\r\n    \r\n}\r\n\r\n\r\n#RightContainer{\r\n \r\n    flex: 2;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr 1fr;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n   \r\n}\r\n#HourlyContainer {\r\n    position: relative;\r\n    display: flex;\r\n    overflow-x: auto; \r\n    justify-content: space-between; \r\n    align-items: center;\r\n   \r\n    border-radius: 10%;\r\n    width: 100%; \r\n    max-width: 100%;\r\n    box-sizing: border-box; \r\n}\r\n#HourlyContainer::-webkit-scrollbar{\r\n    display: none;\r\n    \r\n}\r\n.DescriptionContainer{\r\n    position: absolute;\r\n    top: 0;\r\n    width: calc(100%);\r\n    box-sizing: border-box;\r\n\r\n}\r\n.Description{\r\n   position: relative;\r\n    top: 0;\r\n    left: 0;\r\n   width: fit-content;\r\n    font-size: 1em;\r\n    font-weight: 700;\r\n   \r\n\r\n}\r\n.HourlyInfo{\r\n\r\n    \r\n    flex: 0 0 auto; \r\n    margin-right: 5px ;\r\n    height: calc(90% / 6);\r\n    border-right : 1px rgba(0, 0, 0, 0.276) solid;\r\n    border-radius: 5px;\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr 1fr;\r\n    justify-content: center;\r\n    align-items: center;\r\n    overflow-y: hidden;\r\n}\r\n.HourlyInfo::-webkit-scrollbar{\r\n    display: none;\r\n}\r\n.HourlyTime{\r\n    font-size: 1em;\r\n    font-weight: 400;\r\n    grid-row: 1/2;\r\n}\r\n.HourlyTemp{\r\n    font-size: 1em;\r\n    font-weight: 400;\r\n    grid-row: 3/4;\r\n\r\n}\r\n.HourlyIcon{\r\n   \r\n    grid-row: 2/3;\r\n\r\n    width: 2em;\r\n    height: 2em;\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n\r\n}\r\n#DailyContainer{\r\n    display: flex;\r\n    position: relative;\r\n\r\n    overflow-x: hidden; \r\n    justify-content: space-between; \r\n    align-items: center;\r\n    padding: 5% 2% 2% 2%;\r\n    width: 100%; \r\n    max-width: 100%;\r\n    box-sizing: border-box; \r\n}\r\n#dailyContainer::-webkit-scrollbar{\r\n    display: none;\r\n    \r\n}\r\n#DailyTitle{\r\n    position: absolute;\r\n    top: 0;\r\n    width: calc(100%);\r\n    box-sizing: border-box;\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n\r\n}\r\n.DailyInfo{\r\n    flex: 0 0 auto; \r\n    margin-right: 5px ;\r\n    width: calc(90% / 7);\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr 3fr;\r\n    justify-content: center;\r\n    align-items: center;\r\n    overflow-y: hidden;\r\n}\r\n.Date{\r\n    font-size: 1em;\r\n    font-weight: 700;\r\n    grid-row: 1/2;\r\n}\r\n.DailyTemp{\r\n    font-size: 1em;\r\n    font-weight: 700;\r\n    grid-row: 2/3;\r\n\r\n}\r\n.DailyIcon{\r\n   \r\n    grid-row: 3/4;\r\n\r\n    width: 2em;\r\n    height: 2em;\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n\r\n}\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/API.ts":
/*!********************!*\
  !*** ./src/API.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function API(City) {
    return fetch("https://api.weatherapi.com/v1/forecast.json?key=3fb10e08476c424d8ea115059232511&q=".concat((City), "&days=7"), {
        method: "GET",
        mode: "cors"
    })
        .then(function (response) { return response.json(); })
        .then(function (data) { return data; });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API */ "./src/API.ts");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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


function fetchCity() {
    return __awaiter(this, void 0, void 0, function () {
        var City;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0,_API__WEBPACK_IMPORTED_MODULE_0__["default"])("texas")];
                case 1:
                    City = _a.sent();
                    mainInfo(City);
                    Days(City);
                    BackgroundAndFont(City);
                    return [2 /*return*/];
            }
        });
    });
}
localStorage.clear();
var cachecities = [];
if (localStorage.getItem("cities")) {
    cachecities = JSON.parse(localStorage.getItem("cities"));
}
fetchCity();
function mainInfo(City) {
    console.log(City);
    var CityNameS = City.location.name;
    var CityName = document.getElementById("City");
    CityName.innerHTML = CityNameS;
    var Date = document.getElementById("Time");
    Date.innerHTML = City.location.localtime.split(" ")[1] + "|";
    var Temp = document.getElementById("Temp");
    Temp.innerHTML = City.forecast.forecastday[0].day.avgtemp_c + "°C";
    var svg = document.getElementById("Icon");
    svg.src = "https:" + City.forecast.forecastday[0].day.condition.icon;
    var Humidity = document.getElementById("Humidity");
    Humidity.innerHTML = "H: " + City.current.humidity + "%";
    var ChanceOfRain = document.getElementById("ChanceOfRain");
    ChanceOfRain.innerHTML =
        "R:" + City.forecast.forecastday[0].day.daily_chance_of_rain + "%";
    if (cachecities.length > 5) {
        console.log("more than 5");
        cachecities.pop();
    }
    if (!cachecities.some(function (cachedCity) { return cachedCity.location.name === CityName; })) {
        cachecities.push(City);
        localStorage.setItem("cities", JSON.stringify(cachecities));
    }
    console.log(cachecities);
    hours(City);
}
function hours(City) {
    var hours = document.getElementById("HourlyContainer");
    hours.innerHTML = "";
    var currentTime = City.current.last_updated.split(" ")[1].split(":")[0];
    var hourTime = City.forecast.forecastday[0].hour[0].time
        .split(" ")[1]
        .split(":")[0];
    var i = 0;
    while (currentTime !== hourTime && i < 24) {
        hourTime = City.forecast.forecastday[0].hour[++i].time
            .split(" ")[1]
            .split(":")[0];
    }
    while (i < 24) {
        var hour = document.createElement("div");
        hour.classList.add("HourlyInfo");
        var hourTime_1 = document.createElement("h3");
        hourTime_1.classList.add("HourlyTime");
        var hourTemp = document.createElement("h3");
        hourTemp.classList.add("HourlyTemp");
        var hourIcon = document.createElement("img");
        hourIcon.classList.add("HourlyIcon");
        var time = parseInt(City.forecast.forecastday[0].hour[i].time.split(" ")[1].split(":")[0]);
        if (time === parseInt(City.current.last_updated.split(" ")[1].split(":")[0])) {
            hourTime_1.innerHTML = "Now";
        }
        else {
            var twelveHourTime = time % 12 || 12;
            if (time === 0) {
                hourTime_1.innerHTML = "12:00 AM";
            }
            else if (time > 12) {
                hourTime_1.innerHTML = twelveHourTime + ":00 PM";
            }
            else {
                hourTime_1.innerHTML = twelveHourTime + ":00 AM";
            }
        }
        hourTemp.innerHTML = City.forecast.forecastday[0].hour[i].temp_c + "°C";
        hourIcon.src =
            "https:" + City.forecast.forecastday[0].hour[i].condition.icon;
        hour.appendChild(hourTime_1);
        hour.appendChild(hourTemp);
        hour.appendChild(hourIcon);
        hours.appendChild(hour);
        i++;
    }
}
function Days(City) {
    var days = document.getElementById("DailyContainer");
    days.innerHTML = "";
    var i = 0;
    City.forecast.forecastday.forEach(function (day) {
        var dayContainer = document.createElement("div");
        dayContainer.classList.add("DailyInfo");
        var dayName = document.createElement("div");
        dayName.innerText = day.date;
        var dayTemp = document.createElement("div");
        dayTemp.innerText = day.day.avgtemp_c + "°C";
        dayTemp.classList.add("DailyTemp");
        var dayIcon = document.createElement("img");
        dayIcon.src = "https:" + day.day.condition.icon;
        dayIcon.classList.add("DailyIcon");
        var nightIcon = document.createElement("img");
        nightIcon.src = "https:" + day.day.condition.icon;
        nightIcon.classList.add("DailyIcon");
        var nightTemp = document.createElement("div");
        nightTemp.innerText = day.day.avgtemp_c + "°C";
        nightTemp.classList.add("DailyTemp");
        dayContainer.appendChild(dayName);
        dayContainer.appendChild(dayIcon);
        dayContainer.appendChild(dayTemp);
        dayContainer.appendChild(nightIcon);
        dayContainer.appendChild(nightTemp);
        console.log("it works");
        days.appendChild(dayContainer);
        i++;
    });
}
var searchbtn = document.getElementById("SearchButton");
searchbtn.addEventListener("click", function (e) {
    e.preventDefault();
    searchCity();
});
var searchbar = document.getElementById("SearchBar");
searchbar.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        searchCity();
    }
    else {
    }
});
function searchCity() {
    var input = document.getElementById("SearchBar");
    var City = input.value;
    console.log("this is the City");
    input.value = "";
    if (City === "") {
        return;
    }
    cachecities.forEach(function (ceties) {
        if (ceties.location.name.toLocaleLowerCase() === City.toLocaleLowerCase()) {
            console.log("found");
            mainInfo(ceties);
            BackgroundAndFont(ceties);
            return;
        }
    });
    (0,_API__WEBPACK_IMPORTED_MODULE_0__["default"])(City).then(function (data) {
        mainInfo(data);
        BackgroundAndFont(data);
    });
}
function searchCitypariodicly() {
    var input = document.getElementById("SearchBar");
    var City = input.value;
    console.log("this is the City");
    input.value = "";
    if (City === "") {
        return;
    }
    (0,_API__WEBPACK_IMPORTED_MODULE_0__["default"])(City).then(function (data) {
        mainInfo(data);
        BackgroundAndFont(data);
    });
}
function BackgroundAndFont(City) {
    var body = document.body;
    var weather = City.forecast.forecastday[0].day.condition.text;
    var Sunset = City.forecast.forecastday[0].astro.sunset;
    console.log(Sunset);
    var CurrentTime = City.location.localtime.split(" ")[1];
    if (weather === "Sunny" || weather === "Clear") {
        console.log("sunny");
        body.style.background =
            " linear-gradient(0deg, rgba(255,255,255,150) -30%, rgba(12,123,255,1) 100%)";
    }
    else if (weather.includes("rain") ||
        weather.includes("Overcast") ||
        weather.includes("Mist") ||
        weather.includes("Fog")) {
        console.log("rainy");
        body.style.background =
            "linear-gradient(0deg, rgba(119,136,153,1) 0%, rgba(192,192,192,1) 100%)";
    }
    else {
        console.log("night");
        //give me a dark blue gray gradient indacating night
        body.style.background =
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(12,123,255,1) 100%)";
        //change the font to white if the time is night i have it as a var called 
        var font = document.getElementById("font");
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8s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NkMsZ0RBQUc7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCwrQ0FBK0M7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksZ0RBQUc7QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQUc7QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLnNjc3M/MDliOCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0FQSS50cyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gIC0tRm9udENvbG9yOiAjMTkxOTE5O1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jQXBwIHtcbiAgd2lkdGg6IDkwdnc7XG4gIGhlaWdodDogOTB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuI0xlZnRDb250YWluZXIge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jTWFpbkluZm9Db250YWluZXIge1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnIgMWZyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luLWJvdHRvbTogNDAlO1xufVxuXG4jU2VhcmNoQ29udGFpbmVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDUlO1xuICBmbGV4OiAxO1xufVxuXG4jU2VhcmNoQ29udGFpbmVyIGlucHV0IHtcbiAgaGVpZ2h0OiAycmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLUZvbnRDb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2Fucy1zZXJpZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jU2VhcmNoQ29udGFpbmVyIGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tRm9udENvbG9yKTtcbn1cblxuI1NlYXJjaENvbnRhaW5lciBidXR0b24ge1xuICAtLUJhY2tncm91bmRDb2xvckRhcms6ICMyODhhYmY7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiAycmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJhY2tncm91bmRDb2xvckRhcmspO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNTZWFyY2hDb250YWluZXIgYnV0dG9uOmhvdmVyIHtcbiAgYW5pbWF0aW9uOiBmaWxsQ29sb3JSdG9MIDAuM3MgZWFzZS1pbiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBmaWxsQ29sb3JSdG9MIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJhY2tncm91bmRDb2xvckRhcmspO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJhY2tncm91bmRDb2xvcik7XG4gIH1cbn1cbiNTZWFyY2hDb250YWluZXIgYnV0dG9uOmFjdGl2ZSB7XG4gIGFuaW1hdGlvbjogZmlsbENvbG9yTHRvUiAwLjFzIGVhc2UtaW4gZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgZmlsbENvbG9yTHRvUiB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CYWNrZ3JvdW5kQ29sb3IpO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJhY2tncm91bmRDb2xvckRhcmspO1xuICB9XG59XG4jQ2l0eSB7XG4gIGdyaWQtcm93OiAyLzM7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4jVGVtcCB7XG4gIGZsZXg6IDI7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuI1RlbXBBbmRJY29uQ29udGFpbmVyIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBncmlkLXJvdzogMS8yO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGFsaWduLWl0ZW1zOiBsZWZ0O1xufVxuXG4jSWNvbiB7XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiAxMDBweDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG4jRXh0cmFJbmZvIHtcbiAgZ3JpZC1yb3c6IDMvNDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNUaW1lIHtcbiAgZmxleDogMTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbiNIdW1pZGl0eSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4jSHVtaWRpdHk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQgMHM7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jSHVtaWRpdHk6aG92ZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJIdW1pZGl0eVwiO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IHNtYWxsZXI7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4jQ2hhbmNlT2ZSYWluIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4jQ2hhbmNlT2ZSYWluOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuI0NoYW5jZU9mUmFpbjpob3Zlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlJhaW4gQ2hhbmNlXCI7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbiNSaWdodENvbnRhaW5lciB7XG4gIGZsZXg6IDI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jSG91cmx5Q29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuI0hvdXJseUNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uRGVzY3JpcHRpb25Db250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5EZXNjcmlwdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uSG91cmx5SW5mbyB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgaGVpZ2h0OiAxNSU7XG4gIGJvcmRlci1yaWdodDogMXB4IHJnYmEoMCwgMCwgMCwgMC4yNzYpIHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi5Ib3VybHlJbmZvOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5Ib3VybHlUaW1lIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGdyaWQtcm93OiAxLzI7XG59XG5cbi5Ib3VybHlUZW1wIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGdyaWQtcm93OiAzLzQ7XG59XG5cbi5Ib3VybHlJY29uIHtcbiAgZ3JpZC1yb3c6IDIvMztcbiAgd2lkdGg6IDJlbTtcbiAgaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbiNEYWlseUNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUlIDIlIDIlIDIlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jZGFpbHlDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI0RhaWx5VGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5EYWlseUluZm8ge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHdpZHRoOiAxMi44NTcxNDI4NTcxJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDNmcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLkRhdGUge1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZ3JpZC1yb3c6IDEvMjtcbn1cblxuLkRhaWx5VGVtcCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBncmlkLXJvdzogMi8zO1xufVxuXG4uRGFpbHlJY29uIHtcbiAgZ3JpZC1yb3c6IDMvNDtcbiAgd2lkdGg6IDJlbTtcbiAgaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFB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QUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFyQko7O0FBdUJBO0VBQ0ksYUFBQTtBQXBCSjs7QUFzQkE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBbkJKOztBQXFCQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFsQko7O0FBcUJBO0VBRUksYUFBQTtFQUVBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQXBCSjs7QUF1QkE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFyQko7O0FBdUJBO0VBQ0ksYUFBQTtBQXBCSjs7QUF1QkE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBcEJKOztBQXVCQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBcEJKOztBQXNCQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFuQko7O0FBcUJBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQWxCSjs7QUFxQkE7RUFFSSxhQUFBO0VBRUEsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBcEJKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxyXFxuICAgIFxcclxcbiAgLS1Gb250Q29sb3I6ICMxOTE5MTk7XFxyXFxuXFxyXFxuICAgIGZvbnQtZmFtaWx5OidQbGF5ZmFpciBEaXNwbGF5JyxzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIFxcclxcbn1cXHJcXG4jQXBwe1xcclxcbiAgICB3aWR0aDogOTB2dztcXHJcXG4gICAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBcXHJcXG4gICBcXHJcXG5cXHJcXG59XFxyXFxuI0xlZnRDb250YWluZXJ7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIFxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBcXHJcXG4gICBcXHJcXG59XFxyXFxuI01haW5JbmZvQ29udGFpbmVye1xcclxcbiAgICBwYWRkaW5nLXRvcDogNSU7IFxcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyIDFmcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQwJTtcXHJcXG4gICBcXHJcXG5cXHJcXG59XFxyXFxuI1NlYXJjaENvbnRhaW5lcntcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4jU2VhcmNoQ29udGFpbmVyIGlucHV0e1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tRm9udENvbG9yKSA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsc2Fucy1zZXJpZjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4jU2VhcmNoQ29udGFpbmVyIGlucHV0OmZvY3Vze1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1Gb250Q29sb3IpO1xcclxcbn1cXHJcXG4jU2VhcmNoQ29udGFpbmVyIGJ1dHRvbntcXHJcXG4gICBcXHJcXG4gICAgLS1CYWNrZ3JvdW5kQ29sb3JEYXJrOiAjMjg4YWJmO1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CYWNrZ3JvdW5kQ29sb3JEYXJrKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4jU2VhcmNoQ29udGFpbmVyIGJ1dHRvbjpob3ZlcntcXHJcXG4gICAgXFxyXFxuICAgIGFuaW1hdGlvbjogZmlsbENvbG9yUnRvTCAwLjNzIGVhc2UtaW4gZm9yd2FyZHM7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgZmlsbENvbG9yUnRvTHtcXHJcXG4gICAgMCV7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CYWNrZ3JvdW5kQ29sb3JEYXJrKTtcXHJcXG4gICAgICAgIFxcclxcbiAgICB9XFxyXFxuICAgIDEwMCV7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CYWNrZ3JvdW5kQ29sb3IpO1xcclxcbiAgICAgICAgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuI1NlYXJjaENvbnRhaW5lciBidXR0b246YWN0aXZle1xcclxcbiAgICBhbmltYXRpb246IGZpbGxDb2xvckx0b1IgMC4xcyBlYXNlLWluIGZvcndhcmRzO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGZpbGxDb2xvckx0b1J7XFxyXFxuICAgIDAle1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmFja2dyb3VuZENvbG9yKTtcXHJcXG4gICAgICAgIFxcclxcbiAgICB9XFxyXFxuICAgIDEwMCV7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CYWNrZ3JvdW5kQ29sb3JEYXJrKTtcXHJcXG4gICAgICAgIFxcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcbiNDaXR5e1xcclxcbiAgICBncmlkLXJvdzogMi8zO1xcclxcbiAgICBmb250LXNpemU6IDJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuI1RlbXB7XFxyXFxuXFxyXFxuICAgIGZsZXg6IDI7XFxyXFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG59XFxyXFxuI1RlbXBBbmRJY29uQ29udGFpbmVye1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGdyaWQtcm93OiAxLzI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGxlZnQ7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4jSWNvbntcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgd2lkdGg6MTAwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG4gICBcXHJcXG59XFxyXFxuXFxyXFxuI0V4dHJhSW5mb3tcXHJcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbiNUaW1le1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuI0h1bWlkaXR5e1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHJcXG59I0h1bWlkaXR5OjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgICAgdG9wOiAwOyBcXHJcXG4gICAgbGVmdDogMDsgXFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dCAwcztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7IFxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jSHVtaWRpdHk6aG92ZXI6OmFmdGVyIHtcXHJcXG4gICBcXHJcXG4gICAgXFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJIdW1pZGl0eVxcXCI7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4jQ2hhbmNlT2ZSYWlue1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcbiNDaGFuY2VPZlJhaW46OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgICAgICB0b3A6IDA7IFxcclxcbiAgICBsZWZ0OiAwOyBcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0IDBzO1xcclxcbiAgICBkaXNwbGF5OiBibG9jazsgXFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNDaGFuY2VPZlJhaW46aG92ZXI6OmFmdGVyIHtcXHJcXG4gICBcXHJcXG4gICBcXHJcXG4gICAgY29udGVudDogXFxcIlJhaW4gQ2hhbmNlXFxcIjsgXFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIGZvbnQtc2l6ZTpzbWFsbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI1JpZ2h0Q29udGFpbmVye1xcclxcbiBcXHJcXG4gICAgZmxleDogMjtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgXFxyXFxufVxcclxcbiNIb3VybHlDb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG92ZXJmbG93LXg6IGF1dG87IFxcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgIFxcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlOyBcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcXHJcXG59XFxyXFxuI0hvdXJseUNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXJ7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4uRGVzY3JpcHRpb25Db250YWluZXJ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlKTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHJcXG59XFxyXFxuLkRlc2NyaXB0aW9ue1xcclxcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgXFxyXFxuXFxyXFxufVxcclxcbi5Ib3VybHlJbmZve1xcclxcblxcclxcbiAgICBcXHJcXG4gICAgZmxleDogMCAwIGF1dG87IFxcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweCA7XFxyXFxuICAgIGhlaWdodDogY2FsYyg5MCUgLyA2KTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0IDogMXB4IHJnYmEoMCwgMCwgMCwgMC4yNzYpIHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxufVxcclxcbi5Ib3VybHlJbmZvOjotd2Via2l0LXNjcm9sbGJhcntcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLkhvdXJseVRpbWV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBncmlkLXJvdzogMS8yO1xcclxcbn1cXHJcXG4uSG91cmx5VGVtcHtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGdyaWQtcm93OiAzLzQ7XFxyXFxuXFxyXFxufVxcclxcbi5Ib3VybHlJY29ue1xcclxcbiAgIFxcclxcbiAgICBncmlkLXJvdzogMi8zO1xcclxcblxcclxcbiAgICB3aWR0aDogMmVtO1xcclxcbiAgICBoZWlnaHQ6IDJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHJcXG59XFxyXFxuI0RhaWx5Q29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgXFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDUlIDIlIDIlIDIlO1xcclxcbiAgICB3aWR0aDogMTAwJTsgXFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXFxyXFxufVxcclxcbiNkYWlseUNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXJ7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4jRGFpbHlUaXRsZXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUpO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcblxcclxcbn1cXHJcXG4uRGFpbHlJbmZve1xcclxcbiAgICBmbGV4OiAwIDAgYXV0bzsgXFxyXFxuICAgIG1hcmdpbi1yaWdodDogNXB4IDtcXHJcXG4gICAgd2lkdGg6IGNhbGMoOTAlIC8gNyk7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAzZnI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxufVxcclxcbi5EYXRle1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXHJcXG59XFxyXFxuLkRhaWx5VGVtcHtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGdyaWQtcm93OiAyLzM7XFxyXFxuXFxyXFxufVxcclxcbi5EYWlseUljb257XFxyXFxuICAgXFxyXFxuICAgIGdyaWQtcm93OiAzLzQ7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAyZW07XFxyXFxuICAgIGhlaWdodDogMmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIEFQSShDaXR5KSB7XG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9M2ZiMTBlMDg0NzZjNDI0ZDhlYTExNTA1OTIzMjUxMSZxPVwiLmNvbmNhdCgoQ2l0eSksIFwiJmRheXM9N1wiKSwge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIG1vZGU6IFwiY29yc1wiXG4gICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBkYXRhOyB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IEFQSTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCBBUEkgZnJvbSBcIi4vQVBJXCI7XG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmZ1bmN0aW9uIGZldGNoQ2l0eSgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBDaXR5O1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBBUEkoXCJ0ZXhhc1wiKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBDaXR5ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBtYWluSW5mbyhDaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgRGF5cyhDaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgQmFja2dyb3VuZEFuZEZvbnQoQ2l0eSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbnZhciBjYWNoZWNpdGllcyA9IFtdO1xuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0aWVzXCIpKSB7XG4gICAgY2FjaGVjaXRpZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0aWVzXCIpKTtcbn1cbmZldGNoQ2l0eSgpO1xuZnVuY3Rpb24gbWFpbkluZm8oQ2l0eSkge1xuICAgIGNvbnNvbGUubG9nKENpdHkpO1xuICAgIHZhciBDaXR5TmFtZVMgPSBDaXR5LmxvY2F0aW9uLm5hbWU7XG4gICAgdmFyIENpdHlOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJDaXR5XCIpO1xuICAgIENpdHlOYW1lLmlubmVySFRNTCA9IENpdHlOYW1lUztcbiAgICB2YXIgRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVGltZVwiKTtcbiAgICBEYXRlLmlubmVySFRNTCA9IENpdHkubG9jYXRpb24ubG9jYWx0aW1lLnNwbGl0KFwiIFwiKVsxXSArIFwifFwiO1xuICAgIHZhciBUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJUZW1wXCIpO1xuICAgIFRlbXAuaW5uZXJIVE1MID0gQ2l0eS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuYXZndGVtcF9jICsgXCLCsENcIjtcbiAgICB2YXIgc3ZnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJJY29uXCIpO1xuICAgIHN2Zy5zcmMgPSBcImh0dHBzOlwiICsgQ2l0eS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuY29uZGl0aW9uLmljb247XG4gICAgdmFyIEh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJIdW1pZGl0eVwiKTtcbiAgICBIdW1pZGl0eS5pbm5lckhUTUwgPSBcIkg6IFwiICsgQ2l0eS5jdXJyZW50Lmh1bWlkaXR5ICsgXCIlXCI7XG4gICAgdmFyIENoYW5jZU9mUmFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQ2hhbmNlT2ZSYWluXCIpO1xuICAgIENoYW5jZU9mUmFpbi5pbm5lckhUTUwgPVxuICAgICAgICBcIlI6XCIgKyBDaXR5LmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbiArIFwiJVwiO1xuICAgIGlmIChjYWNoZWNpdGllcy5sZW5ndGggPiA1KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibW9yZSB0aGFuIDVcIik7XG4gICAgICAgIGNhY2hlY2l0aWVzLnBvcCgpO1xuICAgIH1cbiAgICBpZiAoIWNhY2hlY2l0aWVzLnNvbWUoZnVuY3Rpb24gKGNhY2hlZENpdHkpIHsgcmV0dXJuIGNhY2hlZENpdHkubG9jYXRpb24ubmFtZSA9PT0gQ2l0eU5hbWU7IH0pKSB7XG4gICAgICAgIGNhY2hlY2l0aWVzLnB1c2goQ2l0eSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2l0aWVzXCIsIEpTT04uc3RyaW5naWZ5KGNhY2hlY2l0aWVzKSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGNhY2hlY2l0aWVzKTtcbiAgICBob3VycyhDaXR5KTtcbn1cbmZ1bmN0aW9uIGhvdXJzKENpdHkpIHtcbiAgICB2YXIgaG91cnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkhvdXJseUNvbnRhaW5lclwiKTtcbiAgICBob3Vycy5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHZhciBjdXJyZW50VGltZSA9IENpdHkuY3VycmVudC5sYXN0X3VwZGF0ZWQuc3BsaXQoXCIgXCIpWzFdLnNwbGl0KFwiOlwiKVswXTtcbiAgICB2YXIgaG91clRpbWUgPSBDaXR5LmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbMF0udGltZVxuICAgICAgICAuc3BsaXQoXCIgXCIpWzFdXG4gICAgICAgIC5zcGxpdChcIjpcIilbMF07XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChjdXJyZW50VGltZSAhPT0gaG91clRpbWUgJiYgaSA8IDI0KSB7XG4gICAgICAgIGhvdXJUaW1lID0gQ2l0eS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyWysraV0udGltZVxuICAgICAgICAgICAgLnNwbGl0KFwiIFwiKVsxXVxuICAgICAgICAgICAgLnNwbGl0KFwiOlwiKVswXTtcbiAgICB9XG4gICAgd2hpbGUgKGkgPCAyNCkge1xuICAgICAgICB2YXIgaG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhvdXIuY2xhc3NMaXN0LmFkZChcIkhvdXJseUluZm9cIik7XG4gICAgICAgIHZhciBob3VyVGltZV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBob3VyVGltZV8xLmNsYXNzTGlzdC5hZGQoXCJIb3VybHlUaW1lXCIpO1xuICAgICAgICB2YXIgaG91clRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIGhvdXJUZW1wLmNsYXNzTGlzdC5hZGQoXCJIb3VybHlUZW1wXCIpO1xuICAgICAgICB2YXIgaG91ckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBob3VySWNvbi5jbGFzc0xpc3QuYWRkKFwiSG91cmx5SWNvblwiKTtcbiAgICAgICAgdmFyIHRpbWUgPSBwYXJzZUludChDaXR5LmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbaV0udGltZS5zcGxpdChcIiBcIilbMV0uc3BsaXQoXCI6XCIpWzBdKTtcbiAgICAgICAgaWYgKHRpbWUgPT09IHBhcnNlSW50KENpdHkuY3VycmVudC5sYXN0X3VwZGF0ZWQuc3BsaXQoXCIgXCIpWzFdLnNwbGl0KFwiOlwiKVswXSkpIHtcbiAgICAgICAgICAgIGhvdXJUaW1lXzEuaW5uZXJIVE1MID0gXCJOb3dcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0d2VsdmVIb3VyVGltZSA9IHRpbWUgJSAxMiB8fCAxMjtcbiAgICAgICAgICAgIGlmICh0aW1lID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaG91clRpbWVfMS5pbm5lckhUTUwgPSBcIjEyOjAwIEFNXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aW1lID4gMTIpIHtcbiAgICAgICAgICAgICAgICBob3VyVGltZV8xLmlubmVySFRNTCA9IHR3ZWx2ZUhvdXJUaW1lICsgXCI6MDAgUE1cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGhvdXJUaW1lXzEuaW5uZXJIVE1MID0gdHdlbHZlSG91clRpbWUgKyBcIjowMCBBTVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGhvdXJUZW1wLmlubmVySFRNTCA9IENpdHkuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltpXS50ZW1wX2MgKyBcIsKwQ1wiO1xuICAgICAgICBob3VySWNvbi5zcmMgPVxuICAgICAgICAgICAgXCJodHRwczpcIiArIENpdHkuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltpXS5jb25kaXRpb24uaWNvbjtcbiAgICAgICAgaG91ci5hcHBlbmRDaGlsZChob3VyVGltZV8xKTtcbiAgICAgICAgaG91ci5hcHBlbmRDaGlsZChob3VyVGVtcCk7XG4gICAgICAgIGhvdXIuYXBwZW5kQ2hpbGQoaG91ckljb24pO1xuICAgICAgICBob3Vycy5hcHBlbmRDaGlsZChob3VyKTtcbiAgICAgICAgaSsrO1xuICAgIH1cbn1cbmZ1bmN0aW9uIERheXMoQ2l0eSkge1xuICAgIHZhciBkYXlzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJEYWlseUNvbnRhaW5lclwiKTtcbiAgICBkYXlzLmlubmVySFRNTCA9IFwiXCI7XG4gICAgdmFyIGkgPSAwO1xuICAgIENpdHkuZm9yZWNhc3QuZm9yZWNhc3RkYXkuZm9yRWFjaChmdW5jdGlvbiAoZGF5KSB7XG4gICAgICAgIHZhciBkYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIkRhaWx5SW5mb1wiKTtcbiAgICAgICAgdmFyIGRheU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkYXlOYW1lLmlubmVyVGV4dCA9IGRheS5kYXRlO1xuICAgICAgICB2YXIgZGF5VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRheVRlbXAuaW5uZXJUZXh0ID0gZGF5LmRheS5hdmd0ZW1wX2MgKyBcIsKwQ1wiO1xuICAgICAgICBkYXlUZW1wLmNsYXNzTGlzdC5hZGQoXCJEYWlseVRlbXBcIik7XG4gICAgICAgIHZhciBkYXlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgZGF5SWNvbi5zcmMgPSBcImh0dHBzOlwiICsgZGF5LmRheS5jb25kaXRpb24uaWNvbjtcbiAgICAgICAgZGF5SWNvbi5jbGFzc0xpc3QuYWRkKFwiRGFpbHlJY29uXCIpO1xuICAgICAgICB2YXIgbmlnaHRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgbmlnaHRJY29uLnNyYyA9IFwiaHR0cHM6XCIgKyBkYXkuZGF5LmNvbmRpdGlvbi5pY29uO1xuICAgICAgICBuaWdodEljb24uY2xhc3NMaXN0LmFkZChcIkRhaWx5SWNvblwiKTtcbiAgICAgICAgdmFyIG5pZ2h0VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5pZ2h0VGVtcC5pbm5lclRleHQgPSBkYXkuZGF5LmF2Z3RlbXBfYyArIFwiwrBDXCI7XG4gICAgICAgIG5pZ2h0VGVtcC5jbGFzc0xpc3QuYWRkKFwiRGFpbHlUZW1wXCIpO1xuICAgICAgICBkYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5TmFtZSk7XG4gICAgICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlJY29uKTtcbiAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGRheVRlbXApO1xuICAgICAgICBkYXlDb250YWluZXIuYXBwZW5kQ2hpbGQobmlnaHRJY29uKTtcbiAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKG5pZ2h0VGVtcCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaXQgd29ya3NcIik7XG4gICAgICAgIGRheXMuYXBwZW5kQ2hpbGQoZGF5Q29udGFpbmVyKTtcbiAgICAgICAgaSsrO1xuICAgIH0pO1xufVxudmFyIHNlYXJjaGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiU2VhcmNoQnV0dG9uXCIpO1xuc2VhcmNoYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZWFyY2hDaXR5KCk7XG59KTtcbnZhciBzZWFyY2hiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlNlYXJjaEJhclwiKTtcbnNlYXJjaGJhci5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNlYXJjaENpdHkoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgfVxufSk7XG5mdW5jdGlvbiBzZWFyY2hDaXR5KCkge1xuICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiU2VhcmNoQmFyXCIpO1xuICAgIHZhciBDaXR5ID0gaW5wdXQudmFsdWU7XG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBDaXR5XCIpO1xuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICBpZiAoQ2l0eSA9PT0gXCJcIikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNhY2hlY2l0aWVzLmZvckVhY2goZnVuY3Rpb24gKGNldGllcykge1xuICAgICAgICBpZiAoY2V0aWVzLmxvY2F0aW9uLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gQ2l0eS50b0xvY2FsZUxvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZvdW5kXCIpO1xuICAgICAgICAgICAgbWFpbkluZm8oY2V0aWVzKTtcbiAgICAgICAgICAgIEJhY2tncm91bmRBbmRGb250KGNldGllcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBBUEkoQ2l0eSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBtYWluSW5mbyhkYXRhKTtcbiAgICAgICAgQmFja2dyb3VuZEFuZEZvbnQoZGF0YSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzZWFyY2hDaXR5cGFyaW9kaWNseSgpIHtcbiAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlNlYXJjaEJhclwiKTtcbiAgICB2YXIgQ2l0eSA9IGlucHV0LnZhbHVlO1xuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgQ2l0eVwiKTtcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgaWYgKENpdHkgPT09IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBBUEkoQ2l0eSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBtYWluSW5mbyhkYXRhKTtcbiAgICAgICAgQmFja2dyb3VuZEFuZEZvbnQoZGF0YSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBCYWNrZ3JvdW5kQW5kRm9udChDaXR5KSB7XG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIHZhciB3ZWF0aGVyID0gQ2l0eS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuY29uZGl0aW9uLnRleHQ7XG4gICAgdmFyIFN1bnNldCA9IENpdHkuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3Vuc2V0O1xuICAgIGNvbnNvbGUubG9nKFN1bnNldCk7XG4gICAgdmFyIEN1cnJlbnRUaW1lID0gQ2l0eS5sb2NhdGlvbi5sb2NhbHRpbWUuc3BsaXQoXCIgXCIpWzFdO1xuICAgIGlmICh3ZWF0aGVyID09PSBcIlN1bm55XCIgfHwgd2VhdGhlciA9PT0gXCJDbGVhclwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic3VubnlcIik7XG4gICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9XG4gICAgICAgICAgICBcIiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsMjU1LDI1NSwxNTApIC0zMCUsIHJnYmEoMTIsMTIzLDI1NSwxKSAxMDAlKVwiO1xuICAgIH1cbiAgICBlbHNlIGlmICh3ZWF0aGVyLmluY2x1ZGVzKFwicmFpblwiKSB8fFxuICAgICAgICB3ZWF0aGVyLmluY2x1ZGVzKFwiT3ZlcmNhc3RcIikgfHxcbiAgICAgICAgd2VhdGhlci5pbmNsdWRlcyhcIk1pc3RcIikgfHxcbiAgICAgICAgd2VhdGhlci5pbmNsdWRlcyhcIkZvZ1wiKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInJhaW55XCIpO1xuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmQgPVxuICAgICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxMTksMTM2LDE1MywxKSAwJSwgcmdiYSgxOTIsMTkyLDE5MiwxKSAxMDAlKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJuaWdodFwiKTtcbiAgICAgICAgLy9naXZlIG1lIGEgZGFyayBibHVlIGdyYXkgZ3JhZGllbnQgaW5kYWNhdGluZyBuaWdodFxuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmQgPVxuICAgICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLDAsMCwxKSAwJSwgcmdiYSgxMiwxMjMsMjU1LDEpIDEwMCUpXCI7XG4gICAgICAgIC8vY2hhbmdlIHRoZSBmb250IHRvIHdoaXRlIGlmIHRoZSB0aW1lIGlzIG5pZ2h0IGkgaGF2ZSBpdCBhcyBhIHZhciBjYWxsZWQgXG4gICAgICAgIHZhciBmb250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb250XCIpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==