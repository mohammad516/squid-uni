import { MetadataRoute } from 'next';
import { getDb } from '@/libs/mongodb';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Base URL
  const baseUrl = 'https://squadlinkuniform.com';

  // Get current date for lastModified
  const currentDate = new Date();

  // Static pages with their priorities
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/clients`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Fetch dynamic category pages from database
  let categoryPages: MetadataRoute.Sitemap = [];
  
  try {
    const db = await getDb();
    const collection = db.collection('Category');
    
    // Fetch all categories for sitemap
    const categories = await collection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    categoryPages = categories.map((category: any) => ({
      url: `${baseUrl}/category/${category.slug}`,
      lastModified: category.updatedAt 
        ? new Date(category.updatedAt) 
        : category.createdAt 
        ? new Date(category.createdAt) 
        : currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Error fetching categories for sitemap:', error);
    // Continue without category pages if there's an error
  }

  // Combine static and dynamic pages
  return [...staticPages, ...categoryPages];
}

