# Making sq22-link-main Fully Dynamic

## Summary

This document outlines the changes needed to make sq22-link-main website fully dynamic by connecting it to the same database as the dashboard.

## Database Connection

The website will use the same MongoDB database as the dashboard (zayana-dashboard-main). Both projects share:
- Same DATABASE_URL in .env
- Categories collection (Category)
- Colors collection (Color)  
- Products collection (Product)

## Required Changes

### 1. Install Dependencies

Add MongoDB driver to package.json:
```bash
npm install mongodb
```

### 2. Environment Setup

Create/update `.env` file:
```env
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/squadlink?retryWrites=true&w=majority"
MONGODB_DB="squadlink"
```

### 3. API Routes Created

- `/api/categories` - Get all categories
- `/api/categories/[slug]` - Get category by slug with products
- `/api/colors` - Get all colors
- `/api/products` - Get all products (if needed)

### 4. Components to Update

- Navbar.tsx - Fetch categories from API
- Category page - Fetch category data from API
- ProductGrid.tsx - Handle database product structure
- ColorFilter.tsx - Use database colors
- CategoriesSection.tsx - Fetch categories from API

### 5. Data Structure Mapping

Database → Website Format:

**Category:**
- `title` → `name` and `title`
- `slug` → `slug`
- `description` → `description`

**Product:**
- `title` → `name` and `title`
- `image` → `image`
- `color.name` → `color` (lowercase)

**Color:**
- `name` → color name
- `hexCode` → hex code for display

