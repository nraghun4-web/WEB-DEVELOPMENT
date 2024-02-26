import { render, screen } from '@testing-library/react';
import MyComponent from './Components/MyComponent';
import App from './App';
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders a given component', () => {
  render(<MyComponent />)
  const linkelement = screen.getByText(/learn new/i)
  expect(linkelement).toBeInTheDocument()
})

test('renders a component', ()=> {
  render(<MyComponent />)

})