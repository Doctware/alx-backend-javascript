export default function appendToEachArrayValue(array, appendString) {
  for (let [idx, value] of array.entries()) {
    array[idx] = appendString + value; // elint-disable-line
  }

  return array;
}
