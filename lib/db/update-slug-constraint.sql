-- Drop the existing unique constraint on slug
ALTER TABLE blog_posts DROP CONSTRAINT IF EXISTS blog_posts_slug_key;

-- Create a new unique constraint on slug + locale combination
ALTER TABLE blog_posts ADD CONSTRAINT blog_posts_slug_locale_unique UNIQUE (slug, locale);

-- Verify the change
SELECT constraint_name, constraint_type 
FROM information_schema.table_constraints 
WHERE table_name = 'blog_posts';