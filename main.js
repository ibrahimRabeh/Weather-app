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
  align-items: start;
  padding-bottom: 5%;
  flex: 1;
}

#SearchContainer input {
  height: 2rem;
  border-radius: 5px;
  border: none;
  color: black;
  border-bottom: 3px solid;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.418);
  font-family: "Playfair Display", sans-serif;
  cursor: pointer;
}

#SearchContainer input:focus {
  outline: none;
  border: 1px solid;
}

#SearchContainer button {
  width: fit-content;
  height: 2rem;
  border-radius: 5px;
  background-color: gray;
  cursor: pointer;
}

#SearchContainer button:hover {
  animation: fillColorRtoL 0.1s ease-in forwards;
}

@keyframes fillColorRtoL {
  0% {
    background-color: grey;
  }
  100% {
    background-color: rgba(255, 255, 255, 0.418);
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
  width: 15%;
  height: 15%;
  border-right: 1px rgba(0, 0, 0, 0.276) solid;
  background-color: rgba(128, 128, 128, 0.16);
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
  justify-content: center;
  align-items: center;
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
  border-left: 1px solid rgba(0, 0, 0, 0.557);
  border-right: 1px solid rgba(0, 0, 0, 0.557);
  flex: 0 0 auto;
  background-color: rgba(128, 128, 128, 0.16);
  width: 33.3333333333%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
}

.Date {
  font-size: 1em;
  font-weight: 700;
  flex: 1;
}

.DailyTemp {
  font-size: 1em;
  font-weight: 700;
  flex: 1;
}

.DailyIconContainer {
  flex: 2;
  display: flex;
}

.DailyIcon {
  flex: 1;
  width: 2em;
  height: 2em;
  font-size: 1.5em;
  font-weight: 700;
}

@media (max-width: 480px) {
  body {
    font-size: 1rem; /* Adjust base font size for mobile */
  }
  #App {
    flex-direction: column; /* Stack content vertically */
    width: 100vw;
    height: auto;
  }
  #LeftContainer, #RightContainer {
    flex: 1 0 100%; /* Take full width on mobile */
  }
  #MainInfoContainer, #HourlyContainer, #DailyContainer #searchContainer {
    grid-template-columns: 1fr; /* Adjust grid for single column layout */
    margin-bottom: 20%; /* Adjust spacing */
  }
  #SearchContainer {
    display: flex;
    flex-direction: row;
  }
  #SearchBar {
    flex: 10;
  }
  #SearchButton {
    flex: 1;
  }
  #MainInfoContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #TempAndIconContainer, #ExtraInfo {
    flex-direction: column; /* Stack info vertically */
    align-items: center; /* Center-align items for aesthetics */
  }
  #SearchContainer input, #SearchContainer button {
    width: 90%; /* Adjust width for better fit */
    font-size: 0.9rem; /* Adjust font size for readability */
  }
  .HourlyInfo, .DailyInfo {
    width: 30%; /* Adjust width to fit mobile screen */
  }
  /* Adjust font sizes for various components for better readability on small screens */
  .HourlyTime, .HourlyTemp, .Date, .DailyTemp {
    font-size: 0.8rem;
  }
  #Icon, .HourlyIcon, .DailyIcon {
    width: 1.5em; /* Adjust icon sizes */
    height: 1.5em;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["body{\r\n    font-family:'Playfair Display',sans-serif;\r\n    font-size: 1.2rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    overflow: hidden;\r\n  \r\n}\r\n#App{\r\n    width: 90vw;\r\n    height: 90vh;\r\n    display: flex;\r\n    flex-direction: row;\r\n    \r\n   \r\n\r\n}\r\n#LeftContainer{\r\n    flex: 1;\r\n    \r\n    display: flex;\r\n    flex-direction: column;\r\n    \r\n   \r\n}\r\n#MainInfoContainer{\r\n    padding-top: 5%; \r\n    flex: 1;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 2fr 1fr 1fr;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    margin-bottom: 40%;\r\n   \r\n\r\n}\r\n#SearchContainer{\r\n    align-items:start;\r\n    padding-bottom: 5%;\r\n    flex: 1;\r\n}\r\n\r\n\r\n\r\n#SearchContainer input{\r\n    height: 2rem;\r\n    border-radius: 5px;\r\n    border: none;\r\n    color: black;\r\n    border-bottom: 3px solid;\r\n    font-size: 1rem;\r\n    background-color: rgba(255, 255, 255, 0.418);\r\n    font-family: 'Playfair Display',sans-serif;\r\n    cursor: pointer;\r\n}\r\n#SearchContainer input:focus{\r\n    outline: none;\r\n    border: 1px solid ;\r\n}\r\n#SearchContainer button{\r\n    width: fit-content;\r\n    height: 2rem;\r\n    border-radius: 5px;\r\n    background-color: gray;\r\n    cursor: pointer;\r\n}\r\n#SearchContainer button:hover{\r\n    \r\n    animation: fillColorRtoL 0.1s ease-in forwards;\r\n}\r\n@keyframes fillColorRtoL{\r\n    0%{\r\n        background-color:grey;\r\n        \r\n    }\r\n    100%{\r\n        background-color: rgba(255, 255, 255, 0.418);\r\n    }\r\n\r\n}\r\n#SearchContainer button:active{\r\n    animation: fillColorLtoR 0.1s ease-in forwards;\r\n}\r\n@keyframes fillColorLtoR{\r\n    0%{\r\n        background-color: var(--BackgroundColor);\r\n        \r\n    }\r\n    100%{\r\n        background-color: var(--BackgroundColorDark);\r\n        \r\n    }\r\n\r\n}\r\n#City{\r\n    grid-row: 2/3;\r\n    font-size: 2em;\r\n    font-weight: 700;\r\n}\r\n\r\n#Temp{\r\n\r\n    flex: 2;\r\n    font-size: 3em;\r\n    font-weight: 700;\r\n    text-align: start;\r\n}\r\n#TempAndIconContainer{\r\n    width: fit-content;\r\n    grid-row: 1/2;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: left;\r\n    align-items: left;\r\n    \r\n}\r\n#Icon{\r\n    flex: 1;\r\n    width:100px;\r\n    align-items: start;\r\n   \r\n}\r\n\r\n#ExtraInfo{\r\n    grid-row: 3/4;\r\n    display: flex;\r\n    justify-content: start;\r\n    align-items: start;\r\n    text-align: start;\r\n    flex-wrap: wrap;\r\n    width: 40%;\r\n    height: 100%;\r\n}\r\n#Time{\r\n    flex: 1;\r\n    font-size: 1em;\r\n    font-weight: 700;\r\n}\r\n#Humidity{\r\n    position: relative;\r\n    flex: 1;\r\n    margin-right: 5px;\r\n    font-size: 1em;\r\n    font-weight: 700;\r\n\r\n}#Humidity::after {\r\n    content: \"\";\r\n        top: 0; \r\n    left: 0; \r\n    opacity: 0;\r\n    transition: opacity 0.3s ease-in-out 0s;\r\n    display: block; \r\n\r\n}\r\n\r\n#Humidity:hover::after {\r\n   \r\n    \r\n    content: \"Humidity\";\r\n    opacity: 1;\r\n    font-size: smaller;\r\n    font-weight: lighter;\r\n    \r\n}\r\n#ChanceOfRain{\r\n    flex: 1;\r\n    margin-right: 5px;\r\n    font-size: 1em;\r\n    font-weight: 700;\r\n}\r\n#ChanceOfRain::after {\r\n    content: \"\";\r\n        top: 0; \r\n    left: 0; \r\n    opacity: 0;\r\n    transition: opacity 0.3s ease-in-out 0s;\r\n    display: block; \r\n\r\n}\r\n\r\n#ChanceOfRain:hover::after {\r\n   \r\n   \r\n    content: \"Rain Chance\"; \r\n    opacity: 1;\r\n    font-size:small;\r\n    font-weight:500;\r\n    \r\n}\r\n\r\n\r\n#RightContainer{\r\n \r\n    flex: 2;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr 1fr;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n   \r\n}\r\n#HourlyContainer {\r\n    position: relative;\r\n    display: flex;\r\n    overflow-x: auto; \r\n    justify-content: space-between; \r\n    align-items: center;\r\n    border-radius: 10%;\r\n    width: 100%; \r\n    max-width: 100%;\r\n    box-sizing: border-box; \r\n}\r\n#HourlyContainer::-webkit-scrollbar{\r\n    display: none;\r\n    \r\n}\r\n.DescriptionContainer{\r\n    position: absolute;\r\n    top: 0;\r\n    width: calc(100%);\r\n    box-sizing: border-box;\r\n\r\n}\r\n.Description{\r\n   position: relative;\r\n    top: 0;\r\n    left: 0;\r\n   width: fit-content;\r\n    font-size: 1em;\r\n    font-weight: 700;\r\n   \r\n\r\n}\r\n.HourlyInfo{\r\n\r\n    \r\n    flex: 0 0 auto; \r\n    width: calc(90% / 6);\r\n    height: calc(90% / 6);\r\n    border-right : 1px rgba(0, 0, 0, 0.276) solid;\r\n    background-color: rgba(128, 128, 128, 0.16);\r\n    border-radius: 5px;\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr 1fr;\r\n    justify-content: center;\r\n    align-items: center;\r\n    overflow-y: hidden;\r\n}\r\n.HourlyInfo::-webkit-scrollbar{\r\n    display: none;\r\n}\r\n.HourlyTime{\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 1em;\r\n    font-weight: 400;\r\n    grid-row: 1/2;\r\n}\r\n.HourlyTemp{\r\n    font-size: 1em;\r\n    font-weight: 400;\r\n    grid-row: 3/4;\r\n\r\n}\r\n.HourlyIcon{\r\n   \r\n    grid-row: 2/3;\r\n\r\n    width: 2em;\r\n    height: 2em;\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n\r\n}\r\n#DailyContainer{\r\n    display: flex;\r\n    position: relative;\r\n\r\n    overflow-x: hidden; \r\n    justify-content: space-between; \r\n    align-items: center;\r\n    padding: 5% 2% 2% 2%;\r\n    width: 100%; \r\n    max-width: 100%;\r\n    box-sizing: border-box; \r\n}\r\n#dailyContainer::-webkit-scrollbar{\r\n    display: none;\r\n    \r\n}\r\n#DailyTitle{\r\n    position: absolute;\r\n    top: 0;\r\n    width: calc(100%);\r\n    box-sizing: border-box;\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n\r\n}\r\n.DailyInfo{\r\n    border-left: 1px solid rgba(0, 0, 0, 0.557);\r\n    border-right: 1px solid rgba(0, 0, 0, 0.557);\r\n    flex: 0 0 auto; \r\n    background-color: rgba(128, 128, 128, 0.16);\r\n    width: calc(100% / 3);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    overflow-y: hidden;\r\n}\r\n.Date{\r\n    font-size: 1em;\r\n    font-weight: 700;\r\n    flex: 1;\r\n}\r\n.DailyTemp{\r\n  \r\n    \r\n    font-size: 1em;\r\n    font-weight: 700;\r\n   flex: 1;\r\n}\r\n.DailyIconContainer{\r\n    flex: 2;\r\n    display: flex;\r\n\r\n    \r\n}\r\n.DailyIcon{\r\n    flex: 1;\r\n    width: 2em;\r\n    height: 2em;\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n}\r\n\r\n@media (max-width: 480px) {\r\n    body {\r\n        font-size: 1rem; /* Adjust base font size for mobile */\r\n    }\r\n    #App {\r\n        flex-direction: column; /* Stack content vertically */\r\n        width: 100vw;\r\n        height: auto;\r\n    }\r\n    #LeftContainer, #RightContainer {\r\n        flex: 1 0 100%; /* Take full width on mobile */\r\n    }\r\n    #MainInfoContainer, #HourlyContainer, #DailyContainer #searchContainer {\r\n        grid-template-columns: 1fr; /* Adjust grid for single column layout */\r\n        margin-bottom: 20%; /* Adjust spacing */\r\n     \r\n    }\r\n    #SearchContainer {\r\n        display: flex;\r\n        flex-direction: row;\r\n    }\r\n    #SearchBar {\r\n        flex: 10; \r\n\r\n    }\r\n    #SearchButton {\r\n        flex: 1; \r\n    }\r\n    #MainInfoContainer{\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n        \r\n    }\r\n    #TempAndIconContainer, #ExtraInfo {\r\n        flex-direction: column; /* Stack info vertically */\r\n        align-items: center; /* Center-align items for aesthetics */\r\n    }\r\n    #SearchContainer input, #SearchContainer button {\r\n        width: 90%; /* Adjust width for better fit */\r\n        font-size: 0.9rem; /* Adjust font size for readability */\r\n    }\r\n    .HourlyInfo, .DailyInfo {\r\n        width: 30%; /* Adjust width to fit mobile screen */\r\n    }\r\n    /* Adjust font sizes for various components for better readability on small screens */\r\n    .HourlyTime, .HourlyTemp, .Date, .DailyTemp {\r\n        font-size: 0.8rem;\r\n    }\r\n    #Icon, .HourlyIcon, .DailyIcon {\r\n        width: 1.5em; /* Adjust icon sizes */\r\n        height: 1.5em;\r\n    }\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
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


var city = "London";
localStorage.clear();
var cachecities = [];
if (localStorage.getItem("cities")) {
    cachecities = JSON.parse(localStorage.getItem("cities"));
    city = cachecities[cachecities.length - 1].location.name;
}
function fetchCity() {
    return __awaiter(this, void 0, void 0, function () {
        var City;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0,_API__WEBPACK_IMPORTED_MODULE_0__["default"])(city)];
                case 1:
                    City = _a.sent();
                    mainInfo(City);
                    updateCache(City.location.name, City);
                    Days(City);
                    BackgroundAndFont(City);
                    return [2 /*return*/];
            }
        });
    });
}
fetchCity();
function mainInfo(City) {
    console.log(City);
    var CityNameS = City.location.name;
    var currentHour = parseInt(City.current.last_updated.split(" ")[1].split(":")[0]);
    var CityName = document.getElementById("City");
    CityName.innerHTML = CityNameS;
    var Date = document.getElementById("Time");
    Date.innerHTML = City.location.localtime.split(" ")[1] + "|";
    var Temp = document.getElementById("Temp");
    Temp.innerHTML = City.forecast.forecastday[0].day.avgtemp_c + "°C";
    var svg = document.getElementById("Icon");
    svg.src = "https:" + City.forecast.forecastday[0].hour[(currentHour + 1) % 24].condition.icon;
    var Humidity = document.getElementById("Humidity");
    Humidity.innerHTML = "H: " + City.current.humidity + "%";
    var ChanceOfRain = document.getElementById("ChanceOfRain");
    ChanceOfRain.innerHTML =
        "R:" + City.forecast.forecastday[0].day.daily_chance_of_rain + "%";
    hours(City);
}
function updateCache(CityName, City) {
    if (cachecities.length >= 5) {
        console.log("more than 5");
        cachecities.shift();
    }
    if (!cachecities.some(function (cachedCity) { return cachedCity.location.name === CityName; })) {
        cachecities.push(City);
        localStorage.setItem("cities", JSON.stringify(cachecities));
    }
    console.log(cachecities);
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
    var dayIndex = 0;
    var NewDayHoursIndex = 0;
    while (NewDayHoursIndex < 23) {
        if (i === 23) {
            i = 0;
            dayIndex++;
        }
        NewDayHoursIndex++;
        var hour = document.createElement("div");
        hour.classList.add("HourlyInfo");
        var hourTime_1 = document.createElement("h3");
        hourTime_1.classList.add("HourlyTime");
        var hourTemp = document.createElement("h3");
        hourTemp.classList.add("HourlyTemp");
        var hourIcon = document.createElement("img");
        hourIcon.classList.add("HourlyIcon");
        var time = parseInt(City.forecast.forecastday[dayIndex].hour[i++].time.split(" ")[1].split(":")[0]);
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
        hourTemp.innerHTML = City.forecast.forecastday[dayIndex].hour[i].temp_c + "°C";
        hourIcon.src =
            "https:" + City.forecast.forecastday[dayIndex].hour[i].condition.icon;
        hour.appendChild(hourTime_1);
        hour.appendChild(hourTemp);
        hour.appendChild(hourIcon);
        hours.appendChild(hour);
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
        dayName.innerText = getDayName(day.date);
        var dayTemp = document.createElement("div");
        dayTemp.innerText = day.day.avgtemp_c + "°C";
        dayTemp.classList.add("DailyTemp");
        var dayIconContainer = document.createElement("div");
        dayIconContainer.classList.add("DailyIconContainer");
        var dayIcon = document.createElement("img");
        dayIcon.src = "https:" + day.day.condition.icon;
        dayIcon.classList.add("DailyIcon");
        var nightIcon = document.createElement("img");
        nightIcon.src = "https:" + day.day.condition.icon;
        nightIcon.classList.add("DailyIcon");
        dayContainer.appendChild(dayName);
        dayContainer.appendChild(dayTemp);
        dayIconContainer.appendChild(dayIcon);
        dayIconContainer.appendChild(nightIcon);
        dayContainer.appendChild(dayIconContainer);
        console.log("it works");
        days.appendChild(dayContainer);
        i++;
    });
}
function getDayName(dateString) {
    var date = new Date(dateString);
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
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
        updateCache(data.location.name, data);
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
    var currentHour = parseInt(City.current.last_updated.split(" ")[1].split(":")[0]);
    var weatherCondition = City.forecast.forecastday[0].hour[currentHour].condition.text;
    var weatherIcon = City.forecast.forecastday[0].hour[currentHour].condition.icon;
    var font = "rgb(255,255,255)";
    var mainColor = "rgb(20,20,255)";
    var secondaryColor = "rgb(200,200,200)";
    if (weatherIcon.includes("day")) {
        font = "rgb(10,10,10)";
        mainColor = "rgb(100,100,255)";
    }
    if (weatherCondition === "Clear") {
        secondaryColor = "rgb(255,255,255)";
        if (weatherIcon.includes("night"))
            secondaryColor = "rgb(0,0,0)";
    }
    body.style.background = "linear-gradient(".concat(mainColor, " 0%, ").concat(secondaryColor, " 100%)");
    body.style.background = "repeating-linear-gradient(\n    45deg,\n    \n    ".concat(mainColor, " 2px,\n    \n    ").concat(secondaryColor, " 4px\n   \n  )");
    body.style.color = font;
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQix1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLHFCQUFxQixLQUFLLE1BQU0sc0JBQXNCLFVBQVUsVUFBVSxLQUFLLE1BQU0scUJBQXFCLEtBQUssTUFBTSxzQkFBc0Isc0JBQXNCLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLHNCQUFzQixzQkFBc0IsTUFBTSxNQUFNLHFCQUFxQixzQkFBc0IsTUFBTSxNQUFNLHFC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QUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLGdEQUFHO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQUc7QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5zY3NzPzA5YjgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9BUEkudHMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jQXBwIHtcbiAgd2lkdGg6IDkwdnc7XG4gIGhlaWdodDogOTB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuI0xlZnRDb250YWluZXIge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jTWFpbkluZm9Db250YWluZXIge1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnIgMWZyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luLWJvdHRvbTogNDAlO1xufVxuXG4jU2VhcmNoQ29udGFpbmVyIHtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gIGZsZXg6IDE7XG59XG5cbiNTZWFyY2hDb250YWluZXIgaW5wdXQge1xuICBoZWlnaHQ6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDE4KTtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzYW5zLXNlcmlmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNTZWFyY2hDb250YWluZXIgaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cblxuI1NlYXJjaENvbnRhaW5lciBidXR0b24ge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNTZWFyY2hDb250YWluZXIgYnV0dG9uOmhvdmVyIHtcbiAgYW5pbWF0aW9uOiBmaWxsQ29sb3JSdG9MIDAuMXMgZWFzZS1pbiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBmaWxsQ29sb3JSdG9MIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQxOCk7XG4gIH1cbn1cbiNTZWFyY2hDb250YWluZXIgYnV0dG9uOmFjdGl2ZSB7XG4gIGFuaW1hdGlvbjogZmlsbENvbG9yTHRvUiAwLjFzIGVhc2UtaW4gZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgZmlsbENvbG9yTHRvUiB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CYWNrZ3JvdW5kQ29sb3IpO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJhY2tncm91bmRDb2xvckRhcmspO1xuICB9XG59XG4jQ2l0eSB7XG4gIGdyaWQtcm93OiAyLzM7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4jVGVtcCB7XG4gIGZsZXg6IDI7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuI1RlbXBBbmRJY29uQ29udGFpbmVyIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBncmlkLXJvdzogMS8yO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGFsaWduLWl0ZW1zOiBsZWZ0O1xufVxuXG4jSWNvbiB7XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiAxMDBweDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG4jRXh0cmFJbmZvIHtcbiAgZ3JpZC1yb3c6IDMvNDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNUaW1lIHtcbiAgZmxleDogMTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbiNIdW1pZGl0eSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4jSHVtaWRpdHk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQgMHM7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jSHVtaWRpdHk6aG92ZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJIdW1pZGl0eVwiO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IHNtYWxsZXI7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4jQ2hhbmNlT2ZSYWluIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4jQ2hhbmNlT2ZSYWluOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuI0NoYW5jZU9mUmFpbjpob3Zlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlJhaW4gQ2hhbmNlXCI7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbiNSaWdodENvbnRhaW5lciB7XG4gIGZsZXg6IDI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jSG91cmx5Q29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuI0hvdXJseUNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uRGVzY3JpcHRpb25Db250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5EZXNjcmlwdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uSG91cmx5SW5mbyB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDE1JTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggcmdiYSgwLCAwLCAwLCAwLjI3Nikgc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xNik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLkhvdXJseUluZm86Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLkhvdXJseVRpbWUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGdyaWQtcm93OiAxLzI7XG59XG5cbi5Ib3VybHlUZW1wIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGdyaWQtcm93OiAzLzQ7XG59XG5cbi5Ib3VybHlJY29uIHtcbiAgZ3JpZC1yb3c6IDIvMztcbiAgd2lkdGg6IDJlbTtcbiAgaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbiNEYWlseUNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUlIDIlIDIlIDIlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jZGFpbHlDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI0RhaWx5VGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5EYWlseUluZm8ge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41NTcpO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNTU3KTtcbiAgZmxleDogMCAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xNik7XG4gIHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLkRhdGUge1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZmxleDogMTtcbn1cblxuLkRhaWx5VGVtcCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmbGV4OiAxO1xufVxuXG4uRGFpbHlJY29uQ29udGFpbmVyIHtcbiAgZmxleDogMjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLkRhaWx5SWNvbiB7XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogMmVtO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgYm9keSB7XG4gICAgZm9udC1zaXplOiAxcmVtOyAvKiBBZGp1c3QgYmFzZSBmb250IHNpemUgZm9yIG1vYmlsZSAqL1xuICB9XG4gICNBcHAge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIFN0YWNrIGNvbnRlbnQgdmVydGljYWxseSAqL1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgI0xlZnRDb250YWluZXIsICNSaWdodENvbnRhaW5lciB7XG4gICAgZmxleDogMSAwIDEwMCU7IC8qIFRha2UgZnVsbCB3aWR0aCBvbiBtb2JpbGUgKi9cbiAgfVxuICAjTWFpbkluZm9Db250YWluZXIsICNIb3VybHlDb250YWluZXIsICNEYWlseUNvbnRhaW5lciAjc2VhcmNoQ29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgLyogQWRqdXN0IGdyaWQgZm9yIHNpbmdsZSBjb2x1bW4gbGF5b3V0ICovXG4gICAgbWFyZ2luLWJvdHRvbTogMjAlOyAvKiBBZGp1c3Qgc3BhY2luZyAqL1xuICB9XG4gICNTZWFyY2hDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAjU2VhcmNoQmFyIHtcbiAgICBmbGV4OiAxMDtcbiAgfVxuICAjU2VhcmNoQnV0dG9uIHtcbiAgICBmbGV4OiAxO1xuICB9XG4gICNNYWluSW5mb0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgI1RlbXBBbmRJY29uQ29udGFpbmVyLCAjRXh0cmFJbmZvIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTdGFjayBpbmZvIHZlcnRpY2FsbHkgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXItYWxpZ24gaXRlbXMgZm9yIGFlc3RoZXRpY3MgKi9cbiAgfVxuICAjU2VhcmNoQ29udGFpbmVyIGlucHV0LCAjU2VhcmNoQ29udGFpbmVyIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDkwJTsgLyogQWRqdXN0IHdpZHRoIGZvciBiZXR0ZXIgZml0ICovXG4gICAgZm9udC1zaXplOiAwLjlyZW07IC8qIEFkanVzdCBmb250IHNpemUgZm9yIHJlYWRhYmlsaXR5ICovXG4gIH1cbiAgLkhvdXJseUluZm8sIC5EYWlseUluZm8ge1xuICAgIHdpZHRoOiAzMCU7IC8qIEFkanVzdCB3aWR0aCB0byBmaXQgbW9iaWxlIHNjcmVlbiAqL1xuICB9XG4gIC8qIEFkanVzdCBmb250IHNpemVzIGZvciB2YXJpb3VzIGNvbXBvbmVudHMgZm9yIGJldHRlciByZWFkYWJpbGl0eSBvbiBzbWFsbCBzY3JlZW5zICovXG4gIC5Ib3VybHlUaW1lLCAuSG91cmx5VGVtcCwgLkRhdGUsIC5EYWlseVRlbXAge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG4gICNJY29uLCAuSG91cmx5SWNvbiwgLkRhaWx5SWNvbiB7XG4gICAgd2lkdGg6IDEuNWVtOyAvKiBBZGp1c3QgaWNvbiBzaXplcyAqL1xuICAgIGhlaWdodDogMS41ZW07XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksMkNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFJQTtFQUNJLE9BQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7QUFGSjs7QUFNQTtFQUNJLGVBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0FBSko7O0FBU0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLDRDQUFBO0VBQ0EsMkNBQUE7RUFDQSxlQUFBO0FBTko7O0FBUUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUFMSjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBSko7O0FBTUE7RUFFSSw4Q0FBQTtBQUpKOztBQU1BO0VBQ0k7SUFDSSxzQkFBQTtFQUhOO0VBTUU7SUFDSSw0Q0FBQTtFQUpOO0FBQ0Y7QUFPQTtFQUNJLDhDQUFBO0FBTEo7O0FBT0E7RUFDSTtJQUNJLHdDQUFBO0VBSk47RUFPRTtJQUNJLDRDQUFBO0VBTE47QUFDRjtBQVNBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVBKOztBQVVBO0VBRUksT0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBUko7O0FBVUE7RUFDSSxrQkFB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LHFDQUFBO0VBZk47RUFpQkU7SUFDSSxzQkFBQSxFQUFBLDZCQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUFmTjtFQWlCRTtJQUNJLGNBQUEsRUFBQSw4QkFBQTtFQWZOO0VBaUJFO0lBQ0ksMEJBQUEsRUFBQSx5Q0FBQTtJQUNBLGtCQUFBLEVBQUEsbUJBQUE7RUFmTjtFQWtCRTtJQUNJLGFBQUE7SUFDQSxtQkFBQTtFQWhCTjtFQWtCRTtJQUNJLFFBQUE7RUFoQk47RUFtQkU7SUFDSSxPQUFBO0VBakJOO0VBbUJFO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQWpCTjtFQW9CRTtJQUNJLHNCQUFBLEVBQUEsMEJBQUE7SUFDQSxtQkFBQSxFQUFBLHNDQUFBO0VBbEJOO0VBb0JFO0lBQ0ksVUFBQSxFQUFBLGdDQUFBO0lBQ0EsaUJBQUEsRUFBQSxxQ0FBQTtFQWxCTjtFQW9CRTtJQUNJLFVBQUEsRUFBQSxzQ0FBQTtFQWxCTjtFQW9CRSxxRkFBQTtFQUNBO0lBQ0ksaUJBQUE7RUFsQk47RUFvQkU7SUFDSSxZQUFBLEVBQUEsc0JBQUE7SUFDQSxhQUFBO0VBbEJOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXHJcXG4gICAgZm9udC1mYW1pbHk6J1BsYXlmYWlyIERpc3BsYXknLHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgXFxyXFxufVxcclxcbiNBcHB7XFxyXFxuICAgIHdpZHRoOiA5MHZ3O1xcclxcbiAgICBoZWlnaHQ6IDkwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIFxcclxcbiAgIFxcclxcblxcclxcbn1cXHJcXG4jTGVmdENvbnRhaW5lcntcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIFxcclxcbiAgIFxcclxcbn1cXHJcXG4jTWFpbkluZm9Db250YWluZXJ7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA1JTsgXFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnIgMWZyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNDAlO1xcclxcbiAgIFxcclxcblxcclxcbn1cXHJcXG4jU2VhcmNoQ29udGFpbmVye1xcclxcbiAgICBhbGlnbi1pdGVtczpzdGFydDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4jU2VhcmNoQ29udGFpbmVyIGlucHV0e1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDE4KTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5JyxzYW5zLXNlcmlmO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbiNTZWFyY2hDb250YWluZXIgaW5wdXQ6Zm9jdXN7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcXHJcXG59XFxyXFxuI1NlYXJjaENvbnRhaW5lciBidXR0b257XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuI1NlYXJjaENvbnRhaW5lciBidXR0b246aG92ZXJ7XFxyXFxuICAgIFxcclxcbiAgICBhbmltYXRpb246IGZpbGxDb2xvclJ0b0wgMC4xcyBlYXNlLWluIGZvcndhcmRzO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGZpbGxDb2xvclJ0b0x7XFxyXFxuICAgIDAle1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpncmV5O1xcclxcbiAgICAgICAgXFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJXtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MTgpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcbiNTZWFyY2hDb250YWluZXIgYnV0dG9uOmFjdGl2ZXtcXHJcXG4gICAgYW5pbWF0aW9uOiBmaWxsQ29sb3JMdG9SIDAuMXMgZWFzZS1pbiBmb3J3YXJkcztcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBmaWxsQ29sb3JMdG9Se1xcclxcbiAgICAwJXtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJhY2tncm91bmRDb2xvcik7XFxyXFxuICAgICAgICBcXHJcXG4gICAgfVxcclxcbiAgICAxMDAle1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmFja2dyb3VuZENvbG9yRGFyayk7XFxyXFxuICAgICAgICBcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG4jQ2l0eXtcXHJcXG4gICAgZ3JpZC1yb3c6IDIvMztcXHJcXG4gICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbiNUZW1we1xcclxcblxcclxcbiAgICBmbGV4OiAyO1xcclxcbiAgICBmb250LXNpemU6IDNlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxufVxcclxcbiNUZW1wQW5kSWNvbkNvbnRhaW5lcntcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBncmlkLXJvdzogMS8yO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xcclxcbiAgICBcXHJcXG59XFxyXFxuI0ljb257XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIHdpZHRoOjEwMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcbiNFeHRyYUluZm97XFxyXFxuICAgIGdyaWQtcm93OiAzLzQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4jVGltZXtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcbiNIdW1pZGl0eXtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFxyXFxufSNIdW1pZGl0eTo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICAgIHRvcDogMDsgXFxyXFxuICAgIGxlZnQ6IDA7IFxcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQgMHM7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrOyBcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI0h1bWlkaXR5OmhvdmVyOjphZnRlciB7XFxyXFxuICAgXFxyXFxuICAgIFxcclxcbiAgICBjb250ZW50OiBcXFwiSHVtaWRpdHlcXFwiO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuI0NoYW5jZU9mUmFpbntcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG4jQ2hhbmNlT2ZSYWluOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgICAgdG9wOiAwOyBcXHJcXG4gICAgbGVmdDogMDsgXFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dCAwcztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7IFxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jQ2hhbmNlT2ZSYWluOmhvdmVyOjphZnRlciB7XFxyXFxuICAgXFxyXFxuICAgXFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJSYWluIENoYW5jZVxcXCI7IFxcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICBmb250LXNpemU6c21hbGw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcblxcclxcbiNSaWdodENvbnRhaW5lcntcXHJcXG4gXFxyXFxuICAgIGZsZXg6IDI7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgIFxcclxcbn1cXHJcXG4jSG91cmx5Q29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBvdmVyZmxvdy14OiBhdXRvOyBcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcclxcbiAgICB3aWR0aDogMTAwJTsgXFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXFxyXFxufVxcclxcbiNIb3VybHlDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFye1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLkRlc2NyaXB0aW9uQ29udGFpbmVye1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSk7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFxyXFxufVxcclxcbi5EZXNjcmlwdGlvbntcXHJcXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgIFxcclxcblxcclxcbn1cXHJcXG4uSG91cmx5SW5mb3tcXHJcXG5cXHJcXG4gICAgXFxyXFxuICAgIGZsZXg6IDAgMCBhdXRvOyBcXHJcXG4gICAgd2lkdGg6IGNhbGMoOTAlIC8gNik7XFxyXFxuICAgIGhlaWdodDogY2FsYyg5MCUgLyA2KTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0IDogMXB4IHJnYmEoMCwgMCwgMCwgMC4yNzYpIHNvbGlkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMTYpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxufVxcclxcbi5Ib3VybHlJbmZvOjotd2Via2l0LXNjcm9sbGJhcntcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLkhvdXJseVRpbWV7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXHJcXG59XFxyXFxuLkhvdXJseVRlbXB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBncmlkLXJvdzogMy80O1xcclxcblxcclxcbn1cXHJcXG4uSG91cmx5SWNvbntcXHJcXG4gICBcXHJcXG4gICAgZ3JpZC1yb3c6IDIvMztcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDJlbTtcXHJcXG4gICAgaGVpZ2h0OiAyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFxyXFxufVxcclxcbiNEYWlseUNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IFxcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiA1JSAyJSAyJSAyJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7IFxcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxcclxcbn1cXHJcXG4jZGFpbHlDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFye1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBcXHJcXG59XFxyXFxuI0RhaWx5VGl0bGV7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlKTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHJcXG59XFxyXFxuLkRhaWx5SW5mb3tcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNTU3KTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjU1Nyk7XFxyXFxuICAgIGZsZXg6IDAgMCBhdXRvOyBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjE2KTtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDMpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcclxcbn1cXHJcXG4uRGF0ZXtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcbi5EYWlseVRlbXB7XFxyXFxuICBcXHJcXG4gICAgXFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgIGZsZXg6IDE7XFxyXFxufVxcclxcbi5EYWlseUljb25Db250YWluZXJ7XFxyXFxuICAgIGZsZXg6IDI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICAgIFxcclxcbn1cXHJcXG4uRGFpbHlJY29ue1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICB3aWR0aDogMmVtO1xcclxcbiAgICBoZWlnaHQ6IDJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtOyAvKiBBZGp1c3QgYmFzZSBmb250IHNpemUgZm9yIG1vYmlsZSAqL1xcclxcbiAgICB9XFxyXFxuICAgICNBcHAge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogU3RhY2sgY29udGVudCB2ZXJ0aWNhbGx5ICovXFxyXFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIH1cXHJcXG4gICAgI0xlZnRDb250YWluZXIsICNSaWdodENvbnRhaW5lciB7XFxyXFxuICAgICAgICBmbGV4OiAxIDAgMTAwJTsgLyogVGFrZSBmdWxsIHdpZHRoIG9uIG1vYmlsZSAqL1xcclxcbiAgICB9XFxyXFxuICAgICNNYWluSW5mb0NvbnRhaW5lciwgI0hvdXJseUNvbnRhaW5lciwgI0RhaWx5Q29udGFpbmVyICNzZWFyY2hDb250YWluZXIge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IC8qIEFkanVzdCBncmlkIGZvciBzaW5nbGUgY29sdW1uIGxheW91dCAqL1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjAlOyAvKiBBZGp1c3Qgc3BhY2luZyAqL1xcclxcbiAgICAgXFxyXFxuICAgIH1cXHJcXG4gICAgI1NlYXJjaENvbnRhaW5lciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgfVxcclxcbiAgICAjU2VhcmNoQmFyIHtcXHJcXG4gICAgICAgIGZsZXg6IDEwOyBcXHJcXG5cXHJcXG4gICAgfVxcclxcbiAgICAjU2VhcmNoQnV0dG9uIHtcXHJcXG4gICAgICAgIGZsZXg6IDE7IFxcclxcbiAgICB9XFxyXFxuICAgICNNYWluSW5mb0NvbnRhaW5lcntcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgXFxyXFxuICAgIH1cXHJcXG4gICAgI1RlbXBBbmRJY29uQ29udGFpbmVyLCAjRXh0cmFJbmZvIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIFN0YWNrIGluZm8gdmVydGljYWxseSAqL1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudGVyLWFsaWduIGl0ZW1zIGZvciBhZXN0aGV0aWNzICovXFxyXFxuICAgIH1cXHJcXG4gICAgI1NlYXJjaENvbnRhaW5lciBpbnB1dCwgI1NlYXJjaENvbnRhaW5lciBidXR0b24ge1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTsgLyogQWRqdXN0IHdpZHRoIGZvciBiZXR0ZXIgZml0ICovXFxyXFxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTsgLyogQWRqdXN0IGZvbnQgc2l6ZSBmb3IgcmVhZGFiaWxpdHkgKi9cXHJcXG4gICAgfVxcclxcbiAgICAuSG91cmx5SW5mbywgLkRhaWx5SW5mbyB7XFxyXFxuICAgICAgICB3aWR0aDogMzAlOyAvKiBBZGp1c3Qgd2lkdGggdG8gZml0IG1vYmlsZSBzY3JlZW4gKi9cXHJcXG4gICAgfVxcclxcbiAgICAvKiBBZGp1c3QgZm9udCBzaXplcyBmb3IgdmFyaW91cyBjb21wb25lbnRzIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHkgb24gc21hbGwgc2NyZWVucyAqL1xcclxcbiAgICAuSG91cmx5VGltZSwgLkhvdXJseVRlbXAsIC5EYXRlLCAuRGFpbHlUZW1wIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICB9XFxyXFxuICAgICNJY29uLCAuSG91cmx5SWNvbiwgLkRhaWx5SWNvbiB7XFxyXFxuICAgICAgICB3aWR0aDogMS41ZW07IC8qIEFkanVzdCBpY29uIHNpemVzICovXFxyXFxuICAgICAgICBoZWlnaHQ6IDEuNWVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gQVBJKENpdHkpIHtcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0zZmIxMGUwODQ3NmM0MjRkOGVhMTE1MDU5MjMyNTExJnE9XCIuY29uY2F0KChDaXR5KSwgXCImZGF5cz03XCIpLCB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgbW9kZTogXCJjb3JzXCJcbiAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGRhdGE7IH0pO1xufVxuZXhwb3J0IGRlZmF1bHQgQVBJO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IEFQSSBmcm9tIFwiLi9BUElcIjtcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xudmFyIGNpdHkgPSBcIkxvbmRvblwiO1xubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG52YXIgY2FjaGVjaXRpZXMgPSBbXTtcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdGllc1wiKSkge1xuICAgIGNhY2hlY2l0aWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdGllc1wiKSk7XG4gICAgY2l0eSA9IGNhY2hlY2l0aWVzW2NhY2hlY2l0aWVzLmxlbmd0aCAtIDFdLmxvY2F0aW9uLm5hbWU7XG59XG5mdW5jdGlvbiBmZXRjaENpdHkoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgQ2l0eTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgQVBJKGNpdHkpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIENpdHkgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIG1haW5JbmZvKENpdHkpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVDYWNoZShDaXR5LmxvY2F0aW9uLm5hbWUsIENpdHkpO1xuICAgICAgICAgICAgICAgICAgICBEYXlzKENpdHkpO1xuICAgICAgICAgICAgICAgICAgICBCYWNrZ3JvdW5kQW5kRm9udChDaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmZldGNoQ2l0eSgpO1xuZnVuY3Rpb24gbWFpbkluZm8oQ2l0eSkge1xuICAgIGNvbnNvbGUubG9nKENpdHkpO1xuICAgIHZhciBDaXR5TmFtZVMgPSBDaXR5LmxvY2F0aW9uLm5hbWU7XG4gICAgdmFyIGN1cnJlbnRIb3VyID0gcGFyc2VJbnQoQ2l0eS5jdXJyZW50Lmxhc3RfdXBkYXRlZC5zcGxpdChcIiBcIilbMV0uc3BsaXQoXCI6XCIpWzBdKTtcbiAgICB2YXIgQ2l0eU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkNpdHlcIik7XG4gICAgQ2l0eU5hbWUuaW5uZXJIVE1MID0gQ2l0eU5hbWVTO1xuICAgIHZhciBEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJUaW1lXCIpO1xuICAgIERhdGUuaW5uZXJIVE1MID0gQ2l0eS5sb2NhdGlvbi5sb2NhbHRpbWUuc3BsaXQoXCIgXCIpWzFdICsgXCJ8XCI7XG4gICAgdmFyIFRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlRlbXBcIik7XG4gICAgVGVtcC5pbm5lckhUTUwgPSBDaXR5LmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5hdmd0ZW1wX2MgKyBcIsKwQ1wiO1xuICAgIHZhciBzdmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkljb25cIik7XG4gICAgc3ZnLnNyYyA9IFwiaHR0cHM6XCIgKyBDaXR5LmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbKGN1cnJlbnRIb3VyICsgMSkgJSAyNF0uY29uZGl0aW9uLmljb247XG4gICAgdmFyIEh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJIdW1pZGl0eVwiKTtcbiAgICBIdW1pZGl0eS5pbm5lckhUTUwgPSBcIkg6IFwiICsgQ2l0eS5jdXJyZW50Lmh1bWlkaXR5ICsgXCIlXCI7XG4gICAgdmFyIENoYW5jZU9mUmFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQ2hhbmNlT2ZSYWluXCIpO1xuICAgIENoYW5jZU9mUmFpbi5pbm5lckhUTUwgPVxuICAgICAgICBcIlI6XCIgKyBDaXR5LmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbiArIFwiJVwiO1xuICAgIGhvdXJzKENpdHkpO1xufVxuZnVuY3Rpb24gdXBkYXRlQ2FjaGUoQ2l0eU5hbWUsIENpdHkpIHtcbiAgICBpZiAoY2FjaGVjaXRpZXMubGVuZ3RoID49IDUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJtb3JlIHRoYW4gNVwiKTtcbiAgICAgICAgY2FjaGVjaXRpZXMuc2hpZnQoKTtcbiAgICB9XG4gICAgaWYgKCFjYWNoZWNpdGllcy5zb21lKGZ1bmN0aW9uIChjYWNoZWRDaXR5KSB7IHJldHVybiBjYWNoZWRDaXR5LmxvY2F0aW9uLm5hbWUgPT09IENpdHlOYW1lOyB9KSkge1xuICAgICAgICBjYWNoZWNpdGllcy5wdXNoKENpdHkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdGllc1wiLCBKU09OLnN0cmluZ2lmeShjYWNoZWNpdGllcykpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhjYWNoZWNpdGllcyk7XG59XG5mdW5jdGlvbiBob3VycyhDaXR5KSB7XG4gICAgdmFyIGhvdXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJIb3VybHlDb250YWluZXJcIik7XG4gICAgaG91cnMuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB2YXIgY3VycmVudFRpbWUgPSBDaXR5LmN1cnJlbnQubGFzdF91cGRhdGVkLnNwbGl0KFwiIFwiKVsxXS5zcGxpdChcIjpcIilbMF07XG4gICAgdmFyIGhvdXJUaW1lID0gQ2l0eS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyWzBdLnRpbWVcbiAgICAgICAgLnNwbGl0KFwiIFwiKVsxXVxuICAgICAgICAuc3BsaXQoXCI6XCIpWzBdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoY3VycmVudFRpbWUgIT09IGhvdXJUaW1lICYmIGkgPCAyNCkge1xuICAgICAgICBob3VyVGltZSA9IENpdHkuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91clsrK2ldLnRpbWVcbiAgICAgICAgICAgIC5zcGxpdChcIiBcIilbMV1cbiAgICAgICAgICAgIC5zcGxpdChcIjpcIilbMF07XG4gICAgfVxuICAgIHZhciBkYXlJbmRleCA9IDA7XG4gICAgdmFyIE5ld0RheUhvdXJzSW5kZXggPSAwO1xuICAgIHdoaWxlIChOZXdEYXlIb3Vyc0luZGV4IDwgMjMpIHtcbiAgICAgICAgaWYgKGkgPT09IDIzKSB7XG4gICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgIGRheUluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgTmV3RGF5SG91cnNJbmRleCsrO1xuICAgICAgICB2YXIgaG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhvdXIuY2xhc3NMaXN0LmFkZChcIkhvdXJseUluZm9cIik7XG4gICAgICAgIHZhciBob3VyVGltZV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBob3VyVGltZV8xLmNsYXNzTGlzdC5hZGQoXCJIb3VybHlUaW1lXCIpO1xuICAgICAgICB2YXIgaG91clRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIGhvdXJUZW1wLmNsYXNzTGlzdC5hZGQoXCJIb3VybHlUZW1wXCIpO1xuICAgICAgICB2YXIgaG91ckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBob3VySWNvbi5jbGFzc0xpc3QuYWRkKFwiSG91cmx5SWNvblwiKTtcbiAgICAgICAgdmFyIHRpbWUgPSBwYXJzZUludChDaXR5LmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheUluZGV4XS5ob3VyW2krK10udGltZS5zcGxpdChcIiBcIilbMV0uc3BsaXQoXCI6XCIpWzBdKTtcbiAgICAgICAgaWYgKHRpbWUgPT09IHBhcnNlSW50KENpdHkuY3VycmVudC5sYXN0X3VwZGF0ZWQuc3BsaXQoXCIgXCIpWzFdLnNwbGl0KFwiOlwiKVswXSkpIHtcbiAgICAgICAgICAgIGhvdXJUaW1lXzEuaW5uZXJIVE1MID0gXCJOb3dcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0d2VsdmVIb3VyVGltZSA9IHRpbWUgJSAxMiB8fCAxMjtcbiAgICAgICAgICAgIGlmICh0aW1lID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaG91clRpbWVfMS5pbm5lckhUTUwgPSBcIjEyOjAwIEFNXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aW1lID4gMTIpIHtcbiAgICAgICAgICAgICAgICBob3VyVGltZV8xLmlubmVySFRNTCA9IHR3ZWx2ZUhvdXJUaW1lICsgXCI6MDAgUE1cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGhvdXJUaW1lXzEuaW5uZXJIVE1MID0gdHdlbHZlSG91clRpbWUgKyBcIjowMCBBTVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGhvdXJUZW1wLmlubmVySFRNTCA9IENpdHkuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5SW5kZXhdLmhvdXJbaV0udGVtcF9jICsgXCLCsENcIjtcbiAgICAgICAgaG91ckljb24uc3JjID1cbiAgICAgICAgICAgIFwiaHR0cHM6XCIgKyBDaXR5LmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheUluZGV4XS5ob3VyW2ldLmNvbmRpdGlvbi5pY29uO1xuICAgICAgICBob3VyLmFwcGVuZENoaWxkKGhvdXJUaW1lXzEpO1xuICAgICAgICBob3VyLmFwcGVuZENoaWxkKGhvdXJUZW1wKTtcbiAgICAgICAgaG91ci5hcHBlbmRDaGlsZChob3VySWNvbik7XG4gICAgICAgIGhvdXJzLmFwcGVuZENoaWxkKGhvdXIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIERheXMoQ2l0eSkge1xuICAgIHZhciBkYXlzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJEYWlseUNvbnRhaW5lclwiKTtcbiAgICBkYXlzLmlubmVySFRNTCA9IFwiXCI7XG4gICAgdmFyIGkgPSAwO1xuICAgIENpdHkuZm9yZWNhc3QuZm9yZWNhc3RkYXkuZm9yRWFjaChmdW5jdGlvbiAoZGF5KSB7XG4gICAgICAgIHZhciBkYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIkRhaWx5SW5mb1wiKTtcbiAgICAgICAgdmFyIGRheU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkYXlOYW1lLmlubmVyVGV4dCA9IGdldERheU5hbWUoZGF5LmRhdGUpO1xuICAgICAgICB2YXIgZGF5VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRheVRlbXAuaW5uZXJUZXh0ID0gZGF5LmRheS5hdmd0ZW1wX2MgKyBcIsKwQ1wiO1xuICAgICAgICBkYXlUZW1wLmNsYXNzTGlzdC5hZGQoXCJEYWlseVRlbXBcIik7XG4gICAgICAgIHZhciBkYXlJY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGF5SWNvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiRGFpbHlJY29uQ29udGFpbmVyXCIpO1xuICAgICAgICB2YXIgZGF5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGRheUljb24uc3JjID0gXCJodHRwczpcIiArIGRheS5kYXkuY29uZGl0aW9uLmljb247XG4gICAgICAgIGRheUljb24uY2xhc3NMaXN0LmFkZChcIkRhaWx5SWNvblwiKTtcbiAgICAgICAgdmFyIG5pZ2h0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIG5pZ2h0SWNvbi5zcmMgPSBcImh0dHBzOlwiICsgZGF5LmRheS5jb25kaXRpb24uaWNvbjtcbiAgICAgICAgbmlnaHRJY29uLmNsYXNzTGlzdC5hZGQoXCJEYWlseUljb25cIik7XG4gICAgICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlOYW1lKTtcbiAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGRheVRlbXApO1xuICAgICAgICBkYXlJY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRheUljb24pO1xuICAgICAgICBkYXlJY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKG5pZ2h0SWNvbik7XG4gICAgICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlJY29uQ29udGFpbmVyKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJpdCB3b3Jrc1wiKTtcbiAgICAgICAgZGF5cy5hcHBlbmRDaGlsZChkYXlDb250YWluZXIpO1xuICAgICAgICBpKys7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXREYXlOYW1lKGRhdGVTdHJpbmcpIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuICAgIHZhciBkYXlzID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xuICAgIHJldHVybiBkYXlzW2RhdGUuZ2V0RGF5KCldO1xufVxudmFyIHNlYXJjaGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiU2VhcmNoQnV0dG9uXCIpO1xuc2VhcmNoYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZWFyY2hDaXR5KCk7XG59KTtcbnZhciBzZWFyY2hiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlNlYXJjaEJhclwiKTtcbnNlYXJjaGJhci5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNlYXJjaENpdHkoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgfVxufSk7XG5mdW5jdGlvbiBzZWFyY2hDaXR5KCkge1xuICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiU2VhcmNoQmFyXCIpO1xuICAgIHZhciBDaXR5ID0gaW5wdXQudmFsdWU7XG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBDaXR5XCIpO1xuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICBpZiAoQ2l0eSA9PT0gXCJcIikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNhY2hlY2l0aWVzLmZvckVhY2goZnVuY3Rpb24gKGNldGllcykge1xuICAgICAgICBpZiAoY2V0aWVzLmxvY2F0aW9uLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gQ2l0eS50b0xvY2FsZUxvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZvdW5kXCIpO1xuICAgICAgICAgICAgbWFpbkluZm8oY2V0aWVzKTtcbiAgICAgICAgICAgIEJhY2tncm91bmRBbmRGb250KGNldGllcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBBUEkoQ2l0eSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBtYWluSW5mbyhkYXRhKTtcbiAgICAgICAgdXBkYXRlQ2FjaGUoZGF0YS5sb2NhdGlvbi5uYW1lLCBkYXRhKTtcbiAgICAgICAgQmFja2dyb3VuZEFuZEZvbnQoZGF0YSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzZWFyY2hDaXR5cGFyaW9kaWNseSgpIHtcbiAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlNlYXJjaEJhclwiKTtcbiAgICB2YXIgQ2l0eSA9IGlucHV0LnZhbHVlO1xuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgQ2l0eVwiKTtcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgaWYgKENpdHkgPT09IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBBUEkoQ2l0eSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBtYWluSW5mbyhkYXRhKTtcbiAgICAgICAgQmFja2dyb3VuZEFuZEZvbnQoZGF0YSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBCYWNrZ3JvdW5kQW5kRm9udChDaXR5KSB7XG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIHZhciB3ZWF0aGVyID0gQ2l0eS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuY29uZGl0aW9uLnRleHQ7XG4gICAgdmFyIFN1bnNldCA9IENpdHkuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3Vuc2V0O1xuICAgIGNvbnNvbGUubG9nKFN1bnNldCk7XG4gICAgdmFyIGN1cnJlbnRIb3VyID0gcGFyc2VJbnQoQ2l0eS5jdXJyZW50Lmxhc3RfdXBkYXRlZC5zcGxpdChcIiBcIilbMV0uc3BsaXQoXCI6XCIpWzBdKTtcbiAgICB2YXIgd2VhdGhlckNvbmRpdGlvbiA9IENpdHkuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltjdXJyZW50SG91cl0uY29uZGl0aW9uLnRleHQ7XG4gICAgdmFyIHdlYXRoZXJJY29uID0gQ2l0eS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2N1cnJlbnRIb3VyXS5jb25kaXRpb24uaWNvbjtcbiAgICB2YXIgZm9udCA9IFwicmdiKDI1NSwyNTUsMjU1KVwiO1xuICAgIHZhciBtYWluQ29sb3IgPSBcInJnYigyMCwyMCwyNTUpXCI7XG4gICAgdmFyIHNlY29uZGFyeUNvbG9yID0gXCJyZ2IoMjAwLDIwMCwyMDApXCI7XG4gICAgaWYgKHdlYXRoZXJJY29uLmluY2x1ZGVzKFwiZGF5XCIpKSB7XG4gICAgICAgIGZvbnQgPSBcInJnYigxMCwxMCwxMClcIjtcbiAgICAgICAgbWFpbkNvbG9yID0gXCJyZ2IoMTAwLDEwMCwyNTUpXCI7XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyQ29uZGl0aW9uID09PSBcIkNsZWFyXCIpIHtcbiAgICAgICAgc2Vjb25kYXJ5Q29sb3IgPSBcInJnYigyNTUsMjU1LDI1NSlcIjtcbiAgICAgICAgaWYgKHdlYXRoZXJJY29uLmluY2x1ZGVzKFwibmlnaHRcIikpXG4gICAgICAgICAgICBzZWNvbmRhcnlDb2xvciA9IFwicmdiKDAsMCwwKVwiO1xuICAgIH1cbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmQgPSBcImxpbmVhci1ncmFkaWVudChcIi5jb25jYXQobWFpbkNvbG9yLCBcIiAwJSwgXCIpLmNvbmNhdChzZWNvbmRhcnlDb2xvciwgXCIgMTAwJSlcIik7XG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxcbiAgICA0NWRlZyxcXG4gICAgXFxuICAgIFwiLmNvbmNhdChtYWluQ29sb3IsIFwiIDJweCxcXG4gICAgXFxuICAgIFwiKS5jb25jYXQoc2Vjb25kYXJ5Q29sb3IsIFwiIDRweFxcbiAgIFxcbiAgKVwiKTtcbiAgICBib2R5LnN0eWxlLmNvbG9yID0gZm9udDtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==