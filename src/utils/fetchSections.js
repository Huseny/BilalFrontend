import getRootUrl from "./api";
import refreshToken from "./refreshToken";

export async function fetchSections() {
  const response = await fetch(`${getRootUrl()}/main/getallsections`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
  if (response.status === 401 && localStorage.getItem("access_token")) {
    await refreshToken();
    fetchSections();
  } else {
    return await response.json();
  }
}

export async function fetchStudentsBySection(classId) {
  const response = await fetch(`${getRootUrl()}/main/getstudentsbysection`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
    body: JSON.stringify({
      classId,
    }),
  });

  if (response.status === 401 && localStorage.getItem("access_token")) {
    await refreshToken();
    fetchStudentsBySection();
  } else {
    const data = await response.json();
    return data;
  }
}
