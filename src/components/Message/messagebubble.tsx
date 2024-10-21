import { MessageBubbleProps } from "@/types/Interfaces/messagebubble";



const MessageBubble: React.FC<MessageBubbleProps> = ({
    text,
    time,
    isSender,
  }) => {
    return (
      <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} mb-2`}>
        <div
          className={`${isSender ? 'bg-orange-400 text-white' : 'bg-gray-200 text-gray-700'} p-3 rounded-lg max-w-xs`}
        >
          <p>{text}</p>
          <span
            className={`text-xs ${isSender ? 'text-gray-700' : 'text-gray-600'}`}
          >
            {time}
          </span>
        </div>
      </div>
    );
  };

  export default MessageBubble;