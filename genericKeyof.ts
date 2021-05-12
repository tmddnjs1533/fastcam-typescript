interface IPerson {
    name: string;
    age: number;
}

const person: IPerson = {
    name: 'Mark',
    age: 39
}

type Keys = keyof IPerson;
const keys: Keys = "name";

/*
IPerson[keyof IPerson]
    => IPerson["name" | "age" ]
    => IPerson["name"] | IPerson["age"]
    => string | number

function getProp(obj: IPerson, key: "name" | "age"): string | number {
    return obj[key]; // error
}
function getProp(obj: IPerson, key: keyof IPerson): IPerson[keyof IPerson] {
    return obj[key];
}
function getProp<T>(obj: T, key: keyof T): T[keyof T] {
    return obj[key];
}
 */
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

getProp(person, 'name')

/*
function setProp(obj: IPerson, key: "name" | "age", value: string | number): void {
    obj[key] = value;
}
function setProp(obj: IPerson, key: keyof IPerson, value: string | number): void {
    obj[key] = value;
}
function setProp<T>(obj: T, key: keyof T, value: T[keyof T]): void {
    obj[key] = value;
}
 */
function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
    obj[key] = value;
}

setProp(person, 'name', 'Anna')