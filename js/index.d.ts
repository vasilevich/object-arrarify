export interface IObjectArrayTools<T = any> {
    [name: string]: any;
    filter: (value?: T, key?: string) => IObjectArrayTools<T>;
    find: (value?: T, key?: string) => T;
    findKey: (value?: T, key?: string) => string;
    map: (value?: T, key?: string) => IObjectArrayTools<T>;
    mapKeys: (value?: T, key?: string) => IObjectArrayTools<T>;
    forEach: (value?: T, key?: string) => void;
    toNormalObject: () => any;
    length: number;
}
declare const objectArrayTools: (input: any) => IObjectArrayTools<any>;
export default objectArrayTools;
