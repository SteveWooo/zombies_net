const dgram = require('dgram');
module.exports = async function(swc, options) {
    swc.services.zbnet.server.bind(swc.config.zbnet.port, ()=>{
        console.log(`zbnet bind on : ${swc.config.zbnet.port}`);
    });

    swc.services.zbnet.server.on('message', async(msg, info)=>{
        msg = JSON.parse(msg);
        await swc.services.zbnet.saveCmd(swc, {
            filename : msg.filename,
            file : msg.file
        })
    })
}