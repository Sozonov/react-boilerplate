const NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = () => NODE_ENV === 'development';

module.exports = {
    entry: "./home",
    output: {
        path: __dirname + "/build",
        filename: "build.js"
    },
    watch: isDev(),
    watchOptions: {
        aggregateTimeout: 100
    },
    
    devtool: isDev() ? "eval" : "source-map"   // eval для dev, source-map - для prod
};