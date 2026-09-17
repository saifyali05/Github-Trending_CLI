#!/usr/bin/env node
const getDate = require("./utils/date");
const getRepo = require("./services/github");
const formatRepositories = require("./utils/formatter");
const getArgs = require("./cli/args");
const { duration, limit } = getArgs();



//validation duration
const validDuration = ["day","week", "month", "year"];
if(!validDuration.includes(duration)){
    console.error("Error: duration must be day, week, month, or year");
process.exit(0);
}
//validate limit
if(!Number.isInteger(limit)|| limit<=0){
    console.error("Enter a positive number");
    process.exit(1);
    
}
async function main() {
    try {
        const date = getDate(duration).toISOString().split("T")[0];

        console.log("Duration:", duration);
        console.log("Starting date:", date);
        console.log("Limit:", limit);

        const data = await getRepo(date);

        const repo = data.items;
if (repo.length === 0) {
    console.log("No repositories found.");
    return;
}
        repo.sort((a, b) => b.stargazers_count - a.stargazers_count);

        const limitedRepo = repo.slice(0, limit);

        formatRepositories(limitedRepo);

    } catch (error) {
        console.error("Error:", error.message);
        process.exit(1);
    }
}

main();