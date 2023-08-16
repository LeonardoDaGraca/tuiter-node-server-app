import mongoose from 'mongoose';
const tuitsSchema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
  username: String,
  handle: String,
  replies: Number,
  retuits: Number,
  time: String,
  image: String,
}, {collection: 'tuits'});
export default tuitsSchema;