const { UUID } = require("@sap/cds/lib/core/classes");

/**
 * 
 * @On(event = { "createBooking" })
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(entities, request) {

	const { Employee } = entities;

	const { Workplace_Booking } = entities;

	const { Bookings } = entities;

	console.log("booking");
	console.log(Bookings);

	let booking = {
		employee_ID: request.data.employee_ID,
		workplace_ID: request.data.workplace_ID,
		date: request.data.date
	};

	//await CREATE(entities.Workplace_Booking, booking);

	console.log(Employee);
	console.log(entities.Employee);

	//const b = await SELECT.one.from(Bookings).where({ ID: "b5c751af-0e44-45ae-9b99-cd805a82da81" });

	//await UPDATE(Bookings).where({ ID: "b5c751af-0e44-45ae-9b99-cd805a82da81" }).with({ name: "flo's test" });
	//console.log(b);

	// TODO Save Booking
	
	await INSERT (booking).into(Workplace_Booking);

	return booking;
}