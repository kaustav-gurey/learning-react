const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Destructuring
// const book = getBook(3);

// const title = book.title;
// const author = book.author;

//this line does a lot more than the two lines commented above
// const {title, author, pages, publicationDate, genres, hasMovieAdaptation} = 
// book;

// console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

//this line exactly does what the two line above commented do
/*the"...otherGenres" create another array of the remaining genres, 
this can only be placed in the end of the destructuring operation*/

// const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
// console.log(primaryGenre, secondaryGenre, otherGenres);

// /*this is pread operator this will create a new array "newGenres" 
// containing all the values of genres and adding "epic fantasy" in the front*/
// const newGenres = ["epic fantasy", ...genres];
// console.log(genres);
// console.log(newGenres);

// const updatedBook = {
//   ...book, 
//   //adding a new proerty
//   moviePublicationDtae: "2001-12-19",
//   //overriding an exixsting property
//   pages: 1210
// };
// updatedBook;

// const getYear = (str)=> str.split("-")[0];

// //literals
// const summary = `${title} is a book ${pages} pages long book, was written by ${author} and publised in ${getYear(publicationDate)}. This book has ${hasMovieAdaptation?"":"not "}been adapted to a movie.`;
// summary;

// //trying out ternary operator
// const pagesRange = pages>1000 ? "over a thousand" : "less than 1000";
// pagesRange;

// console.log(`The book has ${pagesRange} pages`);

// // function getYear(str) {
// //   return str.split("-")[0];
// // }

// console.log(getYear(publicationDate));

// console.log(true && "Some string");
// console.log(false && "Some string");
// console.log(hasMovieAdaptation && "This book has s movie");

// // falsy" 0, '', null, undefined
// console.log('jonas' && "Some string");
// console.log(0 && "Some string");

// console.log(true || "Some string");
// console.log(false || "Some string");

// console.log(book.translations.spanish)

// const spanishTranslation = book.translations.spanish || "NOT TRANSLATED"
// spanishTranslation;

// // console.log(book.reviews.librarything.reviewsCount);
// // const countWrong = book.reviews.librarything.reviewsCount || "no data"
// // countWrong;

// // const count = book.reviews.librarything.reviewsCount ?? "no data"
// // count;

/*
function getTotalReviewCount(book){
  const goodreads = book.reviews.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything ; //this is the same as sum of two numbers
}

// console.log(getTotalReviewCount(book));


//array map method
//this will create a new array with old element*2 as teh values of thr elements of the new array
const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(el => el*2);
console.log(x);

const books = getBooks();
const titles = books.map(book => book.title);
console.log(titles);

const essentialData = books.map(book => ({
  title : book.title,
  author : book.author,
  reviewsCount : getTotalReviewCount(book),
}));

essentialData;

//array filter method
const y = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(el => el%2==0);
y;

const longBooks = books
  .filter(book => book.pages>500)
  .map(book => book.title);
longBooks;

//reduce method

const pagesAllBooks = books.reduce((acc, book) => acc+book.pages, 0 );
pagesAllBooks;

//sort method
const arr = [9, 3, 23, 78, 0, 6, 8];
//ascending
const sorted = arr.slice().sort((a,b) => b-a);
sorted;
arr;
//descending
const sorted2 = arr.slice().sort((a,b) => b-a);
sorted2;
arr;

//sorting teh books by teh number of pages
const sortByPages = books.slice().sort((a,b) => a.pages - b.pages);
sortByPages;
books;
 //add a new book object to the array 
 const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J.K. Rowling", 
 };

 const booksAfterAdd = [...books, newBook];
 booksAfterAdd;
 
 //delete a book object 
 const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
 booksAfterDelete;

 //update a book object 
 const booksAfterUpdate = booksAfterDelete.map(book => book.id==1 ? {...book, pages: 1} : book);
 booksAfterUpdate;
*/


//asynchronous code
// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(res => res.json())
//   .then(data => console.log(data));

// console.log('kev');

async function getTodos(){
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  console.log(data);
}

getTodos();
console.log('kev');