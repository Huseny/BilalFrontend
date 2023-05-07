import getRootUrl from "./api";
async function LoginRequest(name, password) {
  console.log(`name: ${name}\npass: ${password}`);
  let result = await fetch(`${getRootUrl()}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      password: password,
    }),
  });
  if (result.status === 200) {
    return await result.json();
  }
  return null;
}

export default LoginRequest;
