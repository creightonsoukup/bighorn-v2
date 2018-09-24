module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




var Header = function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-3659368824"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-3659368824" + " " + 'container'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3659368824" + " " + 'row'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3659368824" + " " + "four columns"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3659368824"
  }, "Home"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3659368824" + " " + "eight columns"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3659368824"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/townhomes"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3659368824"
  }, "Townhomes"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3659368824"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/apartments"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3659368824"
  }, "Apartments"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3659368824"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/lodge"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3659368824"
  }, "Lodge"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3659368824"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/neighborhood"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3659368824"
  }, "Neighborhood"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3659368824"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blog"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3659368824"
  }, "Blog"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3659368824"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contact"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3659368824"
  }, "Contact")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3659368824",
    css: "a.jsx-3659368824{-webkit-text-decoration:none;text-decoration:none;}li.jsx-3659368824{list-style:none;}ul.jsx-3659368824{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyL2NvZGUvYmlnaG9ybi9iaWdob3JuLXYyL2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDaUIsQUFHOEIsQUFHTCxBQUdILGdCQUZmLGtDQUhBLHdCQU1xQixxRUFDVSwySEFDL0IiLCJmaWxlIjoiL1VzZXJzL3VzZXIvY29kZS9iaWdob3JuL2JpZ2hvcm4tdjIvY29tcG9uZW50cy9oZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiAoXG4gIDxoZWFkZXI+XG4gICAgPG5hdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3VyIGNvbHVtbnNcIj5cbiAgICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImVpZ2h0IGNvbHVtbnNcIj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayBocmVmPScvdG93bmhvbWVzJz5cbiAgICAgICAgICAgICAgPGE+VG93bmhvbWVzPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2FwYXJ0bWVudHMnPlxuICAgICAgICAgICAgICA8YT5BcGFydG1lbnRzPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2xvZGdlJz5cbiAgICAgICAgICAgICAgPGE+TG9kZ2U8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayBocmVmPScvbmVpZ2hib3Job29kJz5cbiAgICAgICAgICAgICAgPGE+TmVpZ2hib3Job29kPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2Jsb2cnPlxuICAgICAgICAgICAgICA8YT5CbG9nPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2NvbnRhY3QnPlxuICAgICAgICAgICAgICA8YT5Db250YWN0PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgICA8c3R5bGUganN4PiB7YFxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIH1cbiAgICAgIHVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2hlYWRlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iXX0= */\n/*@ sourceURL=/Users/user/code/bighorn/bighorn-v2/components/header.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _static_normalize_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/normalize.css */ "./static/normalize.css");
/* harmony import */ var _static_normalize_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_normalize_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_skeleton_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/skeleton.css */ "./static/skeleton.css");
/* harmony import */ var _static_skeleton_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_skeleton_css__WEBPACK_IMPORTED_MODULE_5__);







var Layout = function Layout(_ref) {
  var children = _ref.children,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "inital-scale=1.0, width=device-width"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], null), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/textbox.js":
/*!*******************************!*\
  !*** ./components/textbox.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Textbox = function Textbox(_ref) {
  var content = _ref.content;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "row"
  }, " ", content.title), content.subtitle && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "row"
  }, content.subtitle), _typeof(content.text) !== "object" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "row"
  }, " ", content.text), _typeof(content.text) == "object" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "row"
  }, content.text[0]), _typeof(content.text) == "object" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "row"
  }, content.text[1]));
};

/* harmony default export */ __webpack_exports__["default"] = (Textbox);

/***/ }),

/***/ "./pages/lodge.js":
/*!************************!*\
  !*** ./pages/lodge.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _static_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/content */ "./static/content.js");
/* harmony import */ var _static_content__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_content__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_textbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/textbox */ "./components/textbox.js");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: 'The Lodge'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "row"
  }, "Lodge")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_textbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    content: _static_content__WEBPACK_IMPORTED_MODULE_2___default.a.lodge.textBlock1
  }));
});

/***/ }),

/***/ "./static/content.js":
/*!***************************!*\
  !*** ./static/content.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

var content = {
  navbarCollapsed: ["virtual tour", "menu"],
  navbarOpen: ["townhomes", "apartments", "neighborhood"],
  homepage: {
    textBlock1: {
      title: "Bighorn Crossing - Redefining Mountain Living",
      text: ["Bighorn Crossing is refining the idea of mountain living.  There is no need to compromise on luxury indoors in order to feel at one with the outdoors.  We created Bighorn Crossing with this very principle in mind. Bighorn Crossing is a community of 64 townhomes, 72 apartments, a full service Wyndham Microtel and Cabin Creek Brewery. With access to Arapahoe and Roosevelt National Forest, the Georgetown Lake, local trails and byways, and eight world class ski areas - nature’s finest is at your fingertips", "Whether interested in a full time residence, a vacation home or a weekend getaway,  there are a variety of townhome layouts, apartment layouts and even a full service hotel to fit your every need.  Of course, you’re thinking where is this mountain oasis? Bighorn Crossing is steps away from the charming, historic town of Georgetown, Colorado and just 40 miles outside of Denver."]
    },
    textBlock2: {
      title: "Townhomes",
      subtitle: "Charming Mountain Living Meets Contemporary Functionality",
      text: "The Bighorn Crossing Townhome is the quintessential mountain home.  Units run at 2 or 3 bedrooms/ 2 and a half baths with a personal outdoor courtyard space and a 1 - 2 car garage. Each unit also includes mountain or lake views and an option to rent through our rental program"
    },
    textBlock3: {
      title: "Apartments",
      subtitle: "Bighorn Crossing Apartments - Redefining Both the Everyday and the Getaway",
      text: "Bighorn Crossing Apartments are ideal for both the every day or a getaway. Apartments list at either 1 or 2 bedrooms with 1 or 2 full baths, respectively. Each apartment offers mountain or lake views and a clean, modern interior.  Your morning coffee has never been more scenic - each unit includes an attached balcony and outdoor community space."
    },
    textBlock4: {
      title: "Lodge",
      subtitle: "Bighorn Crossing Microtel by Wyndham - Redefining R and R",
      text: " In need of some R and R?  The Bighorn Crossing community also offers a full service Wyndham Microtel.   The hotel offers 77 rooms designed with the same contemporary touch as the Townhomes and Apartments.  The Bighorn Crossing Wynhodham is a destination for those seeking an outdoor retreat with access to fishing, camping, hiking, skiing, etc."
    },
    textBlock5: {
      title: "Neighborhood",
      subtitle: "Georgetown: Quintessential Mountain Town",
      text: "Georgetown offers a variety of restaurants, shopping, museums, two scenic byways, access,  endless outdoor recreation, health/fitness events and dozens of community clubs. Whether enjoying a Creekside tonic on the heated deck of Coopers on the Creek restaurant, snapping a picture of at the Guanella Pass Scenic and Historic Byway, or hitting the slopes at Loveland Mountain, Georgetown will be your new go to wintry destination."
    },
    list1: {
      title: "Neighborhood Amenities",
      listItems: ['1', '2']
    }
  },
  townhomes: {
    textBlock1: {
      title: "Townhomes",
      text: ["The Bighorn Crossing Townhome is modern, spacious, flooded with natural light, pet friendly and ideal for small families. Cozy up to the gas fireplace included in unit while basking in sprawling mountain and lake views. In collaboration with 359 Design, we designed each interior to be clean, modern, and functional. Unwind and enjoy access to Microtel by Wyndham amenities.", "Not to mention, each townhomes is just 45 minutes from eight world class ski locations and  steps away from hiking, biking, and fishing, kayaking, and swimming in the Georgetown Lake.  Whether interested in a full time residency or as a second home, the Bighorn Crossing townhome is the quintessential mountain home."]
    },
    textBlock2: {
      title: "Three Bedroom",
      text: "The Bighorn Crossing three bedroom layout includes laundry in unit, gas fireplace, three bedrooms, two and a half bathrooms, and a detached two car garage.  The detached two car garage creates an outdoor courtyard space ideal for entertaining and enjoying the mountains and lake right outside your door."
    },
    textBlock3: {
      title: "Two Bedroom",
      text: "The Bighorn Crossing two bedroom layout includes laundry in unit, two bedrooms, two and a half bathrooms and an attached one car garage.  Although there is no courtyard, there is plenty of community space ideal for soaking in your sprawling surroundings."
    },
    textBlock4: {
      title: "Exterior Design",
      text: 'The Townhomes were constructed with the mountains in mind.  There are ten different exterior facades all compatible within the historic landscape of Georgetown yet contemporary in design. The exterior was designed in an effort to capture simplicity with muted earth tones and long building facades.  Each townhome was designed at varying height scale blending into the rolling mountain landscape.  Surrounding each townhome are native trees, grasses, and plants and immediate access to a walkable park.'
    },
    textBlock5: {
      title: "Interior Design",
      text: 'Each townhome is the epitome of contemporary luxury. Framed in plated glass bay windows and sprawling wood floors, each unit showcases sleek simplicity.  From white quartz countertops to the stainless steel refrigerator and appliances, the unit’s kitchen is modern and elegant. Every kitchen also includes a stainless steel undermount sink, dishwasher and a garbage disposal.   There are powder rooms in both units with sleek porcelain tile and stainless steel faucets.  Each unit is equipped with individually zoned heating systems in the bedrooms and living areas, LED lighting, ample storage space throughout the home and garage, and a washer and dryer included on the bedroom level. Every modern amenity is not only within reach, it is in your home.'
    }
  },
  apartments: {
    textBlock1: {
      title: "Apartments",
      text: "The Bighorn Crossing Apartment is a spacious, upscale, oasis ideal for couples or small families.  Each apartment is framed in glass plated windows, with the option of 1 or 2 bedrooms, 2 full baths, a kitchen, dining and living area, and an attached porch space.  Every unit offers scenic mountain/lake views and access to all Wyndham Hotel amenities. Ideal for year round residents or vacation stays, the Bighorn Apartment is your slice of paradise in the Colorado wilderness. Learn more about all the apartments have to offer"
    },
    textBlock2: {
      title: "Building Design",
      text: "The Apartments effortlessly integrate into the sprawling Georgetown scenery.  There are three major structures, each compatible with the history of the surrounding area yet offer a contemporary update. The exterior was designed in an effort to capture simplicity with muted earth tones and long building facades. Surrounding each townhome are native trees, grasses, and plants and immediate access to a walkable park."
    }
  },
  lodge: {
    textBlock1: {
      title: "Microtel by Wyndham"
    }
  },
  neighborhood: {
    intro: {
      title: 'Georgetown, Colorado',
      text: "Georgetown, Colorado, established in 1859, embodies mountain charm, tradition, and community.  Surrounded by 2,000 pristine acres of preserved land, it is one of the largest protected habitats in America.  This quaint mining town nestled in the Colorados hills offers a glimpse into early America with many renovated homes from the late 1800’s.  Additionally, Georgetown offers a variety of restaurants, shopping, museums, two scenic byways, health/fitness events and dozens of community clubs. Whether enjoying a Creekside tonic on the heated deck of Coopers on the Creek restaurant, snapping a picture of at the  Guanella Pass Scenic and Historic Byway, or hitting the slopes at Loveland Ski Area, Georgetown is the perfect escape."
    },
    ski: {
      title: "Eight Worldclass Ski Resorts. Unlimited Backcountry",
      text: '',
      listItems: ['Loveland Ski Resort - 13 Miles', 'Winter Park - 33 Miles', 'Arapahoe Basin - 20 Miles', 'Keystone - 31 Miles', 'Breckenridge - 38 Miles', 'Copper Mountain - 34 Miles', 'Vail 53 - Miles', 'Beaver Creek - 65 Miles']
    },
    recreation: {
      title: "Winter and Summer Recreation In Your Backyard",
      text: 'Georgetown offers a variety of activities to enjoy nature in all of its glory.  From skiing to lounging by the lake, there is something for everyone and of course all of it with a mountain view - we are in Colorado after all!',
      listItems: ["Lake Fishing - Keep an eye out for the Georgetown Bighorn Sheep Herd! You may also come across Trout, Browns, Rainbows and Brookes fish. ", "Lake Activities - Canoeing, kayaking, paddleboarding right outside your door", "White Water Rafting - Enjoy exhilarating rafting and look out for muskrat, beaver, deer, bighorn sheep, and even an occasional Eagle.", "Ice Fishing - Bundle up for ice fishing on the frozen lake available seasonally.", "Fly Fishing - Visit Clear Creek, a trout river that flows right through Georgetown. Look out for Rainbow and Brown Trout and abundant bug life!", "Hiking and Camping - Explore 1.5 million acres of public recreation in Arapahoe National Forest.  Embark on word class camping and hiking."]
    },
    view: {
      title: 'Explore the Backcountry by Car or Foot',
      listItems: ["Mt. Evans Scenic and Historic Byway:  14, 0000 foot summit,  the highest paved byway in America!", "Guanella Pass Scenic and Historic Byway: 11,600 summit, pictures don’t do it justice!"]
    },
    history: {
      title: 'Old Town Charm',
      listItems: ["Georgetown Loop Railroad: Visitors can partake in a round-trip narrow-gauge steam train ride from Georgetown to nearby Silver Plume and back, with an optional stop for a tour of the Lebanon Silver Mine.", "The Hotel de Paris: Visitors can enjoy this European inspired exhibition and soak in the spirit of 1875."]
    }
  }
};
module.exports = content;

/***/ }),

/***/ "./static/normalize.css":
/*!******************************!*\
  !*** ./static/normalize.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/skeleton.css":
/*!*****************************!*\
  !*** ./static/skeleton.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/lodge.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/lodge.js */"./pages/lodge.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=lodge.js.map