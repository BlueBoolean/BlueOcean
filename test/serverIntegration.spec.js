const axios = require('axios');
// const { url } = require('../.config');
require('dotenv');

const { url } = `http://localhost:3500`

require('core-js/stable');

require('regenerator-runtime/runtime');

const task = {
  streetAddress: '1866 n Vermont Ave',
  city: 'Los Angeles',
  state: 'CA',
  zipcode: 90027,
  neighborhood: null,
  startDate: '2021-08-01',
  endDate: '2021-08-01',
  startTime: '23:30:00',
  category: 'labor',
  carRequired: false,
  description: 'test from postman1',
  laborRequired: false,
  duration: null,
};

const editedTask = {
  streetAddress: '1866 n Vermont Ave',
  city: 'Los Angeles',
  state: 'CA',
  zipcode: 90027,
  neighborhood: null,
  startDate: '2021-08-01',
  endDate: '2021-08-01',
  startTime: '23:30:00',
  category: 'labor',
  carRequired: false,
  description: 'test from postman1',
  laborRequired: false,
  duration: null,
  taskId: 1,
};

describe('Messages API Integration', () => {
  test('should get message for task GET(/messages/:taskId)', async () => {
    const response = await axios.get(`http://localhost:3500/api/messages/1`);
    expect(response.status).toEqual(200);
  });

  test('should post new test message POST(/messages/:taskId/:userId)', async () => {
    const response = await axios.post(`http://localhost:3500/api/messages/1/1`,
      { messagebody: 'test', date: '2021-07-31', time: '17:30:00' });
    expect(response.status).toEqual(200);
  });
});

describe('Tasks API Integration', () => {
  test('should get master tasks list GET(/tasks/master/:userId/:range/:quantity/:offset)', async () => {
    const response = await axios.get(`http://localhost:3500/api/tasks/master/1/100/10/0`);
    expect(response.status).toEqual(200);
  });

  test('ADD TASK: should add a task (/task/check/:userId)', async () => {
    const response = await axios.post(`http://localhost:3500/api/task/check/1`, task);
    expect(response.status).toEqual(200);
  });

  test('EDIT TASK: should edit task (/task/edit)', async () => {
    const response = await axios.put(`http://localhost:3500/api/task/edit`, editedTask);
    expect(response.status).toEqual(200);
  });

  test('should remove helper from a task (/task/rmhelp/:taskId)', async () => {
    const response = await axios.put(`http://localhost:3500/api/task/rmhelp/1`);
    expect(response.status).toEqual(200);
  });

  test('should ADD helper to a task (/task/help/:taskId/:userId)', async () => {
    const response = await axios.put(`http://localhost:3500/api/task/help/1/1`);
    expect(response.status).toEqual(200);
  });

  test('should CLOSE task status (/task/close/:taskId/:rating)', async () => {
    const response = await axios.put(`http://localhost:3500/api/task/close/1/5`, { review: 'great' });
    expect(response.status).toEqual(200);
  });

  test('should CHANGE task status (/task/change/:status/:taskId)', async () => {
    const response = await axios.put(`http://localhost:3500/api/task/change/Pending/1`);
    expect(response.status).toEqual(200);
  });
});

describe('Users API Integration', () => {
  test('should get user data (/user/info/:userId)', async () => {
    const response = await axios.get(`http://localhost:3500/api/user/info/1`);
    expect(response.status).toEqual(200);
  });

  test('should get list of users by rating (/users/rating/:quantity)', async () => {
    const response = await axios.get(`http://localhost:3500/api/users/rating/10`);
    expect(response.status).toEqual(200);
  });

  test('should get list of users by rating in range (/users/rangerating/:quantity/:userId/:range)', async () => {
    const response = await axios.get(`http://localhost:3500/api/users/rangerating/5/1/100`);
    expect(response.status).toEqual(200);
  });

  test('should get list of users by rating in range (/users/rangerating/:quantity/:userId/:range)', async () => {
    const response = await axios.get(`http://localhost:3500/api/users/rangerating/5/1/100`);
    expect(response.status).toEqual(200);
  });
});

describe('Login API Integration', () => {
  test('should log user in (/login)', async () => {
    const response = await axios.post(`http://localhost:3500/api/login`, {
      email: 'tester@nexdoor.com',
      password: 'Nexdoor!23',
    });
    expect(response.status).toEqual(200);
  });
});

describe('Announcements API Integration', () => {
  test('should get announcements GET(/announce/:quantity)', async () => {
    const response = await axios.get(`http://localhost:3500/api/announce/1`);
    expect(response.status).toEqual(200);
  });

  test('should post a new announcement POST(/announce/:userId)', async () => {
    const response = await axios.post(`http://localhost:3500/api/announce/1`, {
      announcementBody: 'test',
      date: '2021-07-31',
      time: '23:30:00',
    });
    expect(response.status).toEqual(200);
  });
});
