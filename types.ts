import { ReactElement } from 'react';

export type NextComponent = () => ReactElement;

export type Primitive = boolean | number | string | null;
export type JSONArray = JSONValue[];
export type JSONObject = { [key: string]: JSONValue };
export type JSONValue = JSONObject | JSONArray | Primitive;

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: JSONObject;
  phone: string;
  website: string;
  company: JSONObject;
}
