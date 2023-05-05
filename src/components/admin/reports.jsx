import React, { useState } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import Sidebar from "./sidebar";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const AttendanceReport = () => {
  const [showAttendance, setShowAttendance] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [currentStudentAttendance, setCurrentStudentAttendance] = useState({});
  const [currentStudentGrade, setCurrentStudentGrade] = useState({});

  const generateAttendanceReport = (studentName, attendanceData) => {
    const documentDefinition = {
      content: [
        { text: "Attendance Report", style: "header" },
        { text: `Student Name: ${studentName}`, style: "subheader" },
        { text: "\n\n" },
        {
          layout: "lightHorizontalLines",
          table: {
            headerRows: 1,
            widths: ["*", "*", "*", "*"],
            body: [
              [
                { text: "Date", style: "tableHeader" },
                { text: "Attendance", style: "tableHeader" },
                { text: "Late", style: "tableHeader" },
                { text: "Remarks", style: "tableHeader" },
              ],
              ...attendanceData.map((data) => [
                { text: data.date, style: "tableCell" },
                { text: data.attendance, style: "tableCell" },
                { text: data.late, style: "tableCell" },
                { text: data.remarks, style: "tableCell" },
              ]),
            ],
          },
        },
      ],
      styles: {
        header: {
          fontSize: 22,
          bold: true,
          alignment: "center",
          margin: [0, 0, 0, 20],
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        tableHeader: {
          bold: true,
          fillColor: "#EEEEEE",
          color: "#333333",
          margin: [0, 5, 0, 5],
        },
        tableCell: {
          margin: [0, 5, 0, 5],
        },
        present: {
          color: "green",
        },
        absent: {
          color: "red",
        },
        rightSign: {
          font: "Roboto",
          fontSize: 12,
          color: "green",
          text: "✔",
        },
        xSign: {
          font: "Roboto",
          fontSize: 12,
          color: "red",
          text: "✖",
        },
      },
    };

    const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
    pdfDocGenerator.download(`${studentName}_attendance_report.pdf`);
  };

  // Usage:
  const attendanceData = [
    { date: "2023-05-01", attendance: "Present", late: "No", remarks: "" },
    {
      date: "2023-05-02",
      attendance: "Absent",
      late: "",
      remarks: "Sick leave",
    },
    { date: "2023-05-03", attendance: "Late", late: "Yes", remarks: "" },
  ];

  return (
    <>
      <Sidebar />
      <section className="home-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="card mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">
                    الاسم: جون سميث
                  </h6>
                </div>
                <div className="table-responsive p-3">
                  <table className="table align-items-center table-flush table-hover">
                    <thead className="thead-light">
                      <tr>
                        <th>الاسم الكامل</th>
                        <th>الوالد</th>
                        <th>فصل</th>
                        <th>تقرير الحضور</th>
                        <th>تقرير الرتبة</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>جون سميث</td>
                        <td>husen yusuf</td>
                        <td>Ibn Mesud</td>
                        <td>
                          <i
                            onClick={() => {
                              setCurrentStudentAttendance({
                                stdName: " جون سميث",
                                parent: "husen yusuf",
                                section: "Ibn Mesud",
                                attendanceStatus: "No",
                                status: "sick leave",
                              });
                              setShowAttendance(!showAttendance);
                            }}
                            class="bx bxs-report"
                          ></i>
                        </td>
                        <td>
                          <i
                            onClick={() => {
                              setShowAttendance(!showAttendance);
                            }}
                            class="bx bxs-objects-vertical-bottom"
                          ></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {showAttendance && (
            <div className="row">
              <div className="col-lg-12">
                <div className="card mb-4">
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                      الاسم: {currentStudentAttendance.stdName}
                    </h6>
                  </div>
                  <div className="table-responsive p-3">
                    <table className="table align-items-center table-flush table-hover">
                      <thead className="thead-light">
                        <tr>
                          <th>الاسم الكامل</th>
                          <th>الوالد</th>
                          <th>فصل</th>
                          <th>تقرير الحضور</th>
                          <th>تقرير الرتبة</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{currentStudentAttendance.stdName}</td>
                          <td>{currentStudentAttendance.parent}</td>
                          <td>{currentStudentAttendance.section}</td>
                          <td>{currentStudentAttendance.attendanceStatus}</td>
                          <td>{currentStudentAttendance.status}</td>
                        </tr>
                      </tbody>
                    </table>

                    <div>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          generateAttendanceReport("John Smith", attendanceData)
                        }
                      >
                        {"Generating report"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AttendanceReport;
