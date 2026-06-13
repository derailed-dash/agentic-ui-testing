# agentic-ui-testing

This repo is intended to provide a hands-on demo and walkthrough of executing automated UI tests from Antigravity CLI. The demo will be consumable as a Google Codelab.

It is based on my blog [Creating an Automated UI Test of Your Web App in Seconds with Gemini CLI and BrowserMCP](https://medium.com/google-cloud/creating-an-automated-ui-test-of-your-web-app-in-seconds-with-gemini-cli-and-browsermcp-09cf4afb8940), but it extends the ideas from that blog and offers additional approaches, specifically transitioning to the modern Antigravity suite.

## Key Links

- [My related blog - Creating an Automated UI Test of Your Web App in Seconds with Gemini CLI and BrowserMCP](https://medium.com/google-cloud/creating-an-automated-ui-test-of-your-web-app-in-seconds-with-gemini-cli-and-browsermcp-09cf4afb8940).
- [Google Codelabs](https://codelabs.developers.google.com/)
- [This Codelab](https://codelabs.developers.google.com/agentic-ui-testing-with-antigravity-cli?utm_campaign=DEVECO_GDEMembers&utm_source=deveco)

## Structure of the Demo / Codelab

1. **Introduction** - overview of agentic testing, what you'll learn, and what you'll do.
2. **The Antigravity Ecosystem** - introducing the four products of the May 2026 overhaul (Agy 2.0, Agy IDE, Agy SDK, and Agy CLI).
3. **Prerequisites** - tools, keys, and setting up the development environment.
4. **Our Demo Application** - getting to know and launching the Dazbo Omni-Dash application.
5. **The Challenge of UI Testing** - timing issues, brittle selectors, and the concept of intent-based testing.
6. **MCP to the Rescue** - universal adapter architecture (USB-C for AI) and dynamic tool reasoning.
7. **Automation with BrowserMCP** - setup, browser extension integration, and our first natural language test.
8. **Automation with Skills and Playwright** - limitations of BrowserMCP, agent skills, progressive disclosure, and headed/headless tests.
9. **Antigravity's Built-In Browser Agent** - how CDP (Chrome DevTools Protocol) direct connection works, and setting up WSL network mirroring.
10. **Other Use Cases for Browser Automation** - web scraping, swivel-chair integration, and automated alert triage.
11. **Conclusion** - wrap-up and useful links.

## Rules and Guidance

- The `README.md` will provide identical content to the Codelab walkthrough.
- Each H1 of the `README.md` will represent the next section of the codelab.
- This repo will be cloneable as part of the codelab.
- All Google-related links must have the GDE UTM tracking query parameters appended.
