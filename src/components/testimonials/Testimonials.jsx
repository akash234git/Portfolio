import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Abhi Chaurasia",
      title: "Senior Developer",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4k26qGzvi1xcBVBWbGwXULQVOQjsocruaQ&usqp=CAU",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alok Kr. Mishra",
      title: "Co-Founder Stay1.in",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2KXPn-mqBJmPYU8EFHUPzd1fleI3_UfBNZQ&usqp=CAU",
      icon: "assets/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Apurva Singh",
      title: "CEO of getqube",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzbXhRQyrUHdQ0_90K5AOchAx_ThUNbAvI5Q&usqp=CAU",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
