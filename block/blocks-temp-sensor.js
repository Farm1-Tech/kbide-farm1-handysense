const dirBoard = Vue.prototype.$global.board.board_info.dir;
const dirIcon = name => `file:///${dirBoard}/static/icons/${name}`

module.exports = function (Blockly) {
    "use strict";

    Blockly.Blocks['sht20_temp'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(dirIcon("thermometer.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }))
                .appendField("SHT20 (I2C)");
            this.setOutput(true, "temp_sensor");
            this.setColour(240);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['sht30_temp'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(dirIcon("thermometer.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }))
                .appendField("SHT30 (I2C | Address: 0x44)");
            this.setOutput(true, "temp_sensor");
            this.setColour(240);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['sht45_temp'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(dirIcon("thermometer.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }))
                .appendField("SHT45 (I2C)");
            this.setOutput(true, "temp_sensor");
            this.setColour(240);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['ats_th_temp'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(dirIcon("thermometer.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }))
                .appendField("ATS-TH (RS485 | ID: 1)");
            this.setOutput(true, "temp_sensor");
            this.setColour(240);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['xy_md02_temp'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(dirIcon("thermometer.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }))
                .appendField("XY-MD02 (RS485 | ID: 1)");
            this.setOutput(true, "temp_sensor");
            this.setColour(240);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['am2301_temp'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(dirIcon("thermometer.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }))
                .appendField("AM2301 (D3)");
            this.setOutput(true, "temp_sensor");
            this.setColour(240);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['dht22_temp'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(dirIcon("thermometer.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }))
                .appendField("DHT22 (D3)");
            this.setOutput(true, "temp_sensor");
            this.setColour(240);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['ds18b20_temp'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(dirIcon("thermometer.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }))
                .appendField("DS18B20 (D3)");
            this.setOutput(true, "temp_sensor");
            this.setColour(240);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['jxbs_3001_tr_temp'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage(dirIcon("thermometer.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }))
                .appendField("JXBS-3001-TR (RS485 | ID: 1)");
            this.setOutput(true, "temp_sensor");
            this.setColour(240);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
};
