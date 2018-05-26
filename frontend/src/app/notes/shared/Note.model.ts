export class Note {
  
  title: string;
  type: string;
  description?: string;
  created?: Date;
  updated?: Date;

  constructor(data: Note | {} = {}) {

    Object.assign(this, data);
    
    this.created = new Date();
    this.updated = new Date();
  }
}