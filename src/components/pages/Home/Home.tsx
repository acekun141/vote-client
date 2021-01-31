import React from 'react';
import SectionName from 'components/atoms/SectionName';
import ListVote from 'components/organisms/ListVote';
import BaseLayout from "../../organisms/BaseLayout";

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