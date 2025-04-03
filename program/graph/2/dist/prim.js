var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
function main() {
    var e_1, _a, e_2, _b;
    return __awaiter(this, void 0, void 0, function () {
        var v, e, console_1, console_1_1, line, e_1_1, grid, i, console_2, console_2_1, line, _c, x, y, k, e_2_1, minDist, isInTree, i_1, cur, minVal, j, j, result, i_2;
        var _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    v = 0, e = 0;
                    console.log('请输入顶点数和边数');
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 6, 7, 12]);
                    console_1 = __asyncValues(console);
                    _e.label = 2;
                case 2: return [4 /*yield*/, console_1.next()];
                case 3:
                    if (!(console_1_1 = _e.sent(), !console_1_1.done)) return [3 /*break*/, 5];
                    line = console_1_1.value;
                    _d = line.split(' ').map(Number), v = _d[0], e = _d[1];
                    return [3 /*break*/, 5];
                case 4: return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_1_1 = _e.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _e.trys.push([7, , 10, 11]);
                    if (!(console_1_1 && !console_1_1.done && (_a = console_1["return"]))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _a.call(console_1)];
                case 8:
                    _e.sent();
                    _e.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12:
                    grid = new Array(v + 1).fill(0).map(function () { return new Array(v + 1).fill(10001); });
                    console.log('请输入边的起点、终点和权重');
                    i = 0;
                    _e.label = 13;
                case 13:
                    _e.trys.push([13, 18, 19, 24]);
                    console_2 = __asyncValues(console);
                    _e.label = 14;
                case 14: return [4 /*yield*/, console_2.next()];
                case 15:
                    if (!(console_2_1 = _e.sent(), !console_2_1.done)) return [3 /*break*/, 17];
                    line = console_2_1.value;
                    _c = line.split(' ').map(Number), x = _c[0], y = _c[1], k = _c[2];
                    grid[x][y] = k;
                    grid[y][x] = k;
                    i++;
                    if (i === e)
                        return [3 /*break*/, 17];
                    _e.label = 16;
                case 16: return [3 /*break*/, 14];
                case 17: return [3 /*break*/, 24];
                case 18:
                    e_2_1 = _e.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 24];
                case 19:
                    _e.trys.push([19, , 22, 23]);
                    if (!(console_2_1 && !console_2_1.done && (_b = console_2["return"]))) return [3 /*break*/, 21];
                    return [4 /*yield*/, _b.call(console_2)];
                case 20:
                    _e.sent();
                    _e.label = 21;
                case 21: return [3 /*break*/, 23];
                case 22:
                    if (e_2) throw e_2.error;
                    return [7 /*endfinally*/];
                case 23: return [7 /*endfinally*/];
                case 24:
                    minDist = new Array(v + 1).fill(10001);
                    isInTree = new Array(v + 1).fill(false);
                    // 我们只需要循环 n-1次，建立 n - 1条边，就可以把n个节点的图连在一起
                    for (i_1 = 0; i_1 < v; i_1++) {
                        cur = -1;
                        minVal = Infinity;
                        for (j = 1; j <= v; j++) {
                            //  选取最小生成树节点的条件：
                            //  （1）不在最小生成树里
                            //  （2）距离最小生成树最近的节点
                            if (!isInTree[j] && minDist[j] < minVal) {
                                cur = j;
                                minVal = minDist[j];
                            }
                        }
                        // 2、prim三部曲，第二步：最近节点（cur）加入生成树
                        isInTree[cur] = true;
                        // 3、prim三部曲，第三步：更新非生成树节点到生成树的距离（即更新minDist数组）
                        // cur节点加入之后， 最小生成树加入了新的节点，那么所有节点到 最小生成树的距离（即minDist数组）需要更新一下
                        // 由于cur节点是新加入到最小生成树，那么只需要关心与 cur 相连的 非生成树节点 的距离 是否比 原来 非生成树节点到生成树节点的距离更小了呢
                        for (j = 1; j <= v; j++) {
                            if (!isInTree[j] && grid[cur][j] < minDist[j]) {
                                minDist[j] = grid[cur][j];
                            }
                        }
                    }
                    result = 0;
                    console.log(minDist);
                    for (i_2 = 2; i_2 <= v; i_2++) {
                        result += minDist[i_2];
                    }
                    console.log(result);
                    return [2 /*return*/, result];
            }
        });
    });
}
await main();
