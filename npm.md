# Node.js management
## NVM -  Node.js Version Manager

```shell
# Install 'nvm' using official install script
# wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

# List all installed versions of Node.js
nvm ls

# List available versions to download
nvm ls-remote

# Install a specific version of Node.js
nvm install <Node.js_version>

# Switch to a specific version of Node.js
nvm use <Node.js_version>

# Set a default version of Node.js
nvm alias default <Node.js_version>

# Check Node.js version
node -v
```

## NRM - NPM Registry Manager

```shell
# Install 'nrm' globally using 'npm'
npm install -g nrm

# List all available registries
nrm ls

# Switch to a specific registry
nrm use <registry>

# Add a new registry
nrm add <registry> <url>

# Test the speed of a registry
nrm test <registry>
```

