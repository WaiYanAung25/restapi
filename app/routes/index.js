module.exports = function(app) 
{

    app.get('/', function (req, res) {
        res.send('Retreive')
    })
    
    app.post('/', function (req, res) {
        res.send('Creat ')
    })
    
    app.put('/', function (req, res) {
        res.send('Update')
    })
    
    app.delete('/', function (req, res) {
        res.send('Delete')
    })    
};