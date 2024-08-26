import TranscriptEditor from "@/components/TranscriptEditor";
import { initialTranscript } from "@/constants";


export default function Home() {
  return (
    <main className="w-full min-h-screen flex justify-center items-center p-4">
      <TranscriptEditor initialTranscript={initialTranscript} />
    </main>
  );
}
