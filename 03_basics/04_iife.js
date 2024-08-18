// Immediately Invoked Function Expressions (IIFE)
// They are typically used to create a local scope for variables to prevent them from polluting the global scope.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();                            // we need this semicolon after ending of first function if we are declaring two IIFE in js 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

