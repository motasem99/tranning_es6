/*
    Default Parameter ....
*/

function ShowMyInfo(userName, role, theme) {
  //   userName = userName === undefined ? 'Default User' : userName;

  //   role = role === undefined ? 'Default role' : role;

  //   theme = theme === undefined ? 'Default theme' : theme;

  userName = userName || 'Default User';

  role = role || 'Default role';

  theme = theme || 'Default theme';

  return `hello ${userName}, your role is: ${role}, website theme is: ${theme}`;
}

console.log(ShowMyInfo());

console.log(ShowMyInfo('mutasem'));

console.log(ShowMyInfo('mutasem', 'admin'));

console.log(ShowMyInfo('mutasem', 'admin', 'blue'));
