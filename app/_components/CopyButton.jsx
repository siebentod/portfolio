'use client';

import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

const CopyButton = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1100);
      })
      .catch((err) => console.error('Ошибка копирования:', err));
    toast('Скопировано в буфер обмена');
  };

  return (
    <>
      <div className="mt-1 rounded-full">
        <button onClick={handleCopy}>
          {copied ? (
            <span className="icon-[tabler--copy-check]"></span>
          ) : (
            <span className="icon-[tabler--copy]"></span>
          )}
        </button>
      </div>
      <Toaster
        position="bottom-right"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          duration: 1500,
          style: {
            fontSize: '14px',
            maxWidth: '500px',
            padding: '4px 8px',
            backgroundColor: 'white',
            // color: 'grey',
          },
        }}
      />
    </>
  );
};

export default CopyButton;
