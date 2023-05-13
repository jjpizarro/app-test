
const URL_BASE = "http://localhost:8081/api/v1/";

const getAllTeachers = async () =>{
    try {
        const response = await fetch(URL_BASE + 'teachers');
        const teachers = await response.json();
        return teachers;
    } catch (error) {
        console.log(error);
    }
}

const addTeacher = async (list, teacher) => {
    try{
        const response = await fetch(URL_BASE + 'teachers', { 
            method: "POST",  
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(teacher)
        });
        const newTeacher = await response.json();
        return [newTeacher, ...list];
        
    }catch (error) {
        console.log(error);
        return list;
    }
    
    
}

const expotedFunction = {getAllTeachers, addTeacher};

export default expotedFunction;