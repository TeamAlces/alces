import React from 'react';

const Arrow = ({ direction, clickFunction, glyph }) => (
    <span
      className={ `slide-arrow ${direction}` }
      onClick={ clickFunction }>
      { glyph }
    </span>
);

export default Arrow;