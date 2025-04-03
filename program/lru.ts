/**
 * 双向链表节点定义
 */
class ListNode<K, V> {
  constructor(
    public key: K | undefined, 
    public value: V | undefined,
    public prev: ListNode<K, V> | null = null,
    public next: ListNode<K, V> | null = null
  ) {}
}

/**
 * LRU 缓存实现类
 */
class LRUCache<K, V> {
  // 虚拟头尾节点（哨兵节点）
  private readonly head: ListNode<K, V>;
  private readonly tail: ListNode<K, V>;
  
  // 哈希表存储键到节点的映射
  private readonly cacheMap: Map<K, ListNode<K, V>>;
  
  // 当前缓存大小
  private size: number = 0;
  
  constructor(
    private readonly capacity: number // 缓存容量
  ) {
    // 初始化哨兵节点（减少空指针判断）
    this.head = new ListNode<K, V>(undefined, undefined);
    this.tail = new ListNode<K, V>(undefined, undefined);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    
    this.cacheMap = new Map();
  }

  /**
   * 获取缓存值
   * 时间复杂度 O(1)
   */
  get(key: K): V | undefined {
    const node = this.cacheMap.get(key);
    if (!node) return undefined;
    
    // 移动到链表头部表示最近使用
    this.moveToHead(node);
    return node.value;
  }

  /**
   * 添加缓存项
   * 时间复杂度 O(1)
   */
  put(key: K, value: V): void {
    const node = this.cacheMap.get(key);
    
    if (node) {
      // 已存在则更新值并移动
      node.value = value;
      this.moveToHead(node);
    } else {
      // 创建新节点并添加
      const newNode = new ListNode(key, value);
      this.cacheMap.set(key, newNode);
      this.addToHead(newNode);
      this.size++;
      
      // 容量检查
      if (this.size > this.capacity) {
        this.removeLRUItem();
      }
    }
  }

  /**
   * 将节点移动到链表头部
   */
  private moveToHead(node: ListNode<K, V>): void {
    this.removeNode(node);
    this.addToHead(node);
  }

  /**
   * 添加节点到链表头部
   */
  private addToHead(node: ListNode<K, V>): void {
    node.prev = this.head;
    node.next = this.head.next;
    
    this.head.next!.prev = node;
    this.head.next = node;
  }

  /**
   * 移除指定节点
   */
  private removeNode(node: ListNode<K, V>): void {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }

  /**
   * 移除最近最少使用的项
   */
  private removeLRUItem(): void {
    const tailNode = this.tail.prev!;
    this.removeNode(tailNode);
    this.cacheMap.delete(tailNode.key!);
    this.size--;
  }

  /**
   * 获取当前缓存内容（调试用）
   */
  debug(): Map<K, V> {
    const result = new Map<K, V>();
    let current = this.head.next;
    
    while (current && current !== this.tail) {
      result.set(current.key!, current.value!);
      current = current.next;
    }
    
    return result;
  }
}

// 使用示例
const cache = new LRUCache<string, number>(2);

cache.put('a', 1);    // 缓存是 {a=1}
cache.put('b', 2);    // 缓存是 {a=1, b=2}
console.log(cache.get('a')); // 返回 1 → 缓存变为 {b=2, a=1}
cache.put('c', 3);    // 容量已满，移除最久未使用的 b → 缓存 {a=1, c=3}
console.log(cache.get('b')); // 返回 undefined
cache.put('d', 4);    // 容量已满，移除最久未使用的 a → 缓存 {c=3, d=4}
console.log(cache.debug());