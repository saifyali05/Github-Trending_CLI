async function getRepo(date) {
    const url = `https://api.github.com/search/repositories?q=created:>${date}`;
const response = await fetch(url);
if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
    }
const data = await response.json();
return data;
}
module.exports=getRepo;
