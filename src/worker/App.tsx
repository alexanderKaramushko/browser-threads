/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { ReactElement, useEffect, useState } from 'react';

import { mocks } from './mocks';

export const App = (): ReactElement => {
  const [isMove, setIsMove] = useState(false);
  const [result, setResult] = useState('');

  useEffect(() => {
    if (isMove) {
      // loooong task
      for (let index = 0; index < 10000; index += 1) {
        JSON.parse(JSON.stringify(mocks));
      }

      setResult('Готово!');
    }
  }, [isMove]);

  function toggleMove(): void {
    setIsMove(!isMove);
  }

  return (
    <>
      <div className={`ball ${isMove ? 'move' : ''}`} />
      <button onClick={toggleMove} type="button">
        {isMove ? 'Reset' : 'Move'}
      </button>
      {result}
    </>
  );
};
