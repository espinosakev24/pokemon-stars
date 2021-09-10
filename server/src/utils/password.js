const { genSalt, hash, compare } = require('bcrypt');

module.exports.hashPassword = (password) =>
  new Promise((resolve, reject) => {
    const saltRounds = 10;

    genSalt(saltRounds, (error, salt) =>
      hash(password, salt, (err, hashedPass) => {
        if (error || err) {
          reject('Could not hash the password');
        }

        return resolve(hashedPass);
      })
    );
  });

module.exports.comparePasswords = (password, hash) =>
  new Promise((resolve, reject) =>
    compare(password, hash, (err, result) => {
      if (err) reject('Password compare failed', err);

      return resolve(result);
    })
  );
