import { model, models, Schema } from "mongoose";

export interface IInteraction {
  user: Schema.Types.ObjectId;
  action: string;
  actionId: Schema.Types.ObjectId;
  actionType: "question" | "answer";
}

const InteractionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  action: {
    type: String,
    required: true,
  },
  actionId: {
    type: Schema.Types.ObjectId, // question id or answer id
    required: true,
  },
  actionType: {
    type: String,
    required: true,
    enum: ["question", "answer"],
  },
}, {
    timestamps: true,
  }
);

const Interaction =
  models?.Interaction || model<IInteraction>("Interaction", InteractionSchema);

export default Interaction;
