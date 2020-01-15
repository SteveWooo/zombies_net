const dgram = require('dgram');
module.exports = async function(swc, options) {
    swc.services.zbnet.server.bind(swc.config.zbnet.port, ()=>{
        console.log(`zbnet bind on : ${swc.config.zbnet.port}`);
    });
    swc.services.zbnet.server.on('message', async(msg, info)=>{
        msg = JSON.parse(msg);
        console.log(msg);
        if(msg.filename == undefined && msg.file == undefined) {
            swc.log.error('Params Error.');
            return ;
        }

        if(!(msg.handle in swc.services.zbnet.handles)) {
            swc.log.error('Handle not Fount.');
            return ;
        }

        await swc.services.zbnet.handles[msg.handle](swc, msg);
    })
}