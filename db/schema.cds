namespace quartiermeister2;

using
{
    cuid,
    managed,
    Currency,
    Country,
    sap.common.CodeList
}
from '@sap/cds/common';

entity Workplace
{
    key worplace_ID : UUID;
    building : String(2);
    floor : String(2);
    area : String(2);
    workplace_bookings : Association to many Workplace_Booking on workplace_bookings.workplace = $self;
    status : String(100);
    name : String(20);
}

entity Employee
{
    key employee_ID : UUID;
    key User : String(7);
    firstname : String(100);
    lastname : String(100);
    workplace_bookings : Association to many Workplace_Booking on workplace_bookings.employee = $self;
    team : Association to one Team;
}

entity Team
{
    key team_ID : UUID;
    key name : String(100);
    team_day : String(2);
    employees : Association to many Employee on employees.team = $self;
}

entity Workplace_Booking
{
    key workplace_ID : UUID;
    start : Timestamp;
    end : Timestamp;
    workplace : Association to one Workplace;
    employee : Association to one Employee;
    key employee_ID : UUID;
    key date : Integer;
}

entity Bookings
{
    key ID : UUID;
    name : localized String(255)
        @mandatory;
}

entity floorplan_coordinates
{
    key ID : Integer;
    confidence : Decimal;
    xMin_pixel : Integer;
    yMin_pixel : Integer;
    xMax_pixel : Integer;
    yMax_pixel : Integer;
}
