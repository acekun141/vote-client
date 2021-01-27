import React from 'react';
import BaseLayout from 'components/organisms/BaseLayout';
import SectionName from 'components/organisms/SectionName';
import ListVote from 'components/organisms/ListVote';

const Home = () => {
  return (
    <BaseLayout>
      <SectionName name="Danh sách bình chọn" />
      <div className="home">
        <ListVote />
      </div>
    </BaseLayout>
  )
}

export default Home;