from app import app, db
from app.model import Note


class NoteServices:
    @staticmethod
    def create_note(title, content, user_id):
        note = Note(
            title=title,
            content=content,
            user_id=user_id
        )
        db.session.add(note)
        db.session.commit()
        return note

    @staticmethod
    def get_notes(user_id):
        return Note.query.filter_by(user_id=user_id).all()

    @staticmethod
    def get_note_by_id(id):
        return Note.query.filter_by(id=id).first()

    @staticmethod
    def update_note_by_id(id, title, content, isPin):
        note = Note.query.filter_by(id=id).first()
        note.title = title
        note.content = content
        note.isPinned = isPin
        db.session.commit()
        return note

    @staticmethod
    def delete_note_by_id(id):
        note = Note.query.filter_by(id=id).first()
        db.session.delete(note)
        db.session.commit()
        return note

    @staticmethod
    def get_pinned_notes(user_id):
        return Note.query.filter_by(user_id=user_id, isPinned=True).all()

    @staticmethod
    def get_all_notes():
        return Note.query.all()

    @staticmethod
    def delete_all_notes():
        notes = Note.query.all()
        for note in notes:
            db.session.delete(note)
        db.session.commit()
        return notes
