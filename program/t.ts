const { performance } = require('node:perf_hooks');

class ObjectTracker {
	weakRef: WeakRef<{ id: string }>;
	finalizer: FinalizationRegistry<unknown>;
	constructor(obj: { id: string }) {
		this.weakRef = new WeakRef(obj);
		this.finalizer = new FinalizationRegistry((heldValue) => {
			console.log(`对象 ${heldValue} 已被回收`);
		});
		this.finalizer.register(obj, obj.id); // 注册回收回调
	}

	checkStatus() {
		return this.weakRef.deref() ? '存活' : '已回收';
	}
}

// 使用示例
const tempObj = { id: 'X-100' };
const tracker = new ObjectTracker(tempObj);
setTimeout(() => {
	console.log(tracker.checkStatus()); // 输出"已回收"
}, 1000);

// 内存增长趋势分析
function trackMemory() {
	const memory = performance.memory;
	console.log(`已用堆内存: ${(memory.usedJSHeapSize / 1048576).toFixed(2)}MB`);
	console.log(`堆内存限制: ${(memory.jsHeapSizeLimit / 1048576).toFixed(2)}MB`);
}
// 每5秒记录内存状态
setInterval(trackMemory, 5000);

function trackMemoryUsage() {
  const memory = process.memoryUsage();
  console.log(`已用堆内存: ${(memory.heapUsed / 1048576).toFixed(2)}MB`);
	console.log(`堆内存限制: ${(memory.heapTotal / 1048576).toFixed(2)}MB`);
}

// 每5秒记录内存状态
setInterval(trackMemoryUsage, 5000);
