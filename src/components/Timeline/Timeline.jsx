import React, { useState } from 'react';
import './Timeline.css';

const timelineData = [
  {
    id: 1,
    text: "Attended Kuliyapitiya Central College and got 9A's for OL's and BCC for AL's.",
    date: '2012 - 2020',
    category: {
      tag: 'School',
      color: '#FFDB14',
    },
    logo: 'path/to/kuliyapitiya-central-college-logo.png', // Add logo path here
  },
  {
    id: 2,
    text: 'Completed IT and English diplomas in ESOFT Metro Campus.',
    date: '2020 - 2021',
    category: {
      tag: 'Diploma',
      color: '#00c8ff',
    },
    logo: 'path/to/esoft-metro-campus-logo.png', // Add logo path here
  },
  {
    id: 3,
    text: 'Completed Data Analysis with Python course certification in freecodecamp.',
    date: '2022',
    category: {
      tag: 'Certification',
      color: '#ff6b00',
    },
    logo: 'path/to/freecodecamp-logo.png', // Add logo path here
  },
  {
    id: 4,
    text: 'Started BSc(hons) in Computer Science in General Sir John Kotelawala Defense University.',
    date: '2022 - Present',
    category: {
      tag: 'University',
      color: '#ff0000',
    },
    logo: 'path/to/kdu-logo.png', // Add logo path here
  },
  {
    id: 5,
    text: 'Completed Python for Beginners course from University of Moratuwa.',
    date: '2023',
    category: {
      tag: 'Certification',
      color: '#ff6b00',
    },
    logo: 'path/to/uom-logo.png', // Add logo path here
  },
  {
    id: 6,
    text: 'Completed Machine Learning specialization by DeepLearning.AI by Andrew Ng.',
    date: '2024',
    category: {
      tag: 'Certification',
      color: '#ff6b00',
    },
    logo: 'path/to/deeplearning-ai-logo.png', // Add logo path here
  },
];

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <div className="timeline-container">
      <h1 className="text-4xl font-bold text-center mb-10">My Education Journey</h1>
      <div className="timeline">
        {timelineData.map((data) => (
          <div
            key={data.id}
            className={`timeline-item ${activeItem === data.id ? 'active' : ''}`}
            onClick={() => handleItemClick(data.id)}
          >
            <div className="timeline-item-content">
              <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
              </span>
              <time>{data.date}</time>
              <p>{data.text}</p>
              {activeItem === data.id && (
                <div className="timeline-item-description">
                  {/* <img src={data.logo} alt="logo" className="timeline-logo" /> */}
                  <p>{data.text}</p>
                </div>
              )}
              <span className="circle" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
