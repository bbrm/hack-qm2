using { quartiermeister2 as my } from '../db/schema.cds';

@path : '/service/QmService'
service QmService
{
    @cds.redirection.target : false
    entity Workplace as
        projection on my.Workplace;

    entity Employee as
        projection on my.Employee;

    entity Team as
        projection on my.Team;

    @odata.draft.enabled
    entity Workplace_Booking as
        projection on my.Workplace_Booking;

    action createBooking
    (
        booking : Workplace_Booking
    )
    returns String;
}

annotate QmService with @requires :
[
    'authenticated-user'
];
