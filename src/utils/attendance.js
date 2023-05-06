import getRootUrl from "./api";

export async function saveAttendance(absentStudents) {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");
  const today = `${year}/${month}/${day}`;

  for (studentId of absentStudents) {
    const response = await fetch(`${getRootUrl()}/main/addabscent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      body: JSON.stringify({
        studentId,
        dateofabscent: today,
      }),
    });

    if (response.status === 401 && localStorage.getItem("refresh_token")) {
      await refreshToken();
      saveAttendance(absentStudents);
    } else {
      return await response.json();
    }
  }
}
