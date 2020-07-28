import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="page__footer">
        <div className="container">
          <div className="column four">
          <h2>Let's Connect</h2>
          <ul className="connect-list">
            <li className="connect-list__item">
              <a
                className="connect-list__link"
                href="https://www.linkedin.com/in/daniel-ghimpu-7076ab1a0/"
                target="newwindow"
              >
                <i className="zmdi zmdi-linkedin zmdi-hc-5x" />
              </a>
            </li>
            <li className="connect-list__item">
              <a
                className="connect-list__link"
                href="https://github.com/danutz87"
                target="newwindow"
              >
                <i className="zmdi zmdi-github-alt zmdi-hc-5x" />
              </a>
            </li>
            <li className="connect-list__item">
              <a
                className="connect-list__link"
                href="https://twitter.com/daniel_ghimpu"
                target="newwindow"
              >
                <i className="zmdi zmdi-twitter zmdi-hc-5x" />
              </a>
            </li>
          </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
