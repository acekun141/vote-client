import React from 'react';
import Button from "../../atoms/Button";

const CandidateDetail = () => {
  return (
    <div className="candidate-detail">
      <h1 className="candidate-detail__name">User Name</h1>
      <p className="candidate-detail__content">
        Wikis are enabled by wiki software, otherwise known as wiki engines. A wiki engine, being a form of a content management system, differs from other web-based systems such as blog software, in that the content is created without any defined owner or leader, and wikis have little inherent structure, allowing structure to emerge according to the needs of the users.[1] Wiki engines usually allow content to be written using a simplified markup language and sometimes edited with the help of a rich-text editor.[2] There are dozens of different wiki engines in use, both standalone and part of other software, such as bug tracking systems. Some wiki engines are open source, whereas others are proprietary. Some permit control over different functions (levels of access); for example, .
      </p>
      <Button className="candidate-detail__button">
        Bình chọn
        <span>1,020</span>
      </Button>
    </div>
  );
}

export default CandidateDetail;