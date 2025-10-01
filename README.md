# Rose Labs Monorepo

This repository hosts multiple projects including QuickQuote, MirrorEngine, and RIBS.

## Structure

- apps/quickquote — A Node.js CLI tool for quick estimates.
- packages/mirrorengine — A Python library scaffold.
- packages/ribs — A Python library scaffold.

## Getting Started

### QuickQuote CLI

Navigate to apps/quickquote and install dependencies:

npm install
node src/index.js "Service: drain cleaning, labor:2h, rate:125"

### Python Libraries

Create a virtual environment and install the packages in editable mode:

python -m venv .venv
source .venv/bin/activate
pip install -e packages/mirrorengine -e packages/ribs

## Contributing

Feel free to open issues and pull requests. See CONTRIBUTING.md for guidelines.
