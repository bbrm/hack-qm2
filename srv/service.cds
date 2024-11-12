using { quartiermeister2 as my } from '../db/schema.cds';

@path : '/service/QmService'
service QmService
{
    @cds.redirection.target : false
    @odata.draft.enabled
    entity Workplace as
        projection on my.Workplace;

    @odata.draft.enabled
    entity Employee as
        projection on my.Employee;

    @odata.draft.enabled
    entity Team as
        projection on my.Team;

    @odata.draft.enabled
    entity Workplace_Booking as
        projection on my.Workplace_Booking;

    action createBooking
    (
        employee_ID : UUID,
        workplace_ID : UUID,
        date : Integer
    )
    returns Workplace_Booking;
}

annotate QmService with @requires :
[
    'authenticated-user'
];
