const dirBoard = Vue.prototype.$global.board.board_info.dir;
const dirIcon = name => `file:///${dirBoard}/static/icons/${name}`

module.exports = function (Blockly) {
    "use strict";

    Blockly.Blocks['capacitive_soil_moisture_sensor_v1.2_soil'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(dirIcon("soil.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }))
                .appendField("Capacitive Soil Moisture Sensor V1.2 (A1)");
            this.setOutput(true, "soil_sensor");
            this.setColour(180);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['jxbs_3001_tr_soil'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(dirIcon("soil.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }))
                .appendField("JXBS-3001-TR (RS485 | ID: 1)");
            this.setOutput(true, "soil_sensor");
            this.setColour(180);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
};
