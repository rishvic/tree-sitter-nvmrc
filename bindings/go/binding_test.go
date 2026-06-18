package tree_sitter_nvmrc_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_nvmrc "github.com/rishvic/tree-sitter-nvmrc/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_nvmrc.Language())
	if language == nil {
		t.Errorf("Error loading nvmrc grammar")
	}
}
