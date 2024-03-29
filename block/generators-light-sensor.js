module.exports = function (Blockly) {
    "use strict";

    Blockly.JavaScript['bh1750_light'] = function (block) {
        var code = '#EXTINC#include <HandySenseBH1750.h>#END' + 'handySenseBH1750LightRead';

        return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['ats_lux_light'] = function (block) {
        var code = '#EXTINC#include <HandySenseATS-LUX.h>#END' + 'handySenseRS485_ATS_LUX_LightRead';

        return [code, Blockly.JavaScript.ORDER_NONE];
    };
};
