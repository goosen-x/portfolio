# How to Add Conference Photos

## Current photos (7):
- photo-01.jpg
- photo-07.jpg
- photo-08.jpg
- photo-09.jpg
- photo-10.jpg
- photo-14.jpg
- photo-15.jpg

## To add new photos:

1. **Add photo to this folder** (`/public/images/conference/`)
   - Name it: `photo-XX.jpg` (where XX is a number)

2. **Add path to SectionSpeaking.tsx**
   - File: `/components/homepage/SectionSpeaking/SectionSpeaking.tsx`
   - Add to `conferenceImages` array (around line 35):
   ```typescript
   const conferenceImages = [
     '/images/conference/photo-01.jpg',
     '/images/conference/photo-07.jpg',
     // ... existing photos
     '/images/conference/photo-XX.jpg'  // <-- add here
   ]
   ```

## To remove a photo:

1. Remove the path from the `conferenceImages` array
2. Optionally delete the file from this folder

## Example:

If you add `photo-20.jpg` to this folder, add this line to the array:
```typescript
'/images/conference/photo-20.jpg'
```

That's it! The photo will appear in the carousel.
