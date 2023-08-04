const dirBoard = Vue.prototype.$global.board.board_info.dir;
const dirIcon = name => `file:///${dirBoard}/static/icons/${name}`

module.exports = function (Blockly) {
    "use strict";

    Blockly.Blocks['bh1750_light'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(dirIcon("sun.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }))
                .appendField("BH1750 (I2C)");
            this.setOutput(true, "light_sensor");
            this.setColour(0);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['ats_lux_light'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(dirIcon("sun.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }))
                .appendField("ATS-LUX (RS485 | ID: 1)");
            this.setOutput(true, "light_sensor");
            this.setColour(0);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
};
