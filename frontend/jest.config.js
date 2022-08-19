
//[dev-dependency] jest-environment-jsdom !!!! not jsdom
const config = {
    testEnvironment: "jsdom",
    testEnvironmentOptions :{
      url: "https://localhost/"
    },
    verbose: true,
    transform: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/fileTransformer.js',
        "^.+\\.[t|j]sx?$": "babel-jest",
    },


}

module.exports = config;
