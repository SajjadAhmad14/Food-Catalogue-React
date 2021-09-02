import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom'
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import App from '../App';

jest.mock('../components/SignIn');
jest.mock('../components/SignUp');
jest.mock('../App');

describe("Tests for App Router", () => {

  test("Should render App on default route", () => {
  App.mockImplementation(() => <div>AppMock</div>);
  render(
    <MemoryRouter>
      <App/>
    </MemoryRouter>
  );
  expect(screen.getByText("AppMock")).toBeInTheDocument();

});

test("Render SignIn page for signin route", () => {
  SignIn.mockImplementation(() => <div>SignInMock</div>);
  render(
    <MemoryRouter initialEntries={['/signin']}>
      <SignIn/>
    </MemoryRouter>
  );
  expect(screen.getByText("SignInMock")).toBeInTheDocument();
});

test("Render SignUp page for signup route", () => {
  SignUp.mockImplementation(() => <div>SignUpMock</div>);
  render(
    <MemoryRouter initialEntries={['/signup']}>
      <SignUp/>
    </MemoryRouter>
  );
  expect(screen.getByText("SignUpMock")).toBeInTheDocument();
});

});