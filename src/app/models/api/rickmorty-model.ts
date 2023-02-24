export class RickMorty {
  info?: Info = new Info({});
  result?: Results = new Results({});
  constructor(obj: Partial<RickMorty>) {
    Object.assign(this, obj);
  }
}
export class Info {
  count?: number;
  pages?: number;
  next?: string;
  prev?: null;

  constructor(obj: Partial<Info>) {
    Object.assign(this, obj);
  }
}
export class Results {
  id?: number
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: Origin
  location?: Location
  image?: string;
  episode?: string[];
  url?: string;
  created?: string;
  constructor(obj: Partial<Results>) {
    Object.assign(this, obj);
  }
}
export class Origin {
  name?: string;
  url?: string;
  }
export class Location {
  name?: string;
  url?: string;
}

