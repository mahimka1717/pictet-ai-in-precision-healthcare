const path = require('path');
const {name, domain} = require('./package.json');
// const subdomain = domain + '/' + name + '/';
const isProd = process.env.NODE_ENV === 'production';
const withPlugins = require('next-compose-plugins');
const withExportImages = require('next-export-optimize-images');

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const nextConfig = {
  reactStrictMode: false,

  images: {
    deviceSizes: [640, 960, 1280, 1600, 1920],
  },

  webpack: (config, options) => {

    config.resolve.alias['~'] = path.resolve(__dirname);
    config.output.filename = config.output.filename.replace('-[contenthash]', '');
    config.output.chunkFilename = config.output.chunkFilename.replace('.[contenthash]', '');
    config.module.generator.asset.filename = config.module.generator.asset.filename.replace('.[hash:8]', '');

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    config.module.rules.push({
      test: /\.(sass|scss|css)$/i,
      use: [
        MiniCssExtractPlugin.loader, 
        {
          loader: "css-loader",
          options: {
            modules: {
              mode: (resourcePath) => {
                if (/global.sass$/i.test(resourcePath)) {
                  return "global";
                }
                if (/_animate.sass$/i.test(resourcePath)) {
                  return "global";
                }
                return "local";
              },
              localIdentName: isProd ? "[hash:base64:5]" : "[name]--[local]",
            },
          },
        },
        {
          loader: `postcss-loader`,
          options: {
            postcssOptions: {
              plugins: [
                "postcss-flexbugs-fixes",
                [
                  "postcss-preset-env",
                  {
                    "autoprefixer": {
                      "flexbox": "no-2009"
                    },
                    "stage": 3,
                    "features": {
                      "custom-properties": false
                    }
                  }
                ]
              ]
            },
          },
        },
        `sass-loader`,
        {
          loader: 'sass-resources-loader',
          options: {
            resources: './src/styles/resources.sass',
          },
        }
      ],
    });

    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "static/chunks/[name].css",
        chunkFilename: "static/chunks/[name].css",
      })
    );

    return config
     
  },

};

module.exports = async (phase) => withPlugins([
  withExportImages,
  // withBundleAnalyzer
], nextConfig)(phase, { undefined });