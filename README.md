# OpenClaw-WordPress-MCP

WordPress MCP (Model Context Protocol) automation system built with Node.js and integrated with OpenClaw AI. It can automatically create WordPress posts, Elementor pages, and Elementor blog layouts through prompts or automated scripts.

## Features

- Connects with WordPress via REST API
- Creates WordPress posts automatically
- Creates Elementor pages programmatically
- Generates Elementor blog layouts
- Uses OpenClaw MCP for AI-based content generation
- Supports reusable Elementor templates
- Includes WordPress SEO skills for AI-generated content

## Skills

### wordpress-seo

Located at:

```text
skills/wordpress-seo/SKILL.md
```

Provides SEO-focused guidance for AI-generated WordPress content, including:

- SEO-friendly title generation
- Meta description suggestions
- Keyword optimization
- Content structure recommendations
- WordPress SEO best practices

## Project Structure

```text
OpenClaw-WordPress-MCP/
│
├── .env.sample
│
├── skills/
│   └── wordpress-seo/
│       └── SKILL.md
│
├── package.json
├── package-lock.json
├── server.js
├── wordpress.js
├── test.js
├── test-post.js
├── test-elementor-blog.js
│
├── tools/
│   ├── createPost.js
│   ├── createElementorPage.js
│   └── createElementorBlog.js
│
├── utils/
│   └── elementorBuilder.js
│
└── node_modules/
```

## Prerequisites

Before running this project, install:

- Node.js (v18 or above)
- npm
- WordPress website with Elementor installed
- WordPress Application Password

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/akshita122003/OpenClaw-WordPress-MCP.git
cd OpenClaw-WordPress-MCP
```

### 2. Install Dependencies

```bash
npm install
```

## Environment Setup

Create a `.env` file and add your WordPress credentials:

```env
WP_URL=https://yourwebsite.com
WP_USERNAME=your_wp_username
WP_APP_PASSWORD=your_application_password
PORT=3000
```

Copy the sample environment file:

```bash
cp .env.sample .env
```

Then update `.env` with your actual WordPress credentials.

### How to get WordPress Application Password

In WordPress:

```text
Users → Profile → Application Passwords
```

Create a new password and copy it into the `.env` file.

## Run the Project

Start the server:

```bash
node server.js
```

Or with nodemon:

```bash
npx nodemon server.js
```

Server runs on:

```text
http://localhost:3000
```

## Available Scripts

### Create a WordPress Post

```bash
node tools/createPost.js
```

Creates a new post in WordPress using the REST API.

### Create an Elementor Page

```bash
node tools/createElementorPage.js
```

Creates a WordPress page and injects Elementor-compatible content.

### Create an Elementor Blog Layout

```bash
node tools/createElementorBlog.js
```

Generates a 3-column Elementor blog section dynamically.

### Test WordPress Connection

```bash
node test.js
```

Checks whether the WordPress API connection is working correctly.

## How the Project Works

### Workflow

1. OpenClaw receives a prompt.
2. The prompt is converted into structured content.
3. The appropriate tool script is triggered.
4. The script calls the WordPress REST API.
5. WordPress creates the post/page automatically.
6. Elementor data is injected for visual page generation.

## Example Prompt

```text
Create a modern Elementor blog page for a digital marketing website with 3 latest posts, featured image, excerpt, and Read More button.
```

OpenClaw processes this prompt and automatically generates the Elementor layout in WordPress.

## Elementor Integration

The `utils/elementorBuilder.js` file contains reusable functions for building Elementor JSON structures.

It is responsible for:

- Sections
- Columns
- Headings
- Images
- Buttons
- Blog Cards
- Responsive Layout Data

This allows AI-generated content to become a real Elementor page.

## OpenClaw MCP Integration

This project is designed to work with OpenClaw MCP.

### Register MCP

```bash
openclaw mcp add wordpress http://localhost:3000/mcp
```

### Verify MCP

```bash
openclaw mcp probe wordpress
```

### Use in OpenClaw

```text
Create a WordPress blog page about AI automation using Elementor.
```

## Common Issues

### 401 Unauthorized

- Check `WP_USERNAME`
- Check `WP_APP_PASSWORD`
- Ensure Application Password is active

### Connection Refused

- Verify WordPress site is accessible
- Check `WP_URL`
- Ensure the server is running

### Elementor Content Not Showing

- Make sure Elementor plugin is installed and activated
- Verify the page is using Elementor

## Development Notes

This project was built as part of an AI-driven WordPress automation workflow using:

- OpenClaw AI
- MCP (Model Context Protocol)
- WordPress REST API
- Elementor
- Node.js

The goal is to create prompt-to-WordPress automation where complete Elementor pages can be generated from a single AI instruction.
