import { Component } from "react";
import hablam1 from "../../assets/images/hablam1.jpg";
import angular from "../../assets/images/logos/angular-logo.png";
import react from "../../assets/images/logos/react-logo.png";
import laravel from "../../assets/images/logos/laravel-logo.png";
import "./style.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <section id="about">
          <h2>About me</h2>
          <div className="row">
            <div className="profile">
              <img src={hablam1} alt="Ablam Hippolyte EZIAN" width="100%" />
              <div className="technos">
                <img src={react} alt="React" />
                <img src={angular} alt="Angular" />
                <img src={laravel} alt="Laravel" />
              </div>
            </div>
            <div className="description">
              <div className="desc-header">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
              </div>
              <div className="desc-body">
                <h3>Hi :)</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  iure eaque at. Consectetur deleniti illo vel dolor corrupti
                  nihil labore rerum beatae dolores, vero quaerat et quidem
                  eligendi soluta. Itaque sequi molestias repellat recusandae
                  reprehenderit quas illo magnam voluptatem! Repudiandae atque
                  ea quasi nesciunt magni quibusdam vel cupiditate. Quos
                  cupiditate consequuntur suscipit excepturi nulla ipsum iusto
                  sunt alias nemo impedit recusandae quas ipsa commodi optio,
                  nesciunt reprehenderit aliquid iure explicabo dolorum non
                  dignissimos dicta quisquam voluptas? Dolor veritatis corporis
                  a aperiam eius quasi modi nesciunt nisi ipsam quia. Delectus
                  quibusdam optio dolorem ea debitis voluptatem quae laborum
                  fugit minima molestias?
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About;
