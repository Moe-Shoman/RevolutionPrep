import React from 'react';
import './Course.css';
import moment from 'moment';

const Course = ({ title, startsAt, type }) => {

  const formatDate = (rfc3339, displayFormat = 'MM.DD.YYYY') => {
    return moment(rfc3339).format(displayFormat);
  };

  const formatTitle = (title) => {
    const firstWord = title.substr(0, title.indexOf(' '));
    const rest = title.substr(title.indexOf(' '));
    return (
      <div className="title">
        <div>
          {firstWord}
        </div>
        <div>
          {rest}
        </div>
      </div>
    );
  };

  return (
    <div className={`Course ${type}`}>
        {formatTitle(title || '')}
      <div className="date">
        {type === 'Class' && 'STARTING: '}
        <span className={`${type}-span`}>
          {formatDate(startsAt)}
        </span>
      </div>
      <button className={`lrn-btn ${type}-btn`}>LEARN MORE</button>
    </div>
  );
};

export default Course;
