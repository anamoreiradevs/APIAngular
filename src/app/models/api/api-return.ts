export class ApiReturn {
  info?: Info;
  results?: Results[];
  constructor(obj: Partial<ApiReturn>) {
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
  origin?: Origin;
  location?: Location;
  image?: string;
  constructor(obj: Partial<Results>) {
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
export class Origin {
  name?: string;
  url?: string;
}

