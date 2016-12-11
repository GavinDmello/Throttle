var handler = require('./handlers')
var notificationHandler = new handler()

var notification = {}

notification.sendNotification = (request, response) => {

	notificationHandler.handleRequest(request.body, function(_err, _res) {
		if (_err) {
			response.send(_err)
		} else {
			response.send(_res)
		}
	})
}

notification.register = (request,response) => {
	notificationHandler.registerClient(request.body, function(_err,_res){
		if(_err){
			response.send(_err)
		}else{
			response.send(_res)
		}
	})
}

module.exports = notification