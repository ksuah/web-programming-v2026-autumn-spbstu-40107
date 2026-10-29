class Movie {
  title;
  director;
  actors;

  constructor(title, director, actors = []) {
    this.profile = {title, director, actors};
  }

  get profile() {
    return {
      title: this.title,
      director: this.director,
      actors: this.actors,
    };
  }

  set profile(value) {
    if ('title' in value) {
      if (typeof value.title !== 'string') {
        throw new TypeError('title must be a string');
      }
      this.title = value.title;
    }

    if ('director' in value) {
      if (typeof value.director !== 'string') {
        throw new TypeError('director must be a string');
      }
      this.director = value.director;
    }

    if ('actors' in value) {
      if (!Array.isArray(value.actors)) {
        throw new TypeError('actors must be an array');
      }
      if (!value.actors.every((actor) => typeof actor === 'string')) {
        throw new TypeError('all actors must be string');
      }
      this.actors = value.actors;
    }
  }

  addActor(name) {
    if (typeof name !== 'string') {
      throw new TypeError('actor name must be a string');
    }
    this.actors.push(name);
  }

  removeActor(name) {
    const index = this.actors.indexOf(name);
    if (index !== -1) {
      this.actors.splice(index, 1);
    }
  }

  get castSize() {
    return this.actors.length;
  }
}

export {Movie};
