import { describe, expect, it } from 'vitest';
import { act, render, screen } from '../test-utils';

import { App } from '~/App';

describe('Renders every component', () => {
  it('Renders App component', async () => {
    await act(async () => {
      render(<App />);
    });

    expect(screen.getByTestId('boilerplate-title')).toBeInTheDocument();
  });
});
