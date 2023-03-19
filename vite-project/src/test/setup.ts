import matchers from '@testing-library/jest-dom/matchers';
import '@testing-library/jest-dom';
// import { expect, vi, beforeAll } from 'vitest';
// import 'vi-fetch/setup';
// import { prepareFetch, createMockApi, mockFetch } from 'vi-fetch';

// global.fetch = vi.fn((url) => {
//   return Promise.resolve({
//     json: {} => {
//     console.log(`${url}`)
//       return Promise.resolve({})
//     }
//   })
// });
/* beforeAll(() => {
  prepareFetch(global, 'fetch');
});

beforeEach(() => {
  mockFetch.clearAll();
}); */
expect.extend(matchers);
