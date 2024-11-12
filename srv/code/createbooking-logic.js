/**
 * 
 * @On(event = { "createBooking" })
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(request) {
	let booking = request;

	console.log(booking);
	
	return "hello world";
}