#!/bin/sh

# Check if SSH_AUTH_SOCK is empty and ssh-agent exists, then start ssh-agent
if [ "$SSH_AUTH_SOCK" = "" -a -x /usr/bin/ssh-agent ]; then
    eval `/usr/bin/ssh-agent`
fi

# Set Git user name and email for the current repository
git config user.name "Linh Pham"
git config user.email "linh.pham@codeleap.de"

# Output confirmation
echo "SSH agent started (if needed) and Git user configured as Linh Pham (linh.pham@codeleap.de)."
