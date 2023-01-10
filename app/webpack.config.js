const defaults = require("@wordpress/scripts/config/webpack.config");

module.exports = {
    ...defaults,
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    watch: true,
    watchOptions: {
        poll: true,
        ignored: /node_modules/
    }
};
