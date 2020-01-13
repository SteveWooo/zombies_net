const fs = require('fs');
async function access(swc, options) {
    
}

async function main() {
    var swc;
    try {
        swc = await require(`${__dirname}/../keke_stage/server/models/swc/init`)();
        swc = await require(`${__dirname}/../controllers/access`)(swc, {});

        await access(swc, {});
    } catch (e) {
        console.log(e);
        process.exit();
    }
}

main();
