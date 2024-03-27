import { createUser, createGame } from "../model/dbAdapter.js";
import generateUniqueNumber from "../utils/generateUniqueNumber.js";

const initialUsers = async () => {
  let users = [
    {
      name: {
        first: "kenny",
        last: "mc",
      },
      phone: "0500000000",
      email: "kenny@gmail.com",
      password: "$2a$10$Tq3AH1Z0uEHo7MKbqMaUPOufejlQ8j8/Qs1Pne9YeKcyqOQVX28NK",
      image: {
        alt: "http://www.google.com",
      },
      address: {
        country: "asd",
        city: "asd",
        street: "asd",
        houseNumber: 10,
        zip: 12345,
      },
      isBusiness: false,
      isAdmin: false,
    },
    {
      name: {
        first: "john",
        last: "wick",
      },
      phone: "0500000000",
      email: "john@gmail.com",
      password: "$2a$10$Tq3AH1Z0uEHo7MKbqMaUPOufejlQ8j8/Qs1Pne9YeKcyqOQVX28NK",
      image: {
        alt: "http://www.google.com",
      },
      address: {
        country: "asd",
        city: "asd",
        street: "asd",
        houseNumber: 10,
        zip: 12345,
      },
      isBusiness: true,
      isAdmin: true,
    },
    {
      name: {
        first: "james",
        last: "bond",
      },
      phone: "0500000000",
      email: "james@gmail.com",
      password: "$2a$10$Tq3AH1Z0uEHo7MKbqMaUPOufejlQ8j8/Qs1Pne9YeKcyqOQVX28NK",
      image: {
        alt: "http://www.google.com",
      },
      address: {
        country: "asd",
        city: "asd",
        street: "asd",
        houseNumber: 10,
        zip: 12345,
      },
      isBusiness: true,
      isAdmin: false,
    },
  ];
  try {
    let bizId = "";
    for (let user of users) {
      let userFromDb = await createUser(user);
      if (!user.isAdmin && user.isBusiness) {
        bizId = userFromDb._id;
      }
      // console.log("userFromDb", userFromDb);
    }
    return bizId;
  } catch (err) {
    return "";
    //console.log(err);
  }
};

const initialGames = async (bizId) => {
  let games = [
    {
      title: "The Witcher 3: Wild Hunt",
      description:
        "An action role-playing game set in an open world environment.",
      releaseDate: "2015-05-19",
      genre: ["Action", "Adventure", "Role-Playing"],
      platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
      publisher: "CD Projekt",
      developer: "CD Projekt Red",
      systemRequirements: {
        minimum:
          "OS: Windows 7 64-bit, Processor: Intel CPU Core i5-2500K 3.3GHz / AMD CPU Phenom II X4 940, Memory: 6 GB RAM, Graphics: Nvidia GPU GeForce GTX 660 / AMD GPU Radeon HD 7870, Storage: 35 GB available space",
        recommended:
          "OS: Windows 10 64-bit, Processor: Intel CPU Core i7 3770 3.4 GHz / AMD CPU AMD FX-8350 4 GHz, Memory: 8 GB RAM, Graphics: Nvidia GPU GeForce GTX 770 / AMD GPU Radeon R9 290, Storage: 35 GB available space",
      },
      multiplayer: false,
      onlinePlay: false,
      offlinePlay: true,
      singlePlayer: true,
      ageRating: "Mature",
      price: 29.99,
      website: "https://thewitcher.com",
      coverImage: {
        url: "https://cdn.pixabay.com/photo/2023/11/08/23/57/flower-8376030_1280.jpg",
        alt: "cover image",
      },
      screenshots: [
        {
          url: "https://cdn.pixabay.com/photo/2023/11/08/23/57/flower-8376030_1280.jpg",
          alt: "image 1",
        },
        {
          url: "https://cdn.pixabay.com/photo/2023/11/08/23/57/flower-8376030_1280.jpg",
          alt: "image 2",
        },
        {
          url: "https://cdn.pixabay.com/photo/2023/11/08/23/57/flower-8376030_1280.jpg",
          alt: "image 3",
        },
      ],
      serialNumber: await generateUniqueNumber(),
      user_id: bizId,
    },
    {
      title: "Super Mario Odyssey",
      description:
        "A platform game developed and published by Nintendo for the Nintendo Switch.",
      releaseDate: "2017-10-27",
      genre: ["Platformer"],
      platform: ["Nintendo Switch"],
      publisher: "Nintendo",
      developer: "Nintendo EPD",
      systemRequirements: null,
      multiplayer: false,
      onlinePlay: false,
      offlinePlay: true,
      singlePlayer: true,
      ageRating: "Everyone",
      price: 59.99,
      website: "https://supermario.nintendo.com",
      coverImage: {
        url: "https://cdn.pixabay.com/photo/2023/11/08/23/57/flower-8376030_1280.jpg",
        alt: "cover image",
      },
      screenshots: [
        {
          url: "https://cdn.pixabay.com/photo/2023/11/08/23/57/flower-8376030_1280.jpg",
          alt: "image 1",
        },
        {
          url: "https://cdn.pixabay.com/photo/2023/11/08/23/57/flower-8376030_1280.jpg",
          alt: "image 2",
        },
        {
          url: "https://cdn.pixabay.com/photo/2023/11/08/23/57/flower-8376030_1280.jpg",
          alt: "image 3",
        },
      ],
      serialNumber: await generateUniqueNumber(),
      user_id: bizId,
    },
    {
      title: "Assassin's Creed Valhalla",
      description:
        "An action role-playing video game developed by Ubisoft Montreal and published by Ubisoft.",
      releaseDate: "2020-11-10",
      genre: ["Action", "Adventure", "Role-Playing"],
      platform: [
        "PC",
        "PlayStation 4",
        "PlayStation 5",
        "Xbox One",
        "Xbox Series X/S",
        "Google Stadia",
      ],
      publisher: "Ubisoft",
      developer: "Ubisoft Montreal",
      systemRequirements: {
        minimum:
          "OS: Windows 10 (64-bit), Processor: Intel Core i5-4460 or AMD Ryzen 3 1200, Memory: 8 GB RAM, Graphics: Nvidia GeForce GTX 960 or AMD Radeon R9 380, Storage: 50 GB available space",
        recommended:
          "OS: Windows 10 (64-bit), Processor: Intel Core i7-6700 or AMD Ryzen 7 1700, Memory: 8 GB RAM, Graphics: Nvidia GeForce GTX 1080 or AMD Radeon RX Vega 64, Storage: 50 GB available space",
      },
      multiplayer: false,
      onlinePlay: false,
      offlinePlay: true,
      singlePlayer: true,
      ageRating: "Mature",
      price: 59.99,
      website: "https://www.ubisoft.com/en-us/game/assassins-creed/valhalla",
      coverImage: {
        url: "https://cdn.pixabay.com/photo/2023/11/08/23/57/flower-8376030_1280.jpg",
        alt: "cover image",
      },
      screenshots: [
        {
          url: "https://cdn.pixabay.com/photo/2023/11/08/23/57/flower-8376030_1280.jpg",
          alt: "image 1",
        },
        {
          url: "https://cdn.pixabay.com/photo/2023/11/08/23/57/flower-8376030_1280.jpg",
          alt: "image 2",
        },
        {
          url: "https://cdn.pixabay.com/photo/2023/11/08/23/57/flower-8376030_1280.jpg",
          alt: "image 3",
        },
      ],
      serialNumber: await generateUniqueNumber(),
      user_id: bizId,
    },
    {
      title: "Minecraft",
      description:
        "A sandbox video game developed and published by Mojang Studios.",
      releaseDate: "2009-11-18",
      genre: ["Sandbox", "Survival"],
      platform: [
        "PC",
        "PlayStation 4",
        "Xbox One",
        "Nintendo Switch",
        "iOS",
        "Android",
      ],
      publisher: "Mojang Studios",
      developer: "Mojang Studios",
      systemRequirements: null,
      multiplayer: true,
      onlinePlay: true,
      offlinePlay: true,
      singlePlayer: true,
      ageRating: "Everyone",
      price: 26.95,
      website: "https://www.minecraft.net",
      coverImage: {
        url: "https://cdn.pixabay.com/photo/2023/11/08/23/57/flower-8376030_1280.jpg",
        alt: "cover image",
      },
      screenshots: [
        {
          url: "https://cdn.pixabay.com/photo/2023/11/08/23/57/flower-8376030_1280.jpg",
          alt: "image 1",
        },
        {
          url: "https://cdn.pixabay.com/photo/2023/11/08/23/57/flower-8376030_1280.jpg",
          alt: "image 2",
        },
        {
          url: "https://cdn.pixabay.com/photo/2023/11/08/23/57/flower-8376030_1280.jpg",
          alt: "image 3",
        },
      ],
      serialNumber: await generateUniqueNumber(),
      user_id: bizId,
    },
    {
      title: "Grand Theft Auto V",
      description:
        "An action-adventure game developed by Rockstar North and published by Rockstar Games.",
      releaseDate: "2013-09-17",
      genre: ["Action", "Adventure"],
      platform: [
        "PC",
        "PlayStation 3",
        "PlayStation 4",
        "Xbox 360",
        "Xbox One",
        "PlayStation 5",
        "Xbox Series X/S",
      ],
      publisher: "Rockstar Games",
      developer: "Rockstar North",
      systemRequirements: {
        minimum:
          "OS: Windows 7 64-bit, Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz / AMD Phenom 9850 Quad-Core Processor @ 2.5GHz, Memory: 4 GB RAM, Graphics: Nvidia 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11), Storage: 72 GB available space",
        recommended:
          "OS: Windows 10 64-bit, Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs), Memory: 8 GB RAM, Graphics: Nvidia GTX 660 2GB / AMD HD 7870 2GB, Storage: 72 GB available space",
      },
      multiplayer: true,
      onlinePlay: true,
      offlinePlay: true,
      singlePlayer: true,
      ageRating: "Mature",
      price: 29.99,
      website: "https://www.rockstargames.com/V",
      coverImage: {
        url: "https://cdn.pixabay.com/photo/2023/11/08/23/57/flower-8376030_1280.jpg",
        alt: "cover image",
      },
      screenshots: [
        {
          url: "https://cdn.pixabay.com/photo/2023/11/08/23/57/flower-8376030_1280.jpg",
          alt: "image 1",
        },
        {
          url: "https://cdn.pixabay.com/photo/2023/11/08/23/57/flower-8376030_1280.jpg",
          alt: "image 2",
        },
        {
          url: "https://cdn.pixabay.com/photo/2023/11/08/23/57/flower-8376030_1280.jpg",
          alt: "image 3",
        },
      ],
      serialNumber: await generateUniqueNumber(),
      user_id: bizId,
    },
  ];

  try {
    for (let game of games) {
      await createGame(game);
    }
  } catch (err) {
    console.error(err);
  }
};

export { initialUsers, initialGames };
