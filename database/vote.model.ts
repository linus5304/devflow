import { model, models, Schema } from "mongoose";

export interface IVote {
  userId: Schema.Types.ObjectId;
  id: Schema.Types.ObjectId; // question id or answer id
  type: "question" | "answer";
  voteType: "upvote" | "downvote";
  createdAt: Date;
  updatedAt: Date;
}

const VoteSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  type: {
    type: Number,
    required: true,
    enum: ["question", "answer"],
  },
  voteType: {
    type: Number,
    required: true,
    enum: ["upvote", "downvote"],
  },
}, {
  timestamps: true
});

VoteSchema.index({ userId: 1, targetId: 1 }, { unique: true });

const Vote = models?.Vote || model<IVote>("Vote", VoteSchema);

export default Vote;
