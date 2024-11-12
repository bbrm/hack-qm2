const test_createbooking_logic = require('./code/test-createbooking-logic');
const cds = require('@sap/cds/lib');
const {
  GET,
  POST,
  PATCH,
  DELETE,
  expect
} = cds.test(__dirname + '../../', '--with-mocks');
cds.env.requires.auth = {
  kind: "dummy"
};
describe('Service Testing', () => {
  it('test createbooking-logic', async () => {
    await test_createbooking_logic(GET, POST, PATCH, DELETE, expect);
  });
});