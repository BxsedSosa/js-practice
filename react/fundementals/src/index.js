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

const EventExamples = () => {
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input type="text" name="example" style={{ margin: "1rem 0" }} />
        <button type="submit">Submit</button>
        <button
          onClick={() => {
            console.log("clicked me");
          }}
          type="button"
        >
          Button
        </button>
      </form>
    </section>
  );
};

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
