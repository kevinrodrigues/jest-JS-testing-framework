function ConstructorJest(options) {
    this.options = options;

    this.init();
};

ConstructorJest.prototype.init = function() {
    this.something(this.options);
};


ConstructorJest.prototype.something = function(options) {
    console.log(options);
};

module.exports = ConstructorJest;