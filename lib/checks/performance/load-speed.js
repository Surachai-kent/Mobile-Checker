//check load speed of website
exports.name = "load-speed";
exports.category = "performance";
exports.check = function (checker) {
	var sink = checker.sink;
	if (checker.webAppData.pageSpeed <= 1000) {
		sink.emit('ok', checker.l10n.message(checker.options.lang, this.category, this.name, "ok"));
		sink.emit('done');
	}
	else if (checker.webAppData.pageSpeed > 1000 && checker.webAppData.pageSpeed <= 2000) {
		sink.emit('warning', checker.l10n.message(checker.options.lang, this.category, this.name, "warning"));
		sink.emit('done');
	}
	else if (checker.webAppData.pageSpeed > 2000) {
		sink.emit('err', checker.l10n.message(checker.options.lang, this.category, this.name, "err"));
		sink.emit('done');
	}
}