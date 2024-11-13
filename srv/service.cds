using { quartiermeister2 as my } from '../db/schema.cds';

@path : '/service/QmService'
service QmService
{
    @cds.redirection.target : false
    @odata.draft.bypass
    @odata.draft.enabled
    entity Workplace as
        projection on my.Workplace;

    @odata.draft.bypass
    @odata.draft.enabled
    entity Employee as
        projection on my.Employee;

    @odata.draft.bypass
    @odata.draft.enabled
    entity Team as
        projection on my.Team;

    @odata.draft.bypass
    @odata.draft.enabled
    entity Workplace_Booking as
        projection on my.Workplace_Booking;

    entity Bookings as
        projection on my.Bookings
        {
            ID,
            name
        };

    action createBooking
    (
        employee_ID : UUID,
        workplace_ID : UUID,
        date : Integer
    )
    returns Workplace_Booking;

    action deleteBooking
    (
        workplace_ID : UUID,
        date : Integer
    );
}

annotate QmService with @requires :
[
    'authenticated-user'
];
