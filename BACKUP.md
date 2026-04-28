# Betts Foundations — Backup & Restore Guide

This document explains how to create a portable backup of the Betts Foundations
repository and restore it on any machine.

---

## Quick Backup (Local)

### 1. Zip the entire repository

```bash
# From the directory CONTAINING the repo folder
cd /path/to/parent-directory

zip -r betts-foundations-backup-$(date +%Y%m%d).zip Omg-fus/ \
  --exclude "Omg-fus/node_modules/*" \
  --exclude "Omg-fus/.next/*" \
  --exclude "Omg-fus/.git/objects/pack/*"
```

This produces a file like `betts-foundations-backup-20260428.zip`.

### 2. Store the backup

- Upload to Cloudflare R2 or any S3-compatible bucket.
- Store a copy on a local external drive.
- Optionally email/upload to a password-protected cloud location.

---

## Git-Based Backup (Recommended)

Because the project lives in a Git repository, the most reliable backup is to
ensure all commits are pushed to the remote:

```bash
cd /path/to/Omg-fus

# Verify you are on the right branch
git status

# Push all branches and tags
git push --all origin
git push --tags origin
```

If the GitHub remote is unavailable, add a secondary remote:

```bash
git remote add backup git@gitlab.com:yourname/betts-foundations-backup.git
git push --all backup
```

---

## Restore from Zip

```bash
# 1. Unzip
unzip betts-foundations-backup-YYYYMMDD.zip -d /path/to/restore/

# 2. Enter the directory
cd /path/to/restore/Omg-fus

# 3. Install dependencies
npm install

# 4. Copy env file
cp .env.example .env.local
# Fill in real values in .env.local

# 5. Run development server
npm run dev
```

---

## Restore from Git Clone

```bash
# Clone from GitHub
git clone https://github.com/Cbetts1/Omg-fus.git betts-foundations

cd betts-foundations

# Install dependencies
npm install

# Set up environment
cp .env.example .env.local
# Edit .env.local with real values

# Run
npm run dev
```

---

## Critical Files to Back Up Separately

These files are **not in the repository** but are required for production:

| File | Where | Notes |
|---|---|---|
| `.env.production` | VPS Docker host | Contains all production secrets |
| Nginx config | `/etc/nginx/sites-enabled/` on VPS | TLS + proxy config |
| SSL certificates | `/etc/letsencrypt/` on VPS | Auto-renewed by Certbot |
| Docker Compose file | VPS app directory | If customised beyond the repo version |

### Back up production env file

```bash
# On VPS — copy to secure off-server location
scp user@your-vps:/opt/betts-foundations/.env.production ./env-prod-backup-$(date +%Y%m%d).txt
# Encrypt before storing
gpg --symmetric --cipher-algo AES256 env-prod-backup-$(date +%Y%m%d).txt
```

---

## Restore Checklist

- [ ] Code restored (git clone or unzip)
- [ ] `npm install` completed
- [ ] `.env.local` (dev) or `.env.production` (prod) populated
- [ ] Database connection verified (`DATABASE_URL` points to live Neon instance)
- [ ] Cloudflare R2 bucket accessible
- [ ] Stripe webhook endpoint re-registered
- [ ] DNS pointing to correct server IP
- [ ] NGINX + TLS running (`nginx -t && systemctl reload nginx`)
- [ ] `npm run build` passes (no TBD values in production)

---

## Contact

For recovery assistance: support@bettsfoundations.org
