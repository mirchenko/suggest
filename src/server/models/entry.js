import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const channelSchema = new Schema({
  id: { type: String, required: true, unique: true },
  articleURL: { type: String, required: true },
  originalText: { type: String, required: true },
  isApproved: { type: Boolean, required: true },
  suggestions: { type: Array }
});

export default mongoose.model('entry', channelSchema);