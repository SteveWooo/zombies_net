const dgram = require('dgram');
module.exports = async function (swc, options) {
    var server = dgram.createSocket('udp4');
    swc.services.zbnet.server = server;
}