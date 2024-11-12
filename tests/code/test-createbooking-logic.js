const { UUID } = require("@sap/cds/lib/core/classes");
const createbookingLogic = require("../../srv/code/createbooking-logic");

/**
 * Given a running CAP service, the unit test should be able to get passed.
 *
 * @param {Function} GET - The `axios` function to send a GET request
 * @param {Function} POST - The `axios` function to send a POST request
 * @param {Function} PATCH - The `axios` function to send a PATCH request
 * @param {Function} DELETE - The `axios` function to send a DELETE request
 * @param {Function} expect - The `chai` function to assert the response
 */
module.exports = async function(GET, POST, PATCH, DELETE, expect) {
  console.log(createbookingLogic({
    employee_ID: UUID,
    workplace_ID: UUID,
    date: 1
  }));
};
