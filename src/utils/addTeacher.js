import getRootUrl from "./api";
import refreshToken from "./refreshToken";

export async function CreateTeacher(teacherInfo) {
  let result = await fetch(`${getRootUrl()}/auth/signup/ustaz`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
    body: JSON.stringify({
      username: teacherInfo.username,
      password: teacherInfo.password,
      name: teacherInfo.name,
      phoneno: teacherInfo.phoneNo,
      email: teacherInfo.email,
      address: teacherInfo.address,
    }),
  });
  if (result.status === 401 && localStorage.getItem("refresh_token")) {
    await refreshToken();
    CreateTeacher(teacherInfo);
  } else {
    return await result.json();
  }
}

export async function GetTeachers() {
  let result = await fetch(`${getRootUrl()}/main/getteachers`, {
    method: "GET",
  });
  return await result.json();
}
