import { render, screen } from '@testing-library/react';
import CreateMemberPage from './CreateMemberPage';

describe('<CreateMemberPage />', () => {
  beforeEach(() => {
    render(<CreateMemberPage />);
  });

  it('should show two fields for user to fill with information', () => {
    const inputs = screen.getAllByRole('textbox');

    expect(inputs.length).toBe(2);
  });

  it('should show two buttons for user to control the form', () => {
    const buttons = screen.getAllByRole('button');

    expect(buttons.length).toBe(2);

    const btnCancel = screen.getByText('Cancel');
    expect(btnCancel).toBeInTheDocument();

    const btnSave = screen.getByText('Save');
    expect(btnSave).toBeInTheDocument();
  });
});
