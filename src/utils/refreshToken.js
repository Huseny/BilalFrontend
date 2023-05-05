import getRootUrl from "./api";
async function refreshToken() {
  let newToken = await fetch(`${getRootUrl()}/auth/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("refresh_token")}`,
    },
  });
  newToken = await newToken.json();
  localStorage.setItem("access_token", newToken.access_token);
  localStorage.setItem("refresh_token", newToken.refresh_token);
  console.log("new token: " + newToken);
}

export default refreshToken;
