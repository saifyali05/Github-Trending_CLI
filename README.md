# GitHub Trending CLI

A command-line application built with Node.js that fetches recently created GitHub repositories, sorts them by star count, and displays the top repositories directly in the terminal.

## Features

* Fetch repositories from the GitHub REST API
* Filter repositories by time duration
* Supported durations:

  * `day`
  * `week`
  * `month`
  * `year`
* Sort repositories by star count
* Limit the number of displayed repositories
* Display repository:

  * Name
  * Description
  * Stars
  * Programming language
  * GitHub URL
* Handle invalid CLI arguments
* Handle GitHub API errors
* Clean, modular project structure

## Tech Stack

* Node.js
* JavaScript
* GitHub REST API
* Fetch API

## Project Structure

```text
github-trending-cli/
│
├── src/
│   ├── index.js
│   │
│   ├── cli/
│   │   └── args.js
│   │
│   ├── services/
│   │   └── github.js
│   │
│   ├── utils/
│   │   ├── date.js
│   │   └── formatter.js
│   │
│   └── errors/
│       └── errors.js
│
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Move into the project directory:

```bash
cd github-trending-cli
```

Install dependencies:

```bash
npm install
```

Link the CLI locally:

```bash
npm link
```

## Usage

Run the CLI using:

```bash
trending-repos
```

By default:

* Duration: `week`
* Limit: `10`

### Specify Duration

```bash
trending-repos --duration day
```

```bash
trending-repos --duration week
```

```bash
trending-repos --duration month
```

```bash
trending-repos --duration year
```

### Specify Limit

```bash
trending-repos --limit 5
```

### Specify Both

```bash
trending-repos --duration month --limit 20
```

## Options

| Option       | Description                                | Default |
| ------------ | ------------------------------------------ | ------- |
| `--duration` | Time range: `day`, `week`, `month`, `year` | `week`  |
| `--limit`    | Number of repositories to display          | `10`    |

## Example Output

```text
Duration: week
Starting date: 2026-09-10
Limit: 5

1. repository-name
   Description: A description of the repository
   Stars: 500
   Language: Python
   URL: https://github.com/...

2. another-repository
   Description: Another project
   Stars: 420
   Language: JavaScript
   URL: https://github.com/...
```

## How It Works

The application follows this flow:

```text
CLI Arguments
      ↓
Argument Validation
      ↓
Date Calculation
      ↓
GitHub REST API
      ↓
Extract Repositories
      ↓
Sort by Stars
      ↓
Apply Limit
      ↓
Format Output
      ↓
Display in Terminal
```

The application uses GitHub repository search with a creation-date filter and then sorts the returned repositories by their star count.

> Note: This project uses recently created repositories as a simplified approximation of GitHub "trending" repositories. GitHub's REST API does not provide a direct official Trending Repositories endpoint.

## Error Handling

The CLI validates user input before making an API request.
returns an error because the duration must be one of:

day
week
month
year

Invalid limits are also rejected:

trending-repos --limit -5

The application also handles unsuccessful GitHub API responses and displays a clean error message.

Learning Goals

This project was built to practice:

Node.js CLI development
process.argv
Command-line argument parsing
Input validation
JavaScript modules
async/await
Fetch API
REST APIs
JSON parsing
Array methods
Sorting
Error handling
Modular project architecture
Creating executable Node.js CLI applications
License

This project is licensed under the ISC License.

For example:

```bash
trending-repos --duration invalid
``
```
