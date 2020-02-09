import React, { Component } from 'react';
import classNames from 'classnames';

class Vertex extends Component {
  constructor() {
    super();
  }

  render() {
    const { region, radius, x, y } = this.props;

    const classNames = classNames([
      'vertex',
      region.toLowerCase(),
      { rejected }
    ]);
    let styles = {};

    if (rejected) {
      styles.animationName = 'rejected';
      styles.animationDuration = vertexExitLength + 'ms';
      styles.animationFillMode = 'forwards';
      styles.animationTimingFunction = 'ease';
    } else {
      styles.animationName = 'fadeIn';
      styles.animationDuration = vertexLength + 'ms';
      styles.animationFillMode = 'forwards';
      styles.animationTimingFunction = 'ease';
    }

    return (
      <g>
        <svg width={radius * 2} height={radius * 2} x={x} y={y}>
          <g className={classes} style={styles}>
            <circle cx="50%" cy="50%" r="48%" fill="#FFFFFF" />
          </g>
        </svg>
      </g>
    );
  }
}

export default Vertex;
