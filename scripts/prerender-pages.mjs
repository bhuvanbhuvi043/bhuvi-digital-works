import { readFile, writeFile } from 'node:fs/promises'
import React, { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { createServer } from 'vite'

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })

try {
  const { default: App } = await server.ssrLoadModule('/src/App.tsx')
  const html = await readFile('dist/index.html', 'utf8')
  const markup = renderToString(createElement(React.StrictMode, null, createElement(App)))
  const prerendered = html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`)

  if (prerendered === html) {
    throw new Error('Could not find the React root in dist/index.html')
  }

  await writeFile('dist/index.html', prerendered)
} finally {
  await server.close()
}
