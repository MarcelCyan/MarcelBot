const fs = require('fs-extra')
const { bgcolor, color } = require('./color')

function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

function nocache(module, cb = () => { }) {
    //console.log(bgcolor(`'module ${module} dipantau oleh Marcel'`, 'red'))
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

module.exports = {
    uncache,
    nocache
}
