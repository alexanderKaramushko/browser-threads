/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { ReactElement, useEffect, useState } from 'react';

import { mocks } from './mocks';

export const App = (): ReactElement => {
  const [isMove, setIsMove] = useState(false);
  const [result, setResult] = useState('');

  function move(): void {
    setIsMove(true);
  }

  function reset(): void {
    setIsMove(false);
    setResult('');
  }

  useEffect(() => {
    if (isMove) {
      // loooong task
      for (let index = 0; index < 10000; index += 1) {
        JSON.parse(JSON.stringify(mocks));
      }

      setResult('result');
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
