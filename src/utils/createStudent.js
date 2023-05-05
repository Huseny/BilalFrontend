import getRootUrl from "./api";
import refreshToken from "./refreshToken";

export async function CreateStudentRequest(studentInfo) {
  let result = await fetch(`${getRootUrl()}/main/addstudent`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
    body: JSON.stringify({
      fullName: studentInfo.name,
      studentAge: studentInfo.age,
      musteweTeilim: studentInfo.education,
      sex: studentInfo.gender,
      subCity: studentInfo.subCity,
      wereda: studentInfo.wereda,
      kebele: studentInfo.kebele,
      specialNameOfArea: studentInfo.specName,
      homeNo: studentInfo.houseNo,
      familyNo: studentInfo.familySize,
      MesderAdukhul: studentInfo.incomeSource,
      parentId: studentInfo.parent,
      classId: studentInfo.section,
    }),
  });
  if (result.status === 401 && localStorage.getItem("refresh_token")) {
    await refreshToken();
    CreateStudentRequest(studentInfo);
  } else {
    return await result.json();
  }
}

export async function GetStudents() {
  let students = await fetch(`${getRootUrl()}/main/getallstudents`, {
    method: "GET",
  });
  return await students.json();
}
