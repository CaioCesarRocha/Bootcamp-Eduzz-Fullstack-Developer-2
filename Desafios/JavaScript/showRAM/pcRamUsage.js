const os = require('os');

setInterval(() =>{

    const { arch, platform, totalmem, freemem} = os;

    const tRAM = totalmem() / 1024 / 1024;
    const fRAM = freemem() / 1024 / 1024;
    const Usage = (fRAM/tRAM) * 100;

    const stats = {
        os: platform(),
        Arch: arch(),
        TotalRAM: `${parseInt(tRAM)} MB`,
        FreeRam: `${parseInt(fRAM)} MB`,
        Usage: `${parseInt(Usage)} %`
    };

    console.clear();
    console.table(stats)
    exports.stats = stats;
}, 1000);

