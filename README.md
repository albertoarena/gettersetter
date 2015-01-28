# gettersetter
This Javascript library is designed to create a simple and light getter/setter.

## How to use it

Create an object with a getter/setter method

```js
// Create an object with getter/setter method
var obj = {
   name: new getterSetter('John')
};

// Access the property in read or write mode
console.log(obj.name()); // ==> John
obj.name('Jim');
console.log(obj.name()); // ==> Jim
```

The setter methods can be chained:

```js
var obj = {
   name: new getterSetter('John'),
   age: new getterSetter(25)
};

obj.name('Jim').age(36);
```

A callback can be associated to the setter:

```js
var obj = {
   name: new getterSetter('John', function(v) { console.log('Now my name is ' + v); }),
   age: new getterSetter(25)
};

obj.name('Jim'); // ==> Now my name is Jim
```

## Read more
Article about how to use it: http://www.albertoarena.co.uk/a-simple-javascript-gettersetter/
