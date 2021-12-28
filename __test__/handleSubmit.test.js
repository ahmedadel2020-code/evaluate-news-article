import "babel-polyfill";

import handleSubmit from '../src/client/js/formHandler';

test('should check handleSubmit function', () => {
    expect(handleSubmit).toBeDefined();
})
