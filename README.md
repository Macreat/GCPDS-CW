# Gemini CLI — Documentation

This repository contains the documentation for the Gemini CLI and associated project workflows.

## Project Structure

The project is structured to provide clear documentation for its various components. The primary documentation is served via Vercel.

- **`docs/`**: Contains the generated documentation (Doxygen/HTML).
- **`agentCLI/`**: Contains documentation sources, installation guides, and reference documents for the Multiagent CLI.
- **`software/`**: Additional software documentation and API references.

## Main Content Sections

- **Agents CLI:** Installation guides, concepts, and usage for the command-line interface. See `agentCLI/AGENTS_CLI.md`.
- **coWorkEnv:** Guides on collaborative development, deployment standards, and environment setup. See `agentCLI/COWORK.md`.

## Deployment

The documentation is automatically deployed to [gcpdscw.vercel.app](https://gcpdscw.vercel.app/) via Vercel integration with the `main` branch.

- **Vercel Config**: Controlled by `vercel.json` in the root.
- **Root Directory**: Set to `./` in Vercel settings.
- **Homepage**: Automatically redirects from `/` to `/docs/index.html`.
