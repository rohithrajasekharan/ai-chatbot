"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { renderMarkdown } from "@/lib/utils";
import { useChat } from 'ai/react';

export default function Chatbot() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col h-[80vh] max-w-2xl mx-auto bg-background rounded-2xl shadow-lg min-w-[70%]">
      <div className="flex items-center justify-between px-6 py-4 border-b border-muted">
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
          <h3 className="text-lg font-medium">AI Assistant</h3>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full">
          <XIcon className="w-5 h-5" />
          <span className="sr-only">Close</span>
        </Button>
      </div>

      <div className="flex-1 overflow-auto p-6 space-y-4">
        {messages.map(m => {
          if (m.role === 'assistant') {
            return (
              <div className="flex items-start gap-4">
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div className="bg-muted rounded-lg p-3 max-w-[70%]">
                <div dangerouslySetInnerHTML={{ __html: renderMarkdown(m.content) }} />
                </div>
              </div>
            )
          } else {
            return(
              <div className="flex items-start gap-4 justify-end">
                <div className="bg-primary rounded-lg p-3 max-w-[70%] text-primary-foreground">
                  <p>{m.content}</p>
                </div>
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>RR</AvatarFallback>
                </Avatar>
              </div>
            )
          }
        }
        )}
      </div>
      <form className="border-t border-muted px-6 py-4 flex items-center gap-2" onSubmit={handleSubmit}>
          <Textarea
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
            className="flex-1 resize-none rounded-lg border-none focus:ring-0 focus:ring-offset-0 focus:ring-primary"
          />
          <Button className="rounded-full" type="submit">
            <SendIcon className="w-5 h-5" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
    </div>
  )
}

function SendIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}


function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}