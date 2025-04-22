import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
class BookDetail {
  static id = 0;

  constructor(author, title, img) {
    this.author = author;
    this.title = title;
    this.img = img;
    this.id = ++BookDetail.id;
  }
}

const books = [
  new BookDetail(
    "Mel Robbins",
    "The Let Them Theory",
    "https://images-na.ssl-images-amazon.com/images/I/91ZVf3kNrcL._AC_UL600_SR600,400_.jpg"
  ),
  new BookDetail(
    "Emily Henry",
    "Great Big Beautiful Life",
    "https://images-na.ssl-images-amazon.com/images/I/71fD+iFwL1L._AC_UL900_SR900,600_.jpg"
  ),
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}
      >
        {author}
      </h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
