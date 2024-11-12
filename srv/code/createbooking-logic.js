/**
 * 
 * @On(event = { "createBooking" })
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(request) {
	let booking = {
		employee_ID: request.employee_ID,
		workplace_ID: request.workplace_ID,
		date: request.date
	};
	
	console.log(booking);

	return booking;
}