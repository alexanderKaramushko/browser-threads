/* eslint-disable no-console */
import { mocks } from './mocks';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
onmessage = () => {
  // loooong task
  for (let index = 0; index < 10000; index += 1) {
    JSON.parse(JSON.stringify(mocks));
  }
  postMessage('result');
};
