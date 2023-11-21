from flask import Blueprint, request, jsonify, g
from app.middlewares.auth import token_required, role_required

from app.services import NoteServices, UserServices

note = Blueprint('note', __name__, url_prefix='/note')

@note.route('/', methods=['GET'])
@token_required
@role_required('admin')
def all_notes():
    notes = NoteServices.get_all_notes()
    return jsonify({
        "message": "All notes",
        "notes": [note.to_dict() for note in notes]
    }), 200

@note.route('/userNotes', methods=['GET'])
@token_required
def user_notes():
    user = UserServices.get_user(g.email)
    notes = NoteServices.get_notes(user.id)
    return jsonify({
        "message": "User notes",
        "notes": [note.to_dict() for note in notes]
    }), 200


@note.route('/<id>', methods=['GET'])
@token_required
def get_by_id(id):
    note = NoteServices.get_note_by_id(id)
    
    return jsonify({
        "message": "Note found",
        "note": note.to_dict() if note else {}
    }), 200


@note.route('/createNote', methods=['POST'])
@token_required
def create():
    data = request.get_json()

    user = UserServices.get_user(g.email)

    note = NoteServices.create_note(
        data['title'],
        data['content'],
        user.id
    )
    return jsonify({
        "message": "Note created",
        "note": note.to_dict()
    }), 200

@note.route('/updateNote', methods=['PUT'])
@token_required
def update():
    data = request.get_json()

    note = NoteServices.update_note_by_id(
        data['id'],
        data['title'],
        data['content']
    )

    return jsonify({
        "message": "Note updated",
        "note": note.to_dict()
    }), 200


@note.route('/deleteNote/<id>', methods=['DELETE'])
@token_required
def delete(id):
    note = NoteServices.delete_note_by_id(id)

    return jsonify({
        "message": "Note deleted",
        "note": note.to_dict()
    }), 200


@note.route('/pin/<id>', methods=['PUT'])
@token_required
def pin(id):
    note = NoteServices.pin_note_by_id(id)
    return jsonify({
        "message": "Note pinned",
        "note": note.to_dict()
    }), 200

@note.route('/unPin/<id>', methods=['PUT'])
@token_required
def unpin(id):
    note = NoteServices.unpin_note_by_id(id)
    return jsonify({
        "message": "Note unpinned",
        "note": note.to_dict()
    }), 200

@note.route('/pinned', methods=['GET'])
@token_required
def pinned():
    user = UserServices.get_user(g.email)
    notes = NoteServices.get_pinned_notes(user.id)
    return jsonify({
        "message": "Pinned notes",
        "notes": [note.to_dict() for note in notes]
    }), 200

@note.route('/all', methods=['DELETE'])
@token_required
@role_required('admin')
def delete_all():
    notes = NoteServices.delete_all_notes()

    return jsonify({
        "message": "All notes deleted"
    }), 200

