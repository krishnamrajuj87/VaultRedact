import React from 'react';

const DocumentView = ({ url, title,className }: { url: any, title: string,className:string }) => {
  const encodedUrl = encodeURIComponent(url);
  const newUrl = url.split('?')[0];
  console.log('DocumentView', url, encodedUrl, newUrl);
  return (
    <iframe
      src={`https://docs.google.com/viewer?url=${encodedUrl}&embedded=true&t=${new Date().getTime()}`}
      className={className}
      title={title}
      onError={(e) => {
        console.error('DocumentView: Failed to load document preview:', e);
        // You could set a state here to trigger fallback
      }}
    />
  );
};

export default DocumentView;

