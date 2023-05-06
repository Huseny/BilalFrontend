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

export async function DeleteTeacher(teacherId) {
  let result = await fetch(`${getRootUrl()}/auth/del`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: teacherId,
    }),
  });
  return await result.json();
}

export async function GetTeacherById(id) {
  let result = await fetch(`${getRootUrl()}/main/getteacherbyid`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
    body: JSON.stringify({
      teacherId: id,
    }),
  });

  if (result.status === 401 && localStorage.getItem("refresh_token")) {
    await refreshToken();
    GetTeacherById(id);
  } else {
    return await result.json();
  }
}

export async function AssignTeacherRequest(classId, teacherId) {
  let result = await fetch(`${getRootUrl()}/main/assignteacher`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
    body: JSON.stringify({
      classId,
      teacherId,
    }),
  });
  if (result.status === 401 && localStorage.getItem("refresh_token")) {
    await refreshToken();
    AssignTeacherRequest(classId, teacherId);
  } else {
    return await result.json();
  }
}
