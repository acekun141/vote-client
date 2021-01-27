import React from "react";
import Button from 'components/atoms/Button';

const VoteItem = () => {
  return (
    <div className="vote-item">
      <div className="vote-item__image"></div>
      <div className="vote-item__content">
        <h3>Elon Musk</h3>
        <p>Content of vote item</p>
      </div>
      <div className="vote-item__button-wrapper">
        <Button onClick={() => console.log('vote')}>Vote</Button>
      </div>
    </div>
  )
}

export default VoteItem;