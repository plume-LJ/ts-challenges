"use strict";
exports.__esModule = true;
function findItinerary(tickets) {
    tickets.sort(function (a, b) {
        return a[1] < b[1] ? -1 : 1;
    });
    var ticketMap = {};
    for (var _i = 0, tickets_1 = tickets; _i < tickets_1.length; _i++) {
        var _a = tickets_1[_i], from = _a[0], to = _a[1];
        if (ticketMap[from] === undefined) {
            ticketMap[from] = new Map();
        }
        ticketMap[from].set(to, (ticketMap[from].get(to) || 0) + 1);
    }
    var resRoute = ["JFK"];
    backTracking(tickets.length, ticketMap, resRoute);
    return resRoute;
    function backTracking(ticketNum, ticketMap, route) {
        if (route.length === ticketNum + 1)
            return true;
        var targetMap = ticketMap[route[route.length - 1]];
        if (targetMap !== undefined) {
            // @ts-ignore
            for (var _i = 0, _a = targetMap.entries(); _i < _a.length; _i++) {
                var _b = _a[_i], to = _b[0], count = _b[1];
                if (count > 0) {
                    route.push(to);
                    targetMap.set(to, count - 1);
                    if (backTracking(ticketNum, ticketMap, route) === true)
                        return true;
                    targetMap.set(to, count);
                    route.pop();
                }
            }
        }
        return false;
    }
}
function findItinerary1(tickets) {
    var graph = {};
    // 构建邻接表
    for (var _i = 0, tickets_2 = tickets; _i < tickets_2.length; _i++) {
        var ticket = tickets_2[_i];
        var from = ticket[0], to = ticket[1];
        if (!graph[from]) {
            graph[from] = [];
        }
        graph[from].push(to);
    }
    // 对邻接表进行排序
    for (var airport in graph) {
        graph[airport].sort();
    }
    var itinerary = [];
    dfs("JFK");
    return [itinerary.reverse(), itinerary.length === tickets.length + 1];
    function dfs(airport) {
        var destinations = graph[airport];
        while (destinations && destinations.length > 0) {
            var nextAirport = destinations.shift();
            dfs(nextAirport);
        }
        itinerary.push(airport);
        console.log(itinerary);
    }
}
// 示例用法
var tickets = [
    ["MUC", "LHR"],
    ["JFK", "MUC"],
    ["SFR", "SJC"],
    ["LHR", "SFO"],
];
var result = findItinerary1(tickets);
console.log(result);
// console.log(findItinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]));
