import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <TourHeader />
      <div className="section-center featured-center">
        {tourList.map((data) => {
          return (
            <TourCard
              title={data.title}
              price={data.price}
              days={data.days}
              location={data.location}
              imgPath={data.imgPath}
              date={data.date}
              key={data.id}
            />
          );
        })}
      </div>
    </section>
  );
};

class Tour {
  static id = 0;
  constructor(title, imgPath, price, days, location, date) {
    this.title = title;
    this.imgPath = imgPath;
    this.price = price;
    this.days = days;
    this.location = location;
    this.date = date;
    this.id = ++Tour.id;
  }
}

const TourHeader = () => {
  return (
    <div className="section-title">
      <h2>
        featured <span>tours</span>
      </h2>
    </div>
  );
};

const TourCard = ({ title, imgPath, price, days, location, date }) => {
  return (
    <article className="tour-card">
      <TourCardImg imgPath={imgPath} date={date} />
      <TourCardInfo
        title={title}
        price={price}
        days={days}
        location={location}
      />
    </article>
  );
};

const TourCardImg = ({ imgPath, date }) => {
  return (
    <div className="tour-img-container">
      <img src={imgPath} alt="" />
      <p className="tour-date">{date}</p>
    </div>
  );
};

const TourCardInfo = ({ title, location, price, days }) => {
  return (
    <div className="tour-info">
      <div className="tour-title">
        <h4>{title}</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          delectus velit aliquam laborum id, similique, exercitationem,
          laudantium blanditiis odit magni debitis itaque culpa perferendis
          dicta. Architecto assumenda repudiandae labore sint!
        </p>
      </div>
      <TourCardFooter location={location} price={price} days={days} />
    </div>
  );
};

const TourCardFooter = ({ location, price, days }) => {
  return (
    <div className="tour-footer">
      <p>
        <span>
          <i className="fas fa-map"></i>
        </span>{" "}
        {location}
      </p>
      <p>{`${days} Days`}</p>
      <p>{`from $${price}`}</p>
    </div>
  );
};

const pathToImg = "../images/";

const tourList = [
  new Tour("Tibet Adventure", tour1, "2100", "6", "china", "august 26th 2020"),
  new Tour(
    "Best Of Java",
    tour2,
    "1400",
    "11",
    "indonesia",
    "october 1th, 2020"
  ),
  new Tour(
    "Explore Hong Kong",
    tour3,
    "5000",
    "8",
    "hong kong",
    "september 15th, 2020"
  ),
  new Tour(
    "Kenya Highlights",
    tour4,
    "3300",
    "20",
    "Kenya",
    "december 5th, 2019"
  ),
];

export default Tours;
