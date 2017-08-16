module.exports = {
    entry: "./home",
    output: {
        path: __dirname + "/build",
        filename: "build.js"
    },
    watch: true,
    devtool: "eval"  // eval для dev, source-map - для prod
};