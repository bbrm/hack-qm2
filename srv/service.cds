using { quartiermeister2 as my } from '../db/schema.cds';

@path : '/service/QmService'
service QmService
{
}

annotate QmService with @requires :
[
    'authenticated-user'
];
