import {
    FormControl,
    Input,
    Textarea,
    FormLabel,
    Button,
    useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useMessagesStore } from "../store/messagesStore";

const MessageForm = () => {
    const { createMessage } = useMessagesStore();
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const toast = useToast();

    const handleSubmit = (e) => {
        if (title && message) {
            e.preventDefault();
            createMessage(title, message);
            setTitle("");
            setMessage("");
            toast({
                title: "Message Created!",
                description: "Your message has been successfully posted.",
                status: "success",
                variant: "top-accent",
                duration: 3000,
                isClosable: true,
                position: "top",
            });
        }
    };

    return (
        <div className="relative z-50 w-[90vw] xl:w-[55%] flex flex-col 2xl:flex-row gap-0 lg:gap-4 p-3 lg:p-6 mt-4 text-black bg-white rounded-lg shadow-xl">
            <div className="w-full flex flex-col items-center justify-center ">
                <img
                    src="/logo.svg"
                    alt="illustration"
                    className="w-[150px] lg:w-[300px]"
                />
                <h2 className="text-lg lg:text-xl font-semibold text-center">
                    Share your thoughts about me anonymously.
                </h2>
            </div>
            <div className="w-full flex flex-col items-center justify-center ">
                <div className="w-full flex flex-col items-center justify-center p-4">
                    <FormControl as="form" onSubmit={handleSubmit}>
                        <FormLabel>Title</FormLabel>
                        <Input
                            mb={2}
                            value={title}
                            placeholder="Title"
                            required
                            onChange={(e) => setTitle(e.target.value)}
                            autoComplete="off"
                        />
                        <FormLabel>Message:</FormLabel>
                        <Textarea
                            // h={{ base: 30, lg: 60 }}
                            resize="none"
                            placeholder="Your message..."
                            value={message}
                            required
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <Button
                            w="full"
                            mt={2}
                            type="submit"
                            colorScheme="facebook"
                            onClick={handleSubmit}
                        >
                            Create
                        </Button>
                    </FormControl>
                </div>
            </div>
        </div>
    );
};

export default MessageForm;
