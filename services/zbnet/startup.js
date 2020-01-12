const dgram = require('dgram');
module.exports = async function(swc, options) {
    var server = dgram.createSocket('udp4');
    server.bind(swc.config.zbnet.port, ()=>{
        console.log(`zbnet bind on : ${swc.config.zbnet.port}`);
    });

    server.on('message', async(msg, info)=>{
        msg = JSON.parse(msg);
        await swc.services.zbnet.saveCmd(swc, {
            filename : msg.filename,
            file : msg.file
        })
    })

    swc.services.zbnet.server = server;
}