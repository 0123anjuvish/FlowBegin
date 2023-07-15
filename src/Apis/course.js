import { base, handleError } from "./base";

const getCourse = async () => {

    const res = await fetch(`${base.url}course/`,   { 
             headers: {
                      "Content-Type": "application/json",
                     },
            method: "GET",
});

    return handleError(res);
}

export {getCourse}