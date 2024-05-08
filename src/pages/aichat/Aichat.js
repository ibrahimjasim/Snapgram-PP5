/* AiChat.js*/

import { useEffect, useState } from "react";
import styles from "../../styles/Aichat.module.css"

const AiChat = () => {
    const [chatResponses, setChatResponses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [question, setQuestion] = useState("");

    const fetchChatResponse = async (e) => {
        let myChatObj = {
            id: Math.random(),
            question,
        };
        e.preventDefault();

        setIsLoading(true);
        const data = {
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: question 
            }],
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        };

        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.REACT_APP_OPEN_AI_API_KEY}`
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const responseData = await response.json();
            let textResponse = responseData.choices[0].message.content


            myChatObj.answer = textResponse;
            setChatResponses([...chatResponses, myChatObj]);
            setQuestion("");
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };
    async function fetchOpenAIResponse() {

    }

    // Call the function
    useEffect(() => {
        fetchOpenAIResponse();
    }, [])

    return (
        <div className={styles.ai_chat_container}>
            <div className={styles.chat_box}>
                <div className={styles.messages}>
                    {chatResponses.length === 0 && (
                        <pre className={styles.empty_response}>Chat with My Ai.🤖</pre>
                    )}
                    {chatResponses.map((el) => (
                        <div key={el.id} className={styles.message_right}>
                            <div className={styles.message_right_box}>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/3656/3656988.png"
                                    alt="human"
                                />{" "}
                                <pre className={styles.question_para}>{el.question}</pre>
                            </div>
                            <div className={styles.message_right_box}>
                                <pre className={styles.answer_para}>{el.answer}</pre>
                                <img
                                    src="https://previews.123rf.com/images/vasilyrosca/vasilyrosca1902/vasilyrosca190200036/116377855-robot-icon-chat-bot-sign-for-support-service-concept-chatbot-character-flat-style.jpg"
                                    alt="robot"
                                />
                            </div>
                        </div>
                    ))}
                    {isLoading && <div className={styles.loader}></div>}
                </div>
                <form onSubmit={fetchChatResponse} className={styles.input}>
                    <input
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Write your chat questions"
                    />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default AiChat;