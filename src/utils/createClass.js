import getRootUrl from "./api";
import refreshToken from "./refreshToken";

export async function createClassRequest(classname) {
  let result = await fetch(`${getRootUrl()}/main/addclass`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
    body: JSON.stringify({
      classname,
      datecreated: new Date(),
    }),
  });
  if (result.status === 401 && localStorage.getItem("refresh_token")) {
    await refreshToken();
    createClassRequest(classname);
  } else {
    return await result.json();
  }
}

export async function getSections() {
  let sections = await fetch(`${getRootUrl()}/main/getallsections`, {
    method: "GET",
  });
  return await sections.json();
}

export async function changeSection(classId, className) {
  let result = await fetch(`${getRootUrl()}/main/editclass`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
    body: JSON.stringify({
      classId,
      className,
    }),
  });
  if (result.status === 401 && localStorage.getItem("refresh_token")) {
    await refreshToken();
    changeSection(classId, className);
  } else {
    return await result.json();
  }
}

export async function deleteSection(classId) {
  let result = await fetch(`${getRootUrl()}/main/deleteclass`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
    body: JSON.stringify({
      classId,
    }),
  });
  if (result.status === 401 && localStorage.getItem("refresh_token")) {
    await refreshToken();
    deleteSection(classId);
  } else {
    return await result.json();
  }
}

export async function getClassById(classId) {
  let section = await fetch(`${getRootUrl()}/main/getclassbyid`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      classId,
    }),
  });
  return await section.json();
}
