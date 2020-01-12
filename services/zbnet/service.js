module.exports = {
    startup : require(`${__dirname}/startup.js`),
    server : undefined,

    saveCmd : require(`${__dirname}/handles/saveCmd`)
}