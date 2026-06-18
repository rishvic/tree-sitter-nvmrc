<!--
SPDX-FileCopyrightText: 2026 Rishvic Pushpakaran

SPDX-License-Identifier: MIT
-->

# tree-sitter-nvmrc

[nvmrc](https://github.com/nvm-sh/nvm) grammar for
[tree-sitter](https://tree-sitter.github.io/tree-sitter/).

Parses `.nvmrc` files (the node-version files that
[nvm](https://tree-sitter.github.io/tree-sitter/) and compatible tools read).
The grammar is permissive: it splits each line into an optional `key`/`value` on
the first `=`, keeps `#` comments and surrounding whitespace as extras, and
leaves validation (e.g. rejecting bad version ranges) to downstream consumers.

See [`test/corpus/`](test/corpus) for the full set of examples that define the
grammar's behavior.

## Development

Edit [`grammar.js`](grammar.js), then regenerate and test:

```sh
tree-sitter generate
tree-sitter test
```

The parser under `src/` is generated from `grammar.js`. Regenerate and commit it
alongside any grammar change.

## License

[MIT](LICENSE)

Bundled third-party MIT material is acknowledged in
[`THIRD-PARTY-NOTICES.txt`](THIRD-PARTY-NOTICES.txt).

This repository is [REUSE](https://reuse.software)-compliant; new files need an
SPDX header or a `.license` sidecar.
