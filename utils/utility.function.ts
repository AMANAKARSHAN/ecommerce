import bcrypt from "bcrypt";

export const checkPassword = (password, hashedPassword) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hashedPassword, (error, same) => {
      if (error) {
        reject(error);
      } else {
        resolve(same);
      }
    });
  });
};
