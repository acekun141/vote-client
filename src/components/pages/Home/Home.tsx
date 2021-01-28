import React from 'react';
import SectionName from 'components/atoms/SectionName';
import ListVote from 'components/organisms/ListVote';

const Home = () => {
  return (
    <React.Fragment>
      <SectionName name="Danh sách bình chọn" />
      <div className="home">
        <ListVote />
      </div>
    </React.Fragment>
  )
}

export default Home;