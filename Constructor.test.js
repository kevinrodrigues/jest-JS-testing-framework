const ConstructorTest = require('./Constructor');

describe('`ConstructorJest`', () => {
    var newConstructorInstance,
        options = {
          foo: 'baz'
        };
      
  beforeEach(() => {
      newConstructorInstance = new ConstructorTest(options);    
  });

  it('should exist', () => {
      expect(newConstructorInstance).toBeDefined();
  });

  describe('when invoked', () => {
      var foo;

      beforeEach(() => {
        foo = jest.spyOn(newConstructorInstance, 'something');
      });

      it('should set `this.options` to be `options`', () => {
        expect(newConstructorInstance.options).toBe(options);
      });

      it('should invoke `something` prototype method', () => {
        newConstructorInstance.init();
        expect(foo).toHaveBeenCalledWith(newConstructorInstance.options);
      });

      it('should invoke `something` with `this.options`', () => {
        newConstructorInstance.init();
        expect(foo).toHaveBeenCalledWith(newConstructorInstance.options);
      });
  });
});