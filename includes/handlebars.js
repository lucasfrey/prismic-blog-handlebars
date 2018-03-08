var register = function(Handlebars) {
    var helpers = {
        ifeq: function(a, b, options) {
            if (a === b) {
                return options.fn(this)
            }
            return options.inverse(this)
        }
    };

    if (Handlebars && typeof Handlebars.registerHelper === "function") {
        for (var prop in helpers) {
            Handlebars.registerHelper(prop, helpers[prop]);
        }
    } else {
        return helpers;
    }
};

module.exports.register = register;
module.exports.helpers = register(null);