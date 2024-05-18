const schemas = [
  // Category Schema
  {
    name: "category",
    fields: [
      {
        name: "name",
        type: "String",
        required: true,
        minLength: 2,
        maxLength: 50,
      },
      {
        name: "description",
        type: "String",
        required: true,
        minLength: 2,
        maxLength: 500,
      },
    ],
  },
  // Discounts Schema
  {
    name: "discounts",
    fields: [
      { name: "game_id", type: "String", required: true },
      {
        name: "discount_percentage",
        type: "Number",
        required: true,
        min: 0,
        max: 100,
      },
      { name: "start_date", type: "Date", required: true },
      { name: "end_date", type: "Date", required: true },
      { name: "platform", type: "String", required: false },
    ],
  },
  // Posts Schema
  {
    name: "posts",
    fields: [
      { name: "user_id", type: "String", required: true },
      {
        name: "content",
        type: "String",
        required: true,
        minLength: 2,
        maxLength: 5000,
      },
      { name: "timestamp", type: "Date", required: true },
    ],
  },
  // Stats Schema
  {
    name: "stats",
    fields: [
      { name: "game_id", type: "String", required: true },
      { name: "player_count", type: "Number", required: true, min: 0 },
      { name: "average_playtime", type: "Number", required: false, min: 0 },
      {
        name: "achievements_unlocked",
        type: "Number",
        required: false,
        min: 0,
      },
    ],
  },
  // Session Schema
  {
    name: "session",
    fields: [
      { name: "user_id", type: "String", required: true },
      { name: "session_token", type: "String", required: true },
      { name: "expiration_time", type: "Date", required: true },
      { name: "created_at", type: "Date", required: true },
      { name: "last_active", type: "Date", required: true },
      { name: "ip_address", type: "String", required: false },
      { name: "user_agent", type: "String", required: false },
    ],
  },
  // Reviews Schema
  {
    name: "reviews",
    fields: [
      { name: "user_id", type: "String", required: true },
      { name: "game_id", type: "String", required: true },
      { name: "rating", type: "Number", required: true, min: 1, max: 5 },
      {
        name: "comment",
        type: "String",
        required: true,
        minLength: 2,
        maxLength: 500,
      },
      { name: "timestamp", type: "Date", required: true },
    ],
  },
  // Likes Schema
  {
    name: "likes",
    fields: [
      { name: "user_id", type: "String", required: true },
      { name: "post_id", type: "String", required: true },
      { name: "timestamp", type: "Date", required: true },
    ],
  },
  // Comments Schema
  {
    name: "comments",
    fields: [
      { name: "user_id", type: "String", required: true },
      { name: "post_id", type: "String", required: true },
      {
        name: "content",
        type: "String",
        required: true,
        minLength: 2,
        maxLength: 500,
      },
      { name: "timestamp", type: "Date", required: true },
    ],
  },
  // Followers Schema
  {
    name: "followers",
    fields: [
      { name: "follower_id", type: "String", required: true },
      { name: "followed_id", type: "String", required: true },
    ],
  },
  // Following Schema
  {
    name: "following",
    fields: [
      { name: "follower_id", type: "String", required: true },
      { name: "followed_id", type: "String", required: true },
    ],
  },
  // Trending Schema
  {
    name: "trending",
    fields: [
      { name: "post_id", type: "String", required: true },
      { name: "engagement_count", type: "Number", required: true, min: 0 },
      { name: "timestamp", type: "Date", required: true },
    ],
  },
  // Achievements Schema
  {
    name: "achievements",
    fields: [
      { name: "user_id", type: "String", required: true },
      { name: "game_id", type: "String", required: true },
      {
        name: "achievement_name",
        type: "String",
        required: true,
        minLength: 2,
        maxLength: 50,
      },
      { name: "timestamp", type: "Date", required: true },
    ],
  },
  // Notifications Schema
  {
    name: "notifications",
    fields: [
      { name: "user_id", type: "String", required: true },
      { name: "notification_type", type: "String", required: true },
      {
        name: "content",
        type: "String",
        required: true,
        minLength: 2,
        maxLength: 500,
      },
      { name: "timestamp", type: "Date", required: true },
      { name: "is_read", type: "Boolean", required: true },
    ],
  },
];

export default schemas;
