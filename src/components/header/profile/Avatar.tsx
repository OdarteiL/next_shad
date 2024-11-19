import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
  export function AvatarDemo() {
    return (
      <Avatar className="w-9 h-9 rounded-full">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"  />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  }
  

export default AvatarDemo;
