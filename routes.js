const tableData = require("./tableData");
const waitList = require("./waitlist");

module.exports = function (app) {
    app.get("/api/tables", function (req, res) {
        return res.json(tableData);
    });

    app.get("/api/waitlist", function (req, res) {
        return res.json(waitList);
    });

    app.post("/api/tables", function(req, res) {
        
        var newTable = req.body;
      
        tableData.push(newTable);
      
        res.json(tableData);
      });

      app.post("/api/waitlist", function(req, res) {
        
        var newTable = req.body;
      
        waitList.push(newTable);
      
        res.json(waitList);
      });

      app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
      });
      
      app.get("/tablelist", function(req, res) {
        res.sendFile(path.join(__dirname, "tableList.html"));
      });
}