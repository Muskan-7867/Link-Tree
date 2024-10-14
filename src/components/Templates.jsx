import React from 'react';
import { Link } from 'react-router-dom';

const Templates = () => {
  const templates = [
    { id: 1, name: 'Template 1' },
    { id: 2, name: 'Template 2' },
    { id: 3, name: 'Template 3' },
    { id: 4, name: 'Template 4' },
  ];

  return (
    <div >
      <h1 >Templates Page</h1>
      <div >
        {templates.map(templates => (
          <Link
            key={templates.id}
            to={`/templates/${templates.id}`}
          >
            <div >{templates.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Templates;
