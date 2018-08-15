export interface IObjectArrayTools<T = any> {
    [name: string]: any;
    filter: (value?: T, key?: string, index?: number) => IObjectArrayTools<T>;
    find: (value?: T, key?: string, index?: number) => T;
    findKey: (value?: T, key?: string, index?: number) => string;
    map: (value?: T, key?: string, index?: number) => IObjectArrayTools<T>;
    mapKeys: (value?: T, key?: string, index?: number) => IObjectArrayTools<T>;
    forEach: (value?: T, key?: string, index?: number) => void;
    toNormalObject: () => any;
    length: number;
}
declare const objectArrayTools: (input: any) => IObjectArrayTools<any>;
export default objectArrayTools;
