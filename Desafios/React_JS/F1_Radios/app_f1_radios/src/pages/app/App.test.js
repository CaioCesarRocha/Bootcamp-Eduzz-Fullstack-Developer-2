import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';



const response = { pilot: 'test pilot', quote: 'test quote' };

const server = setupServer(
  rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
    return res(ctx.json(response));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders a button, text and background image', () => { //teste de elementos na tela
    render(<App />);
  
    const buttonEl = screen.getByRole('button');
    const imageEl = screen.getByRole('img');
    const textEl = screen.getByText(/man/);
  
    expect(buttonEl).toBeInTheDocument();
    expect(imageEl).toBeInTheDocument();
    expect(textEl).toBeInTheDocument();
});

test('calls api on button click and update its text', async () => {
    const customResponse = {
      pilot: 'Supermax',
      quote: 'teste quote'
    };
  
    render(<App />);
  
    server.use(
      rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
        return res(ctx.json(customResponse));
      })
    );
  
    const buttonEl = screen.getByRole('button');
  
    fireEvent.click(buttonEl);
    const quoteEl = await screen.findByText('Supermax');
  
    expect(quoteEl).toBeInTheDocument();
  });


  test('calls api on startup and renders it response', async () => {
    render(<App />);
  
    const quoteEl = await screen.findByText(response.quote);
  
    expect(quoteEl).toBeInTheDocument();
  });