var performance = require('node:perf_hooks').performance;
var ObjectTracker = /** @class */ (function () {
    function ObjectTracker(obj) {
        this.weakRef = new WeakRef(obj);
        this.finalizer = new FinalizationRegistry(function (heldValue) {
            console.log("\u5BF9\u8C61 " + heldValue + " \u5DF2\u88AB\u56DE\u6536");
        });
        this.finalizer.register(obj, obj.id); // 注册回收回调
    }
    ObjectTracker.prototype.checkStatus = function () {
        return this.weakRef.deref() ? '存活' : '已回收';
    };
    return ObjectTracker;
}());
// 使用示例
var tempObj = { id: 'X-100' };
var tracker = new ObjectTracker(tempObj);
setTimeout(function () {
    console.log(tracker.checkStatus()); // 输出"已回收"
}, 1000);
// 内存增长趋势分析
function trackMemory() {
    var memory = performance.memory;
    console.log("\u5DF2\u7528\u5806\u5185\u5B58: " + (memory.usedJSHeapSize / 1048576).toFixed(2) + "MB");
    console.log("\u5806\u5185\u5B58\u9650\u5236: " + (memory.jsHeapSizeLimit / 1048576).toFixed(2) + "MB");
}
// 每5秒记录内存状态
setInterval(trackMemory, 5000);
function trackMemoryUsage() {
    var memory = process.memoryUsage();
    console.log("\u5DF2\u7528\u5806\u5185\u5B58: " + (memory.heapUsed / 1048576).toFixed(2) + "MB");
    console.log("\u5806\u5185\u5B58\u9650\u5236: " + (memory.heapTotal / 1048576).toFixed(2) + "MB");
}
// 每5秒记录内存状态
setInterval(trackMemoryUsage, 5000);
