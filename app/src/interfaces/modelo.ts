import { imprimivel } from "../utils/imprimivel.js";
import { comparavel } from "./comparavel.js";

export interface modelo<T> extends imprimivel, comparavel<T> {

}