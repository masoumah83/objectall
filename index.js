const book = {
  title: "JavaScript: The Definitive Guide",
  uthor: "David Flanagan",
  publishedYear: 2020,
  genre: "Programming",
  pageCount: "1096",
  ISBN: "978-1491952023",
};
book.publishedYear = "2021";

console.log(book);
book.uthor = ["David Flanagan", "Another Author"];
console.log(book.uthor);
