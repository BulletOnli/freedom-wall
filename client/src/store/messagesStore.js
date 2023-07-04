import { create } from "zustand";
import axios from "axios";

const randomUsernames = [
    "Kalabaw",
    "Kabayo",
    "Kambing",
    "Oso",
    "Toro",
    "Pusa",
    "Kalapati",
    "Daga",
];

const messagesStore = (set, get) => ({
    messages: [],
    getMessages: async () => {
        try {
            const response = await axios(
                "https://freedom-wall-production.up.railway.app/messages"
            );
            set({ messages: response.data.reverse() });
        } catch (error) {
            console.log(error);
            alert(`${error}, Please restart the page.`);
        }
    },
    createMessage: async (username, message) => {
        username = username
            ? username
            : randomUsernames[
                  Math.floor(Math.random() * randomUsernames.length)
              ];
        try {
            const response = await axios.post(
                "https://freedom-wall-production.up.railway.app/messages",
                {
                    username,
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
