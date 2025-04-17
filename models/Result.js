// models/Result.js
import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  category: { type: String, required: true },
  score: { type: Number, required: true },
  total: { type: Number, required: true },
}, {
  timestamps: true,
});

const Result = mongoose.model('Result', resultSchema);

export default Result;
