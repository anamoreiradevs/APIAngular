import { ListModel } from "../list-model";

export class ApiReturn {
  info?: Info;
  results?: Results[];
  constructor(obj: Partial<ApiReturn>) {
    Object.assign(this, obj);
  }
}
export class Results {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  gender?: string;
  origin?: Origin;
  image?: string;
}
export class Info {
  count?: string;
  pages?: number;
  next?: string;
  prev?: null;
}
export class Origin {
  name?: string;
  url?: string;
}

