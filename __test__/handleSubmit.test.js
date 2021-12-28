// I was facing error which called ReferenceError: regeneratorRuntime is not defined
// so I used this solution to import babel-polyfill
import "babel-polyfill";
import handleSubmit from '../src/client/js/formHandler';


// should make sure that handleSubmit function is defined
test('should check handleSubmit function', () => {
    expect(handleSubmit).toBeDefined();
})
