import { base, handleError } from "./base";

const addStudent = async (userdata) => {

    const res = await fetch(`${base.url}student/personal/`,   { 
             headers: {
                      "Content-Type": "application/json",
                     },
            method: "POST",
            body: JSON.stringify(userdata)
});

    return handleError(res);
}

const addAcademic = async (userdata) => {

    const res = await fetch(`${base.url}student/academic/`,   { 
             headers: {
                      "Content-Type": "application/json",
                     },
            method: "POST",
            body: userdata,
});

    return handleError(res);
}

const addDocument = async (userdata) => {

    const res = await fetch(`${base.url}student/document/`,   { 
             headers: {
                      "Content-Type": "multipart/form-data",
                     },
            method: "POST",
            body: userdata,
});

    return handleError(res);
}

export {addStudent, addAcademic, addDocument}