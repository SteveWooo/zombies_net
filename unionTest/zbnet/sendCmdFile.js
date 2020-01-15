const fs = require('fs');
const dgram = require('dgram');

async function save(swc, options) {
    var socket = swc.services.zbnet.server;
    var data = {
        handle: 'saveCmd',
        filename: 'cmd.sh',
        file: `echo 'hi'`
    }
    socket.send(JSON.stringify(data), 7777, '127.0.0.1', () => {
        console.log('sent save');
        socket.close();
    })
}

async function run(swc, options) {
    var socket = swc.services.zbnet.server;
    var data = {
        handle: 'runCmd',
        filename: 'cmd.sh'
    }
    socket.send(JSON.stringify(data), 7777, '127.0.0.1', () => {
        console.log('sent run');
        socket.close();
    })
}

async function access(swc, options) {
    // await save(swc, {});
    await run(swc, {});
}

async function main() {
    var swc;
    try {
        swc = await require(`${__dirname}/../../keke_stage/server/models/swc/init`)();
        swc = await require(`${__dirname}/../../controllers/access`)(swc, {});

        await access(swc, {});
    } catch (e) {
        console.log(e);
        process.exit();
    }
}

main();
