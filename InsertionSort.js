function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentElement = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = currentElement;
    }
}

// Example usage
let arrayToSort = [12, 11, 13, 5, 6];
insertionSort(arrayToSort);
console.log(arrayToSort); // Outputs: [5, 6, 11, 12, 13]
// In this code, the insertionSort function takes an array as input and sorts it in place using the insertion sort algorithm. The loop iterates through the array starting from the second element (i = 1), and for each element, it finds the correct position in the sorted part of the array by moving elements greater than the current element one position to the right. Once the correct position is found, the current element is inserted there.

// The algorithm continues this process until the entire array is sorted. The sorted portion of the array keeps growing with each iteration, and the unsorted portion keeps shrinking. The time complexity of the insertion sort algorithm is O(n^2) in the worst case, but it can be efficient for small arrays or partially sorted arrays.





