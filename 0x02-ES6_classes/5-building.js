export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) throw new Error('Class Extending Building must override evacuationWarningMessage');
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
