import { Component } from "react";
import "./style.css";
export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: false,
    };
  }

  render() {
    let { activeMenu } = this.state;
    return (
      <>
        <nav>
          <h2>Menu</h2>
          <ul className={activeMenu ? "active-menu" : ""}>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Experience</a>
            </li>
          </ul>
          <button
            onClick={() => {
              this.setState({ activeMenu: !activeMenu });
            }}
          >
            <i className="bi bi-list"></i>
          </button>
        </nav>
      </>
    );
  }
}
