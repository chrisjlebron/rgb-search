import React from 'react';

const ToggleViewSection = ({category, onViewToggle, view}) => {
  return {
    handleClick() {
      onViewToggle(this._toggleButton.value);
    },

    componentWillReceiveProps(nextProps) {
      this._toggleButton.value = nextProps.view;
    },

    render() {
      return (
        <div className="ToggleViewSection">
          <button
            onClick={this.handleClick.bind(this)}
            ref={(component) => this._toggleButton = component}
            value={view}
          >
          Toggle View
          </button>
        </div>
      );
    }
  }
}

export default ToggleViewSection;
