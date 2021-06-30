export default class ArrayNotes {
  constructor() {
    this.notes = [];
    this._subscribers = [];
  }

  addNote(title, text, category) {
    const newNote = new Note(title, text, category);
    this.notes.push(newNote);
    this.notifySubscriber();
  }

  subscribe(func) {
    this._subscribers.push(func);
  }

  notifySubscriber() {
    this._subscribers.forEach((func) => func(this.notes));
  }

  removeNote(index) {
    this.notes.splice(index, 1);
    this.notifySubscriber();
  }
}

class Note {
  constructor(title, text, category) {
    this.title = title;
    this.text = text;
    this.category = category;
  }
}
