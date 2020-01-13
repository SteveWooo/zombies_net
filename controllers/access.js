module.exports = async (swc, options)=>{
	swc = await swc.registerService(swc, {
		serviceName : 'zbnet',
		path : `${__dirname}/../services/zbnet/service`
	})
	await swc.services.zbnet.init(swc, {});
	
	return swc;
}
	