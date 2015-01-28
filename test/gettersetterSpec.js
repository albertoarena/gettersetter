define(['gettersetter'], function (gettersetter) {

    describe('Basic getter/setter', function () {
        var test;

        beforeEach(function() {
            test = new gettersetter('12345');
        });

        it('should create a setter and get its value back', function () {
            expect(test()).toEqual('12345');
            test('abc');
            expect(test()).not.toEqual('12345');
            expect(test()).toEqual('abc');
        });

        it('should not modify the value if no parameter is passed', function() {
            test();
            expect(test()).toEqual('12345');
        });

    });

    describe('Getter/Setter with callback', function () {
        var test, foo;

        beforeEach(function () {
            foo = {
                callback: function () {
                }
            };

            spyOn(foo, 'callback');

            test = new gettersetter('12345', foo.callback);
            test('abc');
        });

        it('should call the callback', function () {
            expect(foo.callback).toHaveBeenCalled();
        });

        it('should pass the correct parameter to the callback', function () {
            expect(foo.callback).toHaveBeenCalledWith('abc');
        });
    });
});