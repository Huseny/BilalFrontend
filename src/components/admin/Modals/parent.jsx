import { Modal, Button } from "react-bootstrap";

export function ParentRegistrationModal({ show, handleClose, info }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>تم تسجيل الوالد بنجاح!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>
          لقد تم إرسال اسم المستخدم وكلمة المرور إلى عنوان البريد الإلكتروني
          المقدم
        </h6>
        <p>
          الاسم الكامل: <b>{info.fullName}</b>
        </p>
        <p>
          رقم الهاتف: <b>{info.phoneNo}</b>
        </p>
        <p>
          البريد الإلكتروني: <b>{info.email}</b>
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
