import React from "react";
import Button from 'components/atoms/Button';

const VoteItem = () => {
  return (
    <div className="vote-item">
      <div className="vote-item__image">
        <img alt="vote-image" src="https://iv.vnecdn.net/giaitri/images/web/2020/07/05/son-tung-m-tp-ra-mv-ve-tinh-yeu-1593965250_900x540.jpg" />
      </div>
      <div className="vote-item__content">
        <h3>Son Tung MTP</h3>
        <p>Content of vote item</p>
      </div>
      <div className="vote-item__button-wrapper">
        <Button onClick={() => console.log('vote')}>
          Bình chọn
          <span>1,102</span>
        </Button>
      </div>
    </div>
  )
}

export default VoteItem;