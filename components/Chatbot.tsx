/**
 * v0 by Vercel.
 * @see https://v0.dev/t/H1PefcJVlnU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function Chatbot() {
  return (
    <div className="flex flex-col h-[80vh] max-w-2xl mx-auto bg-background rounded-2xl shadow-lg">
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
        <div className="flex items-start gap-4">
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
          <div className="bg-muted rounded-lg p-3 max-w-[70%]">
            <p>Hi there! I'm an AI assistant. How can I help you today?</p>
          </div>
        </div>
        <div className="flex items-start gap-4 justify-end">
          <div className="bg-primary rounded-lg p-3 max-w-[70%] text-primary-foreground">
            <p>Hello! I'm looking for some help with a web development project. Can you give me some advice?</p>
          </div>
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>RR</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-start gap-4">
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
          <div className="bg-muted rounded-lg p-3 max-w-[70%]">
            <p>Absolutely, I'd be happy to help! What kind of project are you working on?</p>
          </div>
        </div>
      </div>
      <div className="border-t border-muted px-6 py-4 flex items-center gap-2">
        <Textarea
          placeholder="Type your message..."
          className="flex-1 resize-none rounded-lg border-none focus:ring-0 focus:ring-offset-0 focus:ring-primary"
        />
        <Button className="rounded-full">
          <SendIcon className="w-5 h-5" />
          <span className="sr-only">Send</span>
        </Button>
      </div>
    </div>
  )
}

function SendIcon(props:any) {
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


function XIcon(props:any) {
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