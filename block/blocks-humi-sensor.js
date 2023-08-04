const dirBoard = Vue.prototype.$global.board.board_info.dir;
const dirIcon = name => `file:///${dirBoard}/static/icons/${name}`

module.exports = function (Blockly) {
    "use strict";

    Blockly.Blocks['sht20_humi'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(dirIcon("humidity.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }))
                .appendField("SHT20 (I2C)");
            this.setOutput(true, "humi_sensor");
            this.setColour(315);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['sht30_humi'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(dirIcon("humidity.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }))
                .appendField("SHT30 (I2C | Address: 0x44)");
            this.setOutput(true, "humi_sensor");
            this.setColour(315);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['sht45_humi'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(dirIcon("humidity.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }))
                .appendField("SHT45 (I2C)");
            this.setOutput(true, "humi_sensor");
            this.setColour(315);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['ats_th_humi'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(dirIcon("humidity.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }))
                .appendField("ATS-TH (RS485 | ID: 1)");
            this.setOutput(true, "humi_sensor");
            this.setColour(315);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['ats_co2_humi'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(dirIcon("humidity.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }))
                .appendField("ATS-CO2 (RS485 | ID: 1)");
            this.setOutput(true, "humi_sensor");
            this.setColour(315);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['xy_md02_humi'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(dirIcon("humidity.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }))
                .appendField("XY-MD02 (RS485 | ID: 1)");
            this.setOutput(true, "humi_sensor");
            this.setColour(315);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['am2301_humi'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(dirIcon("humidity.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }))
                .appendField("AM2301 (D3)");
            this.setOutput(true, "humi_sensor");
            this.setColour(315);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['dht22_humi'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(dirIcon("humidity.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }))
                .appendField("DHT22 (D3)");
            this.setOutput(true, "humi_sensor");
            this.setColour(315);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
};
