import getRootUrl from "./api";
import refreshToken from "./refreshToken";

export async function addParentRequest(
  username,
  password,
  fullName,
  sex,
  phoneno,
  email,
  address
) {
  let result = await fetch(`${getRootUrl()}/auth/signup/parent`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
    body: JSON.stringify({
      username,
      password,
      fullName,
      sex,
      phoneno,
      email,
      address,
    }),
  });

  if (result.status === 401 && localStorage.getItem("refresh_token")) {
    await refreshToken();
    addParentRequest(
      username,
      password,
      fullName,
      sex,
      phoneno,
      email,
      address
    );
  } else {
    result = await result.json();
    return result;
  }
}

export async function getParents() {
  let parents = await fetch(`${getRootUrl()}/main/getparents`, {
    method: "GET",
  });
  parents = await parents.json();
  return parents;
}

export async function GetParentById(parentId) {
  let result = await fetch(`${getRootUrl()}/main/getparentbyid`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parentId,
    }),
  });
  return await result.json();
}
