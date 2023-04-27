function logout() {
  console.log(localStorage.getItem("email"));
  localStorage.removeItem("email");
}

export default logout;
