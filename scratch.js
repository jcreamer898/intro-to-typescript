/**
* @typedef {Object} User
* @property {string} name The name of the user
* @property {number} age The age of the user
* @property {date} birthday The birthday of the user
* @property {string[]} [hobbies] User hobbies
*/

/**
 * List a user's hobbies
 * @param user {User}
 */
const listUserHobbies = (user) => {
  if (user.hobbies) {
    user.hobbies.forEach(hobby => {
      console.log(hobby);
    });
  }

  user.

  return;
};