import { Action, Binaries, Expose, OwnerModel, WebContext } from "@webda/core";

/**
 * Define here a model that can be used along with Store service
 */
@Expose()
export class Contact extends OwnerModel {
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
   * Photos of the contact
   */
  photos: Binaries;

  @Action({
    methods: ["GET"],
  })
  static async version(context: WebContext): Promise<void> {
    context.write({
      version: 2,
      photos: true
    });
  }
}
