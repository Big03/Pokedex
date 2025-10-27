import React from 'react';

const TypeButton = ({ type, isSelected, action }) => {
  const handleClick = () => {
    if (isSelected) {
      action(type.english, false);
    } else {
      action(type.english, true);
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={`btn ${isSelected ? 'btn-primary' : 'btn-light'} m-1`}
    >
      {type.english}
    </button>
  );
};

export default TypeButton;