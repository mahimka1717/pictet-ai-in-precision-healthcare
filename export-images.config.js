/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
    outDir: 'out',
    imageDir: 'img/_optimized',
    basePath: '.',
    filenameGenerator: ({ path, name, width, quality, extension }) => `${name}_${width}_${quality}.${extension}`,
} 
  
module.exports = config