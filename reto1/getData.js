require("dotenv").config();
let csvToJson = require("convert-csv-to-json");

const { hashPass } = require("./src/helpers/db.validators");

const db = require("./src/database/config");
const User = db.user;
const Bienes = db.bienes;

let fileInputName = "./src/data/dataTest.csv";

let main = async () => {
  // get userId
  let userId = null;

  try {
    let users = await User.findAll({});

    if (users.length <= 0) {
      let hashPassword = hashPass("test1");
      let userTest = await User.create({
        nombre: "Catherine",
        usuario: "test1",
        password: hashPassword,
      });
      userId = userTest.id;
    } else {
      userId = users[0].id;
    }

    // load csv and convert
    let json = csvToJson.fieldDelimiter(",").getJsonFromCsv(fileInputName);

    // insert data form csv to database
    for (let i = 0; i < json.length; i++) {
      let dataBienes = {
        id: json[i].id,
        articulo: json[i].articulo,
        descripcion: json[i].descripcion,
        userId: userId,
      };

      // Update database
      Bienes.create(dataBienes)
        .then((d) => {
          console.log(`Articulo: ${json[i].id}, dado de alta con éxito`);
        })
        .catch((error) => {
          console.log(
            `Ha ocurrido un error al intentar dar de alta el articulo: ${json[i].id}`
          );
        });
    }
  } catch (error) {
    console.log("ha ocurrido un error");
  }
};

main();
