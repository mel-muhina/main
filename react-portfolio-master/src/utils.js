
//export const getImageUrl = (path) => {
//return new URL(`../assets/${path}`, import.meta.url).href;
//};

export const getImageUrl = (fileName) => {
    const imageUrl = `/assets/${fileName}`;
    console.log('Image URL:', imageUrl);
    return imageUrl;
}