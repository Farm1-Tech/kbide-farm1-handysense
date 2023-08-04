module.exports = function (Blockly) {
    "use strict";

    Blockly.JavaScript['sht20_humi'] = function (block) {
        var code = '#EXTINC#include <HandySenseSHT20.h>#END' + 'handySenseSHT20HumiRead';

        return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['sht30_humi'] = function (block) {
        var code = '#EXTINC#include <HandySenseSHT30.h>#END' + 'handySenseSHT30HumiRead';

        return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['sht45_humi'] = function (block) {
        var code = '#EXTINC#include <HandySenseSHT45.h>#END' + 'handySenseSHT45HumiRead';

        return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['xy_md02_humi'] = function (block) {
        var code = '#EXTINC#include <HandySenseXY_MD02.h>#END' + 'handySenseXYMD02HumiRead';

        return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['am2301_humi'] = function (block) {
        var code = '#EXTINC#include <HandySenseDHT22.h>#END' + 'handySenseDHT22HumiRead';

        return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['dht22_humi'] = function (block) {
        var code = '#EXTINC#include <HandySenseDHT22.h>#END' + 'handySenseDHT22HumiRead';

        return [code, Blockly.JavaScript.ORDER_NONE];
    };
};
