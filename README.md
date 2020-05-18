[![npm version](https://badge.fury.io/js/object-arrarify.svg)](https://www.npmjs.com/package/object-arrarify)
# object-arrarify

A npm module which converts an ordinary object into an object with various methods which natively are found within an Array,    
such as map, filter, find, forEach, and more, all behave similar to the native array version however, instead of index,    
it provides key(second param), and index(third param).

This module was mainly made to help you use an object in the same way you would use an array,
while saving you the struggle of using complex methods such as reduce, or writing your own ```for var ..in``` loops from scratch,
and thus achieving the desired Declarative Programming pattern which is arguably preferred by many over the sometimes longer and harder to read Imperative way.  
   
NOTE:
the methods are working shallowly, aka, they do not get applied into the inner objects recursively,
so you will have to re-apply the module into inner objects if you wish to perform operations on them as-well which is out of the scope of this module but can be done regardless.
or you can use the sister of this module(which uses this very module internally) and works recursively.   
if you need recursive deep behavior please visit:   
https://github.com/vasilevich/object-arrarify-deep

## Usage and examples

* Install.   
```bash
yarn add object-arrarify
```
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
    var result=obj.map((value,key,index) => {
      return key;
  });
    // result will be: {a:"a",b:"b",c:"c",d:"d",...the arrayTools methods}
    ```   
    * Map Keys usage
    ```js
         // Declare the object
    var result=obj.mapKeys((value,key,index) => {
      return "test1"+key+"test2";
  });
    // result will be: {test1atest2:"1",test1btest2:"2",test1ctest2:"3",test1dtest2:"hello",...the arrayTools methods}
    ```   
    * Filter usage
    ```js
         // Declare the object
    var result=obj.filter((value,key,index) => {
      return key=="a";
  });
    // result will be: {a:"1" ,...the arrayTools methods}
    ```  
    * mapToArray usage
        ```js
             // Declare the object
        var result=obj.mapToArray((value,key,index) => {
          return value;
      });
        // result will be: normal array: ["a","b","c",...(all the values in the object)].
        ```
    * toNormalObject usage
    ```js
         // Declare the object
    var result=obj.toNormalObject();
    // result will be: the original object, without the methods which were applied by the objectArrayTools.
    ```      
     * Real world use example and the reason this module was created in the first place.
     ```js
          // Declare the object
     var result=obj
                  // Perform some filtering logic
                  .filter((value,key,index) => {
                          return key=="a";
                      })
                  //  Perform some value mapping logic 
                  .map((value,key,index) => {
                          return key;
                      })
                  .mapKeys((value,key,index) => {
                          return "test1"+key+"test2";
                      })
                  // Convert to an ordinary object without the arrayTools methods which might conflict with other object related tools/code.  
                    .toNormalObject();
     // result will be: {test1atest2:"a", (NO ARRAYTOOLS METHODS)}
     ```      
   
Other examples are omitted because the use is pretty much obvious and in par with the usage of ordinary array functions, just look at index.ts to see all the available methods or use type completion in your ide, including find and forEach, feel free to make a pull request with a more detailed readme.

## License
The license chosen for this project can be found inside package.json: MIT

Hopefully this module will save you a little bit of time, have fun and best of luck!
