"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function shaffle(array) {
  var ShaffledArray = [];
  var usedIndexes = [];
  var i = 0;

  while (i < array.length) {
    var randomNumber = Math.floor(Math.random() * array.length);

    if (!usedIndexes.includes(randomNumber)) {
      ShaffledArray.push(array[randomNumber]);
      usedIndexes.push(randomNumber);
      i++;
    }
  }

  return ShaffledArray;
}

var _default = shaffle;
exports["default"] = _default;
//# sourceMappingURL=shaffle.dev.js.map
