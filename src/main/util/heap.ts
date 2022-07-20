/* eslint-disable no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type Compare<T> = (a: T, b: T) => number

class Heap<T> {
  private data: T[] = []

  constructor(private compare: Compare<T>) {}

  private leftOf(nodeIndex: number): number {
    return -1
  }

  private rightOf(nodeIndex: number): number {
    return -1
  }

  private parentOf(nodeIndex: number): number {
    return -1
  }

  /**
   * Add the given item to the heap in O(logn)
   * @param item
   */
  insert(item: T): void {
    return undefined
  }

  /**
   * Sift the node at the given index up to its proper index in the heap
   * @param index
   */
  private siftUpFrom(index: number): void {
    return undefined
  }

  /**
   * extract the min/max value
   */
  extract(): T | undefined {
    return undefined
  }

  /**
   * Sift the node at the given index down to its proper index in the heap
   * @param index
   */
  private siftDownFrom(index: number): void {
    return undefined
  }

  /**
   * return the number of items in the heap
   */
  size(): number {
    return -1
  }

  /**
   * return true if the heap is empty, false otherwise
   */
  isEmpty(): boolean {
    return false
  }
}

export default Heap
