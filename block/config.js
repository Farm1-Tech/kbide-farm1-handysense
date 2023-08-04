const dirBoard = Vue.prototype.$global.board.board_info.dir;
const dirIcon = name => `file:///${dirBoard}/static/icons/${name}`

module.exports = {
    /*initial_blocks : `
        <xml>
            <block type="arduino_init" deletable="false" x="-100" y="-50"></block>
            <block type="arduino_loop" deletable="false" x="100" y="-50"></block>
        </xml>`,*/
    initial_blocks: `
        <xml>
            <block type="handy_sense_configs_sensor" deletable="false" x="0" y="0">
                <value name="temp">
                    <block type="sht20_temp"></block>
                </value>
                <value name="humi">
                    <block type="sht20_humi"></block>
                </value>
                <value name="soil">
                    <block type="capacitive_soil_moisture_sensor_v1.2_soil"></block>
                </value>
                <value name="light">
                    <block type="bh1750_light"></block>
                </value>
            </block>
        </xml>
    `,
    // blocks: [
    base_blocks: [
        /*{
            name: "HandySense",
            color: "230",
            icon: dirIcon("website-design.svg"),
            blocks: [
                {
                    xml: `
                        <block type="handy_sense_configs_sensor">
                            <value name="temp">
                                <block type="sht20_temp"></block>
                            </value>
                            <value name="humi">
                                <block type="sht20_humi"></block>
                            </value>
                            <value name="soil">
                                <block type="capacitive_soil_moisture_sensor_v1.2_soil"></block>
                            </value>
                            <value name="light">
                                <block type="bh1750_light"></block>
                            </value>
                        </block>
                    `
                },
            ]
        },*/
        {
            name: "อุณหภูมิ",
            color: "230",
            icon: dirIcon("thermometer.svg"),
            blocks: [
                "sht20_temp",
                "sht30_temp",
                "sht45_temp",
                "ats_th_temp",
                "xy_md02_temp",
                "am2301_temp",
                "dht22_temp",
                "ds18b20_temp",
                "jxbs_3001_tr_temp",
            ]
        },
        {
            name: "ความชื้นอากาศ",
            color: "230",
            icon: dirIcon("humidity.svg"),
            blocks: [
                "sht20_humi",
                "sht30_humi",
                "sht45_humi",
                "ats_th_humi",
                "xy_md02_humi",
                "am2301_humi",
                "dht22_humi",
            ]
        },
        {
            name: "ความชื้นดิน",
            color: "230",
            icon: dirIcon("soil.svg"),
            blocks: [
                "capacitive_soil_moisture_sensor_v1.2_soil",
                "jxbs_3001_tr_soil",
                "rs485_soil_soil"
            ]
        },
        {
            name: "แสง",
            color: "230",
            icon: dirIcon("sun.svg"),
            blocks: [
                "bh1750_light",
                "ats_lux_light",
            ]
        },
    ]
}
