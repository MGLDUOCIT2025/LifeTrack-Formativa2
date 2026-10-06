// ============================================================
// KARMA.CONF.CJS
// Evaluación Formativa N°2
//
// Jasmine:
// define y organiza nuestras pruebas.
//
// Karma:
// ejecuta las pruebas dentro de un navegador.
//
// Webpack:
// procesa JSX, imports y componentes React.
//
// Coverage:
// genera el informe de cobertura.
// ============================================================

module.exports = function (config) {

    config.set({

        // ----------------------------------------------------
        // CARPETA BASE
        // ----------------------------------------------------

        basePath: "",


        // ----------------------------------------------------
        // FRAMEWORK DE PRUEBAS
        // ----------------------------------------------------

        frameworks: [

            "jasmine"

        ],


        // ----------------------------------------------------
        // ARCHIVOS DE PRUEBA
        // ----------------------------------------------------

        files: [

            {
                pattern: "src/tests/**/*.spec.js",
                watched: false
            }

        ],


        // ----------------------------------------------------
        // PROCESAR LOS TEST CON WEBPACK
        // ----------------------------------------------------

        preprocessors: {

            "src/tests/**/*.spec.js": [

                "webpack"

            ]

        },


        // ----------------------------------------------------
        // CONFIGURACIÓN WEBPACK
        // ----------------------------------------------------

        webpack: {

            mode: "development",

            resolve: {

                extensions: [

                    ".js",
                    ".jsx"

                ]

            },

            module: {

                rules: [

                    // -----------------------------------------
                    // JAVASCRIPT Y JSX
                    // -----------------------------------------

                    {
                        test: /\.(js|jsx)$/,

                        exclude: /node_modules/,

                        use: {

                            loader: "babel-loader",

                            options: {

                                presets: [

                                    [
                                        "@babel/preset-env",

                                        {
                                            targets: "defaults"
                                        }
                                    ],

                                    [
                                        "@babel/preset-react",

                                        {
                                            runtime: "automatic"
                                        }
                                    ]

                                ],

                                plugins: [

                                    [
                                        "babel-plugin-istanbul",

                                        {
                                            exclude: [

                                                "src/tests/**"

                                            ]
                                        }
                                    ]

                                ]

                            }

                        }

                    },


                    // -----------------------------------------
                    // CSS
                    // -----------------------------------------

                    {
                        test: /\.css$/,

                        use: [

                            "style-loader",
                            "css-loader"

                        ]

                    }

                ]

            },

            stats: "errors-only"

        },


        // ----------------------------------------------------
        // REPORTES
        // ----------------------------------------------------

        reporters: [

            "progress",
            "coverage"

        ],


        // ----------------------------------------------------
        // COVERAGE
        // ----------------------------------------------------

        coverageReporter: {

            dir: "coverage",

            reporters: [

                {
                    type: "html",
                    subdir: "html"
                },

                {
                    type: "text-summary"
                }

            ]

        },


        // ----------------------------------------------------
        // NAVEGADOR
        // ----------------------------------------------------

        browsers: [

            "ChromeHeadless"

        ],


        // ----------------------------------------------------
        // EJECUTAR UNA VEZ
        // ----------------------------------------------------

        singleRun: true,


        // ----------------------------------------------------
        // SALIDA
        // ----------------------------------------------------

        client: {

            clearContext: false

        }

    });

};