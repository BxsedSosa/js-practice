const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div>
      <div className="section-center services-center">
        {serviceList.map(({ icon, title }, idx) => {
          return <Service icon={icon} title={title} key={idx} />;
        })}
      </div>
    </section>
  );
};

const serviceList = [
  { icon: "wallet", title: "saving money" },
  { icon: "tree", title: "endless hiking" },
  { icon: "socks", title: "amazing comfort" },
];

const Service = ({ icon, title }) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={`fas fa-${icon} fa-fw`}></i>
      </span>
      <ServiceInfo title={title} />
    </article>
  );
};

const ServiceInfo = ({ title }) => {
  return (
    <div className="service-info">
      <h4 className="service-title">{title}</h4>
      <p className="service-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        officia.
      </p>
    </div>
  );
};

export default Services;
