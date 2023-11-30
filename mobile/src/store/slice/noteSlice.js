import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNotes, createNote, deleteNote, updateNote } from "../../services/apiServices/noteRequest";

export const fetchNotes = createAsyncThunk("notes/fetchNotes", async () => {
    const response = await getNotes();
    return response.data;
});

export const addNote = createAsyncThunk("notes/addNote", async (data) => {
    const response = await createNote({
        title: data.title,
        content: data.content
    });
    return response.data;
});

export const removeNote = createAsyncThunk("notes/removeNote", async (id) => {
    const response = await deleteNote(id);
    return response.data;
});

export const updateNoteAsync = createAsyncThunk("notes/updateNote", async (data) => {
    const response = await updateNote({
        id: data.id,
        title: data.title,
        content: data.content,
        isPinned: data.isPinned
    });
    return response.data;
});

const noteSlice = createSlice({
    name: "note",
    initialState: {
        notes: [],
        status: null,
        error: null,
        selectedNote: null,
        searchQuery: '',
    },
    reducers: {
        clearStatus: (state) => {
            state.status = null;
        },
        setSelectedNoteAction: (state, action) => {
            state.selectedNote = action.payload;
        },
        searchNoteAction: (state, action) => {
            state.searchQuery = action.payload;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchNotes.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchNotes.fulfilled, (state, action) => {
                state.notes = action.payload.notes;
            })
            .addCase(fetchNotes.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(addNote.pending, (state) => {
                state.status = "loading";
            })
            .addCase(addNote.fulfilled, (state, action) => {
                state.status = "success";
                state.notes.push(action.payload.note);
            })
            .addCase(addNote.rejected, (state) => {
                state.status = "failed";
            })
            .addCase(removeNote.pending, (state) => {
                state.status = "loading";
            })
            .addCase(removeNote.fulfilled, (state, action) => {
                state.notes = state.notes.filter(note => note.id !== action.payload.note.id);
            })
            .addCase(removeNote.rejected, (state) => {
                state.status = "failed";
            })
            .addCase(updateNoteAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(updateNoteAsync.fulfilled, (state, action) => {
                state.notes = state.notes.map(note => {
                    if (note.id === action.payload.note.id) {
                        return action.payload.note;
                    }
                    return note;
                });
                state.selectedNote = action.payload.note;
            })
            .addCase(updateNoteAsync.rejected, (state) => {
                state.status = "failed";
            })
    }
});

export const { clearStatus, setSelectedNoteAction, searchNoteAction } = noteSlice.actions;

export default noteSlice.reducer;
