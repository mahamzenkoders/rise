export interface MessageViewProps {
    user: User;
    message: string;
    time: string;
    isActive: boolean;
  }
  
  interface User {
    name: string;
    profilePicture: string;
  }