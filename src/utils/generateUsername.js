export function generateUsername(name) {
  const randomId = Math.floor(Math.random() * 10000);
  const username = name.replace(/\s+/g, "").toLowerCase();
  return `${username}${randomId}`;
}

export function generatePassword(length) {
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var password = "";
  for (var i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}
