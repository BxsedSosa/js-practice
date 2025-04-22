import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
class BookDetail {
	constructor(author, title, img) {
		this.author = author;
		this.title = title;
		this.img = img;
	}
}

const firstBook = new BookDetail(
	"Mel Robbins",
	"The Let Them Theory",
	"https://images-na.ssl-images-amazon.com/images/I/91ZVf3kNrcL._AC_UL600_SR600,400_.jpg"
);
const secondBook = new BookDetail(
	"Emily Henry",
	"Great Big Beautiful Life",
	"https://images-na.ssl-images-amazon.com/images/I/71fD+iFwL1L._AC_UL900_SR900,600_.jpg"
);

const BookList = () => {
	return (
		<section className="booklist">
			<Book
				author={firstBook.author}
				title={firstBook.title}
				img={firstBook.img}
			/>
			<Book
				author={secondBook.author}
				title={secondBook.title}
				img={secondBook.img}
			/>
		</section>
	);
};

const Book = (props) => {
	return (
		<article className="book">
			<img src={props.img} alt={props.title} />
			<h2>{props.title}</h2>
			<h4
				style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}
			>
				{props.author}
			</h4>
		</article>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
