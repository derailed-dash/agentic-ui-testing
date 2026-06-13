# Installing Playwright on Ubuntu 26.04 (ARM64)

This guide documents the alternative installation steps required to run Playwright on an Ubuntu 26.04 ARM64 machine.

---

## Why Alternative Instructions Are Required

Ubuntu 26.04 (LTS) is a modern release, and Playwright does not yet include official native support for it or its ARM64 architecture build. Consequently, running standard commands like `npx playwright install-deps` or `npx playwright install` fails for two main reasons:

1. **Platform Detection Mismatches:** Playwright does not recognise `ubuntu26.04-arm64` and fails to find matching pre-compiled browser binaries.
2. **Obsolete Package References:** The automated dependency installer attempts to install specific package versions from Ubuntu 24.04 (e.g., `libxml2`, `libicu74`, `libavcodec60`, `libvpx9`, and `libx264-164`). In Ubuntu 26.04, these packages have been upgraded, renamed, or appended with `t64` suffixes due to the 64-bit time_t transition.

To get Playwright running successfully, we must manually install the modern package equivalents and force Playwright to download and run the Ubuntu 24.04 ARM64 fallback builds.

---

## Step-by-Step Installation

### 1. Install Modern System Dependencies

Manually install the required library versions using `apt`. This maps the old Ubuntu 24.04 library references to their modern Ubuntu 26.04 equivalents:

```bash
sudo apt update
sudo apt install -y \
  libnspr4 \
  libnss3 \
  libxml2-16 \
  libicu78 \
  libavcodec62 \
  libvpx12 \
  libx264-165
```

### 2. Download Browser Binaries using Platform Override

Tell Playwright to ignore the unsupported `ubuntu26.04-arm64` host platform and download the `ubuntu24.04-arm64` browser binaries instead. 

We target the specific browser needed by `playwright-cli`:

```bash
PLAYWRIGHT_HOST_PLATFORM_OVERRIDE=ubuntu24.04-arm64 playwright-cli install-browser chrome-for-testing
```

*(Alternatively, if running via the standard `playwright` runner, you can download chromium with: `PLAYWRIGHT_HOST_PLATFORM_OVERRIDE=ubuntu24.04-arm64 npx playwright install chromium`)*

### 3. Launching a Browser Session

When launching a headed browser session, ensure you continue to override the host platform and explicitly instruct `playwright-cli` to use the installed `chromium` channel rather than the standard branded `chrome` binary (which defaults to checking `/opt/google/chrome/chrome`):

```bash
PLAYWRIGHT_HOST_PLATFORM_OVERRIDE=ubuntu24.04-arm64 playwright-cli open --browser=chromium https://playwright.dev --headed
```
