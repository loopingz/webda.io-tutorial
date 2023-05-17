import { WebdaSimpleTest } from "@webda/core/lib/test";
import { suite, test } from "@testdeck/mocha";
import * as assert from "assert";

@suite
class ContactTest extends WebdaSimpleTest {
    @test
    async empty() {
        assert.ok(false, "Need to implement some tests");
    }
}