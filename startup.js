async function main(){
	var swc;
	try{ 
		swc = await require("./keke_stage/server/models/swc/init")();
		swc = await require('./controllers/access')(swc, {});

		await swc.services.zbnet.startup(swc, {});

	}catch(e){
		console.log(e);
		process.exit();
	}
}

main();
	