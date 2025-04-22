import React from "react";
import ReactDOM from "react-dom/client";

const BookList = () => {
  return (
    <section>
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Img />
      <Title />
      <Author />
    </article>
  );
};

const Img = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/91ZVf3kNrcL._AC_UL600_SR600,400_.jpg"
    alt="The Let Them Theory"
  />
);
const Title = () => <h2>The Let Them Theory</h2>;
const Author = () => <h4>Mel Robbins</h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
