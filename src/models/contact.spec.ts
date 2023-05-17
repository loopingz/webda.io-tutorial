import { suite, test } from "@testdeck/mocha";
import { WebdaSimpleTest } from "@webda/core/lib/test";
import * as assert from "assert";
import { Contact } from "./contact";

@suite
class ContactTest extends WebdaSimpleTest {
  @test
  async canAct() {
    const contact = new Contact();
    const ctx = await this.newContext();
    assert.ok(
      (await contact.canAct(ctx, "")) !== true,
      "Can act should return false if not logged"
    );
    ctx.getSession().login("test", "test");
    assert.ok(
      await contact.canAct(ctx, ""),
      "Can act should return false if not logged"
    );
  }
}
