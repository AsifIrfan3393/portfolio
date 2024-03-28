import os
import random
from datetime import datetime, timedelta

# Number of commits
num_commits = 30

# Start and end dates for March 2024
start_date = datetime(2024, 3, 1, 9, 0, 0)
end_date = datetime(2024, 3, 31, 23, 59, 59)

# Custom commit messages
commit_messages = [
    "Initial portfolio setup",
    "Added homepage",
    "Updated navbar",
    "Fixed CSS bug",
    "Improved responsiveness",
    "Added projects section",
    "Linked social profiles",
    "Updated contact form",
    "Bug fixes",
    "Performance improvements",
    "Added animations",
    "Refactored code",
    "Improved accessibility",
    "SEO improvements",
    "Updated README",
    "Optimized images",
    "Added dark mode",
    "Updated footer",
    "Improved layout",
    "Enhanced typography",
    "Fixed broken links",
    "Deployed initial version",
    "Improved forms",
    "Mobile optimization",
    "Fixed JS issue",
    "Polished design",
    "Improved portfolio cards",
    "Updated about section",
    "Final polish",
    "Portfolio completed"
]

for i in range(num_commits):
    # Pick a random date in March 2024
    random_time = start_date + (end_date - start_date) * random.random()
    formatted_date = random_time.strftime("%Y-%m-%d %H:%M:%S")

    # Select commit message
    message = commit_messages[i % len(commit_messages)]

    # Write to a dummy file (so Git sees changes)
    with open("dummy.txt", "a") as f:
        f.write(f"Commit {i+1} on {formatted_date}\n")

    # Add and commit with backdated time
    os.system('git add .')
    os.system(f'git commit -m "{message}" --date="{formatted_date}"')
