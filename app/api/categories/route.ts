import { NextResponse } from 'next/server';
import { getDb } from '@/libs/mongodb';

export const revalidate = 10; // Revalidate every 10 seconds

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const clientsOnly = searchParams.get('clients') === 'true';
    
    const db = await getDb();
    const collection = db.collection('Category');
    
    // Build query - if clientsOnly, only get categories with clientLogo
    const query = clientsOnly 
      ? { clientLogo: { $exists: true, $ne: null } }
      : {};
    
    const categories = await collection
      .find(query)
      .sort({ createdAt: -1 })
      .toArray();

    // Transform to match the expected format
    const transformedCategories = categories.map((category: any) => ({
      id: category._id.toString(),
      name: category.title,
      slug: category.slug,
      description: category.description || '',
      title: category.title,
      clientLogo: category.clientLogo || null,
    }));

    return NextResponse.json(transformedCategories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch categories', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}



