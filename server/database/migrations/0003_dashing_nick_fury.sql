CREATE TABLE IF NOT EXISTS "builder_page" (
	"builder_page_id" varchar PRIMARY KEY NOT NULL,
	"features" jsonb NOT NULL,
	"html" varchar NOT NULL,
	"css" varchar NOT NULL,
	"js" varchar NOT NULL
);
