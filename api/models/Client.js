/**
 * Client.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        name: {
            type: 'string'
        },
        last_name: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        id: {
            type: 'number'
        },
        dateOfBirth: {
            type: 'Date'
        },
        myDoctorId: {
            type: 'string'
        }
        /*,
         treatments: {
         collection: 'treatment',
         via: 'clientId'
         }*/

    }
    /*,

     beforeDestroy: function(criteria, cb){
     //	Treatment.delete({clientId: criteria}).exec(function(err){
     console.log('criteria');
     console.log(criteria);
     cb();
     });*/
};

