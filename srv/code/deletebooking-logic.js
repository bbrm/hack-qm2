/**
 * Action: Delete Booking
 * @On(event = { "deleteBooking" })
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(entities, request) {
	const { Workplace_Booking } = entities;

	await DELETE.from(Workplace_Booking).where ({
		workplace_ID: request.data.workplace_ID,
		date: request.data.date
	});

}