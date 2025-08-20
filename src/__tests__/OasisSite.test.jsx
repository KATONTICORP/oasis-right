import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import OasisSite from '../OasisSite';

describe('OasisSite', () => {
  it('renders Featured projects heading and project cards', () => {
    render(<OasisSite />);
    expect(screen.getByRole('heading', { name: /Featured projects/i })).toBeTruthy();
    expect(screen.getByText('Hama')).toBeTruthy();
    expect(screen.getByText('Madianik')).toBeTruthy();
  });
});
