export const listOfDevices =[
    { name: "Smart Socket", serialNumber: "SS001A2", battery: "85", workingTime: "5 hours", activity: "10 minutes ago" },
    { name: "LED Bulb", serialNumber: "LB1234B", battery: "40", workingTime: "8 hours", activity: "1 hour ago" },
    { name: "Garden Lamp", serialNumber: "GL5678C", battery: "60", workingTime: "12 hours", activity: "30 minutes ago" },
    { name: "Smart Light Strip", serialNumber: "SLS9012D", battery: "75", workingTime: "3 hours", activity: "15 minutes ago" },
    { name: "WiFi Plug", serialNumber: "WP3456E", battery: "50", workingTime: "6 hours", activity: "2 hours ago" },
    { name: "Thermostat", serialNumber: "TH7890F", battery: "80", workingTime: "24 hours", activity: "45 minutes ago" },
    { name: "Door Sensor", serialNumber: "DS1357G", battery: "30", workingTime: "10 hours", activity: "5 minutes ago" },
    { name: "Motion Detector", serialNumber: "MD2468H", battery: "90", workingTime: "7 hours", activity: "20 minutes ago" },
    { name: "Smart Lock", serialNumber: "SL3579I", battery: "95", workingTime: "15 hours", activity: "3 hours ago" },
    { name: "Security Camera", serialNumber: "SC4680J", battery: "55", workingTime: "20 hours", activity: "1 day ago" },
    { name: "Air Quality Monitor", serialNumber: "AQM5791K", battery: "65", workingTime: "18 hours", activity: "2 days ago" },
    { name: "Water Leak Sensor", serialNumber: "WLS6822L", battery: "70", workingTime: "4 hours", activity: "10 hours ago" },
    { name: "Smart Fan", serialNumber: "SF7933M", battery: "45", workingTime: "9 hours", activity: "3 minutes ago" },
    { name: "Heating Pad", serialNumber: "HP8044N", battery: "85", workingTime: "1 hour", activity: "4 hours ago" },
    { name: "Smart Mirror", serialNumber: "SM9155O", battery: "78", workingTime: "2 hours", activity: "6 hours ago" },
    { name: "Wireless Speaker", serialNumber: "WS0266P", battery: "50", workingTime: "11 hours", activity: "12 hours ago" },
    { name: "Night Light", serialNumber: "NL1377Q", battery: "92", workingTime: "14 hours", activity: "8 hours ago" },
    { name: "Smart Kettle", serialNumber: "SK2488R", battery: "60", workingTime: "30 minutes", activity: "2 minutes ago" },
    { name: "Robot Vacuum", serialNumber: "RV3599S", battery: "35", workingTime: "16 hours", activity: "1 week ago" },
    { name: "Baby Monitor", serialNumber: "BM4700T", battery: "80", workingTime: "5 hours", activity: "1 month ago" }
]

export const dataPayload = {
    air : {
        temperature: {
            inside: "-",
            outside: "-"
        },
        humidity: "-",
        comfortRate: "-"
    },
    visitors : {
        today: "-",
        week: "-",
        month: "-"
    },
    total:{
        usageElectricity: '-',
        moneySpent: '-'
    },
    computers:[
        {
            name: '-',
            usageTime: '-',
            usageLast: '-',
            usageElectricity: '-',
            moneySpent: '-'
        }
    ],
    switchables:[
        {
            type: '-',
            name: '-',
            identity: '-',
            usageTime: '-',
            lastActivity: '-'
        }
    ],
    settings:[
        {
            title:"-",
            type: '-',
            options:[
                {
                    id: 0,
                    name:"-"
                }
            ]
        },
    ]
}