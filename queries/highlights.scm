;;; SPDX-FileCopyrightText: 2026 Rishvic Pushpakaran
;;;
;;; SPDX-License-Identifier: MIT

(comment) @comment

; non-empty key -> value pair.
(entry key: (part) @property)

; the separating first '='.
(entry "=" @operator)

; value part of an entry.
(entry value: (part) @string)
(value) @string
