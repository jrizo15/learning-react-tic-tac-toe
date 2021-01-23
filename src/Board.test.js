import { render, fireEvent } from '@testing-library/react';
import Board from './Board.js';

test('should render a Board component with 9 buttons for each square', () => {
  const board = render(<Board initialSquares={Array(9).fill(null)}/>);
  const buttons = board.queryAllByRole('button');
  expect(buttons[0].innerHTML).toBe('');
  expect(buttons[1].innerHTML).toBe('');
  expect(buttons[2].innerHTML).toBe('');
  expect(buttons[8].innerHTML).toBe('');

  fireEvent.click(buttons[0]);
  expect(buttons[0].innerHTML).toBe('X');

  fireEvent.click(buttons[4]);
  expect(buttons[4].innerHTML).toBe('O');

  fireEvent.click(buttons[1]);
  expect(buttons[1].innerHTML).toBe('X');

  fireEvent.click(buttons[2]);
  expect(buttons[2].innerHTML).toBe('O');

});

test('should render a Board component with 9 buttons for each square', () => {
  const board = render(<Board initialSquares={Array(9).fill(null)}/>);
  const buttons = board.queryAllByRole('button');
  const statusTxt = board.getByText(/Next player/);
  expect(statusTxt.innerHTML).toMatch(/Next player: X/);
  
//simulate click and see if status changes
  fireEvent.click(buttons[0]);
  expect(statusTxt.innerHTML).toMatch(/Next player: O/)

//simulate click and see if status changes
  fireEvent.click(buttons[4]);
  expect(statusTxt.innerHTML).toMatch(/Next player: X/)


});