import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class About extends Component {
  render() {
    return (
      <div className="page page--404 text-center">
        <div className="modal modal__notfound">
          <div className="modal__content">
            <h1 className="text-mega">WHOA 404</h1>
            <Link to="/" className="button button--block button--gold">Let's try that again</Link>
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  params: PropTypes.object
};

export default About;
