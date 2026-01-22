import mongoose, { Schema } from "mongoose";

interface IField {
    key: string;
    value: string;
}


export interface IPage extends Document {
    componentType: string;
    fields: IField[];
    components: Record<string, any>;
    publishDate: Date;
}


const pageSchema = new Schema<IPage>(
    {
        componentType: {
            type: String,
            required: true,
        },
        fields: [
            {
                key: {
                    type: String,
                    required: true,
                },
                value: {
                    type: String,
                    required: false,
                },
            },
        ],
        components: {
            type: Map,
            of: {
                type: Schema.Types.Mixed,
            },
            required: false,
        },
        publishDate: {
            type: Date,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

const Pages = mongoose.models.Pages || mongoose.model<IPage>("Pages", pageSchema);

export default Pages;