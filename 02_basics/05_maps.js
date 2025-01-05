```

A Map is a built-in object in JavaScript that allows you to store key-value pairs, where:

Keys can be of any data type (e.g., objects, functions, primitive values).
Order of elements is preserved, meaning they are iterated in the order of their insertion.

```

// Create an empty Map
let myMap = new Map();

// Create a Map with initial key-value pairs
let myMap2 = new Map([
  ["name", "John"],
  ["age", 30]
]);

console.log(myMap2); // Map(2) { 'name' => 'John', 'age' => 30 }


```
1. map.set(key, value)
Adds a new key-value pair to the Map. If the key already exists, its value will be updated.
```

let map = new Map();
map.set("name", "Alice");
map.set(1, "One");
map.set(true, "Boolean");
console.log(map); // Map(3) { 'name' => 'Alice', 1 => 'One', true => 'Boolean' }


```
2. map.get(key)
Retrieves the value associated with the specified key. Returns undefined if the key does not exist.
```
console.log(map.get("name")); // Alice
console.log(map.get(2)); // undefined

```
3. map.has(key)
Checks if a key exists in the Map. Returns true or false.
```
console.log(map.has("name")); // true
console.log(map.has("age")); // false

```
4. map.delete(key)
Removes the key-value pair for the specified key. Returns true if the key was found and deleted, otherwise false.
```
map.delete("name");
console.log(map); // Map(2) { 1 => 'One', true => 'Boolean' }


```
5. map.clear()
Removes all key-value pairs from the Map.

```
map.clear();
console.log(map); // Map(0) {}


```
Iterating Over a Map

1. map.keys()
Returns an iterator for all the keys in the Map.
```
for (let key of map2.keys()) {
    console.log(key); // "a", "b"
  }


```
2. map.values()
Returns an iterator for all the values in the Map.
```
for (let value of map2.values()) {
    console.log(value); // 1, 2
  }

```
3. map.entries()
Returns an iterator for all [key, value] pairs in the Map.
```
for (let [key, value] of map2.entries()) {
    console.log(key, value); // "a 1", "b 2"
  }
  
```
4. forEach(callback)
Executes a callback function for each key-value pair in the Map.
```
map2.forEach((value, key) => {
    console.log(`${key}: ${value}`); // "a: 1", "b: 2"
  });
  