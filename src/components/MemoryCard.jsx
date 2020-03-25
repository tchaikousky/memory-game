import React, { Component } from "react";
import './MemoryCardBack.css';

class MemoryCard extends Component {
  render() {
    return (
      <div className="MemoryCard">
        <div className="MemoryCardInner">
          <div className="MemoryCardBack">

          </div>
          <div className="MemoryCardFront">
            hey
          </div>
        </div>
      </div>
    );
  }
}

export default MemoryCard;
