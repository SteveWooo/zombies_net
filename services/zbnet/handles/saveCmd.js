const ExecSync = require('child_process').execSync;
const fs = require('fs');
/**
 * 传入文件，文件名，执行文件的方式
 * @param file
 * @param filename
 * 文件一般为脚本文件，僵尸节点做的事情就是运行这个脚本
 */
module.exports = async (swc, options)=>{
    fs.writeFileSync(`${__dirname}/../commandFiles/${options.filename}`, options.file);
}