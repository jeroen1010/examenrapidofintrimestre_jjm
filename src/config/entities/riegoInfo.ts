import { Value } from "../responses/riegoResponse";

export interface RiegoInfo {
    name:     string;
    lastDate: string;
    values:   Value[];
}