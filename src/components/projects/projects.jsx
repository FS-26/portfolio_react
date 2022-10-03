import { Component } from "react";
import "./style.css";
import calculatrice from "../../assets/images/projects/calculatrice.png";
import chatbot from "../../assets/images/projects/chatbot.png";
import todolist from "../../assets/images/projects/todolist.png";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <section id="projects">
          <h2>Projects</h2>
          <div className="row">
            <div className="item">
              <div>
                <img src={calculatrice} alt="calculatrice" />
                <span className="item-name">Calcultrice</span>
              </div>
              <div className="item-links">
                <div>
                  <a
                    href="https://fs-26.github.io/calculatrice/"
                    target="_blank"
                  >
                    gh Page
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/FS-26/calculatrice"
                    target="_blank"
                  >
                    Code Source
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div>
                <img src={chatbot} alt="chatbot" />
                <span className="item-name">ChatBoot</span>
              </div>
              <div className="item-links">
                <div>
                  <a href="https://fs-26.github.io/ChatBot/" target="_blank">
                    gh Page
                  </a>
                </div>
                <div>
                  <a href="https://github.com/FS-26/ChatBot" target="_blank">
                    Code Source
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div>
                <img src={todolist} alt="todolist" />
                <span className="item-name">Todo List</span>
              </div>
              <div className="item-links">
                <div>
                  <a href="https://fs-26.github.io/TodoList/" target="_blank">
                    gh Page
                  </a>
                </div>
                <div>
                  <a href="https://github.com/FS-26/TodoList" target="_blank">
                    Code Source
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Projects;
