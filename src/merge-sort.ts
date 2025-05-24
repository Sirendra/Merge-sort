import {
  collection_1,
  collection_2,
  collection_3,
  randomCollection1,
  randomCollection2,
  randomCollection3,
} from "./test-data";

export const mergeSort = (
  firstCollection: number[],
  secondCollection: number[],
  thirdCollection: number[]
): number[] => {
  const firstCollectionAsc = reverse(firstCollection);
  const firstLen = firstCollectionAsc.length;
  const secondLen = secondCollection.length;
  const thirdLen = thirdCollection.length;

  let i = 0,
    j = 0,
    k = 0;
  const mergedSortedArray: number[] = [];

  while (i < firstLen || j < secondLen || k < thirdLen) {
    const val1 = i < firstLen ? firstCollectionAsc[i] : undefined;
    const val2 = j < secondLen ? secondCollection[j] : undefined;
    const val3 = k < thirdLen ? thirdCollection[k] : undefined;

    if (isSmallestNumber(val1, val2, val3)) {
      mergedSortedArray.push(val1!);
      i++;
    } else if (isSmallestNumber(val2, val1, val3)) {
      mergedSortedArray.push(val2!);
      j++;
    } else if (isSmallestNumber(val3, val1, val2)) {
      mergedSortedArray.push(val3!);
      k++;
    }
  }

  return mergedSortedArray;
};

function isSmallestNumber(
  valueToCompare: number | undefined,
  ValueToCompareWithOne: number | undefined,
  valueToCompareWithTwo: number | undefined
) {
  return (
    !isNullOrUndefined(valueToCompare) &&
    (isNullOrUndefined(ValueToCompareWithOne) ||
      valueToCompare! <= ValueToCompareWithOne!) &&
    (isNullOrUndefined(valueToCompareWithTwo) ||
      valueToCompare! <= valueToCompareWithTwo!)
  );
}

function checkIfLoopCanEnded(
  first: number,
  second: number,
  third: number,
  firstCollectionLength: number,
  secondCollectionLength: number,
  thirdCollectionLength: number
) {
  const collectionLeftToSort = [];
  if (first < firstCollectionLength) collectionLeftToSort.push("first");
  if (second < secondCollectionLength) collectionLeftToSort.push("second");
  if (third < thirdCollectionLength) collectionLeftToSort.push("third");
  return [...collectionLeftToSort];
}

function reverse(arr: number[]): number[] {
  const result: number[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

function isNullOrUndefined(value: any): boolean {
  return value === null || value === undefined;
}

// auto run
(() => {
  const collectionOne: number[] = collection_1?.length
    ? collection_1
    : randomCollection1;
  const collectionTwo: number[] = collection_2?.length
    ? collection_2
    : randomCollection2;
  const collectionThree: number[] = collection_3?.length
    ? collection_3
    : randomCollection3;

  console.log(mergeSort(collectionOne, collectionTwo, collectionThree));
})();
