const MessageBox = ({ title, message, date }) => {
    return (
        <div className="w-[12rem] lg:w-[18rem] lg:h-[13rem] flex flex-col p-4 lg:p-6 rounded-lg shadow-custom">
            <h1 className="text-sm lg:text-xl font-bold mb-1 lg:mb-4">
                {title}
            </h1>
            <p className="h-full text-xs lg:text-base">{message}</p>
            <small className="font-medium text-gray-600 text-end text-[10px] lg:text-base mt-2 lg:mt-0">
                {date}
            </small>
        </div>
    );
};

export default MessageBox;
