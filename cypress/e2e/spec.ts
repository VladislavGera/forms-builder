import { v4 as uuidv4 } from 'uuid';
import { inputValueState } from 'src/models/input.model';

describe('Test request', () => {
  let newEmail = `vlsad${uuidv4()}@gmail.com`;
  let newPassword = `passsword${uuidv4()}`;

  let email = `vheranin@gmail.com`;
  let password = `vlad123`;

  let newUserBody: inputValueState = {
    email: newEmail,
    password: newPassword,
  };

  const localStorageStringData: any = localStorage.getItem('user');

  const localData = JSON.parse(localStorageStringData);

  it('Registration http request', () => {
    cy.request({
      url: 'http://localhost:8000/auth/register',
      method: 'POST',
      failOnStatusCode: false,
      body: newUserBody,
    }).then((response) => {
      expect(response.status, 'status').to.equal(200);
    });
  });

  it('Login http request', () => {
    cy.request({
      url: 'http://localhost:8000/auth/login',
      method: 'POST',
      failOnStatusCode: false,
      body: {
        email,
        password,
      },
    }).then((response) => {
      expect(response.status, 'status').to.equal(200);
    });
  });

  it('Auth http request', () => {
    cy.request({
      url: `http://localhost:8000/users/d873ca27-fb2e-48a3-a878-67eb1296217f`,
      method: 'GET',
      failOnStatusCode: false,
    }).then((response) => {
      // expect(response.status, 'status').to.equal(200);
      // expect(response.body.message, 'message').to.equal(
      //   'Invalid password or email, minimum password length is 5 letters'
      // );
    });
  });
});
