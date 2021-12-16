module.exports = function (Blockly) {
    "use strict";

    Blockly.JavaScript['sht20_temp'] = function (block) {
        var code = '#EXTINC#include <HandySenseSHT20.h>#END' + 'handySenseSHT20TempRead';

        return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['sht30_temp'] = function (block) {
        var code = '#EXTINC#include <HandySenseSHT30.h>#END' + 'handySenseSHT30TempRead';

        return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['xy_md02_temp'] = function (block) {
        var code = '#EXTINC#include <HandySenseXY_MD02.h>#END' + 'handySenseXYMD02TempRead';

        return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['am2301_temp'] = function (block) {
        var code = '#EXTINC#include <HandySenseDHT22.h>#END' + 'handySenseDHT22TempRead';

        return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['dht22_temp'] = function (block) {
        var code = '#EXTINC#include <HandySenseDHT22.h>#END' + 'handySenseDHT22TempRead';

        return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['ds18b20_temp'] = function (block) {
        var code = '#EXTINC#include <HandySenseDS18B20.h>#END' + 'handySenseDS18B20TempRead';

        return [code, Blockly.JavaScript.ORDER_NONE];
    };
};
