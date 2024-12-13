export interface RiegoResponse {
    name:     string;
    lastDate: string;
    values:   Value[];
}

export interface Value {
    name:  string;
    state: boolean;
}
