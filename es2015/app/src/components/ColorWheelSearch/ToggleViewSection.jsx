import React from 'react';

const ToggleViewSection = ({category, onViewToggle, view}) => {
  //
  // if (view === 'colors') {
  // }

  return {
    handleClick() {
      onViewToggle(view);
    },

    render() {
      return (
        <div className="ToggleViewSection">
          <button
            onClick={this.handleClick}
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
