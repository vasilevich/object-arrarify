[![npm version](https://badge.fury.io/js/object-arrarify.svg)](https://www.npmjs.com/package/object-arrarify)
# object-arrarify

A npm module which converts an ordinary object into an object with various methods which naively are found within an Array,    
such as map, filter, find, forEach, and more, all behave similar to the native array version however, instead of index,    
it provides key(second param), and index(third param).

This module was mainly made to help you use an object in the same way you would use an array,
while saving you the struggle of using complex methods such as reduce, or writing your own ```for var ..in``` loops from scratch,
and thus achieving the desired Declarative Programming pattern which is arguably preferred by many over the sometimes longer and harder to read Imperative way.  
   
NOTE:
the methods are working shallowly, aka, they do not get applied into the inner objects recursively,
so you will have to re-apply the module into inner objects if you wish to perform operations on them as-well which is out of the scope of this module but can be done regardless.

## Usage and examples

* Install.   
     * Yarn:
```bash
yarn add object-arrarify
```
     * Npm:
```bash
npm install object-arrarify
```

*   Import/RequireUsage
```js
import objectArrayTools from 'object-arrarify';
```

* Actual use examples
    * Assume our object is as follows:
    ```js
    // Declare the object
    var obj = {
    a:1,
    b:2,
    c:3,
    d:"hello",
  };
    // Apply the objectArrayTools into the object.
    obj=objectArrayTools(obj);  
    ```   
    * Or for short:
    ```js
         // Declare the object
    var obj = objectArrayTools({
         a:1,
         b:2,
         c:3,
         d:"hello",
       });
    ```   
    * Map usage
    ```js
         // Declare the object
    var result=obj.map((key,value,index) => {
      return key;
  });
    // Result will be: {a:"a",b:"b",c:"c",d:"d"}
    ```   
    * Filter usage
    ```js
         // Declare the object
    var result=obj.filter((key,value,index) => {
      return key=="a";
  });
    // Result will be: {a:"1"}
    ```  
    
Other examples are omitted becaus the use is pretty much obvious and in par with the usage of ordinary array functions, including find and forEach, feel free to make a pull request with a more detailed readme.

## License
The license chosen for this project can be found inside package.json: MIT

Hopefully this module will save you a little bit of time, have fun and best of luck!