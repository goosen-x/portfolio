-- Migration script to update avatar paths from .jpeg to .png
-- Run this in your Neon Console SQL Editor

-- Update authors table - replace old avatar.jpeg with new avatar.png
UPDATE authors
SET picture = '/images/avatar.png'
WHERE picture = '/images/avatar.jpeg';

-- Update blog_posts table - replace old cover images if they use avatar.jpeg
UPDATE blog_posts
SET cover_image = '/images/avatar.png'
WHERE cover_image = '/images/avatar.jpeg';

-- Verify the changes
SELECT 'Authors with updated pictures:' as info, COUNT(*) as count
FROM authors
WHERE picture = '/images/avatar.png';

SELECT 'Blog posts with updated cover images:' as info, COUNT(*) as count
FROM blog_posts
WHERE cover_image = '/images/avatar.png';
