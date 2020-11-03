// const { getDefaultConfig } = require("metro-config");

// module.exports = (async () => {
//   const {
//     resolver: { sourceExts }
//   } = await getDefaultConfig();
//   return {
//     transformer: {
//       babelTransformerPath: require.resolve("react-native-sass-transformer")
//     },
//     resolver: {
//       sourceExts: [...sourceExts, "scss", "sass"]
//     }
//   };
// })();


//two 

// const { getDefaultConfig } = require("metro-config")

// module.exports = (async () => {
//   const {
//     resolver: { sourceExts }
//   } = await getDefaultConfig()
//   return {
//     transformer: {
//       assetPlugins: ["expo-asset/tools/hashAssetFiles"],
//       babelTransformerPath: require.resolve(
//         "react-native-typed-sass-transformer",
//         "react-native-typescript-transformer"
//       )
//     },
//     resolver: {
//       sourceExts: [...sourceExts, "scss", "sass"]
//     }
//   }
// })()



/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
// const { getDefaultConfig } = require("metro-config");

// module.exports = (async () => {
//   const {
//     resolver: { sourceExts, assetExts }
//   } = await getDefaultConfig();
//   return {
//     transformer: {
//       getTransformOptions: async () => ({
//         transform: {
//           experimentalImportSupport: false,
//           inlineRequires: false
//         }
//       }),
//       babelTransformerPath: require.resolve("./transformer.js")
//     },
//     resolver: {
//       sourceExts: [...sourceExts, "scss", "css"]
//     }
//   };
// })();




const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts }
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-sass-transformer")
    },
    resolver: {
      sourceExts: [...sourceExts, "scss", "sass"]
    }
  };
})();

