// SPDX-FileCopyrightText: 2026 Rishvic Pushpakaran
//
// SPDX-License-Identifier: MIT

/**
 * @file nvmrc grammar for tree-sitter
 * @author Rishvic Pushpakaran <rishvic@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

export default grammar({
  name: "nvmrc",
  extras: $ => [/[\r\t\f\v ]/, $.comment],
  rules: {
    source_file: $ =>
      seq(optional($.entry), repeat(seq($._newline, optional($.entry)))),
    entry: $ =>
      choice(
        field("value", $.part),
        field("value", alias($._eq_led_value, $.value)),
        seq(field("key", $.part), "=", field("value", optional($.value))),
      ),
    value: $ => choice(seq($.part, repeat($._eq_segment)), $._eq_led_value),
    _eq_led_value: $ => repeat1($._eq_segment),
    _eq_segment: $ => seq("=", optional($.part)),
    part: $ => /[^#=\r\n\t\f\v ]([^#=\n]*[^#=\r\n\t\f\v ])?/,
    comment: $ => /#[^\n]*/,
    _newline: $ => "\n",
  },
});
