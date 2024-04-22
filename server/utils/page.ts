import { eq } from 'drizzle-orm';
import { uid } from 'uid/secure';

class PageService {
  async create(projectData: any[], html: string, css: string, js: string, id?: string) {
    const [builder] = await db.insert(tables.builderPage).values({ builderPageId: id ?? uid(), projectData, html, css, js }).returning();
    return builder
  }

  async getBuilderById(id: string) {
    const [builder] = await db.select().from(tables.builderPage).where(eq(tables.builderPage.builderPageId, id))
    return builder
  }

  async deleteBuilderById(id: string) {
    await db.delete(tables.builderPage).where(eq(tables.builderPage.builderPageId, id))
  }

  async updateBuilderById(id: string, projectData: any[], html: string, css: string, js: string) {
    await db.delete(tables.builderPage).where(eq(tables.builderPage.builderPageId, id));
    const [builder] = await db.insert(tables.builderPage).values({ builderPageId: id, projectData, html, css, js }).returning();
    return builder
  }
}

export const pageService = new PageService()
