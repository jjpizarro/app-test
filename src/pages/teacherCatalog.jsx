import React, { useEffect, useState } from "react";
import TeacherTable from "../components/TeacherTable";
import TeacherService from '../services/TeacherService';
import TeacherModalForm from "../components/TeacherModalForm";
export default function TeacherCatalog(){
    const [teacherList, setTeacherList] = useState([]);
    const [teacher, setTeacher] = useState({firstName:"", lastName:"", codigo:""});
    const [showModal, setShowModal] = useState(false);
    
    useEffect( ()=>{
        const teacherFetch = async() => {            
            const teachers = await TeacherService.getAllTeachers();
            setTeacherList(teachers);
        }        
        teacherFetch();
               
    }, [])

    const handleSubmitModalForm = async teacher => {
        let newList = await TeacherService.addTeacher(teacherList, teacher);
        setTeacherList(newList);
    }
    const handleEditTeacher = teacherToEdit => {
        setTeacher(teacherToEdit);
        setShowModal(true);
    }
    return (
        <main>
            <div>
                <TeacherModalForm handleSubmit={handleSubmitModalForm} teacher={teacher} showModalForm={showModal}/>
                <h3>Teacher Catalog</h3>
                <TeacherTable teachers={teacherList} handleEdit={handleEditTeacher}/>
            </div>
        </main>
    );
}