# Complete Guide: Making sq22-link-main Fully Dynamic

## Overview

This guide explains how to make sq22-link-main website fully dynamic by connecting it to the MongoDB database managed by the dashboard.

## Step 1: Install Dependencies

Update `package.json` to include MongoDB driver:

```json
{
  "dependencies": {
    "mongodb": "^6.20.0"
  }
}
```

Run: `npm install`

## Step 2: Environment Configuration

Create `.env.local` file in `sq22-link-main`:

```env
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/squadlink?retryWrites=true&w=majority"
MONGODB_DB="squadlink"
```

**Important:** Use the same DATABASE_URL as the dashboard so both projects access the same database.

## Step 3: API Routes Structure

All API routes are created in `app/api/`:

### Created Routes:
- ✅ `app/api/categories/route.ts` - Get all categories
- ✅ `app/api/categories/[slug]/route.ts` - Get category by slug with products
- ✅ `app/api/colors/route.ts` - Get all colors
- ✅ `libs/mongodb.js` - MongoDB connection library

## Step 4: Component Updates Needed

### 4.1 Navbar Component

**File:** `components/Navbar.tsx`

**Changes:**
- Remove static categories array
- Fetch categories from `/api/categories` on component mount
- Use `useState` and `useEffect` to load categories
- Map categories to use `title` and `slug` from database

### 4.2 Category Page

**File:** `app/category/[slug]/page.tsx`

**Changes:**
- Remove `getCategoryBySlug` from static data
- Fetch category data from `/api/categories/[slug]` 
- Get products and colors from API response
- Update filtering logic to work with database colors

### 4.3 ProductGrid Component

**File:** `components/ProductGrid.tsx`

**Changes:**
- Update to use database product structure:
  - `product.name` or `product.title` for name
  - `product.image` for image
  - `product.color` for color name

### 4.4 ColorFilter Component

**File:** `components/ColorFilter.tsx`

**Changes:**
- Accept colors array from API (with hexCode)
- Update colorMap to use database colors with hexCode
- Handle dynamic color names

### 4.5 CategoriesSection Component

**File:** `components/CategoriesSection.tsx`

**Changes:**
- Fetch categories from `/api/categories`
- Map database categories to component format
- Handle missing images gracefully

## Step 5: Data Transformation

### Category Mapping:
```typescript
Database → Component
{
  title: "T-Shirts" → name: "T-Shirts"
  slug: "t-shirts" → slug: "t-shirts"
  description: "..." → description: "..."
}
```

### Product Mapping:
```typescript
Database → Component
{
  title: "Classic White T-Shirt" → name: "Classic White T-Shirt"
  image: "https://..." → image: "https://..."
  color: { name: "White", hexCode: "#FFFFFF" } → color: "white"
}
```

## Step 6: Testing Checklist

- [ ] Categories appear in Navbar dropdown
- [ ] Category page loads with correct data
- [ ] Products display correctly on category page
- [ ] Color filter shows correct colors
- [ ] Filtering by color works
- [ ] Homepage categories section shows database categories
- [ ] All static data files removed

## Step 7: Remove Static Data

Once everything works:
- Archive or delete `lib/categoriesData.ts`
- Remove all imports of static data
- Update all references to use API calls

## Implementation Priority

1. **High Priority:**
   - Navbar categories
   - Category page with products
   - Color filtering

2. **Medium Priority:**
   - Homepage categories section
   - Product details (if needed)

3. **Low Priority:**
   - Remove static data files
   - Code cleanup

## Notes

- API routes use `revalidate = 10` for ISR (Incremental Static Regeneration)
- All API routes handle errors gracefully
- MongoDB connection is cached for performance
- Components should handle loading and error states











