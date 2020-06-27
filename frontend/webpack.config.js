const path = require('path')

module.exports = {
    //primeiro arquivo que será carregado na api
    entry: path.resolve(__dirname,'src','index.js'),
    //qual arquivo que será gerado após a conversão
    output:{
        path: path.resolve(__dirname,'public'),
        filename: "bundle.js"
    },
    //informar para o webpack-server qual o diretório com o bundle.js e index.html
    devServer:{
        contentBase:path.resolve(__dirname,'public')
    },
    //regrads de conversão. ex arquivos JS: usar babel, arquivos CSS: usar webpack
    module:{
        //vetor com as regras
        rules:[
            //cada regra é um loader 
            {
                test: /\.js$/, //todos os arquivos que terminam com ".js"
                exclude: /node_modules/ , //excluir da conversão os nodeModules
                use: { loader: 'babel-loader'}
            },

            {
                test: /\.css$/,
                exclude:/node_modules/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    }
}