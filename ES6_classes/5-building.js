export default class Building {
  constructor(sqft) {
    if (new.building === Building) {
      throw new Error("sqft est une classe abstraite")
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
  evacuationWarningMessage() {
    throw new Error("Class extending Building must override evacuationWarningMessage")
  }
}
