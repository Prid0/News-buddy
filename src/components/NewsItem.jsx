import React from 'react';

export default function NewsItem(props) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: '#151B28',
        color: '#E4E6EA',
        boxShadow: '1px 1px 10px 0px #4b5a7c',
      }}
    >
      <div
        style={{
          backgroundImage: `url(${props.imgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '11rem', 
          width: '100%', 
        }}
      >
      </div>
      <div className="card-body" style={{padding:"0.5rem"}}>
        <p className="card-text source_date">{props.source}</p>
        <p className="card-text source_date">
          Published on : {new Date(props.date).toLocaleDateString()}
        </p>
        <h5 className="card-title news_title" style={{ fontSize: '18px' }}>
          {props.title}
        </h5>
        <p className="card-text" style={{ fontSize: '14px' }}>
          {props.discripton}
        </p>
        <a
          href={props.readmore}
          target="_blank"
          className="btn btn-sm"
          style={{ backgroundColor: '#587AC1' }}
        >
          Read More...
        </a>
      </div>
    </div>
  );
}
