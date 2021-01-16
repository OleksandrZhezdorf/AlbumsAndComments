import React, { useState, useEffect } from 'react';

function useDocumentTitle(title) {
    useEffect(() => {
      document.title = title;
    }, [title]);
  }

function DocumentTitle() {
    const [name, setName] = useState('Занятия | Hillel LMS');
    useDocumentTitle(name);
    return (
        <div>
            <input placeholder="Input name" type='text' value={name} onChange={e => setName(e.target.value)}></input>
        </div>
    )
}

export { DocumentTitle}