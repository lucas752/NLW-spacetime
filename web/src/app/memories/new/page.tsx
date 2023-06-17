import { MediaPicker } from "@/components/MediaPicker";
import { NewMemoryForm } from "@/components/NewMemoryForm";
import { Camera, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NewMemory() {
    return(
        <div className="flex p-16 flex-1 flex-col gap-4">
            <Link href="/" className="flex items-center gap-1 text-gray-200 hover:text-gray-100">
                <ChevronLeft className="h-4 w-4" />
                Voltar à timeline
            </Link>
            
            <NewMemoryForm/>
        </div>
    )
}