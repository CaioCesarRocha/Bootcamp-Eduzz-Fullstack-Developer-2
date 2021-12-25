import { render, screen, fireEvent } from '@testing-library/react';
import { Quotes } from './Quotes';

const quote = 'test quotes';
const pilot = 'max pilot';

test('renders received quote, pilot and a button', () => {
    render(<Quotes quote={quote} pilot={pilot} />);
  
    const quoteEl = screen.getByText(quote);
    const pilotEl = screen.getByText(pilot);
    const buttonEl = screen.getByRole('button');
  
    expect(quoteEl).toBeInTheDocument();
    expect(pilotEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
});

test('calls a callback when button is pressed', () => {
  const callback = jest.fn();  // "espiao" pra checar se a func foi chamada

  render(<Quotes quote={quote} pilot={pilot} onUpdate={callback} />);

  const buttonEl = screen.getByRole('button');

  fireEvent.click(buttonEl);
  
  expect(callback).toHaveBeenCalledTimes(1);
});