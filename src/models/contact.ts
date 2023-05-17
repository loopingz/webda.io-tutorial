import { Expose, OwnerModel } from "@webda/core";

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
}
