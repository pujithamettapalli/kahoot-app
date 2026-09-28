import celebrationsImage from "../assets/occasion-celebrations.png";
import birthdayImage from "../assets/occasion-birthday.png";
import sportsImage from "../assets/occasion-sports.png";
import appreciationImage from "../assets/occasion-appreciation.png";
import communityImage from "../assets/occasion-community.png";

function Occasions() {
  const occasions = [
    {
      title: "All celebrations",
      image: celebrationsImage,
    },
    {
      title: "Birthdays",
      image: birthdayImage,
    },
    {
      title: "Sports nights",
      image: sportsImage,
    },
    {
      title: "Showing appreciation",
      image: appreciationImage,
    },
    {
      title: "Community events",
      image: communityImage,
    },
  ];

  return (
    <section className="occasions-section">
      <h2>Bring fun to more special occasions with Kahoot!+</h2>

      <div className="occasion-wrapper">
        <button className="occasion-arrow left">‹</button>

        <div className="occasion-cards">
          {occasions.map((item, index) => (
            <div className="occasion-card" key={index}>
              <h3>{item.title}</h3>

              <div className="occasion-image">
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          ))}
        </div>

        <button className="occasion-arrow right">›</button>
      </div>
    </section>
  );
}

export default Occasions;