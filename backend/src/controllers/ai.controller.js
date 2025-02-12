const aiService = require('../services/ai.service')

module.exports.getResponse = async (req, res) => {
    const prompt = req.query.prompt;

    if (!prompt) {
        return res.status(400).json({ error: 'No prompt provided' });
    }

    try {
        const response = await aiService(prompt);
        return res.status(200).json({ response }); // Use res.status(200).json() or res.json({ response })
    } catch (error) {
        console.error("Error calling AI service:", error); // Log the error for debugging
        return res.status(500).json({ error: 'Error processing your request' }); // Send a generic error response to the client
    }
};

module.exports.getReview = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).json({ error: 'No prompt provided' });
    }

    try {
        const response = await aiService(code);
        return res.status(200).json({ response }); // Use res.status(200).json() or res.json({ response })
    } catch (error) {
        console.error("Error calling AI service:", error); // Log the error for debugging
        return res.status(500).json({ error: 'Error processing your request' }); // Send a generic error response to the client
    }
};