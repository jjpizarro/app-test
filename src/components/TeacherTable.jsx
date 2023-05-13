import React from "react";
import { Button, Table } from "react-bootstrap";

const TeacherTable = ({teachers, handleEdit})=>{
    const editTeacher = teacher => {
        console.log("EDITANDO TEACHER ... {}", teacher);
        handleEdit(teacher);
    }

    return (
        <Table bordered hover>
            <thead>
                <tr>
                    <th>Opciones</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Code</th>
                </tr>
            </thead>
            <tbody>
                {teachers.length > 0 ? (
                    teachers.map((teacher, index)=>(
                        <tr key={index}>
                            <td><Button onClick={ev => editTeacher(teacher)}> Editar </Button></td>
                            <td>{teacher.firstName}</td>
                            <td>{teacher.lastName}</td>
                            <td>{teacher.codigo}</td>
                        </tr>
                        )
                    )
                ): (<tr><td colSpan={3}>No se encontraron registros</td></tr>)
                }
            </tbody>
        </Table>
    );
}

export default TeacherTable;