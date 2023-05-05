import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { changeSection, deleteSection } from "../../../utils/createClass";
import { getSections } from "../../../utils/createClass";

export function CreateSectionModal({ name, show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>تم إنشاء الفصل بنجاح!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          اسم الفصل: <b>{name}</b>
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

export function EditSectionModal({
  sectionId,
  setSections,
  show,
  handleClose,
}) {
  const [newName, setNewName] = useState("");

  const handleSubmit = async () => {
    await changeSection(sectionId, newName);
    let fetchedSections = await getSections();
    setSections(fetchedSections);
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>تغيير الفصل</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label htmlFor="editclassName" className="form-control-label">
          اسم الفصل<span className="text-danger ml-2">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          name="className"
          placeholder="اسم الفصل"
          id="editclassName"
          onChange={(e) => setNewName(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          أغلق
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          غير
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export function DeleteSectionModal({
  sectionId,
  setSections,
  show,
  handleClose,
}) {
  const handleSubmit = async () => {
    await deleteSection(sectionId);
    let fetchedSections = await getSections();
    setSections(fetchedSections);
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>حذف الفصل</Modal.Title>
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
        <Button variant="primary" onClick={handleSubmit}>
          نعم
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
