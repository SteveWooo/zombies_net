module.exports = {
    init : require(`${__dirname}/init.js`),
    startup : require(`${__dirname}/startup.js`),
    server : undefined,

    saveCmd : require(`${__dirname}/handles/saveCmd`)
}