import { NextResponse } from 'next/server';
import { getDb } from '@/libs/mongodb';

export const revalidate = 10;

export async function GET() {
  try {
    const db = await getDb();
    const collection = db.collection('Color');
    
    const colors = await collection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    const transformedColors = colors.map(color => ({
      id: color._id.toString(),
      name: color.name,
      hexCode: color.hexCode,
    }));

    return NextResponse.json(transformedColors);
  } catch (error) {
    console.error('Error fetching colors:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch colors', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}

