const jwt = require("jsonwebtoken");

const jwtGenerate = (uid) => {
  return new Promise((resolve, reject) => {
    const payload = { uid: uid };

    jwt.sign(
      payload,
      process.env.SECRETORPRIVATEKEY,
      {
        expiresIn: "4h",
      },
      (error, token) => {
        if (error) {
          console.log(error);
          reject("No se pudo generar el token.");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
  jwtGenerate,
};
