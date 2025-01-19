const books = [
  { title: "Amar Mon", author: "Jashim Uddin", year: 1960 },
  { title: "Chaya Poth", author: "Kazi Nazrul Islam", year: 1949 },
  { title: "Rupoboti", author: "Sarat Chandra Chattopadhyay", year: 1925 },
  { title: "Shonar Horin", author: "Rabindranath Tagore", year: 1813 },
];

function getBookTitles(bookArray) {
  return bookArray.map((book) => book.title);
}

const bookTitles = getBookTitles(books);
console.log(bookTitles);
