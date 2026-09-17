function getArgs() {
    const args = process.argv.slice(2);

    const durationIndex = args.indexOf("--duration");
    const limitIndex = args.indexOf("--limit");

    const duration = args[durationIndex + 1] || "week";
    const limit = Number(args[limitIndex + 1] || 10);

    return {
        duration,
        limit
    };
}

module.exports = getArgs;