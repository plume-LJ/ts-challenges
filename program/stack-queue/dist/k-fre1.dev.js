"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// js 没有堆 需要自己构造
var Heap =
/*#__PURE__*/
function () {
  function Heap(compareFn) {
    _classCallCheck(this, Heap);

    this.compareFn = compareFn;
    this.queue = [];
  } // 添加


  _createClass(Heap, [{
    key: "push",
    value: function push(item) {
      // 推入元素
      this.queue.push(item); // 上浮

      var index = this.size() - 1; // 记录推入元素下标

      var parent = Math.floor((index - 1) / 2); // 记录父节点下标

      while (parent >= 0 && this.compare(parent, index) > 0) {
        // 注意compare参数顺序
        var _ref = [this.queue[parent], this.queue[index]];
        this.queue[index] = _ref[0];
        this.queue[parent] = _ref[1];
        // 更新下标
        index = parent;
        parent = Math.floor((index - 1) / 2);
      }
    } // 获取堆顶元素并移除

  }, {
    key: "pop",
    value: function pop() {
      // 堆顶元素
      var out = this.queue[0]; // 移除堆顶元素 填入最后一个元素

      this.queue[0] = this.queue.pop(); // 下沉

      var index = 0; // 记录下沉元素下标

      var left = 1; // left 是左子节点下标 left + 1 则是右子节点下标

      var searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;

      while (searchChild !== undefined && this.compare(index, searchChild) > 0) {
        // 注意compare参数顺序
        var _ref2 = [this.queue[searchChild], this.queue[index]];
        this.queue[index] = _ref2[0];
        this.queue[searchChild] = _ref2[1];
        // 更新下标
        index = searchChild;
        left = 2 * index + 1;
        searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;
      }

      return out;
    }
  }, {
    key: "size",
    value: function size() {
      return this.queue.length;
    } // 使用传入的 compareFn 比较两个位置的元素

  }, {
    key: "compare",
    value: function compare(index1, index2) {
      // 处理下标越界问题
      if (this.queue[index1] === undefined) return 1;
      if (this.queue[index2] === undefined) return -1;
      return this.compareFn(this.queue[index1], this.queue[index2]);
    }
  }]);

  return Heap;
}();

var topKFrequent = function topKFrequent(nums, k) {
  var map = new Map();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = nums[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var num = _step.value;
      map.set(num, (map.get(num) || 0) + 1);
    } // 创建小顶堆

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var heap = new Heap(function (a, b) {
    return a[1] - b[1];
  }); // entry 是一个长度为2的数组，0位置存储key，1位置存储value

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = map.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var entry = _step2.value;
      heap.push(entry);

      if (heap.size() > k) {
        heap.pop();
      }
    } // return heap.queue.map(e => e[0]);

  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var res = [];

  for (var i = heap.size() - 1; i >= 0; i--) {
    res[i] = heap.pop()[0];
  }

  return res;
};