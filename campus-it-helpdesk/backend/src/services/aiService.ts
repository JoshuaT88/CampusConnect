import axios from 'axios';

const AI_API_URL = 'https://api.openai.com/v1/chat/completions';
const AI_API_KEY = process.env.AI_API_KEY;

export const classifyTicket = async (subject: string, body: string) => {
    if (!AI_API_KEY) {
        throw new Error('AI API key is not configured.');
    }

    const prompt = `You are CampusConnect AI. Classify the request.\nSubject: ${subject}\nBody: ${body}`;

    try {
        const response = await axios.post(AI_API_URL, {
            model: 'gpt-4',
            messages: [{ role: 'user', content: prompt }],
        }, {
            headers: {
                'Authorization': `Bearer ${AI_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        const { category, department, campusCode, urgency, spamScore } = response.data.choices[0].message.content;

        return {
            category,
            department,
            campusCode,
            urgency,
            spamScore,
        };
    } catch (error) {
        console.error('Error classifying ticket:', error);
        throw new Error('Failed to classify ticket.');
    }
};

export const isSpam = (spamScore: number) => {
    return spamScore >= 0.85;
};