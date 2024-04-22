import { bigint, boolean, foreignKey, integer, json, jsonb, pgTable, primaryKey, serial, text, timestamp, unique, uuid, varchar } from "drizzle-orm/pg-core";



export const org = pgTable("org", {
  id: varchar("id").primaryKey().notNull(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  slug: varchar("slug").notNull(),
});

export const userSession = pgTable("user_session", {
  id: varchar("id").primaryKey().notNull(),
  userId: varchar("user_id").notNull().references(() => authUser.id),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  activeExpires: bigint("active_expires", { mode: "number" }).notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  idleExpires: bigint("idle_expires", { mode: "number" }).notNull(),
});

export const stripeCustomer = pgTable("stripe_customer", {
  id: varchar("id").primaryKey().notNull(),
  email: varchar("email").notNull(),
  orgId: varchar("org_id").notNull().references(() => org.id),
});

export const product = pgTable("product", {
  id: varchar("id").primaryKey().notNull(),
  name: varchar("name").notNull(),
  code: varchar("code"),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  pricingMonthly: bigint("pricing_monthly", { mode: "number" }),
  stripeMonthlyPricingId: varchar("stripe_monthly_pricing_id"),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  pricingYearly: bigint("pricing_yearly", { mode: "number" }),
  stripeYearlyPricingId: varchar("stripe_yearly_pricing_id"),
  features: jsonb("features"),
});

export const authUser = pgTable("auth_user", {
  id: varchar("id").primaryKey().notNull(),
  email: varchar("email").notNull(),
  name: varchar("name").notNull(),
},
  (table) => {
    return {
      authUserEmailUnique: unique("auth_user_email_unique").on(table.email),
    }
  });

export const userKey = pgTable("user_key", {
  id: varchar("id").primaryKey().notNull(),
  userId: varchar("user_id", { length: 15 }).notNull().references(() => authUser.id),
  hashedPassword: varchar("hashed_password"),
});

export const stripeSubscription = pgTable("stripe_subscription", {
  stripeSubscriptionId: varchar("stripe_subscription_id").primaryKey().notNull(),
  orgId: varchar("org_id").notNull().references(() => org.id),
  name: varchar("name").notNull(),
  code: varchar("code").notNull(),
  stripeCustomerId: varchar("stripe_customer_id").notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  expires: bigint("expires", { mode: "number" }).notNull(),
  interval: varchar("interval").default('month').notNull(),
});

export const directusExtensions = pgTable("directus_extensions", {
  enabled: boolean("enabled").default(true).notNull(),
  id: uuid("id").primaryKey().notNull(),
  folder: varchar("folder", { length: 255 }).notNull(),
  source: varchar("source", { length: 255 }).notNull(),
  bundle: uuid("bundle"),
});

export const directusSettings = pgTable("directus_settings", {
  id: serial("id").primaryKey().notNull(),
  projectName: varchar("project_name", { length: 100 }).default('Directus').notNull(),
  projectUrl: varchar("project_url", { length: 255 }),
  projectColor: varchar("project_color", { length: 255 }).default('#6644FF').notNull(),
  projectLogo: uuid("project_logo").references(() => directusFiles.id),
  publicForeground: uuid("public_foreground").references(() => directusFiles.id),
  publicBackground: uuid("public_background").references(() => directusFiles.id),
  publicNote: text("public_note"),
  authLoginAttempts: integer("auth_login_attempts").default(25),
  authPasswordPolicy: varchar("auth_password_policy", { length: 100 }),
  storageAssetTransform: varchar("storage_asset_transform", { length: 7 }).default('all'),
  storageAssetPresets: json("storage_asset_presets"),
  customCss: text("custom_css"),
  storageDefaultFolder: uuid("storage_default_folder").references(() => directusFolders.id, { onDelete: "set null" }),
  basemaps: json("basemaps"),
  mapboxKey: varchar("mapbox_key", { length: 255 }),
  moduleBar: json("module_bar"),
  projectDescriptor: varchar("project_descriptor", { length: 100 }),
  defaultLanguage: varchar("default_language", { length: 255 }).default('en-US').notNull(),
  customAspectRatios: json("custom_aspect_ratios"),
  publicFavicon: uuid("public_favicon").references(() => directusFiles.id),
  defaultAppearance: varchar("default_appearance", { length: 255 }).default('auto').notNull(),
  defaultThemeLight: varchar("default_theme_light", { length: 255 }),
  themeLightOverrides: json("theme_light_overrides"),
  defaultThemeDark: varchar("default_theme_dark", { length: 255 }),
  themeDarkOverrides: json("theme_dark_overrides"),
  reportErrorUrl: varchar("report_error_url", { length: 255 }),
  reportBugUrl: varchar("report_bug_url", { length: 255 }),
  reportFeatureUrl: varchar("report_feature_url", { length: 255 }),
});

export const builderPage = pgTable("builder_page", {
  builderPageId: varchar("builder_page_id").primaryKey().notNull(),
  projectData: jsonb("projectData"),
  html: varchar("html"),
  css: varchar("css"),
  js: varchar("js"),
});

export const directusFiles = pgTable("directus_files", {
  id: uuid("id").primaryKey().notNull(),
  storage: varchar("storage", { length: 255 }).notNull(),
  filenameDisk: varchar("filename_disk", { length: 255 }),
  filenameDownload: varchar("filename_download", { length: 255 }).notNull(),
  title: varchar("title", { length: 255 }),
  type: varchar("type", { length: 255 }),
  folder: uuid("folder").references(() => directusFolders.id, { onDelete: "set null" }),
  uploadedBy: uuid("uploaded_by").references(() => directusUsers.id),
  uploadedOn: timestamp("uploaded_on", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
  modifiedBy: uuid("modified_by").references(() => directusUsers.id),
  modifiedOn: timestamp("modified_on", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
  charset: varchar("charset", { length: 50 }),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  filesize: bigint("filesize", { mode: "number" }),
  width: integer("width"),
  height: integer("height"),
  duration: integer("duration"),
  embed: varchar("embed", { length: 200 }),
  description: text("description"),
  location: text("location"),
  tags: text("tags"),
  metadata: json("metadata"),
  focalPointX: integer("focal_point_x"),
  focalPointY: integer("focal_point_y"),
});

export const directusUsers = pgTable("directus_users", {
  id: uuid("id").primaryKey().notNull(),
  firstName: varchar("first_name", { length: 50 }),
  lastName: varchar("last_name", { length: 50 }),
  email: varchar("email", { length: 128 }),
  password: varchar("password", { length: 255 }),
  location: varchar("location", { length: 255 }),
  title: varchar("title", { length: 50 }),
  description: text("description"),
  tags: json("tags"),
  avatar: uuid("avatar"),
  language: varchar("language", { length: 255 }).default(''),
  tfaSecret: varchar("tfa_secret", { length: 255 }),
  status: varchar("status", { length: 16 }).default('active').notNull(),
  role: uuid("role").references(() => directusRoles.id, { onDelete: "set null" }),
  token: varchar("token", { length: 255 }),
  lastAccess: timestamp("last_access", { withTimezone: true, mode: 'string' }),
  lastPage: varchar("last_page", { length: 255 }),
  provider: varchar("provider", { length: 128 }).default('default').notNull(),
  externalIdentifier: varchar("external_identifier", { length: 255 }),
  authData: json("auth_data"),
  emailNotifications: boolean("email_notifications").default(true),
  appearance: varchar("appearance", { length: 255 }),
  themeDark: varchar("theme_dark", { length: 255 }),
  themeLight: varchar("theme_light", { length: 255 }),
  themeLightOverrides: json("theme_light_overrides"),
  themeDarkOverrides: json("theme_dark_overrides"),
},
  (table) => {
    return {
      directusUsersEmailUnique: unique("directus_users_email_unique").on(table.email),
      directusUsersTokenUnique: unique("directus_users_token_unique").on(table.token),
      directusUsersExternalIdentifierUnique: unique("directus_users_external_identifier_unique").on(table.externalIdentifier),
    }
  });

export const directusRoles = pgTable("directus_roles", {
  id: uuid("id").primaryKey().notNull(),
  name: varchar("name", { length: 100 }).notNull(),
  icon: varchar("icon", { length: 30 }).default('supervised_user_circle').notNull(),
  description: text("description"),
  ipAccess: text("ip_access"),
  enforceTfa: boolean("enforce_tfa").default(false).notNull(),
  adminAccess: boolean("admin_access").default(false).notNull(),
  appAccess: boolean("app_access").default(true).notNull(),
});

export const directusActivity = pgTable("directus_activity", {
  id: serial("id").primaryKey().notNull(),
  action: varchar("action", { length: 45 }).notNull(),
  user: uuid("user"),
  timestamp: timestamp("timestamp", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
  ip: varchar("ip", { length: 50 }),
  userAgent: text("user_agent"),
  collection: varchar("collection", { length: 64 }).notNull(),
  item: varchar("item", { length: 255 }).notNull(),
  comment: text("comment"),
  origin: varchar("origin", { length: 255 }),
});

export const directusPresets = pgTable("directus_presets", {
  id: serial("id").primaryKey().notNull(),
  bookmark: varchar("bookmark", { length: 255 }),
  user: uuid("user").references(() => directusUsers.id, { onDelete: "cascade" }),
  role: uuid("role").references(() => directusRoles.id, { onDelete: "cascade" }),
  collection: varchar("collection", { length: 64 }),
  search: varchar("search", { length: 100 }),
  layout: varchar("layout", { length: 100 }).default('tabular'),
  layoutQuery: json("layout_query"),
  layoutOptions: json("layout_options"),
  refreshInterval: integer("refresh_interval"),
  filter: json("filter"),
  icon: varchar("icon", { length: 30 }).default('bookmark'),
  color: varchar("color", { length: 255 }),
});

export const directusCollections = pgTable("directus_collections", {
  collection: varchar("collection", { length: 64 }).primaryKey().notNull(),
  icon: varchar("icon", { length: 30 }),
  note: text("note"),
  displayTemplate: varchar("display_template", { length: 255 }),
  hidden: boolean("hidden").default(false).notNull(),
  singleton: boolean("singleton").default(false).notNull(),
  translations: json("translations"),
  archiveField: varchar("archive_field", { length: 64 }),
  archiveAppFilter: boolean("archive_app_filter").default(true).notNull(),
  archiveValue: varchar("archive_value", { length: 255 }),
  unarchiveValue: varchar("unarchive_value", { length: 255 }),
  sortField: varchar("sort_field", { length: 64 }),
  accountability: varchar("accountability", { length: 255 }).default('all'),
  color: varchar("color", { length: 255 }),
  itemDuplicationFields: json("item_duplication_fields"),
  sort: integer("sort"),
  group: varchar("group", { length: 64 }),
  collapse: varchar("collapse", { length: 255 }).default('open').notNull(),
  previewUrl: varchar("preview_url", { length: 255 }),
  versioning: boolean("versioning").default(false).notNull(),
},
  (table) => {
    return {
      directusCollectionsGroupForeign: foreignKey({
        columns: [table.group],
        foreignColumns: [table.collection],
        name: "directus_collections_group_foreign"
      }),
    }
  });

export const directusFolders = pgTable("directus_folders", {
  id: uuid("id").primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  parent: uuid("parent"),
},
  (table) => {
    return {
      directusFoldersParentForeign: foreignKey({
        columns: [table.parent],
        foreignColumns: [table.id],
        name: "directus_folders_parent_foreign"
      }),
    }
  });

export const directusFields = pgTable("directus_fields", {
  id: serial("id").primaryKey().notNull(),
  collection: varchar("collection", { length: 64 }).notNull(),
  field: varchar("field", { length: 64 }).notNull(),
  special: varchar("special", { length: 64 }),
  interface: varchar("interface", { length: 64 }),
  options: json("options"),
  display: varchar("display", { length: 64 }),
  displayOptions: json("display_options"),
  readonly: boolean("readonly").default(false).notNull(),
  hidden: boolean("hidden").default(false).notNull(),
  sort: integer("sort"),
  width: varchar("width", { length: 30 }).default('full'),
  translations: json("translations"),
  note: text("note"),
  conditions: json("conditions"),
  required: boolean("required").default(false),
  group: varchar("group", { length: 64 }),
  validation: json("validation"),
  validationMessage: text("validation_message"),
});

export const directusPermissions = pgTable("directus_permissions", {
  id: serial("id").primaryKey().notNull(),
  role: uuid("role").references(() => directusRoles.id, { onDelete: "cascade" }),
  collection: varchar("collection", { length: 64 }).notNull(),
  action: varchar("action", { length: 10 }).notNull(),
  permissions: json("permissions"),
  validation: json("validation"),
  presets: json("presets"),
  fields: text("fields"),
});

export const directusRelations = pgTable("directus_relations", {
  id: serial("id").primaryKey().notNull(),
  manyCollection: varchar("many_collection", { length: 64 }).notNull(),
  manyField: varchar("many_field", { length: 64 }).notNull(),
  oneCollection: varchar("one_collection", { length: 64 }),
  oneField: varchar("one_field", { length: 64 }),
  oneCollectionField: varchar("one_collection_field", { length: 64 }),
  oneAllowedCollections: text("one_allowed_collections"),
  junctionField: varchar("junction_field", { length: 64 }),
  sortField: varchar("sort_field", { length: 64 }),
  oneDeselectAction: varchar("one_deselect_action", { length: 255 }).default('nullify').notNull(),
});

export const directusRevisions = pgTable("directus_revisions", {
  id: serial("id").primaryKey().notNull(),
  activity: integer("activity").notNull().references(() => directusActivity.id, { onDelete: "cascade" }),
  collection: varchar("collection", { length: 64 }).notNull(),
  item: varchar("item", { length: 255 }).notNull(),
  data: json("data"),
  delta: json("delta"),
  parent: integer("parent"),
  version: uuid("version").references(() => directusVersions.id, { onDelete: "cascade" }),
},
  (table) => {
    return {
      directusRevisionsParentForeign: foreignKey({
        columns: [table.parent],
        foreignColumns: [table.id],
        name: "directus_revisions_parent_foreign"
      }),
    }
  });

export const directusWebhooks = pgTable("directus_webhooks", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  method: varchar("method", { length: 10 }).default('POST').notNull(),
  url: varchar("url", { length: 255 }).notNull(),
  status: varchar("status", { length: 10 }).default('active').notNull(),
  data: boolean("data").default(true).notNull(),
  actions: varchar("actions", { length: 100 }).notNull(),
  collections: varchar("collections", { length: 255 }).notNull(),
  headers: json("headers"),
  wasActiveBeforeDeprecation: boolean("was_active_before_deprecation").default(false).notNull(),
  migratedFlow: uuid("migrated_flow").references(() => directusFlows.id, { onDelete: "set null" }),
});

export const directusSessions = pgTable("directus_sessions", {
  token: varchar("token", { length: 64 }).primaryKey().notNull(),
  user: uuid("user").references(() => directusUsers.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { withTimezone: true, mode: 'string' }).notNull(),
  ip: varchar("ip", { length: 255 }),
  userAgent: text("user_agent"),
  share: uuid("share").references(() => directusShares.id, { onDelete: "cascade" }),
  origin: varchar("origin", { length: 255 }),
});

export const directusMigrations = pgTable("directus_migrations", {
  version: varchar("version", { length: 255 }).primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  timestamp: timestamp("timestamp", { withTimezone: true, mode: 'string' }).defaultNow(),
});

export const directusPanels = pgTable("directus_panels", {
  id: uuid("id").primaryKey().notNull(),
  dashboard: uuid("dashboard").notNull().references(() => directusDashboards.id, { onDelete: "cascade" }),
  name: varchar("name", { length: 255 }),
  icon: varchar("icon", { length: 30 }).default(''),
  color: varchar("color", { length: 10 }),
  showHeader: boolean("show_header").default(false).notNull(),
  note: text("note"),
  type: varchar("type", { length: 255 }).notNull(),
  positionX: integer("position_x").notNull(),
  positionY: integer("position_y").notNull(),
  width: integer("width").notNull(),
  height: integer("height").notNull(),
  options: json("options"),
  dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }).defaultNow(),
  userCreated: uuid("user_created").references(() => directusUsers.id, { onDelete: "set null" }),
});

export const directusDashboards = pgTable("directus_dashboards", {
  id: uuid("id").primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  icon: varchar("icon", { length: 30 }).default('dashboard').notNull(),
  note: text("note"),
  dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }).defaultNow(),
  userCreated: uuid("user_created").references(() => directusUsers.id, { onDelete: "set null" }),
  color: varchar("color", { length: 255 }),
});

export const directusNotifications = pgTable("directus_notifications", {
  id: serial("id").primaryKey().notNull(),
  timestamp: timestamp("timestamp", { withTimezone: true, mode: 'string' }).defaultNow(),
  status: varchar("status", { length: 255 }).default('inbox'),
  recipient: uuid("recipient").notNull().references(() => directusUsers.id, { onDelete: "cascade" }),
  sender: uuid("sender").references(() => directusUsers.id),
  subject: varchar("subject", { length: 255 }).notNull(),
  message: text("message"),
  collection: varchar("collection", { length: 64 }),
  item: varchar("item", { length: 255 }),
});

export const directusShares = pgTable("directus_shares", {
  id: uuid("id").primaryKey().notNull(),
  name: varchar("name", { length: 255 }),
  collection: varchar("collection", { length: 64 }).notNull().references(() => directusCollections.collection, { onDelete: "cascade" }),
  item: varchar("item", { length: 255 }).notNull(),
  role: uuid("role").references(() => directusRoles.id, { onDelete: "cascade" }),
  password: varchar("password", { length: 255 }),
  userCreated: uuid("user_created").references(() => directusUsers.id, { onDelete: "set null" }),
  dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }).defaultNow(),
  dateStart: timestamp("date_start", { withTimezone: true, mode: 'string' }),
  dateEnd: timestamp("date_end", { withTimezone: true, mode: 'string' }),
  timesUsed: integer("times_used").default(0),
  maxUses: integer("max_uses"),
});

export const directusFlows = pgTable("directus_flows", {
  id: uuid("id").primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  icon: varchar("icon", { length: 30 }),
  color: varchar("color", { length: 255 }),
  description: text("description"),
  status: varchar("status", { length: 255 }).default('active').notNull(),
  trigger: varchar("trigger", { length: 255 }),
  accountability: varchar("accountability", { length: 255 }).default('all'),
  options: json("options"),
  operation: uuid("operation"),
  dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }).defaultNow(),
  userCreated: uuid("user_created").references(() => directusUsers.id, { onDelete: "set null" }),
},
  (table) => {
    return {
      directusFlowsOperationUnique: unique("directus_flows_operation_unique").on(table.operation),
    }
  });

export const directusOperations = pgTable("directus_operations", {
  id: uuid("id").primaryKey().notNull(),
  name: varchar("name", { length: 255 }),
  key: varchar("key", { length: 255 }).notNull(),
  type: varchar("type", { length: 255 }).notNull(),
  positionX: integer("position_x").notNull(),
  positionY: integer("position_y").notNull(),
  options: json("options"),
  resolve: uuid("resolve"),
  reject: uuid("reject"),
  flow: uuid("flow").notNull().references(() => directusFlows.id, { onDelete: "cascade" }),
  dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }).defaultNow(),
  userCreated: uuid("user_created").references(() => directusUsers.id, { onDelete: "set null" }),
},
  (table) => {
    return {
      directusOperationsResolveForeign: foreignKey({
        columns: [table.resolve],
        foreignColumns: [table.id],
        name: "directus_operations_resolve_foreign"
      }),
      directusOperationsRejectForeign: foreignKey({
        columns: [table.reject],
        foreignColumns: [table.id],
        name: "directus_operations_reject_foreign"
      }),
      directusOperationsResolveUnique: unique("directus_operations_resolve_unique").on(table.resolve),
      directusOperationsRejectUnique: unique("directus_operations_reject_unique").on(table.reject),
    }
  });

export const directusTranslations = pgTable("directus_translations", {
  id: uuid("id").primaryKey().notNull(),
  language: varchar("language", { length: 255 }).notNull(),
  key: varchar("key", { length: 255 }).notNull(),
  value: text("value").notNull(),
});

export const directusVersions = pgTable("directus_versions", {
  id: uuid("id").primaryKey().notNull(),
  key: varchar("key", { length: 64 }).notNull(),
  name: varchar("name", { length: 255 }),
  collection: varchar("collection", { length: 64 }).notNull().references(() => directusCollections.collection, { onDelete: "cascade" }),
  item: varchar("item", { length: 255 }).notNull(),
  hash: varchar("hash", { length: 255 }),
  dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }).defaultNow(),
  dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }).defaultNow(),
  userCreated: uuid("user_created").references(() => directusUsers.id, { onDelete: "set null" }),
  userUpdated: uuid("user_updated").references(() => directusUsers.id),
});

export const orgMember = pgTable("org_member", {
  userId: varchar("user_id").notNull().references(() => authUser.id),
  orgId: varchar("org_id").notNull().references(() => org.id),
  role: varchar("role").notNull(),
},
  (table) => {
    return {
      orgMemberUserIdOrgIdPk: primaryKey({ columns: [table.userId, table.orgId], name: "org_member_user_id_org_id_pk" })
    }
  });

export const orgInvitation = pgTable("org_invitation", {
  email: varchar("email").notNull(),
  orgId: varchar("org_id").notNull().references(() => org.id),
  role: varchar("role").notNull(),
  autoAccept: boolean("auto_accept").default(false).notNull(),
},
  (table) => {
    return {
      orgInvitationEmailOrgIdPk: primaryKey({ columns: [table.email, table.orgId], name: "org_invitation_email_org_id_pk" })
    }
  });



export const user = pgTable('auth_user', {
  id: varchar('id').primaryKey(),
  email: varchar('email').notNull().unique(),
  name: varchar('name').notNull(),
})

export type User = typeof user.$inferSelect

export const session = pgTable('user_session', {
  id: varchar('id').primaryKey(),
  userId: varchar('user_id').notNull().references(() => user.id),
  activeExpires: bigint('active_expires', { mode: 'number' }).notNull(),
  idleExpires: bigint('idle_expires', { mode: 'number' }).notNull(),
})

export const key = pgTable('user_key', {
  id: varchar('id').primaryKey(),
  userId: varchar('user_id', { length: 15 }).notNull().references(() => user.id),
  hashedPassword: varchar('hashed_password'),
})

export const subscription = pgTable('stripe_subscription', {
  stripeSubscriptionId: varchar('stripe_subscription_id').notNull().primaryKey(),
  orgId: varchar('org_id').notNull().references(() => org.id),
  name: varchar('name').notNull(),
  code: varchar('code').notNull(),
  interval: varchar('interval').default('month').notNull(),
  stripeCustomerId: varchar('stripe_customer_id').notNull(),
  expires: bigint('expires', { mode: 'number' }).notNull(),
})

export type Product = typeof product.$inferSelect

export type Org = typeof org.$inferSelect

export type OrgMember = typeof orgMember.$inferSelect

export type OrgInvitation = typeof orgInvitation.$inferSelect