class BookDetail {
  static id = 0;

  constructor(author, title, img) {
    this.author = author;
    this.title = title;
    this.img = img;
    this.id = ++BookDetail.id;
  }
}

export const books = [
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
