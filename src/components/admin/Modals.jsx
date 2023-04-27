import { Modal, Button } from "react-bootstrap";

export function ParentCredentialsModal({ show, handleClose, credentials }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>تم تسجيل الوالد بنجاح!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          اسم المستخدم: <b>{credentials.username}</b>
        </p>
        <p>
          كلمة السر: <b>{credentials.password}</b>
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

export function TeacherCredentialsModal({ show, handleClose, credentials }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>تم تسجيل المعلم بنجاح!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          اسم المستخدم: <b>{credentials.username}</b>
        </p>
        <p>
          كلمة السر: <b>{credentials.password}</b>
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

export function EditSectionModal({ sectionId, show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>تغيير الفصل</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label htmlFor="editclassName" className="form-control-label">
          اسم الفصل<span class="text-danger ml-2">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          name="className"
          placeholder="اسم الفصل"
          id="editclassName"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          أغلق
        </Button>
        <Button variant="primary" onClick={handleClose}>
          غير
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export function DeleteSectionModal({ sectionId, show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>تغيير الفصل</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 className="card-header py-3 text-center text-danger">
          هل أنت متأكد أنك تريد حذف هذا الفصل؟
        </h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          إلغاء
        </Button>
        <Button variant="primary" onClick={handleClose}>
          نعم
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
