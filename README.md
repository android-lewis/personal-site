# Lewis Baston — Personal Developer Site

A modern, fully responsive personal portfolio built with **Gatsby** and **React**, featuring smooth animations with **Framer Motion**, styled with **Tailwind CSS**, and deployed on **AWS** using infrastructure-as-code with **Terraform** and automated CI/CD via **GitHub Actions**.

**Site:** https://lewnix.com  
**GitHub:** [@android-lewis](https://github.com/android-lewis)

---

## Overview

This is a production-ready personal portfolio site showcasing:
- **Full-page smooth scrolling** navigation between sections
- **Animated components** with Framer Motion (staggered animations, hover effects, transitions)
- **TypeScript** for type-safe React components
- **Centralized data management** — experiences and projects in `src/data/`
- **Responsive design** — mobile-first with Tailwind CSS
- **Serverless deployment** — S3 + CloudFront + Route53 on AWS
- **Automated CI/CD** — GitHub Actions for build and deployment
- **Infrastructure as Code** — Terraform for reproducible AWS setup

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend Framework** | Gatsby 5.12.0, React 18.2.0 |
| **Language** | TypeScript 5.3.3 |
| **Styling** | Tailwind CSS 4.1.17, PostCSS |
| **Animations** | Framer Motion 11.18.2 |
| **Navigation** | react-scroll 1.9.3 |
| **UI Components** | shadcn-io (Aurora, Navbar, BackgroundBeams) |
| **Deployment** | AWS S3, CloudFront, Route53 |
| **Infrastructure** | Terraform 1.0+ |
| **CI/CD** | GitHub Actions |

---

## Quick Start

### Prerequisites
- **Node.js** 18+ and npm
- **AWS Account** (for deployment)
- **Terraform** 1.0+ (for infrastructure setup)
- **Git** (for version control)

### Local Development

```powershell
# Install dependencies
npm install

# Start development server (with hot reload)
npm run develop
# Site runs at http://localhost:8000
# GraphQL explorer at http://localhost:8000/___graphql
```

### Build & Test Production Build

```powershell
# Build static site
npm run build

# Serve production build locally (test before deploying)
npm run serve
# Runs at http://localhost:9000
```

### Available npm Scripts

```powershell
npm run develop         # Start dev server with hot reload
npm run build          # Build production-optimized static site
npm run serve          # Serve production build locally
npm run clean          # Clear Gatsby cache and build artifacts
npm run typecheck      # Run TypeScript type checking
```

---

## Project Structure

```
lewis-baston/
├── src/
│   ├── components/           # React components
│   │   ├── hero.tsx         # Landing section with CTA buttons
│   │   ├── about.tsx        # Bio and background
│   │   ├── experience.tsx   # Professional timeline with tech badges
│   │   ├── projects.tsx     # Project grid with links
│   │   ├── navigation.tsx   # Navbar with smooth scroll links
│   │   └── ui/              # shadcn-io UI components
│   ├── data/                # Centralized data (TypeScript)
│   │   ├── experiences.ts   # Professional experience array
│   │   └── projects.ts      # Projects array
│   ├── types/               # TypeScript interfaces
│   │   └── index.ts         # Shared type definitions
│   ├── animations/          # Framer Motion variants
│   │   └── variants.ts      # Centralized animation configs
│   ├── pages/               # Gatsby pages (MDX)
│   ├── styles/              # Global CSS & PostCSS
│   ├── images/              # Static images
│   └── lib/                 # Utility functions
├── infra/                   # Terraform Infrastructure as Code
│   ├── main.tf             # Provider configuration
│   ├── s3.tf               # S3 bucket for static hosting
│   ├── cloudfront.tf       # CloudFront distributions (apex + www redirect)
│   ├── acm.tf              # SSL/TLS certificate & validation
│   ├── route53.tf          # DNS records
│   ├── variables.tf        # Terraform variables
│   ├── outputs.tf          # Terraform outputs
│   └── terraform.tfvars    # Environment-specific values
├── .github/workflows/
│   └── deploy.yml          # CI/CD pipeline (build + deploy)
├── gatsby-config.ts        # Gatsby configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies & scripts
```

---

## Content Management

### Update Experiences & Projects

Edit the TypeScript data files directly:

**Professional Experience** (`src/data/experiences.ts`):
```typescript
export const experiences: Experience[] = [
  {
    title: "Software Engineer II",
    company: "Instil Software",
    period: "Jun 2025 – Present",
    description: "...",
    technologies: [
      { label: "TypeScript", emoji: "🔷" },
      { label: "C#", emoji: "💜" },
      // ...
    ],
  },
  // ...
]
```

**Projects** (`src/data/projects.ts`):
```typescript
export const projects: Project[] = [
  {
    title: "ZPL Label Generator",
    description: "...",
    technologies: ["Go", "ZPL", "Testing"],
    link: "https://github.com/android-lewis/zpl-generator",
  },
  // ...
]
```

Both are **fully typed** with TypeScript interfaces from `src/types/index.ts`.

### Animations & Styling

- **Animation Variants:** Centralized in `src/animations/variants.ts`
- **Tailwind CSS:** Configure in `tailwind.config.js`
- **Global Styles:** `src/styles/globals.css`

## Deployment

### Prerequisites
1. **AWS Account** with permissions for S3, CloudFront, ACM, Route53
2. **Route53 hosted zone** already created for your domain
3. **AWS Credentials** configured locally (for `terraform apply`)

### Step 1: Setup Infrastructure with Terraform

Navigate to the `infra/` directory:

```powershell
cd infra
```

**Copy and customize variables:**

```powershell
Copy-Item terraform.tfvars.example terraform.tfvars
```

**Edit `terraform.tfvars`:**

```hcl
region          = "eu-west-1"
project_name    = "lewnix-site"
domain_name     = "lewnix.com"  # Your domain (must have hosted zone in Route53)
aws_account_id  = "123456789012"
```

**Initialize Terraform:**

```powershell
terraform init
```

**Review planned infrastructure:**

```powershell
terraform plan
```

**Create AWS resources:**

```powershell
terraform apply
```

Terraform will create:
- **S3 Bucket** — stores static site files
- **CloudFront Distribution** (apex) — serves `lewnix.com` via HTTPS
- **CloudFront Distribution** (www redirect) — redirects `www.lewnix.com` → `lewnix.com`
- **ACM Certificate** — SSL/TLS for both domains
- **Route53 Records** — A/AAAA records for apex and www (auto-discovers existing hosted zone)

**Save outputs:**

```powershell
terraform output
```

Note these values for GitHub Actions:
- `s3_bucket_name`
- `cloudfront_distribution_id` (apex)

### Step 2: Setup GitHub Actions CI/CD

**Add AWS credentials as GitHub secrets:**

1. Go to **GitHub Repository** → Settings → Secrets and variables → Actions
2. Add the following secrets:

| Secret | Value |
|--------|-------|
| `AWS_ACCESS_KEY_ID` | AWS IAM access key |
| `AWS_SECRET_ACCESS_KEY` | AWS IAM secret key |
| `AWS_REGION` | `eu-west-1` (or your region) |
| `S3_BUCKET_NAME` | From Terraform output |
| `CLOUDFRONT_DISTRIBUTION_ID` | From Terraform output (apex) |
| `SITE_DOMAIN` | `lewnix.com` |

**Recommended: Create dedicated IAM user**

For security, create an IAM user specifically for GitHub deployments:

1. **AWS Console** → IAM → Users → Create user
2. Attach policy: `AmazonS3FullAccess` (or custom policy with S3 + CloudFront permissions)
3. Generate access key and copy to GitHub secrets

### Step 3: Deploy

Simply push to `main` branch to trigger automatic deployment:

```powershell
git add .
git commit -m "Update site content"
git push origin main
```

**Monitor deployment:**
- GitHub → Actions tab
- View workflow logs for build & deploy steps

Workflow does:
1. ✅ Checks out code
2. ✅ Installs dependencies
3. ✅ Runs TypeScript type checking
4. ✅ Builds Gatsby site (`npm run build`)
5. ✅ Syncs `public/` to S3 (with smart cache headers)
6. ✅ Invalidates CloudFront cache
7. ✅ Posts deployment notification

---

## Manual Deployment (If Needed)

If you need to deploy without GitHub Actions:

```powershell
# Build
npm run build

# Configure AWS credentials
aws configure

# Sync to S3 (with optimal caching)
aws s3 sync public/ s3://lewnix-site-123456789012 `
  --delete `
  --cache-control 'max-age=0' `
  --exclude '*' `
  --include 'index.html' `
  --include 'sitemap.xml' `
  --include 'robots.txt'

aws s3 sync public/ s3://lewnix-site-123456789012 `
  --cache-control 'max-age=31536000' `
  --include 'static/*'

# Invalidate CloudFront cache
aws cloudfront create-invalidation `
  --distribution-id E1234ABCD5FGHIJ `
  --paths "/*"
```

---

## Contact

- **Email:** lewis.baston@outlook.com
- **GitHub:** [@android-lewis](https://github.com/android-lewis)
- **Location:** Belfast, Northern Ireland
