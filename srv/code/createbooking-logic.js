/**
 * 
 * @On(event = { "createBooking" })
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(request) {
	console.log("lflo");
	console.log(request.data);
	
	
	let booking = {
		employee_ID: request.data.employee_ID,
		workplace_ID: request.data.workplace_ID,
		date: request.data.date
	};

	// TODO Save Booking
	
	console.log(booking);

	return booking;
}