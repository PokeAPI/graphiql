import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ApiRequestDetails extends Component {
  render() {
    const styles = require('../ApiExplorer.scss');
    return (
      <div className={styles.apiRequestWrapper + ' ' + styles.apiContentPadd}>
        <div className={styles.apiRequestContent}>PokeAPI GraphiQL interface</div>
        <div className={styles.built}>
          A rate limit of 100 calls per hour is enforced
        </div>
        <div className={styles.apiHasura}>
          <a href="https://github.com/PokeAPI/pokeapi" target={'_blank'}>
            <i className="fa fa-github" />
          </a>
        </div>
      </div>
    );
  }
}

ApiRequestDetails.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ApiRequestDetails;
