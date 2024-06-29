function importAll(r: __WebpackModuleApi.RequireContext) {
    return r.keys().map(key => r(key).default);
}
/*- для того чтобы свойство context распозналось Typescript надо установить дополнительно типы (npm i  @types/webpack-env)
  - метод importAll динамически импортирует файлы картинок и сохраняет их в переменную images*/



export const {images} = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));