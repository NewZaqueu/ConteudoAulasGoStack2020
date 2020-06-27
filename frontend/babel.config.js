module.exports = {
    presets:[ //conjunto de configurações de terceiros que podemos aproveitar no nosso código
        '@babel/preset-env',
        '@babel/preset-react'
    ],
    plugins:[
        '@babel/plugin-transform-runtime'
    ]
}