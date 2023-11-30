import { request } from "./config";

export const getNotes = () => {
    return request.get("/note/userNotes");
}

export const createNote = (data) => {
    return request.post("/note/createNote", data);
}

export const updateNote = (data) => {
    return request.put("/note/updateNote", data);
}

export const deleteNote = (id) => {
    return request.delete("/note/deleteNote" + "/" + id);
}