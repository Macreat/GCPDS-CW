# Gemini CLI — Documentation

This repository contains the documentation for the Gemini CLI and associated project workflows.

## Project Structure

The project is structured to provide clear documentation for its various components. The primary documentation is served via Vercel.

- **`docs/`**: Contains the generated documentation (Doxygen/HTML).
- **`agentCLI/`**: Contains documentation sources, installation guides, and reference documents for the Multiagent CLI.
- **`software/`**: Core API documentation and architecture. See [SOFTWARE ARCHITECTURE & API](https://gcpdscw.vercel.app/dir_900b16b0635db2353bbcd3cec7bc9ede.html) (or the corresponding generated page).

## Main Content Sections

- **Agents CLI:** Installation guides, concepts, and usage for the command-line interface. See `agentCLI/AGENTS_CLI.md`.
- **coWorkEnv:** Guides on collaborative development, deployment standards, and environment setup. See `agentCLI/COWORK.md`.
- **Software API:** Strategic vision and technical architecture for the RF monitoring API. See `software/README.md`.

## Deployment

The documentation is automatically deployed to [gcpdscw.vercel.app](https://gcpdscw.vercel.app/) via Vercel integration with the `ghpage` branch and posterior GH actions deployment implementation. 

- **Vercel Config**: Controlled by `vercel.json` in the root.
- **Root Directory**: Set to `./` in Vercel settings.
- **Homepage**: Automatically redirects from `/` to `/docs/index.html`.
