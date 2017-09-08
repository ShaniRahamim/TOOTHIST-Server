/**
 * Treatment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        _id:	  {
            type: 'string',
            primaryKey: true
        },
        clientId: {
            type: 'string'
//              model: 'client'
        },
        doctorId: {
            type: 'string'
        },
        anamnesis: {
            type: 'string'
        },
        reasonOfTreatment: {
            type: 'string'
        }
    }
};

