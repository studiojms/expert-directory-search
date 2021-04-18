import { render, screen } from '@testing-library/react';

import Card from './Card';

describe('<Card />', () => {
  it('should create a card with all the required params, showing the name correctly', () => {
    const title = 'John Doe';
    const url = 'http://www.google.com';

    render(<Card title={title} url={url} />);

    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent(title);
  });

  it('should create a card with all the required params, showing the website correctly', () => {
    const title = 'John Doe';
    const url = 'http://www.google.com';

    render(<Card title={title} url={url} />);

    const website = screen.getByRole('link') as HTMLAnchorElement;
    expect(website.href).toContain(url);
  });

  it('should create a card with only the required params, showing the friend count as 0', () => {
    const title = 'John Doe';
    const url = 'http://www.google.com';

    render(<Card title={title} url={url} />);

    const friendCount = screen.getByRole('strong');
    expect(friendCount.textContent).toBe('0');
  });

  it('should show the correct number of friends when informed', () => {
    render(<Card title="title" url="url" totalFriends={12} />);

    const friendCount = screen.getByRole('strong');
    expect(friendCount.textContent).toBe('12');
  });
});
