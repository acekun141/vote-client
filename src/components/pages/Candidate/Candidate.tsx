import React from 'react';
import BaseLayout from "components/organisms/BaseLayout";
import CandidateDetail from "components/organisms/CandidateDetail";

const Candidate = () => {
  return (
    <BaseLayout>
      <div className="candidate">
        <div className="candidate__image">
          <img className="image" alt="image" src={"https://www.cyberpunk.net/build/images/home3/screen-image-mercenary-49f166ed.jpg"} />
        </div>
        <div className="candidate__content">
          <CandidateDetail />
        </div>
      </div>
    </BaseLayout>
  );
}

export default Candidate;