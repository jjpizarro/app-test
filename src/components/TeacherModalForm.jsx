import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import PropTypes from "prop-types";
const TeacherModalForm = (props) => {
    console.log(props)
    const initalShowModalState = props.showModalForm;
    console.log("initalShowModalState ", initalShowModalState);
    const [show, setShow] = useState(initalShowModalState);
    console.log('SHOW ', show);
    let initialTeacher = {
        firstName: props.teacher? props.teacher.firstName: "",
        lastName: props.teacher? props.teacher.lastName: "",
        code:props.teacher? props.teacher.code: ""
    }
    const [teacher, setTeacher] = useState(initialTeacher);
    
    const onChangeField = ev => {
        setTeacher({
            ...teacher,
            [ev.target.name]:ev.target.value
        });
    }
    const handleClose = () => {setShow(false); setTeacher(initialTeacher);}
    const handleShow = () => {setShow(true); setTeacher(initialTeacher);}

    const handleSubmitTeacher = event => {
        event.preventDefault();
        console.log("GUARDANDO LA INFO DEL FORM");
        props.handleSubmit(teacher);
        handleClose();
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Agregar Profesor
            </Button>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Datos del Profesor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form> 
                    <Form.Group as={Row} className="mb-3" controlId="firstName">
                        <Form.Label column sm={2}>
                            Nombre
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="text" onChange={onChangeField} name="firstName" value={teacher.firstName} placeholder="Nombre" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="lastName">
                        <Form.Label column sm={2}>
                            Apellidos
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="text" onChange={onChangeField} name="lastName" value={teacher.lastName} placeholder="Apellidos" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="code">
                        <Form.Label column sm={2}>
                            C&oacute;digo
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="text" onChange={onChangeField} name="codigo" value={teacher.codigo} placeholder="Código" />
                        </Col>
                    </Form.Group>
                </Form>

            </Modal.Body>
            <Modal.Footer>
           
            <Button variant="primary" onClick={handleSubmitTeacher}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );


}
TeacherModalForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}
export default TeacherModalForm;