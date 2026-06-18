import XCTest
import SwiftTreeSitter
import TreeSitterNvmrc

final class TreeSitterNvmrcTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_nvmrc())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading nvmrc grammar")
    }
}
