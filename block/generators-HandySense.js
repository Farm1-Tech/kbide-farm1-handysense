module.exports = function (Blockly) {
    'use strict';

    Blockly.JavaScript['handy_sense_configs_sensor'] = function(block) {
        var value_temp = Blockly.JavaScript.valueToCode(block, 'temp', Blockly.JavaScript.ORDER_ATOMIC);
        var value_humi = Blockly.JavaScript.valueToCode(block, 'humi', Blockly.JavaScript.ORDER_ATOMIC);
        var value_soil = Blockly.JavaScript.valueToCode(block, 'soil', Blockly.JavaScript.ORDER_ATOMIC);
        var value_light = Blockly.JavaScript.valueToCode(block, 'light', Blockly.JavaScript.ORDER_ATOMIC);

        var code = "";
        code += `#SETUP setGetTempFunction(${value_temp || "NULL"}); #END\n`;
        code += `#SETUP setGetHumiFunction(${value_humi || "NULL"}); #END\n`;
        code += `#SETUP setGetSoilFunction(${value_soil || "NULL"}); #END\n`;
        code += `#SETUP setGetLightFunction(${value_light || "NULL"}); #END\n`;
        return code;
    };
};
