import { model, models, Schema, Types } from "mongoose";

export interface IAnswer {
  author: Types.ObjectId;
  question: Types.ObjectId;
  content: string;
  upvotes: number;
  downvotes: number;
}

export interface IAnswerDoc extends IAnswer, Document {}

const AnswerSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", require: true },
    question: { type: Schema.Types.ObjectId, ref: "Question" },
    content: { type: String, required: true },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const AnswerModel = models?.Account || model<IAnswer>("Answer", AnswerSchema);

export default AnswerModel;
