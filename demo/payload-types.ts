/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Config {}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "navigation-array".
 */
export interface NavigationArray {
  id: string;
  array?: {
    text?: string;
    textarea?: string;
    id?: string;
  }[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "global-with-access".
 */
export interface GlobalWithStrictAccess {
  id: string;
  title: string;
  relationship: (string | LocalizedPost)[];
  singleRelationship: string | LocalizedPost;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-posts".
 */
export interface LocalizedPost {
  id: string;
  title: string;
  summary?: string;
  description: string;
  richText?: {
    [k: string]: unknown;
  }[];
  priority: number;
  localizedGroup?: {
    text?: string;
  };
  nonLocalizedGroup?: {
    text?: string;
  };
  nonLocalizedArray?: {
    localizedEmbeddedText?: string;
    id?: string;
  }[];
  richTextBlocks?: {
    content?: {
      [k: string]: unknown;
    }[];
    id?: string;
    blockName?: string;
    blockType: 'richTextBlock';
  }[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blocks-global".
 */
export interface BlocksGlobal {
  id: string;
  blocks?: (
    | {
        author: string | PublicUser;
        quote: string;
        color: string;
        id?: string;
        blockName?: string;
        blockType: 'quote';
      }
    | {
        label: string;
        url: string;
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
  )[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "public-users".
 */
export interface PublicUser {
  id: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  _verified?: boolean;
  _verificationToken?: string;
  loginAttempts?: number;
  lockUntil?: string;
  adminOnly?: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "admins".
 */
export interface Admin {
  id: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  enableAPIKey?: boolean;
  apiKey?: string;
  apiKeyIndex?: string;
  loginAttempts?: number;
  lockUntil?: string;
  roles: ('admin' | 'editor' | 'moderator' | 'user' | 'viewer')[];
  publicUser?: (string | PublicUser)[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "all-fields".
 */
export interface AllFields {
  id: string;
  text: string;
  descriptionText?: string;
  descriptionFunction?: string;
  image?: string | Media;
  select: 'option-1' | 'option-2' | 'option-3' | 'option-4';
  selectMany: ('option-1' | 'option-2' | 'option-3' | 'option-4')[];
  dayOnlyDateFieldExample: string;
  timeOnlyDateFieldExample?: string;
  radioGroupExample: 'option-1' | 'option-2' | 'option-3';
  email?: string;
  number?: number;
  group?: {
    nestedText1?: string;
    nestedText2?: string;
  };
  array?: {
    arrayText1: string;
    arrayText2: string;
    arrayText3?: string;
    checkbox?: boolean;
    id?: string;
  }[];
  blocks: (
    | {
        testEmail: string;
        id?: string;
        blockName?: string;
        blockType: 'email';
      }
    | {
        testNumber: number;
        id?: string;
        blockName?: string;
        blockType: 'number';
      }
    | {
        author: string | PublicUser;
        quote: string;
        color: string;
        id?: string;
        blockName?: string;
        blockType: 'quote';
      }
    | {
        label: string;
        url: string;
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
  )[];
  relationship?: string | Conditions;
  relationshipHasMany?: (string | LocalizedPost)[];
  relationshipMultipleCollections?:
    | {
        value: string | LocalizedPost;
        relationTo: 'localized-posts';
      }
    | {
        value: string | Conditions;
        relationTo: 'conditions';
      };
  textarea?: string;
  richText: {
    [k: string]: unknown;
  }[];
  slug: string;
  checkbox?: boolean;
  dateFieldExample?: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes?: {
    maintainedAspectRatio?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    tablet?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    mobile?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    icon?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
  alt: string;
  foundUploadSizes?: boolean;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "conditions".
 */
export interface Conditions {
  id: string;
  title: string;
  enableTest?: boolean;
  number?: number;
  simpleCondition: string;
  orCondition: string;
  nestedConditions?: string;
  blocks: (
    | {
        testEmail: string;
        id?: string;
        blockName?: string;
        blockType: 'email';
      }
    | {
        testNumber: number;
        id?: string;
        blockName?: string;
        blockType: 'number';
      }
    | {
        author: string | PublicUser;
        quote: string;
        color: string;
        id?: string;
        blockName?: string;
        blockType: 'quote';
      }
    | {
        label: string;
        url: string;
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
  )[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auto-label".
 */
export interface AutoLabel {
  id: string;
  autoLabelField?: string;
  noLabel?: string;
  labelOverride?: string;
  testRelationship?: string | AllFields;
  specialBlock?: {
    testNumber?: number;
    id?: string;
    blockName?: string;
    blockType: 'number';
  }[];
  noLabelBlock?: {
    testNumber?: number;
    id?: string;
    blockName?: string;
    blockType: 'number';
  }[];
  items?: {
    itemName?: string;
    id?: string;
  }[];
  noLabelArray?: {
    textField?: string;
    id?: string;
  }[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "code".
 */
export interface Code {
  id: string;
  code: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "custom-components".
 */
export interface CustomComponent {
  id: string;
  title: string;
  description: string;
  componentDescription?: string;
  array?: {
    nestedArrayCustomField?: string;
    id?: string;
  }[];
  group?: {
    nestedGroupCustomField?: string;
  };
  nestedText1?: string;
  nestedText2?: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "custom-id".
 */
export interface CustomID {
  id: number;
  name: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "files".
 */
export interface File {
  id: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  type: 'Type 1' | 'Type 2' | 'Type 3';
  owner: string | Admin;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "default-values".
 */
export interface DefaultValueTest {
  id: string;
  text?: string;
  image?: string | Media;
  select?: 'option-1' | 'option-2' | 'option-3' | 'option-4';
  selectMany?: ('option-1' | 'option-2' | 'option-3' | 'option-4')[];
  radioGroupExample?: 'option-1' | 'option-2' | 'option-3';
  email?: string;
  number?: number;
  group?: {
    nestedText1?: string;
    nestedText2?: string;
  };
  array?: {
    arrayText1?: string;
    arrayText2?: string;
    arrayText3?: string;
    checkbox?: boolean;
    id?: string;
  }[];
  blocks?: (
    | {
        testEmail: string;
        id?: string;
        blockName?: string;
        blockType: 'email';
      }
    | {
        testNumber: number;
        id?: string;
        blockName?: string;
        blockType: 'number';
      }
    | {
        author: string | PublicUser;
        quote: string;
        color: string;
        id?: string;
        blockName?: string;
        blockType: 'quote';
      }
    | {
        label: string;
        url: string;
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
  )[];
  relationship?: string | Conditions;
  relationshipHasMany?: (string | LocalizedPost)[];
  relationshipMultipleCollections?:
    | {
        value: string | LocalizedPost;
        relationTo: 'localized-posts';
      }
    | {
        value: string | Conditions;
        relationTo: 'conditions';
      };
  textarea?: string;
  slug?: string;
  checkbox?: boolean;
  richText?: {
    [k: string]: unknown;
  }[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blocks".
 */
export interface Blocks {
  id: string;
  layout: (
    | {
        testEmail: string;
        id?: string;
        blockName?: string;
        blockType: 'email';
      }
    | {
        testNumber: number;
        id?: string;
        blockName?: string;
        blockType: 'number';
      }
    | {
        author: string | PublicUser;
        quote: string;
        color: string;
        id?: string;
        blockName?: string;
        blockType: 'quote';
      }
    | {
        label: string;
        url: string;
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
  )[];
  nonLocalizedLayout: (
    | {
        testEmail: string;
        id?: string;
        blockName?: string;
        blockType: 'email';
      }
    | {
        testNumber: number;
        id?: string;
        blockName?: string;
        blockType: 'number';
      }
    | {
        author: string | PublicUser;
        quote: string;
        color: string;
        id?: string;
        blockName?: string;
        blockType: 'quote';
      }
    | {
        label: string;
        url: string;
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
  )[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "hidden-fields".
 */
export interface HiddenFields {
  id: string;
  title: string;
  hiddenAdmin: string;
  hiddenAPI: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "hooks".
 */
export interface Hook {
  id: string;
  title: string;
  description: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-arrays".
 */
export interface LocalizedArray {
  id: string;
  array: {
    allowPublicReadability?: boolean;
    arrayText1: string;
    arrayText2: string;
    arrayText3?: string;
    id?: string;
  }[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "local-operations".
 */
export interface LocalOperation {
  id: string;
  title: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "nested-arrays".
 */
export interface NestedArray {
  id: string;
  array: {
    parentIdentifier: string;
    nestedArray: {
      childIdentifier: string;
      deeplyNestedArray: {
        grandchildIdentifier?: string;
        id?: string;
      }[];
      id?: string;
    }[];
    id?: string;
  }[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "previewable-post".
 */
export interface PreviewablePost {
  id: string;
  title: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "relationship-a".
 */
export interface RelationshipA {
  id: string;
  post?: string | RelationshipB;
  LocalizedPost?: (string | LocalizedPost)[];
  postLocalizedMultiple?: (
    | {
        value: string | LocalizedPost;
        relationTo: 'localized-posts';
      }
    | {
        value: string | AllFields;
        relationTo: 'all-fields';
      }
    | {
        value: number | CustomID;
        relationTo: 'custom-id';
      }
  )[];
  postManyRelationships?: {
    value: string | RelationshipB;
    relationTo: 'relationship-b';
  };
  postMaxDepth?: string | RelationshipB;
  customID?: (number | CustomID)[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "relationship-b".
 */
export interface RelationshipB {
  id: string;
  title?: string;
  post?: (string | RelationshipA)[];
  postManyRelationships?:
    | {
        value: string | RelationshipA;
        relationTo: 'relationship-a';
      }
    | {
        value: string | Media;
        relationTo: 'media';
      };
  localizedPosts?: (
    | {
        value: string | LocalizedPost;
        relationTo: 'localized-posts';
      }
    | {
        value: string | PreviewablePost;
        relationTo: 'previewable-post';
      }
  )[];
  strictAccess?: string | StrictAccess;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "strict-access".
 */
export interface StrictAccess {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: number;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "rich-text".
 */
export interface RichText {
  id: string;
  defaultRichText: {
    [k: string]: unknown;
  }[];
  customRichText: {
    [k: string]: unknown;
  }[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "select".
 */
export interface Select {
  id: string;
  Select: 'one' | 'two' | 'three';
  SelectHasMany: ('one' | 'two' | 'three')[];
  SelectJustStrings: ('blue' | 'green' | 'yellow')[];
  Radio: 'one' | 'two' | 'three';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "validations".
 */
export interface Validation {
  id: string;
  text: string;
  lessThan10: number;
  greaterThan10LessThan50: number;
  atLeast3Rows: {
    greaterThan30: number;
    id?: string;
  }[];
  array: {
    lessThan20: number;
    id?: string;
  }[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "uniques".
 */
export interface Unique {
  id: string;
  title: string;
  description?: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "unstored-media".
 */
export interface UnstoredMedia {
  id: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes?: {
    tablet?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
  alt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "geolocation".
 */
export interface Geolocation {
  id: string;
  location?: [longitude: number, latitude: number];
  localizedPoint?: [longitude: number, latitude: number];
}
