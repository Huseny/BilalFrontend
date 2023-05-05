import { Modal, Button } from "react-bootstrap";

export function CreateSemesterModal({ info, show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>تم إنشاء الفصل الدراسي بنجاح!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          اسم الفصل الدراسي: <b>{info.name}</b>
        </p>
        <p>
          تاريخ البدء : <b>{info.startDate}</b>
        </p>
        <p>
          تاريخ الانتهاء: <b>{info.endDate}</b>
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
export function EditSemesterModal({ sectionId, show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>تغيير الفصل الدراسي</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="form-group mb-3">
            <label htmlFor="semesterName" className="form-control-label">
              اسم الفصل الدراسي
              <span className="text-danger ml-2">*</span>
            </label>
            <label
              htmlFor="semesterName"
              className="form-control-label fw-bold"
            >
              اسم الفصل الدراسي
              <span className="text-danger ml-2">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="semesterName"
              placeholder="اسم الفصل الدراسي"
              id="semesterName"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="startDate" className="form-label fw-bold">
              تاريخ البدء
            </label>
            <input
              type="date"
              id="startDate"
              className="form-control"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="endDate" className="form-label fw-bold">
              تاريخ الانتهاء
            </label>
            <input type="date" id="endDate" className="form-control" required />
          </div>
        </div>
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

export function DeleteSemesterModal({ sectionId, show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>حذف الفصل</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 className="card-header py-3 text-center text-danger">
          هل أنت متأكد أنك تريد حذف هذا الفصل الدراسي؟
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
