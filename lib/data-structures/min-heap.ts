export class MinHeap {
  // 以 0-based complete binary tree 的方式儲存
  private data: number[] = [];

  private swap(i: number, j: number): void {
    const temp = this.data[i]!;
    this.data[i] = this.data[j]!;
    this.data[j] = temp;
  }

  size(): number {
    return this.data.length;
  }

  peek(): number | undefined {
    return this.data[0];
  }

  push(value: number): void {
    this.data.push(value);

    let current = this.data.length - 1;

    while (current > 0) {
      const parent = Math.floor((current - 1) / 2);

      if (this.data[parent]! <= this.data[current]!) {
        break;
      }

      this.swap(current, parent);
      current = parent;
    }
  }

  pop(): number | undefined {
    if (this.data.length === 0) {
      return undefined;
    }

    const min = this.data[0]!;
    const last = this.data.pop()!;

    if (this.data.length === 0) {
      return min;
    }

    this.data[0] = last;

    let current = 0;

    while (true) {
      const leftChild = current * 2 + 1;
      const rightChild = current * 2 + 2;

      if (leftChild >= this.data.length) {
        break;
      }

      let smallerChild = leftChild;

      if (
        rightChild < this.data.length &&
        this.data[rightChild]! < this.data[leftChild]!
      ) {
        smallerChild = rightChild;
      }

      if (this.data[current]! <= this.data[smallerChild]!) {
        break;
      }

      this.swap(current, smallerChild);
      current = smallerChild;
    }

    return min;
  }
}
