import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { AUTHOR, Message, MessagesWithId } from 'src/types';

const initialState: MessagesWithId = {
  first: [{ id: '1', author: AUTHOR.USER, value: 'hello, world' }],
  second: [{ id: '2', author: AUTHOR.BOT, value: 'hello, im bot' }],
};

const messagesSLice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addChat: (state, action: PayloadAction<string>) => {
      state[action.payload] = [];
    },
    addMessage: (state, action: PayloadAction<AddMessage>) => {
      const { author, value } = action.payload.message;
      state[action.payload.chatName].push({
        id: nanoid(),
        author,
        value,
      });
    },
    deleteChat: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
  },
});

let timeout: NodeJS.Timeout;

export const addMessageWithReply = createAsyncThunk(
  'messages/addMessageWithReply',
  (payload: AddMessage, { dispatch }) => {
    const { chatName, message } = payload;

    dispatch(addMessage({ chatName, message }));

    if (message.author !== AUTHOR.BOT) {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        dispatch(
          addMessage({
            chatName,
            message: { author: AUTHOR.BOT, value: 'Im BOT' },
          })
        );
      }, 1500);
    }
  }
);

export const { addChat, addMessage, deleteChat } = messagesSLice.actions;
export const messagesReducer = messagesSLice.reducer;

export interface AddMessage {
  chatName: string;
  message: Message;
}