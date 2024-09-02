// src/components/ChatRoom.js
import React, { useState, useEffect } from 'react';
import { chatService } from '../services/api';

function ChatRoom() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const data = await chatService.getMessages();
      setMessages(data);
    };
    fetchMessages();
  }, []);

  // ...rest of the component
}