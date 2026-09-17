function formatRepositories(repositories) {
    repositories.forEach((repo, index) => {
        console.log(`${index + 1}. ${repo.name}`);
        console.log(`   Description: ${repo.description || "No description"}`);
        console.log(`   Stars: ${repo.stargazers_count}`);
        console.log(`   Language: ${repo.language || "Not specified"}`);
        console.log("");
    });
}

module.exports = formatRepositories;