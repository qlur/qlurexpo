// var upstreamTransformer = require("metro-react-native-babel-transformer");
// var sassTransformer = require("react-native-sass-transformer");

// //change this Global.scss with main scss file
// // var theme = (process.cwd() + "/src/styles/Global.scss").replace(/\\/g, "/");

// module.exports.transform = function ({ src, filename, options }) {
// 	if (filename.endsWith(".scss") || filename.endsWith(".sass")) {
// 		var opts = Object.assign(options, {
// 			sassOptions: {
// 				functions: {
// 					"rem($px)": px => {
// 						px.setValue(px.getValue() / 16);
// 						px.setUnit("rem");
// 						return px;
// 					}
// 				}
// 			}
// 		});

// 		// src = `@import "${theme}"; \n\n ` + src;

// 		return sassTransformer.transform({ src, filename, options: opts });
// 	} else {
// 		return upstreamTransformer.transform({ src, filename, options });
// 	}
// };


//new 


// // For React Native version 0.56 or later
// var upstreamTransformer = require("metro/src/reactNativeTransformer");

// // For React Native version 0.52-0.55
// // var upstreamTransformer = require("metro/src/transformer");

// // For React Native version 0.47-0.51
// // var upstreamTransformer = require("metro-bundler/src/transformer");

// // For React Native version 0.46
// // var upstreamTransformer = require("metro-bundler/build/transformer");

// var cssTransformer = require("react-native-css-transformer");
// var typescriptTransformer = require("react-native-typescript-transformer");

// module.exports.transform = function({ src, filename, options }) {
//   if (filename.endsWith(".css")) {
//     return cssTransformer.transform({ src, filename, options });
//   } else if (filename.endsWith(".ts") || filename.endsWith(".tsx")) {
//     return typescriptTransformer.transform({ src, filename, options });
//   }
//   return upstreamTransformer.transform({ src, filename, options });
// };


var upstreamTransformer = require("metro-react-native-babel-transformer");
var sassTransformer = require("react-native-typed-sass-transformer");
var postCSSTransformer = require("react-native-typed-postcss-transformer");

module.exports.transform = function ({ src, filename, options }) {
    if (filename.endsWith(".scss") || filename.endsWith(".sass")) {
        return sassTransformer
            .renderToCSS({ src, filename, options })
            .then(css =>
                postCSSTransformer.transform({ src: css, filename, options })
            );
    } else if (filename.endsWith(".css")) {
        return postCSSTransformer.transform({ src, filename, options });
    } else {
        return upstreamTransformer.transform({ src, filename, options });
    }
};