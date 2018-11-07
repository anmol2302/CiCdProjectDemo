webpackJsonp([2,8,9],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var FormatLongIntByScale = __webpack_require__(135).FormatLongIntByScale;
	
	var ReplaceCharacter = __webpack_require__(136).ReplaceCharacter;
	
	var ParseLinks = __webpack_require__(137).ParseLinks;
	
	var ReplaceStringForAol = __webpack_require__(138).ReplaceStringForAol;
	
	module.exports = angular.module("artifactory.filters", []).filter("replaceCharacter", ReplaceCharacter).filter("parseLinks", ParseLinks).filter("replaceStringForAol", ReplaceStringForAol).filter("formatLongIntByScale", FormatLongIntByScale);

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

	"use strict";
	
	exports.FormatLongIntByScale = FormatLongIntByScale;
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function FormatLongIntByScale() {
		return function (num) {
			var ONE_K = 1000,
			    ONE_MILLION = 1000000,
			    ONE_BILLION = 1000000000;
			if (Math.round(num / ONE_K) > 0 && Math.round(num / ONE_MILLION) <= 0) {
				return (num / ONE_K).toFixed(1) + " K";
			}
			if (Math.round(num / ONE_MILLION) > 0 && Math.round(num / ONE_BILLION) <= 0) {
				return (num / ONE_MILLION).toFixed(2) + " M";
			}
			if (Math.round(num / ONE_BILLION) > 0) {
				return (num / ONE_BILLION).toFixed(2) + " B";
			}
			return num;
		};
	}

/***/ }),

/***/ 136:
/***/ (function(module, exports) {

	"use strict";
	
	exports.ReplaceCharacter = ReplaceCharacter;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function ReplaceCharacter() {
	
	    return function (input, search, replace) {
	        if (input) {
	            var regex = new RegExp(search, "g");
	            return input.replace(regex, replace);
	        }
	
	        return input;
	    };
	}

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

	"use strict";
	
	exports.ParseLinks = ParseLinks;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function ParseLinks() {
	
	    return function (str) {
	        return str.replace(/\[(.*?)\]/g, function (match) {
	            var linkData = match.substring(1, match.length - 1).split(",");
	            if (linkData.length == 2) return "<a href=\"" + linkData[0].trim() + "\" target=\"_blank\">" + linkData[1].trim() + "</a>";else return match;
	        });
	    };
	}

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

	"use strict";
	
	exports.ReplaceStringForAol = ReplaceStringForAol;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// TODO: pass in key to filter instead of the text
	var dictionary = {
	    "Import & Export": "Import",
	    "Repositories Import & Export": "Import Repositories"
	};
	
	function ReplaceStringForAol(ArtifactoryFeatures) {
	
	    return function (str) {
	        if (ArtifactoryFeatures.isAol()) {
	            return dictionary[str] || str;
	        } else {
	            return str;
	        }
	    };
	}

/***/ })

});
//# sourceMappingURL=artifactory_filters.js.1172.map