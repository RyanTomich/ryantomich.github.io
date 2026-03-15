# RyanTomich.github.io

Personal site hosted from this repository.

## Test locally

Do not open `index.html` directly in the browser. This site loads shared HTML like `navbar.html` with `fetch(...)`, which requires serving the files over HTTP.

From the repository root, start a simple local server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

If you want to stop the server, press `Ctrl+C` in the terminal.
