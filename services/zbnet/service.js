module.exports = {
    init : require(`${__dirname}/init.js`),
    startup : require(`${__dirname}/startup.js`),
    server : undefined,

    handles : {
        saveCmd: require(`${__dirname}/handles/saveCmd`),
        runCmd: require(`${__dirname}/handles/runCmd`)
    }
    
}