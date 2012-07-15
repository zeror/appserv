var  nodeStatic= require('node-static');


exports.start=function(opt){

	var file = new nodeStatic.Server(opt.folder);

	require('http').createServer(function (req, res) {
		req.addListener('end', function () {
			file.serve(req, res);
		});
	}).listen(opt.port,opt.host);

}
