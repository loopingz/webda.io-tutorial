import { CoreModel, Expose } from "@webda/core";

/**
 * Define here a model that can be used along with Store service
 */
@Expose()
export class Contact extends CoreModel {
  /**
   * First name of our contact
   */
  firstName: string;
  /**
   * Last name of our contact
   */
  lastName: string;
  /**
   * Emails collection
   */
  emails: {
    email: string;
    type: "PERSONAL" | "PROFESSIONAL";
  }[];
  /**
   * Notes
   */
  notes: string;
  async canAct(ctx, action: string): Promise<string | boolean> {
    // Require user to be authenticated to do anything on contact
    return ctx.getCurrentUserId() !== undefined;
  }
}
