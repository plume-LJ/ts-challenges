"use strict";

var totalFruit = function totalFruit(fruits) {
  var n = fruits.length;
  var cnt = new Map();
  var left = 0,
      ans = 0;

  for (var right = 0; right < n; ++right) {
    cnt.set(fruits[right], (cnt.get(fruits[right]) || 0) + 1);

    while (cnt.size > 2) {
      cnt.set(fruits[left], cnt.get(fruits[left]) - 1);

      if (cnt.get(fruits[left]) == 0) {
        cnt["delete"](fruits[left]);
      }

      ++left;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
};

var fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];
console.log(totalFruit(fruits));