export interface IObjectArrayTools<T = any> {
    [name: string]: any;

    /**
     * Filter the object and output a new object, similar to array filter.
     * @param value
     * @param string key
     * @param number index
     */
    filter: (value?: T, key?: string, index?: number) => IObjectArrayTools<T>;
    /**
     * Find, and output value like in an ordinary array
     * @param value
     * @param string key
     * @param number index
     */
    find: (value?: T, key?: string, index?: number) => T;
    /**
     * Find, and output the key instead of the value.
     * @param value
     * @param string key
     * @param number index
     */
    findKey: (value?: T, key?: string, index?: number) => string;
    /**
     * Map the object and output a new object, similar to array map.
     * @param value
     * @param string key
     * @param number index
     */
    map: (value?: T, key?: string, index?: number) => IObjectArrayTools<T>;
    /**
     * Map the object and output a new object, similar to array map however outputs the keys instead of the values.
     * @param value
     * @param key
     * @param index
     */
    mapKeys: (value?: T, key?: string, index?: number) => IObjectArrayTools<T>;
    /**
     * forEach the object and execute some logic without returning anything, similar to array forEach.
     * @param value
     * @param key
     * @param index
     */
    forEach: (value?: T, key?: string, index?: number) => void;
    /**
     * Convert the ObjectTools array back into a native ordinary object without the added functions stated above.
     */
    toNormalObject: () => any;
    /**
     * contains the amount of keys inside the object.
     */
    length: number;
}

const objectArrayToolsfunctions = (inputObject: any = {}) => ({
    filter: (filterFunction: (value?: any, key?: string, index?: number) => boolean): IObjectArrayTools => {
        const output: any = {};
        const keys = Object.keys(inputObject).reverse();
        let nameIndex: number = keys.length;
        while (nameIndex--) {
            if (filterFunction(inputObject[keys[nameIndex]], keys[nameIndex], nameIndex)) {
                output[keys[nameIndex]] = inputObject[keys[nameIndex]];
            }
        }
        return objectArrayTools(output);
    },
    find: (filterFunction: (value?: any, key?: string, index?: number) => boolean): any => {
        const keys = Object.keys(inputObject).reverse();
        let nameIndex: number = keys.length;
        while (nameIndex--) {
            if (filterFunction(inputObject[keys[nameIndex]], keys[nameIndex], nameIndex)) {
                return inputObject[keys[nameIndex]];
            }
        }
        return undefined;
    },
    findKey: (filterFunction: (value?: any, key?: string, index?: number) => boolean): string => {
        const keys = Object.keys(inputObject).reverse();
        let nameIndex: number = keys.length;
        while (nameIndex--) {
            if (filterFunction(inputObject[keys[nameIndex]], keys[nameIndex], nameIndex)) {
                return keys[nameIndex];
            }
        }
        return undefined;
    },
    map: (mapFunction: (value?: any, key?: string, index?: number) => any): IObjectArrayTools => {
        const output: any = {};
        const keys = Object.keys(inputObject).reverse();
        let nameIndex: number = keys.length;
        while (nameIndex--) {
            output[keys[nameIndex]] = mapFunction(inputObject[keys[nameIndex]], keys[nameIndex], nameIndex);
        }
        return objectArrayTools(output);
    },
    mapKeys: (mapFunction: (value?: any, key?: string, index?: number) => any): IObjectArrayTools => {
        const output: any = {};
        const keys = Object.keys(inputObject).reverse();
        let nameIndex: number = keys.length;
        while (nameIndex--) {
            output[mapFunction(inputObject[keys[nameIndex]], keys[nameIndex], nameIndex)] = inputObject[keys[nameIndex]];
        }
        return objectArrayTools(output);
    },
    forEach: (eachFunction: (value?: any, key?: string, index?: number) => boolean): void => {
        const output: any = {};
        const keys = Object.keys(inputObject).reverse();
        let nameIndex: number = keys.length;
        while (nameIndex--) {
            output[keys[nameIndex]] = eachFunction(inputObject[keys[nameIndex]], keys[nameIndex], nameIndex);
        }
    },
    toNormalObject: (): IObjectArrayTools => {
        return {...inputObject};
    },
    length: Object.keys(inputObject).length,
});

const objectArrayTools = (input: any): IObjectArrayTools<any> => {
    const newInput = {...input};
    const f: any = objectArrayToolsfunctions(input);
    const keys = Object.keys(f);
    for (const key of keys) {
        Object.defineProperty(newInput, key, {
            enumerable: false,
            value: f[key],
        });
    }
    return newInput;
};

export default objectArrayTools;