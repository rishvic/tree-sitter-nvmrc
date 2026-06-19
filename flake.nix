# SPDX-FileCopyrightText: 2026 Rishvic Pushpakaran
#
# SPDX-License-Identifier: MIT

{
  description = "Dev environment";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs =
    { self, nixpkgs }:
    let
      forAllSystems = nixpkgs.lib.genAttrs [ "x86_64-linux" ];
    in
    {
      devShells = forAllSystems (
        system:
        let
          pkgs = import nixpkgs {
            inherit system;
          };
        in
        {
          default = pkgs.mkShell {
            buildInputs = with pkgs; [
              nixfmt-tree
              nodejs_22
              python314
              reuse
            ];
          };
        }
      );
      formatter = forAllSystems (system: nixpkgs.legacyPackages.${system}.nixfmt-tree);
    };
}
