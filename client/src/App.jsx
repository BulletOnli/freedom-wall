import MessageBox from "./components/MessageBox";
import { useEffect } from "react";
import { useMessagesStore } from "./store/messagesStore";
import Header from "./components/Header";
import MessageForm from "./components/MessageForm";

const Homepage = () => {
    const { getMessages, messages } = useMessagesStore();

    useEffect(() => {
        getMessages();
    }, []);

    return (
        <div className="w-full flex flex-col items-center bg-[#f8f9fa]">
            <div className="w-full h-[50vh] flex flex-col items-center p-2 2xl:p-8 mb-[23rem] md:mb-[25rem] 2xl:mb-[10rem] text-white bg-[#385898]">
                <Header />
                <MessageForm />
            </div>

            <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center items-center gap-2 lg:gap-10 p-4 lg:p-10 mt-6 lg:mt-0">
                {messages &&
                    messages.map((message) => (
                        <MessageBox
                            title={message.title}
                            message={message.message}
                            date={message.date}
                            key={message._id}
                        />
                    ))}
            </div>

            <small className="font-bold tracking-widest mb-5">
                GEMMUEL DELA PENA
            </small>
        </div>
    );
};

export default Homepage;
