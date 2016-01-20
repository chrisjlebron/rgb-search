import React from 'react';

import {capitalize} from 'lodash';

const ToggleViewSection = ({category, onViewToggle, view}) => {
  return {
    handleClick() {
      onViewToggle(this._toggleButton.value);
    },

    componentWillReceiveProps(nextProps) {
      this._toggleButton.value = nextProps.view;
    },

    componentDidUpdate(prevProps) {
      this._toggleButton.textContent = `Show ${capitalize(prevProps.view)}`;
    },

    render() {
      return (
        <div className="ToggleViewSection">
          <button
            className="toggle-view-button"
            onClick={this.handleClick.bind(this)}
            ref={(component) => this._toggleButton = component}
            value={view}
          >
          {`Show ${view === 'colors' ? 'Articles' : 'Colors'}`}
          </button>
          {` related to the category "${category.name}"`}
        </div>
      );
    }
  }
}

export default ToggleViewSection;
