import React, { useState } from "react";
import styles from "../Styles/conversational.module.css";
import { TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function Conversational({ messages, setMessages }) {
    const [newMessage, setNewMessage] = useState();

    const sendMessage = () => {
        setTimeout(() => {
            if (newMessage.includes("formal")) {
                setMessages((prev) => {
                    return [
                        ...prev,
                        { role: "user", content: newMessage },
                        {
                            role: "assisstant",
                            content: [
                                {
                                    product_link:
                                        "https://www.flipkart.com/vtexx-men-solid-formal-grey-shirt/p/itmc34659b21c380?pid=SHTGMK2Y7JKGZKCE&lid=LSTSHTGMK2Y7JKGZKCEGTKJ2D&marketplace=FLIPKART&q=formal+clothes&store=clo&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=940389b3-fb1e-4dd4-acef-8deec8c88484.SHTGMK2Y7JKGZKCE.SEARCH&ppt=sp&ppn=sp&ssid=bc1qre8jdw2azrg6tf49wmp652w00xltddxmpk98xp&qH=d625444b4f421f05",
                                    product_img:
                                        "https://rukminim2.flixcart.com/image/832/832/kwzap3k0/shirt/g/q/9/m-lstr-grey-p-v-creations-original-imag9jggsvfcgpp4.jpeg?q=70",
                                },
                                {
                                    product_link:
                                        "https://www.flipkart.com/vtexx-men-solid-formal-light-green-shirt/p/itm9d3488c6c6b0d?pid=SHTGMNGQTDBTJUDP&lid=LSTSHTGMNGQTDBTJUDPOIOTBP&marketplace=FLIPKART&q=formal+clothes&store=clo&srno=s_1_9&otracker=search&otracker1=search&fm=Search&iid=940389b3-fb1e-4dd4-acef-8deec8c88484.SHTGMNGQTDBTJUDP.SEARCH&ppt=sp&ppn=sp&qH=d625444b4f421f05",
                                    product_img:
                                        "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/j/x/h/4xl-13-lstr-acqua-vtexx-original-imagnx7fpc4maeha.jpeg?q=70",
                                },
                            ],
                        },
                    ];
                });
            } else {
                setMessages((prev) => {
                    return [...prev, { role: "user", content: newMessage }];
                });
            }
        }, 2000);

        setNewMessage("");
    };

    return (
        <div className={styles.conversationalContainer}>
            <h1 className={styles.conversationHeading}>Conversation</h1>
            <div className={styles.messages}>
                {messages.map((message) => {
                    console.log(message);
                    if (message.role == "user") {
                        return (
                            <div style={{ textAlign: "right" }} className={styles.message}>
                                {message.content}
                            </div>
                        );
                    } else if (message.role == "assisstant") {
                        return (
                            <div
                                style={{ textAlign: "left" }}
                                className={`${styles.message} ${styles.assisstantMessage}`}
                            >
                                {message.content.map((product) => {
                                    return (
                                        <div>
                                            <div>
                                                <img
                                                    src={product.product_img}
                                                    alt=""
                                                    style={{ height: "300px" }}
                                                />
                                            </div>
                                            <div
                                                style={{
                                                    maxWidth: "200px",
                                                    overflow: "hidden",
                                                }}
                                            >
                                                <a href={product.product_link}>
                                                    {product.product_link}
                                                </a>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    }
                })}
            </div>
            <div className={styles.textFieldContainer}>
                <TextField
                    multiline
                    fullWidth
                    placeholder="Enter prompt to customize outfit"
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                />
                <SendIcon onClick={sendMessage} />
            </div>
        </div>
    );
}

export default Conversational;
