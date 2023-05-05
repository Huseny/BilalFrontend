import { Modal, Button } from "react-bootstrap";

export function StudentRegistrationModal({ info, show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>تم تسجيل الطالب بنجاح!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          الاسم الكامل للطالب/ة: <b>{info.name}</b>
        </p>
        <p>
          عمر: <b>{info.age}</b>
        </p>
        <p>
          جنس: <b>{info.gender}</b>
        </p>
        <p>
          مستوى التعليم: <b>{info.education}</b>
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
