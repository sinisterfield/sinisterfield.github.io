# Sinister Field


Lastest experiments, tools and services from Lamoreaux Labs.

# Quick Start Guide

```bash
# Clone the project

# Run site locally
npm run dev
```

# Provision

```bash
# load .env vars (optional)
[ -f .env ] && while IFS= read -r line; do [[ $line =~ ^[^#]*= ]] && eval "export $line"; done < .env


# Crate static web app, retrieving token interactivly
az staticwebapp create \
    --name "$APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --location "$LOCATION" \
    --output-location out \
    --source "$REPO_URL" \
    --branch "$REPO_BRANCH" \
     --login-with-github

# Create custom domain

hostname="www.example.com"
az staticwebapp hostname set --name "$APP_NAME" --hostname "$hostname"
```
# Deploy

The project uses github actions to deploy

```bash
npm run build
```

# Run 