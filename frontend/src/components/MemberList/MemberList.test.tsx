import { fireEvent, render, screen, within } from '@testing-library/react';
import { Member } from '../../types';
import MemberList from './MemberList';

describe('<MemberList />', () => {
  it('should render members correctly according to the given param', () => {
    const members: Member[] = [
      {
        id: '1',
        name: 'Test',
        shortenedUrl: 'abc',
      },
      {
        id: '2',
        name: 'XXX',
        shortenedUrl: 'www',
      },
    ];

    render(<MemberList members={members} />);

    const list = screen.getByRole('list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(members.length);
  });

  it('should render a message when no data is present', () => {
    render(<MemberList members={[]} />);

    const list = screen.getByRole('list');
    const { queryAllByRole, getByText } = within(list);

    const items = queryAllByRole('listitem');
    expect(items.length).toBe(0);

    const message = getByText('No data was found');
    expect(message).toBeInTheDocument();
  });

  it('should react when a member card is clicked', () => {
    const onClick = jest.fn();
    render(
      <MemberList
        members={[
          {
            id: '1',
            name: 'Test',
            shortenedUrl: 'abc',
          },
        ]}
        onMemberClick={onClick}
      />
    );

    const listitem = screen.getByRole('listitem');
    
    fireEvent.click(listitem);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
