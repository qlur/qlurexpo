// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//     plugins: [
//       "react-native-classname-to-style",
//       [
//         "react-native-platform-specific-extensions",
//         { extensions: ["css", "scss", "sass"] }
//       ],
//     ]
//   };
// };

// module.exports = function(api) {
//   api.cache(true)
//   return {
//     presets: ["babel-preset-expo"],
//     plugins: [
//       "@babel/plugin-proposal-export-namespace-from",
//       "react-native-classname-to-style",
//       [
//           "react-native-platform-specific-extensions",
//           {
//           "extensions": ["scss", "sass"]
//           }
//       ]
//     ]
//   }
// }

// {
//   "presets": ["module:metro-react-native-babel-preset"],
//   "plugins": [
//     "react-native-classname-to-style",
//     [
//       "react-native-platform-specific-extensions",
//       {
//         "extensions": ["scss", "sass"]
//       }
//     ]
//   ]
// }


module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-classname-to-style",
      [
        "react-native-platform-specific-extensions",
        { extensions: ["scss", "sass"] }
      ]
    ]
  };
};




