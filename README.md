<!--
SPDX-FileCopyrightText: 2026 Rishvic Pushpakaran

SPDX-License-Identifier: MIT
-->

# tree-sitter-nvmrc

[![Checks and Tests](https://github.com/rishvic/tree-sitter-nvmrc/actions/workflows/checks.yaml/badge.svg?branch=main)](https://github.com/rishvic/tree-sitter-nvmrc/actions/workflows/checks.yaml)

[nvmrc](https://github.com/nvm-sh/nvm) grammar for
[tree-sitter](https://tree-sitter.github.io/tree-sitter/).

Parses `.nvmrc` files (the node-version files that
[nvm](https://github.com/nvm-sh/nvm) and compatible tools read). The grammar is
permissive: it splits each line into an optional `key`/`value` on the first `=`,
keeps `#` comments and surrounding whitespace as extras, and leaves validation
(e.g. rejecting bad version ranges) to downstream consumers.

See [`test/corpus/`](test/corpus) for the full set of examples that define the
grammar's behavior.

## References

- [nvm](https://github.com/nvm-sh/nvm): The reference implementation.
  `nvm_process_nvmrc` in `nvm.sh` defines the parse: split into `key`/`value` on
  the first `=`, keeping the remainder of the line verbatim as the value.
- [`nvmrc`](https://github.com/nvm-sh/nvmrc): An alternative npm parser that
  instead splits the value into parts.

The grammar keeps enough structure to describe both interpretations.

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
