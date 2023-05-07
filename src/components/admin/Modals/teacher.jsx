import { Modal, Button } from "react-bootstrap";

export function TeacherCredentialsModal({ show, handleClose, teacherInfo }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>تم تسجيل المعلم بنجاح!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>
          لقد تم إرسال اسم المستخدم وكلمة المرور إلى عنوان البريد الإلكتروني
          المقدم
        </h6>
        <p>
          الاسم الكامل: <b>{teacherInfo.name}</b>
        </p>
        <p>
          رقم الهاتف: <b>{teacherInfo.phoneNo}</b>
        </p>
        <p>
          البريد الإلكتروني: <b>{teacherInfo.email}</b>
        </p>
        <p>
          اسم المستخدم: <b>{teacherInfo.username}</b>
        </p>
        <p>
          كلمة المرور: <b>{teacherInfo.password}</b>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          أغلق
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
