# Codelab: Automated UI Testing with Gemini CLI and BrowserMCP

# About this Repo

- This repo: [automated-ui-testing-demo-with-geminicli](https://github.com/derailed-dash/automated-ui-testing-demo-with-geminicli)
- Author: Darren "Dazbo" Lester
- Created: 2026-02-24

## Key Links

- [My related blog - Creating an Automated UI Test of Your Web App in Seconds with Gemini CLI and BrowserMCP](https://medium.com/google-cloud/creating-an-automated-ui-test-of-your-web-app-in-seconds-with-gemini-cli-and-browsermcp-09cf4afb8940).
- [Google Codelabs](https://codelabs.developers.google.com/)
- [This Codelab](https://codelabs.developers.google.com/automated-ui-testing-demo-with-geminicli) - This does not yet exist.

# Introduction

Testing web applications can be a chore. Traditional UI testing often feels like a constant battle against fragility. You find yourself writing complex scripts, managing brittle CSS and XPath selectors, and jumping through hoops just to get a simple user flow verified.

But what if you could just *tell* an agent what to test in natural language, and it just... did it?

In this codelab, we'll explore how to use **Gemini CLI** and multimodal tools like **BrowserMCP**. You'll see how to create and run automated UI tests using natural language.

## What You'll Learn

- ✅ What the Model Context Protocol (MCP) is and why it's a game-changer.
- ✅ How BrowserMCP enables AI agents to control web browsers.
- ✅ How to run automated UI tests from the Gemini CLI.
- ✅ Understanding skills.
- ✅ Now performing our UI tests with Playwright and a skill.
- ✅ A quick glimpse of doing this with Antigravity, out-of-the-box.
- ✅ Other use cases for browser control.

## What You'll Do

1. ✅ Set up your development environment.
2. ✅ Explore a demo application that needs testing.
3. ✅ Use Gemini CLI to interact with the application via BrowserMCP.
4. ✅ Generate a Playwright test script using an AI skill.
5. ✅ Antigravity Browser Control demo.

# Prerequisites

Before we dive into the cool stuff, let's make sure you have everything you need.

## Create a Google Cloud Project

You'll need a Google Cloud Project to follow along. You can use an existing one or [create a new one](https://console.cloud.google.com/projectcreate).

Make sure [billing](https://console.cloud.google.com/billing) is enabled.

## Clone the Demo Repo

Clone this repository to get the sample app and configuration files.

```bash
git clone https://github.com/derailed-dash/automated-ui-testing-demo-with-geminicli
cd automated-ui-testing-demo-with-geminicli
```

## Setup Your Development Environment

We'll use `uv` for Python package management.

```bash
# Install dependencies
make install

# Load environment variables
source .env
```

## Create a Gemini API Key

You'll need an API key from [Google AI Studio](https://aistudio.google.com/). Once you have it, add it to your `.env` file:

```bash
export GEMINI_API_KEY="your-api-key"
```

# The Challenge of UI Testing

Traditional UI testing is notoriously difficult to get right and even harder to maintain. Common pain points include:

- **Test "Flakiness"**: Tests that pass one minute and fail the next due to timing issues, race conditions, or slow-loading assets.
- **Brittle Selectors**: Relying on specific DOM structures (like `div > div > button`) that break with the slightest UI tweak, leading to constant script maintenance.
- **High Learning Curve**: Requiring developers to master complex domain-specific languages and framework-specific quirks (Cypress, Selenium, Playwright) just to automate a basic click.
- **Environment Parity**: Wrestling with hard-to-replicate application states and the overhead of cleaning up test data.

We need a way to test that focuses on **intent** rather than **implementation**.

# Our Demo Application

The app we're testing today is **The Dazbo Omni-Dash** — a futuristic, dark-themed dashboard for managing edge security telemetry. 

## Why this app?

It’s built to provide a realistic testing surface with:

- **Mock Authentication**: A login flow requiring specific credentials.
- **Dynamic Content**: Telemetry cards and security logs that simulate real-time data.
- **Interactive States**: Navigation menus and form inputs that change based on user action.
- **Modern Tech**: Built with React and Vite for a fast, responsive experience.

## Launching the App

To start the application, simply run:

```bash
make dev
```

The development server should start very quickly, and the app will be available at `http://localhost:5173`.

# MCP to the Rescue

## Introduction to MCP

The **Model Context Protocol (MCP)** is an open standard that allows AI models and agents to safely and easily interact with external tools, APIs, and data. Think of it as the universal adapter that allows models and agents to find and execute the tools it has access to.

Traditionally, integrating Large Language Models (LLMs) with external data and tools required developers to write custom, hard-coded API connections for every new data source, creating an unsustainable "M x N" integration problem where every new model and tool multiplies the maintenance burden. The Model Context Protocol (MCP) solves this by removing the need to write specific code to orchestrate these capabilities. Instead of explicitly coding complex execution workflows, developers can rely on the LLM to interpret a user's **natural language** requests and dynamically reason about which tools to use on the fly. When a user issues a natural language command (like "Find the latest sales report and email it"), the LLM discovers the available capabilities and generates a structured request to invoke a specific tool. The MCP client acts as a translator, routing this request to the designated MCP server, which executes the action or fetches the data and returns the context to the model. This empowers the AI to act autonomously without the developer having to hard-code the specific execution path. 

Because MCP creates a universal standard — often described as the "USB-C for AI applications" — it unlocks massive **off-the-shelf reusability**. Developers can build an MCP server once, and any MCP-compatible AI host can instantly connect to it, eliminating the M x N integration problem. You no longer have to build custom API bridges for every platform; instead, you can leverage the ecosystem of pre-built, open-source MCP servers for common services like GitHub, Slack, databases, whatever; plugging them straight into your agentic workflows. This modular, plug-and-play architecture ensures that if you switch LLM providers or upgrade your tools later, your core integration infrastructure remains completely unchanged.

## What is BrowserMCP?

**BrowserMCP** is an MCP server that gives AI agents "eyes" and "hands" it needs to interact with a web browser. It can:

- Navigate to URLs.
- Click buttons and type text.
- Inspect the DOM.

## Installing

tbc

# Section 5: Running the Test

Now for the magic. We'll use the `gemini` CLI to run a test.

```bash
gemini "Go to http://localhost:3000, login as 'admin' with password 'password', and verify that the dashboard title says 'Welcome Back'."
```

Gemini will use BrowserMCP to perform these actions and report back. No code required.

# Section 6: Automation with Playwright Skill

Once you're happy with the manual flow, you might want to bake it into a CI/CD pipeline. We can use a **Playwright Skill** to convert our natural language intent into a robust, repeatable Playwright script.

# Section 7: You Can Do This in Antigravity!

The experience you see in the CLI is even more powerful within **Antigravity**, Google's agentic coding assistant. Antigravity integrates these tools directly into your workflow, allowing for even tighter feedback loops.

# Section 8: Other Use Cases

Browser control isn't just for testing. You can use it for:
- Data scraping.
- Automating repetitive web tasks (like filling out expense reports).
- Web research and summarization.

# Conclusion

Congratulations! You've seen how AI agents, powered by MCP and BrowserMCP, can transform the way we think about UI testing.

You've learned:
- **UI testing doesn't have to be painful.**
- **MCP** provides a standardized way for agents to use tools.
- **BrowserMCP** lets agents interact with the web just like a human.
- **Gemini CLI and Antigravity** make these capabilities accessible and powerful.

Now, go forth and automate the boring stuff!
