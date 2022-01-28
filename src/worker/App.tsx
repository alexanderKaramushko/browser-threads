/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { ReactElement, useEffect, useState } from 'react';

export const App = (): ReactElement => {
  const [isMove, setIsMove] = useState(false);
  const [result, setResult] = useState('');

  const worker = new Worker('./worker.js');

  worker.onmessage = (message): void => {
    setResult(message.data);
  };

  function move(): void {
    setIsMove(true);
  }

  function reset(): void {
    setIsMove(false);
    setResult('');
  }

  useEffect(() => {
    if (isMove) {
      worker.postMessage('get mocks');
    }
  }, [isMove]);

  return (
    <>
      <div className={`ball ${isMove ? 'move' : ''}`} />
      <button onClick={move} type="button">
        Move
      </button>
      <button onClick={reset} type="button">
        Reset
      </button>
      {result}
    </>
  );
};
