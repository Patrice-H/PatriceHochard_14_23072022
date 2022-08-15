import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Modal from './index';

describe('Modal tests suite', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      value: { reload: jest.fn() },
    });
  });

  it('Should render the modal window', () => {
    render(
      <MemoryRouter>
        <Modal />
      </MemoryRouter>
    );
    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
  });

  it('Should render the modal text', () => {
    render(
      <MemoryRouter>
        <Modal />
      </MemoryRouter>
    );
    const text = screen.getByText('Employee Created!');
    expect(text).toBeInTheDocument();
  });

  it('Should render close button', () => {
    render(
      <MemoryRouter>
        <Modal />
      </MemoryRouter>
    );
    const btn = screen.getByTestId('close-modal-btn');
    expect(btn).toBeInTheDocument();
  });

  it('Should close the modal', () => {
    render(
      <MemoryRouter>
        <Modal />
      </MemoryRouter>
    );

    const modal = screen.getByTestId('modal');
    const btn = screen.getByTestId('close-modal-btn');
    modal.classList.remove('hidden');
    fireEvent.click(btn);
    expect(modal.classList.contains('hidden')).toEqual(true);
  });
});
