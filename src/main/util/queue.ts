class Queue<T> {
  private dataMap: { [index: number]: T } = {}

  private nextEnqueueIndex = 0

  private lastDequeueIndex = 0

  /**
   * enqueue item with time complexity O(1)
   * @param item
   */
  enqueue(item: T): void {
    this.dataMap[this.nextEnqueueIndex] = item
    this.nextEnqueueIndex += 1
  }

  /**
   * dequeue item with time complexity O(1)
   */
  dequeue(): T | undefined {
    if (this.lastDequeueIndex === this.nextEnqueueIndex) return undefined

    const output = this.dataMap[this.lastDequeueIndex]
    delete this.dataMap[this.lastDequeueIndex]
    this.lastDequeueIndex += 1

    return output
  }

  /**
   *
   * @returns the number of items in the queue
   */
  size(): number {
    return this.nextEnqueueIndex - this.lastDequeueIndex
  }
}

export default Queue
