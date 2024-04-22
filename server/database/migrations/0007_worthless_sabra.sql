ALTER TABLE "product" ALTER COLUMN "pricing_yearly" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "product" ALTER COLUMN "stripe_yearly_pricing_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "product" ALTER COLUMN "features" DROP NOT NULL;