var cron = require("node-cron");
const { QueueJob } = require("./models");
const SendMail = require("./jobs/SendMail");
cron.schedule("*/30 * * * * *", async () => {
	console.log("running a task every 30 secs");
	//Viết logic thực thi queue
	const jobId = await QueueJob.min("id");
	if (!jobId) {
		console.log("There is no task");
		return;
	}
	const priorityJob = await QueueJob.findByPk(jobId);

	const job = JSON.parse(priorityJob.value).data.job;
	let count = 0;
	const maxFailedTime = 3;
	while (count < maxFailedTime) {
		try {
			new SendMail(job).handle();
			console.log("success");
			break;
		} catch (error) {
			count++;
		}
	}

	await QueueJob.destroy({ where: { id: jobId } });
});
