const normalizeUser = (user) => {
  // let image;

  // image = {
  //   ...user.image,
  //   url:
  //     user.image.url ||
  //     "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  //   alt: user.image.alt || "avatar",
  // };
  // if (user.image.alt && !user.image.url) {
  //   image = {
  //     url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  //     alt: "avatar",
  //   };
  // }
  return {
    ...user,
    name: { ...user.name, middle: user.name.middle || undefined },
    address: {
      ...user.address,
      state: user.address.state || undefined,
    },
    picturePath: user.picturePath || "public/images/default-pfp.jpg",
    viewedProfile: user.viewedProfile || 0,
    Impressions: user.Impressions || 0,
  };
};
export default normalizeUser;
