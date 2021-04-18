import { fireEvent, render, screen } from '@testing-library/react';
import TopicSearch from './TopicSearch';

describe('<TopicSearch />', () => {
  it('should render component correctly', () => {
    render(<TopicSearch onSearch={() => {}} />);

    const button = screen.getByRole('button');
    expect(button.textContent).toBe('Search');

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('should call the correct function when button is clicked', () => {
    const onSearch = jest.fn();
    render(<TopicSearch onSearch={onSearch} />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(onSearch).toHaveBeenCalledTimes(1);
  });
});
