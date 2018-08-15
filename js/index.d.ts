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
declare const objectArrayTools: (input: any) => IObjectArrayTools<any>;
export default objectArrayTools;
