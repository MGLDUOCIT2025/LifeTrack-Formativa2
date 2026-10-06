// ============================================================
// BABEL.CONFIG.CJS
// Configuración utilizada por Karma/Webpack para interpretar
// JavaScript moderno y JSX de React durante las pruebas.
// ============================================================

module.exports = {

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

    ]

};