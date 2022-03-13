import 'jest-styled-components';

import App from './App';
import { HttpClient } from './infra/interfaces/http-client';
import { render } from '@testing-library/react';

const makeHttpClientStub = (): jest.Mocked<HttpClient> => ({
  get: jest.fn().mockResolvedValue({ results: [] }),
});

test('renders learn react link', async () => {
  const httpClientStub = makeHttpClientStub();
  const app = await render(<App httpClient={httpClientStub} />);

  expect(app).toMatchSnapshot();
});
