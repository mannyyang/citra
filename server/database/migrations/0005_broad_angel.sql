CREATE TABLE IF NOT EXISTS "directus_activity" (
	"id" serial PRIMARY KEY NOT NULL,
	"action" varchar(45) NOT NULL,
	"user" uuid,
	"timestamp" timestamp with time zone DEFAULT now() NOT NULL,
	"ip" varchar(50),
	"user_agent" text,
	"collection" varchar(64) NOT NULL,
	"item" varchar(255) NOT NULL,
	"comment" text,
	"origin" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "directus_collections" (
	"collection" varchar(64) PRIMARY KEY NOT NULL,
	"icon" varchar(30),
	"note" text,
	"display_template" varchar(255),
	"hidden" boolean DEFAULT false NOT NULL,
	"singleton" boolean DEFAULT false NOT NULL,
	"translations" json,
	"archive_field" varchar(64),
	"archive_app_filter" boolean DEFAULT true NOT NULL,
	"archive_value" varchar(255),
	"unarchive_value" varchar(255),
	"sort_field" varchar(64),
	"accountability" varchar(255) DEFAULT 'all',
	"color" varchar(255),
	"item_duplication_fields" json,
	"sort" integer,
	"group" varchar(64),
	"collapse" varchar(255) DEFAULT 'open' NOT NULL,
	"preview_url" varchar(255),
	"versioning" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "directus_dashboards" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"icon" varchar(30) DEFAULT 'dashboard' NOT NULL,
	"note" text,
	"date_created" timestamp with time zone DEFAULT now(),
	"user_created" uuid,
	"color" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "directus_extensions" (
	"enabled" boolean DEFAULT true NOT NULL,
	"id" uuid PRIMARY KEY NOT NULL,
	"folder" varchar(255) NOT NULL,
	"source" varchar(255) NOT NULL,
	"bundle" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "directus_fields" (
	"id" serial PRIMARY KEY NOT NULL,
	"collection" varchar(64) NOT NULL,
	"field" varchar(64) NOT NULL,
	"special" varchar(64),
	"interface" varchar(64),
	"options" json,
	"display" varchar(64),
	"display_options" json,
	"readonly" boolean DEFAULT false NOT NULL,
	"hidden" boolean DEFAULT false NOT NULL,
	"sort" integer,
	"width" varchar(30) DEFAULT 'full',
	"translations" json,
	"note" text,
	"conditions" json,
	"required" boolean DEFAULT false,
	"group" varchar(64),
	"validation" json,
	"validation_message" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "directus_files" (
	"id" uuid PRIMARY KEY NOT NULL,
	"storage" varchar(255) NOT NULL,
	"filename_disk" varchar(255),
	"filename_download" varchar(255) NOT NULL,
	"title" varchar(255),
	"type" varchar(255),
	"folder" uuid,
	"uploaded_by" uuid,
	"uploaded_on" timestamp with time zone DEFAULT now() NOT NULL,
	"modified_by" uuid,
	"modified_on" timestamp with time zone DEFAULT now() NOT NULL,
	"charset" varchar(50),
	"filesize" bigint,
	"width" integer,
	"height" integer,
	"duration" integer,
	"embed" varchar(200),
	"description" text,
	"location" text,
	"tags" text,
	"metadata" json,
	"focal_point_x" integer,
	"focal_point_y" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "directus_flows" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"icon" varchar(30),
	"color" varchar(255),
	"description" text,
	"status" varchar(255) DEFAULT 'active' NOT NULL,
	"trigger" varchar(255),
	"accountability" varchar(255) DEFAULT 'all',
	"options" json,
	"operation" uuid,
	"date_created" timestamp with time zone DEFAULT now(),
	"user_created" uuid,
	CONSTRAINT "directus_flows_operation_unique" UNIQUE("operation")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "directus_folders" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"parent" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "directus_migrations" (
	"version" varchar(255) PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"timestamp" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "directus_notifications" (
	"id" serial PRIMARY KEY NOT NULL,
	"timestamp" timestamp with time zone DEFAULT now(),
	"status" varchar(255) DEFAULT 'inbox',
	"recipient" uuid NOT NULL,
	"sender" uuid,
	"subject" varchar(255) NOT NULL,
	"message" text,
	"collection" varchar(64),
	"item" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "directus_operations" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"key" varchar(255) NOT NULL,
	"type" varchar(255) NOT NULL,
	"position_x" integer NOT NULL,
	"position_y" integer NOT NULL,
	"options" json,
	"resolve" uuid,
	"reject" uuid,
	"flow" uuid NOT NULL,
	"date_created" timestamp with time zone DEFAULT now(),
	"user_created" uuid,
	CONSTRAINT "directus_operations_resolve_unique" UNIQUE("resolve"),
	CONSTRAINT "directus_operations_reject_unique" UNIQUE("reject")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "directus_panels" (
	"id" uuid PRIMARY KEY NOT NULL,
	"dashboard" uuid NOT NULL,
	"name" varchar(255),
	"icon" varchar(30) DEFAULT '',
	"color" varchar(10),
	"show_header" boolean DEFAULT false NOT NULL,
	"note" text,
	"type" varchar(255) NOT NULL,
	"position_x" integer NOT NULL,
	"position_y" integer NOT NULL,
	"width" integer NOT NULL,
	"height" integer NOT NULL,
	"options" json,
	"date_created" timestamp with time zone DEFAULT now(),
	"user_created" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "directus_permissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"role" uuid,
	"collection" varchar(64) NOT NULL,
	"action" varchar(10) NOT NULL,
	"permissions" json,
	"validation" json,
	"presets" json,
	"fields" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "directus_presets" (
	"id" serial PRIMARY KEY NOT NULL,
	"bookmark" varchar(255),
	"user" uuid,
	"role" uuid,
	"collection" varchar(64),
	"search" varchar(100),
	"layout" varchar(100) DEFAULT 'tabular',
	"layout_query" json,
	"layout_options" json,
	"refresh_interval" integer,
	"filter" json,
	"icon" varchar(30) DEFAULT 'bookmark',
	"color" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "directus_relations" (
	"id" serial PRIMARY KEY NOT NULL,
	"many_collection" varchar(64) NOT NULL,
	"many_field" varchar(64) NOT NULL,
	"one_collection" varchar(64),
	"one_field" varchar(64),
	"one_collection_field" varchar(64),
	"one_allowed_collections" text,
	"junction_field" varchar(64),
	"sort_field" varchar(64),
	"one_deselect_action" varchar(255) DEFAULT 'nullify' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "directus_revisions" (
	"id" serial PRIMARY KEY NOT NULL,
	"activity" integer NOT NULL,
	"collection" varchar(64) NOT NULL,
	"item" varchar(255) NOT NULL,
	"data" json,
	"delta" json,
	"parent" integer,
	"version" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "directus_roles" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"icon" varchar(30) DEFAULT 'supervised_user_circle' NOT NULL,
	"description" text,
	"ip_access" text,
	"enforce_tfa" boolean DEFAULT false NOT NULL,
	"admin_access" boolean DEFAULT false NOT NULL,
	"app_access" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "directus_sessions" (
	"token" varchar(64) PRIMARY KEY NOT NULL,
	"user" uuid,
	"expires" timestamp with time zone NOT NULL,
	"ip" varchar(255),
	"user_agent" text,
	"share" uuid,
	"origin" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "directus_settings" (
	"id" serial PRIMARY KEY NOT NULL,
	"project_name" varchar(100) DEFAULT 'Directus' NOT NULL,
	"project_url" varchar(255),
	"project_color" varchar(255) DEFAULT '#6644FF' NOT NULL,
	"project_logo" uuid,
	"public_foreground" uuid,
	"public_background" uuid,
	"public_note" text,
	"auth_login_attempts" integer DEFAULT 25,
	"auth_password_policy" varchar(100),
	"storage_asset_transform" varchar(7) DEFAULT 'all',
	"storage_asset_presets" json,
	"custom_css" text,
	"storage_default_folder" uuid,
	"basemaps" json,
	"mapbox_key" varchar(255),
	"module_bar" json,
	"project_descriptor" varchar(100),
	"default_language" varchar(255) DEFAULT 'en-US' NOT NULL,
	"custom_aspect_ratios" json,
	"public_favicon" uuid,
	"default_appearance" varchar(255) DEFAULT 'auto' NOT NULL,
	"default_theme_light" varchar(255),
	"theme_light_overrides" json,
	"default_theme_dark" varchar(255),
	"theme_dark_overrides" json,
	"report_error_url" varchar(255),
	"report_bug_url" varchar(255),
	"report_feature_url" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "directus_shares" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"collection" varchar(64) NOT NULL,
	"item" varchar(255) NOT NULL,
	"role" uuid,
	"password" varchar(255),
	"user_created" uuid,
	"date_created" timestamp with time zone DEFAULT now(),
	"date_start" timestamp with time zone,
	"date_end" timestamp with time zone,
	"times_used" integer DEFAULT 0,
	"max_uses" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "directus_translations" (
	"id" uuid PRIMARY KEY NOT NULL,
	"language" varchar(255) NOT NULL,
	"key" varchar(255) NOT NULL,
	"value" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "directus_users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"first_name" varchar(50),
	"last_name" varchar(50),
	"email" varchar(128),
	"password" varchar(255),
	"location" varchar(255),
	"title" varchar(50),
	"description" text,
	"tags" json,
	"avatar" uuid,
	"language" varchar(255) DEFAULT '',
	"tfa_secret" varchar(255),
	"status" varchar(16) DEFAULT 'active' NOT NULL,
	"role" uuid,
	"token" varchar(255),
	"last_access" timestamp with time zone,
	"last_page" varchar(255),
	"provider" varchar(128) DEFAULT 'default' NOT NULL,
	"external_identifier" varchar(255),
	"auth_data" json,
	"email_notifications" boolean DEFAULT true,
	"appearance" varchar(255),
	"theme_dark" varchar(255),
	"theme_light" varchar(255),
	"theme_light_overrides" json,
	"theme_dark_overrides" json,
	CONSTRAINT "directus_users_email_unique" UNIQUE("email"),
	CONSTRAINT "directus_users_token_unique" UNIQUE("token"),
	CONSTRAINT "directus_users_external_identifier_unique" UNIQUE("external_identifier")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "directus_versions" (
	"id" uuid PRIMARY KEY NOT NULL,
	"key" varchar(64) NOT NULL,
	"name" varchar(255),
	"collection" varchar(64) NOT NULL,
	"item" varchar(255) NOT NULL,
	"hash" varchar(255),
	"date_created" timestamp with time zone DEFAULT now(),
	"date_updated" timestamp with time zone DEFAULT now(),
	"user_created" uuid,
	"user_updated" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "directus_webhooks" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"method" varchar(10) DEFAULT 'POST' NOT NULL,
	"url" varchar(255) NOT NULL,
	"status" varchar(10) DEFAULT 'active' NOT NULL,
	"data" boolean DEFAULT true NOT NULL,
	"actions" varchar(100) NOT NULL,
	"collections" varchar(255) NOT NULL,
	"headers" json,
	"was_active_before_deprecation" boolean DEFAULT false NOT NULL,
	"migrated_flow" uuid
);
--> statement-breakpoint
ALTER TABLE "product" ALTER COLUMN "pricing_monthly" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "builder_page" ADD COLUMN "features" jsonb NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_collections" ADD CONSTRAINT "directus_collections_group_foreign" FOREIGN KEY ("group") REFERENCES "directus_collections"("collection") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_dashboards" ADD CONSTRAINT "directus_dashboards_user_created_directus_users_id_fk" FOREIGN KEY ("user_created") REFERENCES "directus_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_files" ADD CONSTRAINT "directus_files_folder_directus_folders_id_fk" FOREIGN KEY ("folder") REFERENCES "directus_folders"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_files" ADD CONSTRAINT "directus_files_uploaded_by_directus_users_id_fk" FOREIGN KEY ("uploaded_by") REFERENCES "directus_users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_files" ADD CONSTRAINT "directus_files_modified_by_directus_users_id_fk" FOREIGN KEY ("modified_by") REFERENCES "directus_users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_flows" ADD CONSTRAINT "directus_flows_user_created_directus_users_id_fk" FOREIGN KEY ("user_created") REFERENCES "directus_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_folders" ADD CONSTRAINT "directus_folders_parent_foreign" FOREIGN KEY ("parent") REFERENCES "directus_folders"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_notifications" ADD CONSTRAINT "directus_notifications_recipient_directus_users_id_fk" FOREIGN KEY ("recipient") REFERENCES "directus_users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_notifications" ADD CONSTRAINT "directus_notifications_sender_directus_users_id_fk" FOREIGN KEY ("sender") REFERENCES "directus_users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_operations" ADD CONSTRAINT "directus_operations_flow_directus_flows_id_fk" FOREIGN KEY ("flow") REFERENCES "directus_flows"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_operations" ADD CONSTRAINT "directus_operations_user_created_directus_users_id_fk" FOREIGN KEY ("user_created") REFERENCES "directus_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_operations" ADD CONSTRAINT "directus_operations_resolve_foreign" FOREIGN KEY ("resolve") REFERENCES "directus_operations"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_operations" ADD CONSTRAINT "directus_operations_reject_foreign" FOREIGN KEY ("reject") REFERENCES "directus_operations"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_panels" ADD CONSTRAINT "directus_panels_dashboard_directus_dashboards_id_fk" FOREIGN KEY ("dashboard") REFERENCES "directus_dashboards"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_panels" ADD CONSTRAINT "directus_panels_user_created_directus_users_id_fk" FOREIGN KEY ("user_created") REFERENCES "directus_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_permissions" ADD CONSTRAINT "directus_permissions_role_directus_roles_id_fk" FOREIGN KEY ("role") REFERENCES "directus_roles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_presets" ADD CONSTRAINT "directus_presets_user_directus_users_id_fk" FOREIGN KEY ("user") REFERENCES "directus_users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_presets" ADD CONSTRAINT "directus_presets_role_directus_roles_id_fk" FOREIGN KEY ("role") REFERENCES "directus_roles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_revisions" ADD CONSTRAINT "directus_revisions_activity_directus_activity_id_fk" FOREIGN KEY ("activity") REFERENCES "directus_activity"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_revisions" ADD CONSTRAINT "directus_revisions_version_directus_versions_id_fk" FOREIGN KEY ("version") REFERENCES "directus_versions"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_revisions" ADD CONSTRAINT "directus_revisions_parent_foreign" FOREIGN KEY ("parent") REFERENCES "directus_revisions"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_sessions" ADD CONSTRAINT "directus_sessions_user_directus_users_id_fk" FOREIGN KEY ("user") REFERENCES "directus_users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_sessions" ADD CONSTRAINT "directus_sessions_share_directus_shares_id_fk" FOREIGN KEY ("share") REFERENCES "directus_shares"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_settings" ADD CONSTRAINT "directus_settings_project_logo_directus_files_id_fk" FOREIGN KEY ("project_logo") REFERENCES "directus_files"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_settings" ADD CONSTRAINT "directus_settings_public_foreground_directus_files_id_fk" FOREIGN KEY ("public_foreground") REFERENCES "directus_files"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_settings" ADD CONSTRAINT "directus_settings_public_background_directus_files_id_fk" FOREIGN KEY ("public_background") REFERENCES "directus_files"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_settings" ADD CONSTRAINT "directus_settings_storage_default_folder_directus_folders_id_fk" FOREIGN KEY ("storage_default_folder") REFERENCES "directus_folders"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_settings" ADD CONSTRAINT "directus_settings_public_favicon_directus_files_id_fk" FOREIGN KEY ("public_favicon") REFERENCES "directus_files"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_shares" ADD CONSTRAINT "directus_shares_collection_directus_collections_collection_fk" FOREIGN KEY ("collection") REFERENCES "directus_collections"("collection") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_shares" ADD CONSTRAINT "directus_shares_role_directus_roles_id_fk" FOREIGN KEY ("role") REFERENCES "directus_roles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_shares" ADD CONSTRAINT "directus_shares_user_created_directus_users_id_fk" FOREIGN KEY ("user_created") REFERENCES "directus_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_users" ADD CONSTRAINT "directus_users_role_directus_roles_id_fk" FOREIGN KEY ("role") REFERENCES "directus_roles"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_versions" ADD CONSTRAINT "directus_versions_collection_directus_collections_collection_fk" FOREIGN KEY ("collection") REFERENCES "directus_collections"("collection") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_versions" ADD CONSTRAINT "directus_versions_user_created_directus_users_id_fk" FOREIGN KEY ("user_created") REFERENCES "directus_users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_versions" ADD CONSTRAINT "directus_versions_user_updated_directus_users_id_fk" FOREIGN KEY ("user_updated") REFERENCES "directus_users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "directus_webhooks" ADD CONSTRAINT "directus_webhooks_migrated_flow_directus_flows_id_fk" FOREIGN KEY ("migrated_flow") REFERENCES "directus_flows"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
