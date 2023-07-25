import { render, screen } from '@testing-library/react';
import App from './App';
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
