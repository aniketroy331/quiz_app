import { QuizClient } from '@/components/quiz/QuizClient';
import Board from '../components/board/page'; 
import { Logo } from '@/components/Logo';
import { getAndIncrementVisitorCount } from '@/lib/visitor-service';

export default async function HomePage() {
  const visitorCount = await getAndIncrementVisitorCount();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center pt-8 pb-12 px-4 selection:bg-accent/30 selection:text-accent-foreground">
      {/* <header className="mb-8 text-center">
        <Logo className="h-12 md:h-16 w-auto inline-block" />
        <h1 className="sr-only">QuizWhiz - Test Your Knowledge</h1>
      </header> */}
      <main className="w-full max-w-2xl">
        <Board />
      </main>
      <footer className="mt-12 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} QuizWhiz. Sharpen your mind!
          <br />
          Visitor count: {visitorCount}
        </p>
      </footer>
    </div>
  );
}
