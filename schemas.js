const schemas = [
  // Category Schema
  {
    name: "category",
    schema:
      "Joi.object({\n  name: Joi.string().min(2).max(50).required(),\n  description: Joi.string().min(2).max(500).required(),\n});\n",
  },
  // Discounts Schema
  {
    name: "discounts",
    schema:
      "Joi.object({\n  game_id: Joi.string().required(),\n  discount_percentage: Joi.number().min(0).max(100).required(),\n  start_date: Joi.date().iso().required(),\n  end_date: Joi.date().iso().required(),\n  platform: Joi.string(),\n});\n",
  },
  // Posts Schema
  {
    name: "posts",
    schema:
      "Joi.object({\n  user_id: Joi.string().required(),\n  content: Joi.string().min(2).max(5000).required(),\n  timestamp: Joi.date().iso().required(),\n});\n",
  },
  // Stats Schema
  {
    name: "stats",
    schema:
      "Joi.object({\n  game_id: Joi.string().required(),\n  player_count: Joi.number().min(0).required(),\n  average_playtime: Joi.number().min(0),\n  achievements_unlocked: Joi.number().min(0),\n});\n",
  },
  // Session Schema
  {
    name: "session",
    schema:
      "Joi.object({\n  user_id: Joi.string().required(),\n  session_token: Joi.string().required(),\n  expiration_time: Joi.date().iso().required(),\n  created_at: Joi.date().iso().required(),\n  last_active: Joi.date().iso().required(),\n  ip_address: Joi.string().ip(),\n  user_agent: Joi.string(),\n});\n",
  },
  // Reviews Schema
  {
    name: "reviews",
    schema:
      "Joi.object({\n  user_id: Joi.string().required(),\n  game_id: Joi.string().required(),\n  rating: Joi.number().min(1).max(5).required(),\n  comment: Joi.string().min(2).max(500).required(),\n  timestamp: Joi.date().iso().required(),\n});\n",
  },
  // Likes Schema
  {
    name: "likes",
    schema:
      "Joi.object({\n  user_id: Joi.string().required(),\n  post_id: Joi.string().required(),\n  timestamp: Joi.date().iso().required(),\n});\n",
  },
  // Comments Schema
  {
    name: "comments",
    schema:
      "Joi.object({\n  user_id: Joi.string().required(),\n  post_id: Joi.string().required(),\n  content: Joi.string().min(2).max(500).required(),\n  timestamp: Joi.date().iso().required(),\n});\n",
  },
  // Followers Schema
  {
    name: "followers",
    schema:
      "Joi.object({\n  follower_id: Joi.string().required(),\n  followed_id: Joi.string().required(),\n});\n",
  },
  // Following Schema
  {
    name: "following",
    schema:
      "Joi.object({\n  follower_id: Joi.string().required(),\n  followed_id: Joi.string().required(),\n});\n",
  },
  // Trending Schema
  {
    name: "trending",
    schema:
      "Joi.object({\n  post_id: Joi.string().required(),\n  engagement_count: Joi.number().min(0).required(),\n  timestamp: Joi.date().iso().required(),\n});\n",
  },
  // Achievements Schema
  {
    name: "achievements",
    schema:
      "Joi.object({\n  user_id: Joi.string().required(),\n  game_id: Joi.string().required(),\n  achievement_name: Joi.string().min(2).max(50).required(),\n  timestamp: Joi.date().iso().required(),\n});\n",
  },
  // Notifications Schema
  {
    name: "notifications",
    schema:
      "Joi.object({\n  user_id: Joi.string().required(),\n  notification_type: Joi.string().required(),\n  content: Joi.string().min(2).max(500).required(),\n  timestamp: Joi.date().iso().required(),\n  is_read: Joi.boolean().required(),\n});\n",
  },
];
export default schemas;
