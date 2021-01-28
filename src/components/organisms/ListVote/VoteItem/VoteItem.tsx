import React from "react";
import Button from 'components/atoms/Button';
import { Link } from 'react-router-dom';

const VoteItem = () => {
  return (
    <div className="vote-item">
      <div className="vote-item__image">
        {/*<img alt="vote-image" src="https://iv.vnecdn.net/giaitri/images/web/2020/07/05/son-tung-m-tp-ra-mv-ve-tinh-yeu-1593965250_900x540.jpg" />*/}
        <img alt="vote-image" src={"https://www.cyberpunk.net/build/images/home3/screen-image-mercenary-49f166ed.jpg"} />
      </div>
      <div className="vote-item__content">
        <Link to="/detail" className="vote-item__name">User Name</Link>
        <p>Content of vote item</p>
      </div>
      <div className="vote-item__button-wrapper">
        <Button onClick={() => alert('vote')}>
          Bình chọn
          <span>1,102</span>
        </Button>
      </div>
    </div>
  )
}

export default VoteItem;