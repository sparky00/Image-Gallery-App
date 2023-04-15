import React from 'react';

export const ImageCards = ({image}) => {
  const tags = image.tags.split(',');
  return (
    <div class="col">
    <div className="card" style={{ width: "25rem" }}>
    <img
      src={image.webformatURL }
      className="card-img-top"
      alt="NO Image Found"
    />
    <div className="card-body">
      <h5 className="card-title text-danger-emphasis">
        Photo by {image.user}
      </h5>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <strong>Views: </strong>
          {image.views}
        </li>
        <li className="list-group-item">
          <strong>Downloads: </strong>
          {image.downloads}
        </li>
        <li className="list-group-item  ">
          <strong>Likes: </strong>
          {image.likes}
        </li>
      </ul>
    </div>
    <div>
     {tags.map(tag =>(
       <span key={image.id} className="badge text-bg-secondary m-1">#{tag}</span>
     ))}
    </div>
  </div>
  </div>
  )
}
