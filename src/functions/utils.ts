export const getImgPath = (imgPath: string) => {
    // TODO: 定数に置き換え
    return new URL(imgPath, "http://localhost:3000/images/").href;
};
