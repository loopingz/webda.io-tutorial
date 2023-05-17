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
  /**
   * Call to check if action is available for the current user
   * @param ctx the context of the request
   * @param {string} action the type of action
   * @returns {Promise<void>}
   * @throws Exception if the action is not available to the user
   */
  async canAct(ctx, action: string): Promise<string | boolean> {
    return true;
  }
}
