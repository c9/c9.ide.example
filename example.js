define(function(require, exports, module) {
    main.consumes = [
        "Plugin", "commands"
    ];
    main.provides = ["example1"];
    return main;

    function main(options, imports, register) {
        var Plugin = imports.Plugin;
        var commands = imports.commands;
        
        /***** Initialization *****/
        
        var plugin = new Plugin("Ajax.org", main.consumes);
        var emit = plugin.getEmitter();
        var api  = plugin.setAPIKey(options.apikey);
        
        var loaded = false;
        function load() {
            if (loaded) return false;
            loaded = true;
            
            // Test use of the API
            // api.setPersistentData("user", { example: 123 }, function(err){
            //     api.getPersistentData("user", function(err, data){
            //         console.error(data.example === 123);
            //     });
            // });
            
            // Test loading relative content
            console.error(require("text!./test.html"));
            
            // Test dependencies
            console.error(commands, options.color);
        }
        
        /***** Methods *****/
        
        /***** Lifecycle *****/
        
        plugin.on("load", function() {
            load();
        });
        plugin.on("enable", function() {
            
        });
        plugin.on("disable", function() {
            
        });
        plugin.on("unload", function() {
            loaded = false;
        });
        
        /***** Register and define API *****/
        
        /**
         * 
         **/
        plugin.freezePublicAPI({
            _events: [
                /**
                 * @event draw
                 */
                "draw"
            ]
        });
        
        register(null, {
            example1: plugin
        });
    }
});