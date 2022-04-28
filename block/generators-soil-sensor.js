module.exports = function (Blockly) {
    "use strict";

    Blockly.JavaScript['capacitive_soil_moisture_sensor_v1.2_soil'] = function (block) {
        var code = '#EXTINC#include <HandySenseCapacitiveSoilMoistureSensorV1_2.h>#END' + 'handySenseCapacitiveSoilMoistureSensorV1SoilRead';

        return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['jxbs_3001_tr_soil'] = function (block) {
        var code = '#EXTINC#include <HandySenseJXBS_3001_TR.h>#END' + 'handySenseJXBS3001TRSoilRead';

        return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['rs485_soil_soil'] = function (block) {
        var code = '#EXTINC#include <HandySenseRS485_SOIL.h>#END' + 'handySenseRS485_SOILSoilRead';

        return [code, Blockly.JavaScript.ORDER_NONE];
    };
};
