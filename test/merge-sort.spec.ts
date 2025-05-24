import { mergeSort } from "../src/merge-sort";

describe("mergeSort function", () => {
  it("merges correctly with simple arrays", () => {
    const c1 = [9, 7, 5];
    const c2 = [1, 4, 6];
    const c3 = [2, 3, 8];
    const result = mergeSort(c1, c2, c3);
    console.log("test", result);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("works with empty arrays", () => {
    expect(mergeSort([], [], [])).toEqual([]);
    expect(mergeSort([], [1], [2])).toEqual([1, 2]);
    expect(mergeSort([3, 2, 1], [], [])).toEqual([1, 2, 3]);
  });

  it("handles duplicates", () => {
    const result = mergeSort([5, 3, 1], [2, 3], [1, 4]);
    expect(result).toEqual([1, 1, 2, 3, 3, 4, 5]);
  });

  it("handles negative numbers", () => {
    const result = mergeSort([-2, -3, -4], [0, 1, 2], [3, 4]);
    expect(result).toEqual([-4, -3, -2, 0, 1, 2, 3, 4]);
  });
});
