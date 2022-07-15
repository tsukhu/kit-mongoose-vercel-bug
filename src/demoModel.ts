import mongoose from 'mongoose';

const widgetRegistrySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name for this widget'],
    },
    data: {
      type: Object,
    },
  },
  { collection: 'demo' }
);

export default mongoose.models.widgetRegistry ||
  mongoose.model('demo', widgetRegistrySchema, 'demo');
