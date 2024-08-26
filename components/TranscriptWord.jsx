import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { useState } from "react";


const TranscriptWord = ({ index, highlightedIndex, word }) => {
    const [editableWord, setEditableWord] = useState(word.word);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();  
        setIsPopoverOpen(false);
    };

    const handleOpenChange = (open) => {
        if (open) {
            setIsPopoverOpen(true);
        }
    };

    return (  
        <Popover open={isPopoverOpen} onOpenChange={handleOpenChange} >
            <PopoverTrigger asChild>
                <span
                    className={`cursor-pointer px-1 rounded-sm hover:text-yellow-500 
                        ${index === highlightedIndex ? 'bg-yellow-700' : ''}`
                    }
                    onClick={() => setIsPopoverOpen(true)}
                >
                    {editableWord}
                </span>
            </PopoverTrigger>
            <PopoverContent className='border border-neutral-500 bg-neutral-600 p-2 max-w-max'>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                    <input 
                        type="text"
                        minLength={1}
                        value={editableWord}
                        onChange={(e) => setEditableWord(e.target.value)}
                        title="No whitespace is allowed. And have at least one character in your word."
                        pattern="^\S*$"
                        required
                        className="w-[200px] border border-neutral-400 focus:outline-none px-2 py-2 rounded-md bg-neutral-700
                        text-neutral-100 focus:ring-2 focus:ring-blue-300"
                    />
                    <button 
                        type="submit"
                        className="max-w-min px-2 py-1 rounded-md bg-yellow-300 hover:bg-yellow-400 
                        shadow-sm font-semibold ml-auto"
                    >
                        Correct
                    </button>
                </form>
            </PopoverContent>
        </Popover>
  )
}

export default TranscriptWord