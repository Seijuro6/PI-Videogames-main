//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require('axios');
const {API_KEY} = process.env;
const {Genero} = require('./src/db');

const genresApi = async () =>{
        const url = `https://api.rawg.io/api/genres?key=${API_KEY}`;
        const genres = await axios.get(url);
        let id = 1
        const info = await genres.data.results.map(ele =>{
            return {
                id:id++,
                Nombre: ele.name,
            }
        });
    await Genero.bulkCreate([...info]);
    return info;
   
} 

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    try {
      await genresApi();
    } catch (error) {
      // res.send(error.message);
      // verificar como manejar este error
      console.log(error, "solicitud de generos");
    }
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
