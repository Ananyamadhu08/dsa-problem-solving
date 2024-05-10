// Given an array of integers, ‘arr[i]’ represents the number of pages in the ‘i-th’ book. There are a ‘m’ number of students, and the task is to allocate all the books to the students. Allocate books in such a way that:
// 1) Each student gets at least one book.
// 2) Each book should be allocated to only one student.
// 3) Book allocation should be in a contiguous manner.
// You have to allocate the book to ‘m’ students such that the maximum number of pages assigned to a student is minimum. If the allocation of books is not possible. return -1

function countStudents(books, pages) {
  const n = books.length;

  let countOfStudents = 1;

  let numOfPages = 0;

  for (let i = 0; i < n; i++) {
    if (numOfPages + books[i] <= pages) {
      numOfPages += books[i];
    } else {
      countOfStudents++;

      numOfPages = books[i];
    }
  }

  return countOfStudents;
}

function calculatePages(books, numOfStudents) {
  const n = books.length;

  if (numOfStudents > n) return -1;

  let maxPages = Math.max(...books);

  let sumOfPages = books.reduce((acc, curr) => acc + curr);

  for (let i = maxPages; i <= sumOfPages; i++) {
    const countOfStudents = countStudents(books, i);

    if (countOfStudents === numOfStudents) {
      return i;
    }
  }

  return maxPages;
}

const books = [25, 46, 28, 49, 24];

const numOfStudents = 4;

const result = calculatePages(books, numOfStudents);

console.log(result);

// Time complexity: O(N * (sumOfPages - maxPages))
// Space complexity: O(1)
