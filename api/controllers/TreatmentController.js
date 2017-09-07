/**
 * TreatmentController
 *
 * @description :: Server-side logic for managing treatments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    voiceToText : voiceToText
	
};

function voiceToText(request, response){
    var soundBinaryStr = request.body;

    // todo: predfom a check here.
    var textToReturn = "howdeyyy!";

    response.send(textToReturn);
}
