const normalizeUser = (userData) => {
  if (!userData.image) {
    userData.image = {};
  }
  userData.image = {
    url:
      userData.image.url ||
      "https://cdn.pixabay.com/photo/2017/08/04/07/57/avatar-2579301_1280.jpg",
    alt: userData.image.alt || "Icon Placeholder",
  };
  return {
    ...userData,
  };
};

module.exports = normalizeUser;
