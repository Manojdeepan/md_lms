// import React, { useState } from 'react';

// const Chatbot = () => {
//     const [messages, setMessages] = useState([]);
//     const [userInput, setUserInput] = useState("");

//     const sendMessage = async () => {
//         if (userInput.trim() === "") return;

//         const newMessages = [...messages, { sender: 'user', text: userInput }];
//         setMessages(newMessages);
//         setUserInput("");

//         try {
//             const response = await fetch("http://localhost:3000/ask", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ input: userInput }),
//             });

//             const data = await response.json();
//             const botMessage = data.response || "⚠️ Error: No response from server.";
//             setMessages([...newMessages, { sender: 'bot', text: botMessage }]);
//         } catch (error) {
//             setMessages([...newMessages, { sender: 'bot', text: "⚠️ Error: Unable to reach the server." }]);
//         }
//     };

//     const handleKeyPress = (e) => {
//         if (e.key === 'Enter') sendMessage();
//     };

//     return (
//         <div style={styles.container}>
//             <h2>🤖 Chatbot - Rolex</h2>
//             <div style={styles.messages} id="chat-box">
//                 {messages.map((msg, index) => (
//                     <div
//                         key={index}
//                         style={{
//                             ...styles.message,
//                             ...(msg.sender === "user" ? styles.user : styles.bot),
//                         }}
//                     >
//                         {msg.text}
//                     </div>
//                 ))}
//             </div>
//             <input
//                 type="text"
//                 value={userInput}
//                 onChange={(e) => setUserInput(e.target.value)}
//                 onKeyPress={handleKeyPress}
//                 placeholder="Type a message..."
//                 style={styles.input}
//             />
//             <button onClick={sendMessage} style={styles.button}>Send</button>
//         </div>
//     );
// };

// // Inline styles
// const styles = {
//     container: {
//         fontFamily: "Segoe UI, sans-serif",
//         background: "linear-gradient(to bottom right, #f8f9fa, #e2e6ea)",
//         textAlign: "center",
//         margin: "40px auto",
//         padding: "30px",
//         width: "100%",
//         maxWidth: "600px",
//         borderRadius: "16px",
//         boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
//     },
//     messages: {
//         height: "350px",
//         overflowY: "auto",
//         border: "1px solid #dee2e6",
//         padding: "15px",
//         background: "#ffffff",
//         textAlign: "left",
//         marginBottom: "15px",
//         borderRadius: "10px",
//         boxShadow: "inset 0 2px 6px rgba(0, 0, 0, 0.05)",
//     },
//     message: {
//         padding: "12px 16px",
//         margin: "8px 0",
//         borderRadius: "12px",
//         maxWidth: "80%",
//         lineHeight: "1.5",
//         fontSize: "15px",
//         transition: "background 0.3s ease",
//         wordWrap: "break-word",
//     },
//     user: {
//         backgroundColor: "#007bff",
//         color: "white",
//         marginLeft: "auto",
//         textAlign: "right",
//         boxShadow: "2px 2px 5px rgba(0, 123, 255, 0.2)",
//     },
//     bot: {
//         backgroundColor: "#f1f3f5",
//         color: "#212529",
//         textAlign: "left",
//         marginRight: "auto",
//         boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
//     },
//     input: {
//         width: "75%",
//         padding: "12px",
//         border: "1px solid #ced4da",
//         borderRadius: "8px",
//         fontSize: "14px",
//         outline: "none",
//         transition: "border 0.2s ease-in-out",
//     },
//     button: {
//         padding: "12px 18px",
//         backgroundColor: "#007bff",
//         color: "white",
//         border: "none",
//         borderRadius: "8px",
//         cursor: "pointer",
//         fontSize: "14px",
//         marginLeft: "10px",
//         transition: "background 0.3s ease",
//     },
//     buttonHover: {
//         backgroundColor: "#0056b3",
//     }
// };

// export default Chatbot;

import React, { useState } from 'react';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");

    const sendMessage = async () => {
        if (userInput.trim() === "") return;

        const newMessages = [...messages, { sender: 'user', text: userInput }];
        setMessages(newMessages);
        setUserInput("");

        try {
            const response = await fetch("http://localhost:3000/ask", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ input: userInput }),
            });

            const data = await response.json();
            const botMessage = data.response || "⚠️ Error: No response from server.";
            setMessages([...newMessages, { sender: 'bot', text: botMessage }]);
        } catch (error) {
            setMessages([...newMessages, { sender: 'bot', text: "⚠️ Error: Unable to reach the server." }]);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') sendMessage();
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>🤖 Chatbot - Rolex</h2>
            <div style={styles.messages} id="chat-box">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.message,
                            ...(msg.sender === "user" ? styles.user : styles.bot),
                        }}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>
            <div style={styles.inputWrapper}>
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type a message..."
                    style={styles.input}
                />
                <button onClick={sendMessage} style={styles.button}>Send</button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: "Segoe UI, sans-serif",
        background: "linear-gradient(to bottom right, #fdfdfd, #dee2e6)",
        textAlign: "center",
        margin: "50px auto",
        padding: "35px",
        width: "100%",
        maxWidth: "640px",
        borderRadius: "20px",
        boxShadow: "0 12px 35px rgba(0, 0, 0, 0.15)",
    },
    title: {
        fontSize: "30px",
        fontWeight: "bold",
        marginBottom: "25px",
        color: "#212529",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        letterSpacing: "1px",
    },
    messages: {
        height: "380px",
        overflowY: "auto",
        border: "1px solid #dee2e6",
        padding: "20px",
        background: "#ffffff",
        textAlign: "left",
        marginBottom: "20px",
        borderRadius: "12px",
        boxShadow: "inset 0 3px 8px rgba(0, 0, 0, 0.05)",
    },
    message: {
        padding: "14px 18px",
        margin: "10px 0",
        borderRadius: "14px",
        maxWidth: "85%",
        lineHeight: "1.6",
        fontSize: "15.5px",
        transition: "all 0.3s ease-in-out",
        wordWrap: "break-word",
    },
    user: {
        backgroundColor: "#007bff",
        color: "#fff",
        marginLeft: "auto",
        textAlign: "right",
        boxShadow: "2px 2px 8px rgba(0, 123, 255, 0.3)",
    },
    bot: {
        backgroundColor: "#f1f3f5",
        color: "#212529",
        textAlign: "left",
        marginRight: "auto",
        boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)",
    },
    inputWrapper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        flex: 1,
        padding: "14px",
        border: "1px solid #ced4da",
        borderRadius: "10px",
        fontSize: "15px",
        marginRight: "10px",
        outline: "none",
        transition: "border 0.2s ease-in-out",
    },
    button: {
        padding: "14px 22px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        fontSize: "15px",
        fontWeight: "500",
        boxShadow: "0 4px 10px rgba(0, 123, 255, 0.25)",
        transition: "background 0.3s ease",
    },
};

export default Chatbot;

