import getRootUrl from "./api";
import refreshToken from "./refreshToken";

export async function CreateExam(evaluation) {
  let name = evaluation.name;
  let fields = evaluation.fields;
  let result = await fetch(`${getRootUrl()}/main/createexam`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
    body: JSON.stringify({
      name,
      fields,
    }),
  });
  if (result.status === 401 && localStorage.getItem("refresh_token")) {
    await refreshToken();
    CreateExam(name, fields);
  } else {
    return await result.json();
  }
}

export async function GetExams() {
  let result = await fetch(`${getRootUrl()}/main/getexams`, {
    method: "GET",
  });
  return await result.json();
}
