const dirBoard = Vue.prototype.$global.board.board_info.dir;
const dirIcon = name => `file:///${dirBoard}/static/icons/${name}`

module.exports = function (Blockly) {
    "use strict";

    Blockly.Blocks['handy_sense_configs_sensor'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("เลือกเซ็นเซอร์ HandySense");
            this.appendValueInput("temp")
                .setCheck("temp_sensor")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("อุณหภูมิอากาศ")
                .appendField(new Blockly.FieldImage(dirIcon("thermometer.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }));
            this.appendValueInput("humi")
                .setCheck("humi_sensor")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("ความชื้นอากาศ")
                .appendField(new Blockly.FieldImage(dirIcon("humidity.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }));
            this.appendValueInput("soil")
                .setCheck("soil_sensor")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("ความชื้นในดิน")
                .appendField(new Blockly.FieldImage(dirIcon("soil.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }));
            this.appendValueInput("light")
                .setCheck("light_sensor")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("แสงสว่าง")
                .appendField(new Blockly.FieldImage(dirIcon("sun.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }));
            this.setInputsInline(false);
            this.setColour(135);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
};
