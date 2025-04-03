"use strict";
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
exports.__esModule = true;
var dir_1 = require("./dir");
function dfs(grid, visited, x, y) {
    for (var i = 0; i < 4; i++) {
        var nx = x + dir_1.dir[i][0];
        var ny = y + dir_1.dir[i][1];
        if (nx < 0 || ny < 0 || nx >= grid.length || ny >= grid[0].length)
            continue;
        if (!visited[nx][ny] && grid[nx][ny] === 1) {
            visited[nx][ny] = true;
            dfs(grid, visited, nx, ny);
        }
    }
}
function dfs2(grid, visited, x, y) {
    if (visited[x][y] || grid[x][y] === 0)
        return;
    visited[x][y] = true;
    for (var i = 0; i < 4; i++) {
        var nx = x + dir_1.dir[i][0];
        var ny = y + dir_1.dir[i][1];
        if (nx < 0 || ny < 0 || nx >= grid.length || ny >= grid[0].length)
            continue;
        dfs2(grid, visited, nx, ny);
    }
}
function main() {
    var e_1, _a, e_2, _b;
    return __awaiter(this, void 0, void 0, function () {
        var m, n, console_1, console_1_1, line, e_1_1, grid, visited, count, i, console_2, console_2_1, line, numbers, j, e_2_1, i_1, j;
        var _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    m = 0, n = 0;
                    console.log('请输入矩阵的行数和列数');
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 6, 7, 12]);
                    console_1 = __asyncValues(console);
                    _d.label = 2;
                case 2: return [4 /*yield*/, console_1.next()];
                case 3:
                    if (!(console_1_1 = _d.sent(), !console_1_1.done)) return [3 /*break*/, 5];
                    line = console_1_1.value;
                    _c = line.split(' ').map(Number), n = _c[0], m = _c[1];
                    return [3 /*break*/, 5];
                case 4: return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _d.trys.push([7, , 10, 11]);
                    if (!(console_1_1 && !console_1_1.done && (_a = console_1["return"]))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _a.call(console_1)];
                case 8:
                    _d.sent();
                    _d.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12:
                    grid = new Array(n).fill(0).map(function () { return new Array(m).fill(0); });
                    visited = new Array(n).fill(0).map(function () { return new Array(m).fill(false); });
                    count = 0;
                    i = 0;
                    console.log('请输入矩阵的值');
                    _d.label = 13;
                case 13:
                    _d.trys.push([13, 18, 19, 24]);
                    console_2 = __asyncValues(console);
                    _d.label = 14;
                case 14: return [4 /*yield*/, console_2.next()];
                case 15:
                    if (!(console_2_1 = _d.sent(), !console_2_1.done)) return [3 /*break*/, 17];
                    line = console_2_1.value;
                    numbers = line.split(' ').map(Number);
                    for (j = 0; j < m; j++) {
                        grid[i][j] = Number(numbers[j]);
                    }
                    i++;
                    if (i === n)
                        return [3 /*break*/, 17];
                    _d.label = 16;
                case 16: return [3 /*break*/, 14];
                case 17: return [3 /*break*/, 24];
                case 18:
                    e_2_1 = _d.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 24];
                case 19:
                    _d.trys.push([19, , 22, 23]);
                    if (!(console_2_1 && !console_2_1.done && (_b = console_2["return"]))) return [3 /*break*/, 21];
                    return [4 /*yield*/, _b.call(console_2)];
                case 20:
                    _d.sent();
                    _d.label = 21;
                case 21: return [3 /*break*/, 23];
                case 22:
                    if (e_2) throw e_2.error;
                    return [7 /*endfinally*/];
                case 23: return [7 /*endfinally*/];
                case 24:
                    // for  (let i = 0; i < n; i++) {
                    //   console.log(line);
                    //   // const line = await console.next();
                    //   for (let j = 0; j < m; j++) {
                    //     grid[i][j] = Number(line[j]);
                    //   }
                    // }
                    for (i_1 = 0; i_1 < n; i_1++) {
                        for (j = 0; j < m; j++) {
                            if (!visited[i_1][j] && grid[i_1][j] === 1) {
                                visited[i_1][j] = true;
                                dfs(grid, visited, i_1, j);
                                count++;
                            }
                        }
                    }
                    console.log(count);
                    return [2 /*return*/];
            }
        });
    });
}
await main();
