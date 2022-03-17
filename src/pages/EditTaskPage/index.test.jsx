import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import EditTaskPage from '.';
import { NOT_FOUND_ROUTE } from '../../constants/routes';
import MOCK_LISTS from '../../../__mocks__/lists';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
  useParams: () => ({
    listId: '1',
    taskId: '2',
  }),
}));

describe('EditTaskPage', () => {
  const mockSetListData = jest.fn();

  const component = (listData = MOCK_LISTS) => (
    <EditTaskPage listData={listData} setListData={mockSetListData} />
  );

  beforeEach(() => {
    mockNavigate.mockClear();
    mockSetListData.mockClear();
  });

  it('should update task title input value and not list data when task title input text is changed', () => {
    render(component());
    const mockTaskTitleText = 'Test Task Title';
    expect(screen.getByTestId('testId-taskTitleTextInput')).toHaveAttribute(
      'value',
      'prep your meals',
    );
    fireEvent.change(screen.getByTestId('testId-taskTitleTextInput'), {
      target: { value: mockTaskTitleText },
    });
    expect(screen.getByTestId('testId-taskTitleTextInput')).toHaveAttribute(
      'value',
      mockTaskTitleText,
    );
    expect(mockSetListData).not.toHaveBeenCalled();
  });

  it('should update list data with changed task and navigate to list details page when save button is clicked', () => {
    render(component());
    const mockTaskTitleText = 'Test List Save';
    fireEvent.change(screen.getByTestId('testId-taskTitleTextInput'), {
      target: { value: mockTaskTitleText },
    });
    expect(mockSetListData).not.toHaveBeenCalled();
    fireEvent.click(screen.getByText('Save'));
    expect(mockSetListData).toHaveBeenCalledTimes(1);
    expect(mockSetListData).toHaveBeenCalledWith([
      {
        id: 1,
        name: 'Self Learning',
        tasks: [
          { id: 1, title: 'walk' },
          { id: 2, title: mockTaskTitleText },
          { id: 3, title: 'meditate' },
        ],
      },
      {
        id: 2,
        name: 'Self Learning 2',
        tasks: [
          { id: 1, title: 'walk 2' },
          { id: 2, title: 'prep your meals 2' },
          { id: 3, title: 'meditate 2' },
        ],
      },
    ]);
    expect(mockNavigate).toBeCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/lists/1');
  });

  it('should navigate to not found page when task is not found based on list id and task id', () => {
    render(component([]));
    expect(mockNavigate).toBeCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(NOT_FOUND_ROUTE);
  });

  it('should navigate to previous page when back button is clicked', () => {
    render(component());
    fireEvent.click(screen.getByText('Back'));
    expect(mockNavigate).toBeCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
