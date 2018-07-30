const images = require("../data/images.json");

const PhotoService = () => {
  const getAllAsShuffled = () => {
    return shuffleArray(images);
  };

  const getByPage = (pageNo = 0, itemsPerPage = 25) => {
    return images.splice(pageNo * 25, itemsPerPage);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
    }

    return array;
  };

  return {
    getByPage,
    getAllAsShuffled
  }
};

export default PhotoService();