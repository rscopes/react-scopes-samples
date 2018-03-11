/*
 * Copyright (c)  2018 Wise Wild Web .
 *
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *
 * @author : Nathanael Braun
 * @contact : caipilabs@gmail.com
 */

var fs      = require("fs");
var webpack = require("webpack");
var path    = require("path");
var glob    = require("glob");


var production    = process.argv.indexOf("--production") > -1
    || process.argv.indexOf("-p") > -1;
var nodeExternals = require('webpack-node-externals'),
    mkConf        = ( name, entries ) => {
    
        return {
            entry  : entries,
            output : {
                path      : "dist/" + name + "",
                filename  : "[name]",
                publicPath: "/",
            },
            devtool: 'source-map',
            //target   : 'node', // in order to ignore built-in modules like path, fs, etc.
            //externals: [nodeExternals()],
            resolve: {
                extensions: [
                    "",
                    ".js",
                    ".json",
                ],
                modules   : [__dirname + '/node_modules', __dirname + '/src/' + name + '/node_modules']
            },
        
            module : {
                loaders: [
                    {
                        test   : /\.js$/,
                        exclude: /node_modules/,
                        loader : 'babel-loader',
                        query  : {
                            cacheDirectory: true, //important for performance
                            presets       : [
                                'babel-preset-react',
                                'babel-preset-es2015',
                                'babel-preset-stage-0'
                            ].map(require.resolve),
                            plugins       : [
                                "babel-plugin-add-module-exports",
                                'babel-plugin-transform-decorators-legacy'
                            ].map(require.resolve)
                        }
                    },
                    {
                        test   : /\.json$/,
                        loaders: [
                            "json",
                        ],
                    },
                    {
                        test   : /\.(html|txt)$/,
                        loaders: [
                            "file-loader?name=[name].[ext]&context=./src",
                        ],
                    },
                ],
            },
            plugins: (
                [
                    new webpack.BannerPlugin(fs.readFileSync("./LICENCE.HEAD.MD").toString()),
                
                    new webpack.DefinePlugin({
                                                 __PROD__: production
                                             }),
                    production ? new webpack.optimize.UglifyJsPlugin(
                        {
                            compress: {
                                screw_ie8   : true, // React doesn't support IE8
                                warnings    : false,
                                drop_console: true
                            },
                            mangle  : {
                                screw_ie8: true
                            },
                            output  : {
                                comments : false,
                                screw_ie8: true
                            }
                        }) : p => false,
            
                ]
            ),
        }
    },
    entries       = glob.sync('./src/*/package.json').map(
        ( pathname ) => {
            let sample;
            try {
                sample = JSON.parse(fs.readFileSync(pathname) + "");
            } catch ( e ) {
                return null;
            }
            console.warn(sample.name, [path.dirname(pathname) + '/' + sample.main, path.dirname(pathname) + '/' + sample.mainHtml])
            return mkConf(sample.name, {
                [sample.main]: [path.dirname(pathname) + '/' + sample.main, path.dirname(pathname) + '/' + sample.mainHtml]
            })
        }
    )
;
console.warn(entries)
module.exports = entries