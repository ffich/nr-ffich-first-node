module.exports = function(RED) {
    function TestNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = "This is my first node!!!";
            node.send(msg);
        });
    }
    RED.nodes.registerType("test",TestNode);
}