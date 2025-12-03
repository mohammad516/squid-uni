import { NextResponse } from 'next/server';
import { getDb } from '@/libs/mongodb';
import { ObjectId } from 'mongodb';

export const revalidate = 10;

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const db = await getDb();
    const collection = db.collection('Category');
    
    const category = await collection.findOne({ slug });

    if (!category) {
      return NextResponse.json(
        { error: 'Category not found' },
        { status: 404 }
      );
    }

    // Get products for this category
    const productsCollection = db.collection('Product');
    
    // Match products by categoryId with category._id (ObjectId)
    // Ensure category._id is an ObjectId instance
    const categoryObjectId = category._id instanceof ObjectId 
      ? category._id 
      : new ObjectId(category._id);
    
    // Match product.categoryId with category._id (ObjectId)
    // Prisma stores categoryId as ObjectId in MongoDB, so we match ObjectId to ObjectId
    const products = await productsCollection
      .find({ categoryId: categoryObjectId })
      .toArray();

    // Get colors for products
    const colorsCollection = db.collection('Color');
    const allColors = await colorsCollection.find({}).toArray();
    
    // Create a map with both ObjectId and string keys for color lookup
    const colorMapById = new Map();
    const colorMapByString = new Map();
    
    allColors.forEach(color => {
      const colorIdString = color._id.toString();
      const colorObject = {
        id: colorIdString,
        name: color.name,
        hexCode: color.hexCode,
      };
      colorMapById.set(color._id, colorObject);
      colorMapByString.set(colorIdString, colorObject);
    });

    // Transform products with full color object
    const transformedProducts = products.map(product => {
      // Get color using product.colorId (which should match Color._id)
      let color = null;
      
      // Try to get color using ObjectId match first
      if (product.colorId) {
        // Convert colorId to ObjectId if it's a string
        const colorId = product.colorId instanceof ObjectId 
          ? product.colorId 
          : new ObjectId(product.colorId);
        color = colorMapById.get(colorId);
        
        // If not found, try with string representation
        if (!color) {
          const colorIdString = colorId.toString();
          color = colorMapByString.get(colorIdString);
        }
      }
      
      return {
        id: product._id.toString(),
        name: product.title,
        title: product.title,
        image: product.image || '/placeholder.jpg',
        color: color ? {
          name: color.name,
          hexCode: color.hexCode,
        } : null,
        // Keep backward compatibility for filtering
        colorName: color?.name?.toLowerCase() || 'unknown',
      };
    });

    // Get unique colors for this category's products with hexCodes
    const uniqueColorMap = new Map<string, string>();
    transformedProducts.forEach(product => {
      if (product.color && product.color.name && product.color.hexCode) {
        const colorName = product.color.name.toLowerCase();
        uniqueColorMap.set(colorName, product.color.hexCode);
      }
    });

    // Transform to match expected format
    const transformedCategory = {
      id: category._id.toString(),
      name: category.title,
      slug: category.slug,
      description: category.description || '',
      title: category.title,
      products: transformedProducts,
      availableColors: Array.from(uniqueColorMap.keys()),
      colorsWithHex: Object.fromEntries(uniqueColorMap),
    };

    return NextResponse.json(transformedCategory);
  } catch (error) {
    console.error('Error fetching category:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch category', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}

