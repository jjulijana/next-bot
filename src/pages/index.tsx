import { MessagesContainer } from '@/components/chat/messages-container/MessagesContainer'
import { Time } from '@/components/chat/time/Time'
import { Footer } from '@/components/chat/footer/Footer'
import { Header } from '@/components/header/Header'
import { Inter } from 'next/font/google'
import { Input } from '@/components/chat/input/Input'
import { Message } from '@/components/chat/message/Message'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

// idea: messenger chat 

export default function Home() {

  const [messages, setMessages] = useState([
    {
      me: false,
      author: 'Zika Zikic',
      text: 'lorem',
      time: new Date(),
    },
    {
      me: false,
      author: 'Zika Zikic',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt maxime possimus quaerat eligendi distinctio magni incidunt assumenda. Numquam accusamus nisi itaque aut architecto culpa, animi ipsam expedita. Dolorum, soluta error.',
      time: new Date(),
    },
    {
      me: true,
      author: 'Pera Peric',
      text: 'Zdravo svima',
      time: new Date(),
    },
  ]);

  const onMessageSend = (message: string) => {
    console.log(message);
  }

  return (
    <main>
      
      {/* first part: with whom are we chatting */}
      <Header />


      {/* main part: section == chat history */}
      <MessagesContainer>
        <Time>11:23 am</Time>
        {messages.map((message, index) => {
          const lastInSequence = message.me !== messages[index + 1]?.me;
          return (
            <Message
              key={index}
              me={message.me} 
              author={message.author} 
              text={message.text}
              lastInSequence={lastInSequence}
            />
          )
        })}
        
      </MessagesContainer>


      {/* last part: input */}
      <Footer>
        {/* react communication: parent to child*/}
        <Input onMessageSend={onMessageSend}></Input>
      </Footer>
      

    </main>
  )
}
