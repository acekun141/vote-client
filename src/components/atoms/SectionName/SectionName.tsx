import React from 'react';

interface IProps {
  name: string;
}

const SectionName = ({ name }: IProps) => {
  return (
    <div className="section-name">
      <h1>{name}</h1>
    </div>
  )
}

export default SectionName;