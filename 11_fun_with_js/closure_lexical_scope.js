```
Lexical scoping:

init() creates a local variable called name and a function called displayName(). The displayName() function is an inner function that is defined inside init() and is available only within the body of the init() function. Note that the displayName() function has no local variables of its own. However, since inner functions have access to the variables of outer scopes, displayName() can access the variable name declared in the parent function, init().

```

function init() {
    let name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();
  

  ```
Closure:

The reason is that functions in JavaScript form closures. A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any variables that were in-scope at the time the closure was created. In this case, myFunc is a reference to the instance of the function displayName that is created when makeFunc is run. The instance of displayName maintains a reference to its lexical environment, within which the variable name exists. For this reason, when myFunc is invoked, the variable name remains available for use, and "Mozilla" is passed to console.log.
  ```


  function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();
  

```
Practical example of Closure is in closure_lexical_scope.js file at second <script> tag
```

function clickHandler(color){
    // document.body.style.backgroundColor = `${color}`

    return function(){
        document.body.style.backgroundColor = `${color}`
    }
}

document.getElementById('orange').onclick = clickHandler("orange")
document.getElementById('green').onclick = clickHandler("green")