# Adw Components React

A collection of Adwaita-based UI components for React.

## Features

- Adwaita-inspired design system
- Storybook for each component
- Internationalization support (Spanish, English)
- Tailwind CSS for styling
- Motion and HeadlessUI integrations

## Project Structure

- `src/components/ui/`: All UI components
- `src/app/`: Demo application
- `src/lib/i18next/locales/`: Translation files (en, es)
- `src/index.css`: Base styles and color variables
- `src/hooks/`: Custom hooks used by components

## Dependencies

- Tailwind CSS
- Framer Motion
- Headless UI
- i18next

## Quick guide

Install dependencies:

```bash
pnpm install
```

Start demo:

```bash
pnpm dev
```

Run Storybook:

```bash
pnpm storybook
```

## Translation

Translations managed via i18next. Supported languages: Spanish (es), English (en). Add new translations in `src/lib/i18next/locales/`.

## Styling

`index.css` contains base color variables. Modify here to change theme colors.
