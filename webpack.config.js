// webpack is tasking code in our assets directory and placing a generated bundle somewhere that django can discover and that's in the static directory
const path = require('path')
module.exports = {
    entry:'./assets/scripts/index.js',
    output:{
        filename:'bundle.js',
        // we are the place the generated bundles into the static directory of main app
        path:path.resolve(__dirname,'main','static') 
    }
}