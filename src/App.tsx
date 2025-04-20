import { Hello } from '@/components/Hello';
import Greeting from '@/components/Greeting';
import IconDemo from '@/components/IconDemo';
import { Button } from '@/components/ui/button';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <Hello name="TSX User" />
      <Greeting who="JSX Friend" />
      <IconDemo />
      <Button>Click me</Button>
      <button className="btn">Tailwind Button</button>
    </div>
  );
}