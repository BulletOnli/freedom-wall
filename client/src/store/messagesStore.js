import { create } from "zustand";
import axios from "axios";

const messagesStore = (set, get) => ({
    messages: [],
    getMessages: async () => {
        try {
            const response = await axios("http://localhost:8000/messages");
            set({ messages: response.data.reverse() });
        } catch (error) {
            console.log(error);
            alert(`${error}, Please restart the page.`);
        }
    },
    createMessage: async (title, message) => {
        try {
            const response = await axios.post(
                "http://localhost:8000/messages",
                {
                    title,
                    message,
                    date: new Date().toDateString(),
                }
            );

            get().getMessages();
        } catch (error) {
            console.log(error);
            alert(`${error}, Please restart the page.`);
        }
    },
});

export const useMessagesStore = create(messagesStore);
