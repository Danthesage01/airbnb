import React from 'react'
const SingleCard = ({url, title}) => {

  return (
    <div>
      <img
        src={url}
        alt={title}
      />
    </div>
  );
}

export default SingleCard
